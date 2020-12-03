<script lang="ts">
  import Header from '../pages/header/index.svelte';
</script>

<style lang="scss">
  :global(*) {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    font-size: 14px;
  }

  :global(img) {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  :global(.layout) {
    margin: 0 auto;
    width: 70%;

    @media (max-width: 1400px) {
      width: 95%;
    }
  }
</style>

<svelte:head>
  <title>DSMGR</title>
</svelte:head>

<Header />
