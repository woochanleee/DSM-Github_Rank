<script lang="ts">
  import Modal from '../modal/index.svelte';

  import { user, loading, modal } from '../../data';
  import { userServiceImpl, rankServiceImpl } from '../../service';
  import { Validation } from '../../utils/classes';
  import { inputEmptyAlert } from '../../utils/functions';
  import { onDestroy } from 'svelte';
  import ChangeInfoRequest from '../../dto/ChangeInfoRequest';

  let userStore = user.getStore();

  let name: string = $userStore.myAccount?.data?.name || '';
  let githubId: string = $userStore.myAccount?.data?.githubId || '';
  let description: string = $userStore.myAccount?.data?.description || '';

  class SettingController extends Validation {
    public execute() {
      const index = Validation.validate(name, githubId, description);

      if (~index) {
        inputEmptyAlert(index);
        return;
      }

      if (description.length > 55) {
        alert('소개란은 55자 이내로 작성해 주세요.');
        return;
      }

      userServiceImpl.changeInfo(
        ChangeInfoRequest.builder()
          .setName(name)
          .setGithubId(githubId)
          .setDescription(description)
          .build()
      );
    }
  }

  const settingController = new SettingController();

  $: {
    const { isLoading, status } = $userStore.changeInfo || {};

    if (isLoading !== undefined) {
      if (isLoading) {
        loading.set(true);
      } else {
        loading.set(false);
        switch (status) {
          case 200:
            rankServiceImpl.getRank().then(() => {
              userServiceImpl.getMyAccount();
            });
            modal.reset();
            break;
          case Math.floor(status / 100) === 4 ? status : 0:
            alert('정보 수정에 실패하였습니다.');
            break;
          case 500:
            alert('NetworkError or ServerError');
          default:
        }
      }
    }
  }

  onDestroy(function cleanUp() {
    user.changeChangeInfoState({
      data: undefined,
      status: undefined,
      message: undefined,
    });
  });
</script>

<style lang="scss">
  @import './style/index';
</style>

<Modal title="정보수정">
  <div class="setting flex flex-column align-center">
    <input
      bind:value={name}
      class="setting--input"
      type="text"
      placeholder="이름(실명)" />
    <input
      bind:value={githubId}
      class="setting--input"
      type="text"
      placeholder="Github ID" />
    <input
      bind:value={description}
      class="setting--input"
      type="text"
      maxlength="55"
      placeholder="소개란(55자 이내)" />
    <button
      class="setting--submit"
      on:click={settingController.execute}>수정</button>
  </div>
</Modal>
