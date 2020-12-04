<script lang="ts">
  import Modal from '../modal/index.svelte';

  const informations = [
    '대덕소프트웨어마이스터고등학교 재학생 대상입니다.',
    '<code>@dsm.hs.kr</code>으로 끝나는 이메일로만 가입 가능합니다.',
    '로그인 후 본인의 Github ID 등록에 성공하면 리스트에 표시됩니다.',
    '비공개 저장소를 기여도로 표시하면 모든 기여도를 확인할 수 있습니다.(Github설정)',
    '데이터는 12시간 마다 동기화 됩니다.',
    '사용자 정보 수정 및 삭제는 <a href="https://github.com/woochanleee" target="_blank">제작자</a>로 요청해주세요.',
    '자세한 사항은 <a href="https://github.com/woochanleee/DSM-Github_Ranking/README.md" target="_blank">이곳</a>을 참고해주세요.',
  ];
</script>

<style lang="scss">
  @import './style/index';
</style>

<Modal title="안내사항">
  <ol class="information">
    {#each informations as information}
      <li class="information--text">
        {@html information}
      </li>
    {/each}
  </ol>
</Modal>
