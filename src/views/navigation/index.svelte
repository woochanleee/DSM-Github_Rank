<script lang="ts">
  import { user } from '../../data';

  import {
    InformationIcon,
    LoginIcon,
    LogoutIcon,
    RegisterIcon,
    SettingIcon,
  } from '../../utils/icons';

  const userStore = user.getStore();

  $: hasAccessToken = $userStore.auth?.data?.accessToken;
</script>

<style lang="scss">
  @import './style/index';

  :global(.navigation__etc) {
    & + & {
      margin-left: 0.5rem;
    }
  }
</style>

<div class="navigation flex justify-space_between">
  <aside class="navigation__option flex">
    <button class="navigation--tab cursor-pointer selected">랭킹</button>
    <button class="navigation--tab cursor-pointer">-</button>
  </aside>
  <article class="flex align-center">
    {#if hasAccessToken}
      <SettingIcon class="navigation__etc cursor-pointer" />
      <LogoutIcon class="navigation__etc cursor-pointer" />
    {:else}
      <LoginIcon class="navigation__etc cursor-pointer" />
      <RegisterIcon class="navigation__etc cursor-pointer" />
    {/if}
    <InformationIcon class="navigation__etc cursor-pointer" />
  </article>
</div>
