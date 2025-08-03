<script lang="ts">

export default {
  data() {
    return {
      showPassword: false,
    };

  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    unmounted() {
      const html = document.documentElement;
      html.removeAttribute('data-header-styles');
    }
  }

};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center align-items-center authentication authentication-basic h-100">
      <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
        <div class="my-5 d-flex justify-content-center">
          <router-link to="/dashboard/crm">
            <img src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo">
            <img src="/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark">
          </router-link>
        </div>
        <div class="card custom-card">
          <div class="card-body p-5">
            <p class="h5 fw-semibold mb-2 text-center">Sign In</p>
            <p class="mb-4 text-muted op-7 fw-normal text-center">Welcome back Jhon !</p>
            <div class="row gy-3">
              <div class="col-xl-12">
                <label for="signin-username" class="form-label text-default">User Name</label>
                <input type="text" class="form-control form-control-lg" id="signin-username" placeholder="user name">
              </div>
              <div class="col-xl-12 mb-2">
                <label for="signin-password" class="form-label text-default d-block">
                  Password
                  <router-link to="/authentication/reset-password/basic" class="float-end text-danger">Forget password
                    ?</router-link>
                </label>
                <div class="input-group">
                  <input :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg"
                    id="signin-password" placeholder="password">
                  <button class="btn btn-light" type="button" @click="togglePassword" id="button-addon2">
                    <i :class="showPassword ? 'ri-eye-line' : 'ri-eye-off-line'" class="align-middle"></i>
                  </button>
                </div>
                <div class="mt-2">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label text-muted fw-normal" for="defaultCheck1">
                      Remember password ?
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 d-grid mt-2">
                <router-link to="/dashboard/crm" class="btn btn-lg btn-primary">Sign In</router-link>
              </div>
            </div>
            <div class="text-center">
              <p class="fs-12 text-muted mt-3">Don't have an account ? <router-link to="/authentication/sign-up/basic"
                  class="text-primary">Sign Up</router-link></p>
            </div>
            <div class="text-center my-3 authentication-barrier">
              <span>OR</span>
            </div>
            <div class="btn-list text-center">
              <button class="btn btn-icon btn-light me-2">
                <i class="ri-facebook-line fw-bold text-dark op-7"></i>
              </button>
              <button class="btn btn-icon btn-light me-2">
                <i class="ri-google-line fw-bold text-dark op-7"></i>
              </button>
              <button class="btn btn-icon btn-light">
                <i class="ri-twitter-x-line fw-bold text-dark op-7"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
