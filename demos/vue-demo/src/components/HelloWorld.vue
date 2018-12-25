<template>
  <div class="vd-hello-world">
    <div class="vd-hello-world__hd">
      <img src="../assets/logo.png"
           alt="logo"
           class="vd-hello-world__logo">
    </div>
    <div class="vd-hello-world__bd">
      <span>{{msg}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "VdHelloWorld",
  props: {
    msg: {
      type: String,
      default: ""
    }
  }
};
</script>
<style lang="scss">
@include b(hello-world) {
  display: flex;
  flex-flow: column nowrap;
  @include e(hd) {
    flex: none;
    height: 64px;
    background: #333;
    text-align: center;
  }
  @include e(logo) {
    height: 100%;
  }
  @include e(bd) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 32px;
  }
}
</style>
