<script lang="ts">
  import { InformationIcon } from '../../icons';
</script>

<style lang="scss">
  @import './index.scss';
</style>

<div class="navigation">
  <main class="layout flex justify-space_between">
    <aside class="navigation__option flex">
      <button class="navigation--tab cursor-pointer selected">순위</button>
      <button class="navigation--tab">주간 기록</button>
    </aside>
    <InformationIcon className="navigation__etc" />
  </main>
</div>
