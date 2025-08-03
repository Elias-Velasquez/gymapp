<script lang="ts">
export default {
  data() {
    return {
      showPassword: false,
      showConfirmPassword: false,
    };
  },
  methods: {
    togglePassword(type: 'create-password' | 'create-confirmpassword') {
      if (type === 'create-password') {
        this.showPassword = !this.showPassword;
      } else {
        this.showConfirmPassword = !this.showConfirmPassword;
      }
    }
  }
};
</script>

<template>
  <div class="container-lg">
    <div class="row justify-content-center authentication authentication-basic align-items-center h-100">
      <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
        <div class="my-5 d-flex justify-content-center">
          <router-link to="/dashboard/crm">
            <img src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo" />
            <img src="/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark" />
          </router-link>
        </div>
        <div class="card custom-card">
          <div class="card-body p-5">
            <p class="h5 fw-semibold mb-2 text-center">Create Password</p>
            <p class="mb-4 text-muted op-7 fw-normal text-center">Hello John!</p>
            <div class="row gy-3">
              <div class="col-xl-12">
                <label for="create-password" class="form-label text-default">Password</label>
                <div class="input-group">
                  <input :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg"
                    id="create-password" placeholder="Password" />
                  <button class="btn btn-light" type="button" @click="togglePassword('create-password')">
                    <i :class="showPassword ? 'ri-eye-line' : 'ri-eye-off-line'" class="align-middle"></i>
                  </button>
                </div>
              </div>
              <div class="col-xl-12 mb-2">
                <label for="create-confirmpassword" class="form-label text-default">Confirm Password</label>
                <div class="input-group">
                  <input :type="showConfirmPassword ? 'text' : 'password'" class="form-control form-control-lg"
                    id="create-confirmpassword" placeholder="Confirm Password" />
                  <button class="btn btn-light" @click="togglePassword('create-confirmpassword')" type="button">
                    <i :class="showConfirmPassword ? 'ri-eye-line' : 'ri-eye-off-line'" class="align-middle"></i>
                  </button>
                </div>
                <div class="mt-2">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="rememberPassword" />
                    <label class="form-check-label text-muted fw-normal" for="rememberPassword">
                      Remember password ?
                    </label>
                  </div>
                </div>
              </div>
              <div class="col-xl-12 d-grid mt-2">
                <button class="btn btn-lg btn-primary">Save Password</button>
              </div>
            </div>
            <div class="text-center">
              <p class="fs-12 text-muted mt-3">Back to home? <router-link to="/dashboard/crm" class="text-primary">Click
                  Here</router-link></p>
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
