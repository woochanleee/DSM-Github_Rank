<script lang="ts">
  import Modal from '../modal/index.svelte';
</script>

<style lang="scss">
  @import './style/index';
</style>

<Modal title="회원가입">
  <div class="register flex flex-column align-center">
    <div class="register__email flex">
      <input
        class="register--input"
        type="email"
        placeholder="이메일(@dsm.hs.kr)" />
      <button class="register--send-email">전송</button>
    </div>
    <input class="register--input" type="text" placeholder="인증코드" />
    <input class="register--input" type="password" placeholder="비밀번호" />
    <input
      class="register--input"
      type="password"
      placeholder="비밀번호 재확인" />
    <button class="register--submit">가입</button>
  </div>
</Modal>
