<script lang="ts">
  import { onDestroy } from 'svelte';

  import { loading, modal, user } from '../../data';

  import { AuthRequest, AuthResponse } from '../../dto';

  import { userServiceImpl } from '../../service';

  import { Validation } from '../../utils/classes';
  import { inputEmptyAlert } from '../../utils/functions';
  import { emailRegExp } from '../../utils/regexps';

  import Modal from '../modal/index.svelte';

  const userStore = user.getStore();

  let email: string;
  let password: string;

  class AuthController extends Validation {
    public execute() {
      const index = Validation.validate(email, password);

      if (~index) {
        inputEmptyAlert(index);
        return;
      }

      if (!emailRegExp.test(email)) {
        alert('이메일 형식이 일치하지 않습니다.');
        return;
      }

      userServiceImpl.login(
        AuthRequest.builder().setEmail(email).setPassword(password).build()
      );
    }
  }

  const authController = new AuthController();

  $: {
    const { isLoading, status, data } = $userStore.auth || {};
    const { accessToken } = data || {};

    if (isLoading !== undefined) {
      if (isLoading) {
        loading.set(true);
      } else {
        loading.set(false);
        switch (status) {
          case 200:
            localStorage.setItem('accessToken', accessToken);
            userServiceImpl.getMyAccount();
            modal.reset();
            break;
          case 403:
            alert('계정이 일치하지 않습니다.');
            break;
          case Math.floor(status / 100) === 4 ? status : 0:
            alert('로그인에 실패하였습니다.');
            break;
          case 500:
            alert('NetworkError or ServerError');
          default:
        }
      }
    }
  }

  onDestroy(function cleanUp() {
    const accessToken = $userStore.auth?.data.accessToken;

    user.reset();
    user.changeAuthState({
      data: AuthResponse.builder().setAccessToken(accessToken).build(),
    });
  });
</script>

<style lang="scss">
  @import './style/index';
</style>

<Modal title="로그인">
  <div class="login flex flex-column align-center justify-space_between">
    <input
      bind:value={email}
      class="login--input"
      type="email"
      placeholder="이메일(@dsm.hs.kr)" />
    <input
      bind:value={password}
      class="login--input"
      type="password"
      placeholder="비밀번호" />
    <button
      class="login--submit"
      on:click={authController.execute}>로그인</button>
  </div>
</Modal>
