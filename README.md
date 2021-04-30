# DSM-Github_Rank

DSM gituhb rank service by contributions.

dsmgr은 대덕소프트웨어마이스터고등학교의 Github기여도를 표시합니다

⚠️ 학생의 동기부여 목적으로 제작되었습니다.

## 스크린샷

<details open>
    <summary>순위를 볼 수 있는 메인 페이지 입니다.</summary>
  
![순위를 볼 수 있는 메인 페이지 입니다.](https://user-images.githubusercontent.com/48552260/116664414-66a1b780-a9d3-11eb-8392-dceb96f435ce.png)
</details>

<b>우측 중상단에 아이콘을 이용하여 로그인, 회원가입, 정보 수정, 서비스 소개 모달을 킬수 있고 로그아웃을 할 수 있습니다.</b>

  <details open style="margin-left: 20px;">
      <summary>비로그인 상태</summary>
      <img width="200px" alt="비로그인 상태" src="https://user-images.githubusercontent.com/48552260/116672257-eed88a80-a9dc-11eb-90fe-f6a0582afd89.png" />
  </details>
  <details open>
      <summary>로그인 상태</summary>
      <img width="200px" alt="로그인 상태" src="https://user-images.githubusercontent.com/48552260/116672205-dff1d800-a9dc-11eb-9424-affc0d7a0e59.png" />
  </details>



## 안내사항

- 대덕소프트웨어마이스터고등학교 재학생 대상입니다.
- `@dsm.hs.kr`으로 끝나는 이메일로만 가입 가능합니다.
- 본인의 Github ID를 포함해 계정 등록에 성공하면 리스트에 표시됩니다.
- 비공개 저장소를 기여도로 표시하면 모든 기여도를 확인할 수 있습니다.(Github설정)
- 데이터는 [api](https://github.com/la-crima/git-rank-api) 서버를 통해 12시간 마다 동기화 됩니다.
- 만약 잘못된 정보로 기입시 관리자가 임의로 삭제할 수 있습니다
- 사용자 정보 수정 및 삭제는 제작자로 요청해주세요.
- 버그 제보 및 문의사항은 [이슈 저장소](https://github.com/DSMGR/suggestion)를 이용해주세요.

## 사용 기술

### 프론트엔드

![](./docs/images/technology.svg)

[Sapper](https://github.com/sveltejs/sapper/blob/master/README.md), Scss, PostCSS, TypeScript를 사용하여 프론트엔드를 제작하였습니다.

## Project

- This project is made by [sveltejs/sapper-template](https://github.com/sveltejs/sapper-template).

## Reference

- https://beomy.github.io/tech/svelte/start-svelte/
