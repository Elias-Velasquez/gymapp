<template>
  <Switcher />
  <div className="page">
    <Header />
    <Sidebar />
    <div className="main-content app-content">
      <div className="container-fluid">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
  <BackToTop />
</template>
<script>
import Header from "../components/header/header.vue";
import Footer from "../components/footer/footer.vue";
import Sidebar from "../components/sidebar/sidebar.vue";
import Switcher from "../components/switcher/switcher.vue";
import BackToTop from "../components/backtotop/backtotop.vue"
export default {
  beforeCreate() {
  },
  components: {
    Header,
    Footer,
    Sidebar,
    Switcher,
    BackToTop,
  },
};
</script>
