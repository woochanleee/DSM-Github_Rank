<script lang="ts">
  import { modal } from '../../data';

  export let title: string;

  function onClickClose(e: MouseEvent) {
    const { target, currentTarget } = e;

    if (target === currentTarget) {
      modal.reset();
    }
  }
</script>

<style lang="scss">
  @import './style/index';
</style>

<div class="modal" on:click={onClickClose}>
  <main class="modal__content">
    <h2 class="modal--title">{title}</h2>
    <slot />
  </main>
</div>
