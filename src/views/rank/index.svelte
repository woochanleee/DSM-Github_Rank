<script lang="ts">
  import { rank } from '../../data';

  const rankStore = rank.getStore();

  function onClickGithubProfile(e: any) {
    const githubId = e.currentTarget.children[3].innerText;
    open(`https://github.com/${githubId}`);
  }

  function getMedal(index: number) {
    const medalColor = ['#ffd700', '#c0c0c0', '#b87333'];
    const color = medalColor[index];
    if (color) {
      return `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" color="#c0c0c0" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg" style="color: ${color};"><g><path fill="none" d="M0 0h24v24H0z"></path><path fill-rule="nonzero" d="M12 7a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 1.5l1.323 2.68 2.957.43-2.14 2.085.505 2.946L12 17.25l-2.645 1.39.505-2.945-2.14-2.086 2.957-.43L12 10.5zM18 2v3l-1.363 1.138A9.935 9.935 0 0 0 13 5.049L13 2 18 2zm-7-.001v3.05a9.935 9.935 0 0 0-3.636 1.088L6 5V2l5-.001z"></path></g></svg>`;
    }
    return '';
  }
</script>

<style lang="scss">
  @import './style/index';
</style>

<div class="rank">
  <table>
    <colgroup>
      <col />
      <col />
      <col width="10%" />
      <col width="10%" />
      <col width="10%" />
      <col width="100%" />
    </colgroup>
    <thead>
      <th>순위</th>
      <th>프로필</th>
      <th>이름</th>
      <th>아이디</th>
      <th>기여도</th>
      <th>소개</th>
    </thead>
    <tbody>
      {#each $rankStore.rank.data.rank as { githubImage, githubId, name, contributions, description }, index}
        <tr on:click={onClickGithubProfile}>
          <td class="rank--sequence">{index + 1}</td>
          <td class="rank--profile-image">
            <img src={githubImage} alt={`${name} 프로필 사진`} />
          </td>
          <td class="rank--name">
            <div>
              {name}
              {@html getMedal(index)}
            </div>
          </td>
          <td class="rank--github-id">{githubId}</td>
          <td class="rank--contributions">{contributions}</td>
          <td class="rank--description">{description ? description : '-'}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
