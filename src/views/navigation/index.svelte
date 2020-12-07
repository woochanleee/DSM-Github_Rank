<script lang="ts">
  import { rank, user } from '../../data';

  import {
    InformationIcon,
    LoginIcon,
    LogoutIcon,
    RegisterIcon,
    SettingIcon,
  } from '../../utils/icons';

  const userStore = user.getStore();
  const rankStore = rank.getStore();

  $: hasAccessToken = $userStore.auth?.data?.accessToken;
  $: myRank = $rankStore.rank?.data?.rank?.findIndex((rank) => {
    return rank.email === $userStore.myAccount?.data?.email;
  });
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
    <button class="navigation--tab selected">랭킹</button>
    <button class="navigation--tab">{myRank > -1 ? myRank + 1 : '-'}</button>
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
