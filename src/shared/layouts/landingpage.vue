<template>
  <div>
    <customswitcher />
    <router-view />
    <BackToTop />
  </div>
</template>

<script>
import customswitcher from '../components/customswitcher/customswitcher.vue';
import BackToTop from "../components/backtotop/backtotop.vue"
export default {
  beforeCreate() {
    document.body.classList.add("landing-body");
  },
  components: { customswitcher, BackToTop },
  unmounted() {
    document.body.classList.remove("landing-body");
  },
};
</script>

<style scoped></style>
