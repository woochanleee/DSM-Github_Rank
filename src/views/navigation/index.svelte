<script lang="ts">
  import { InformationIcon } from '../../utils/icons';
</script>

<style lang="scss">
  @import './style/index';
</style>

<div class="navigation">
  <main class="layout flex justify-space_between">
    <aside class="navigation__option flex">
      <button class="navigation--tab cursor-pointer selected">순위</button>
      <button class="navigation--tab cursor-pointer">주간 기록</button>
    </aside>
    <InformationIcon class="navigation__etc cursor-pointer" />
  </main>
</div>
