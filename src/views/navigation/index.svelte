<script lang="ts">
  import { InformationIcon, RegisterIcon } from '../../utils/icons';
</script>

<style lang="scss">
  @import './style/index';

  :global(.navigation__etc) {
    & + & {
      margin-left: 0.5rem;
    }
  }
</style>

<div class="navigation">
  <main class="layout flex justify-space_between">
    <aside class="navigation__option flex">
      <button class="navigation--tab cursor-pointer selected">랭킹</button>
      <button class="navigation--tab cursor-pointer">null</button>
    </aside>
    <article class="flex align-center">
      <RegisterIcon class="navigation__etc cursor-pointer" />
      <InformationIcon class="navigation__etc cursor-pointer" />
    </article>
  </main>
</div>
