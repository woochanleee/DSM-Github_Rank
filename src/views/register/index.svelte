<script lang="ts">
  import Modal from '../modal/index.svelte';

  import { user, loading, modal } from '../../data';
  import { userServiceImpl } from '../../service';
  import { RegisterRequest } from '../../dto';
  import { Validation } from '../../utils/classes';
  import { inputEmptyAlert } from '../../utils/functions';
  import { emailRegExp } from '../../utils/regexps';
  import { onDestroy } from 'svelte';

  let userStore = user.getStore();

  let email: string = '';
  let authCode: string = '';
  let githubId: string = '';
  let name: string = '';
  let password: string = '';
  let passwordCheck: string = '';

  class SendAuthCodeController extends Validation {
    public execute() {
      const index = Validation.validate(email);

      if (SendAuthCodeController.isValid) {
        alert(
          '이미 인증코드를 전송하였습니다. 모달을 닫은 후 다시 시도해 주세요.'
        );
        return;
      }

      if (~index) {
        inputEmptyAlert(index);
        return;
      }

      if (!emailRegExp.test(email)) {
        alert('이메일 형식이 일치하지 않습니다.');
        return;
      }

      userServiceImpl.sendAuthCode(email);
    }
  }

  class RegisterController extends Validation {
    public execute() {
      if (!SendAuthCodeController.isValid) {
        alert('이메일 인증 후 시도해 주세요.');
        return;
      }
      const InputSequence = {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
      };
      const index = Validation.validate(authCode, name, githubId, password);

      if (~index) {
        inputEmptyAlert(InputSequence[index]);
        return;
      }

      if (password !== passwordCheck) {
        alert('비밀번호가 일치하지 않습니다.');
        return;
      }

      userServiceImpl.register(
        RegisterRequest.builder()
          .setAuthCode(authCode)
          .setPassword(password)
          .setGitubId(githubId)
          .setName(name)
          .build()
      );
    }
  }

  const sendAuthCodeController = new SendAuthCodeController();
  const registerController = new RegisterController();

  $: {
    const { isLoading, status } = $userStore.sendAuthCode || {};

    if (isLoading !== undefined) {
      if (isLoading) {
        loading.set(true);
      } else {
        loading.set(false);
        switch (status) {
          case 200:
            SendAuthCodeController.isValid = true;
            break;
          case 409:
            alert('이미 가입된 계정입니다.');
            break;
          case Math.floor(status / 100) === 4 ? status : 0:
            alert('인증코드 발송에 실패하였습니다.');
            break;
          case 500:
            alert('NetworkError or ServerError');
          default:
        }
      }
    }
  }

  $: {
    const { isLoading, status } = $userStore.register || {};
    if (isLoading !== undefined) {
      if (isLoading) {
        loading.set(true);
      } else {
        loading.set(false);
        switch (status) {
          case 201:
            modal.reset();
            break;
          case 404:
            alert('인증코드가 일치하지 않습니다.');
            break;
          case 500:
            alert('NetworkError or ServerError');
          default:
        }
      }
    }
  }

  onDestroy(function cleanUp() {
    user.reset();
  });
</script>

<style lang="scss">
  @import './style/index';
</style>

<Modal title="회원가입">
  <div class="register flex flex-column align-center">
    <div class="register__email flex">
      <input
        bind:value={email}
        class="register--input"
        type="email"
        placeholder="이메일(@dsm.hs.kr)" />
      <button
        class="register--send-email"
        on:click={sendAuthCodeController.execute}>전송</button>
    </div>
    <input
      bind:value={authCode}
      class="register--input"
      type="text"
      placeholder="인증코드" />
    <input
      bind:value={name}
      class="register--input"
      type="text"
      placeholder="이름(실명)" />
    <input
      bind:value={githubId}
      class="register--input"
      type="text"
      placeholder="Github ID" />

    <input
      bind:value={password}
      class="register--input"
      type="password"
      placeholder="비밀번호" />
    <input
      bind:value={passwordCheck}
      class="register--input"
      type="password"
      placeholder="비밀번호 재확인" />
    <button
      class="register--submit"
      on:click={registerController.execute}>가입</button>
  </div>
</Modal>
