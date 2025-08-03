<script lang="ts">

export default {
  methods: {
    moveFocus(currentInput: HTMLInputElement, nextInputId: string) {
      if (currentInput.value.length >= currentInput.maxLength) {
        const nextInput = document.getElementById(nextInputId) as HTMLInputElement;
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  }
};
</script>

<template>
  <div class="container-lg">
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
            <p class="h5 fw-semibold mb-2 text-center">Verify Your Account</p>
            <p class="mb-4 text-muted op-7 fw-normal text-center">Enter the 4 digit code sent to the registered email
              Id.</p>
            <div class="row gy-3">
              <div class="col-xl-12 mb-2">
                <div class="row">
                  <div class="col-3">
                    <input type="text" class="form-control form-control-lg text-center" id="one" maxlength="1"
                      @keyup="moveFocus($event.target, 'two')">
                  </div>
                  <div class="col-3">
                    <input type="text" class="form-control form-control-lg text-center" id="two" maxlength="1"
                      @keyup="moveFocus($event.target, 'three')">
                  </div>
                  <div class="col-3">
                    <input type="text" class="form-control form-control-lg text-center" id="three" maxlength="1"
                      @keyup="moveFocus($event.target, 'four')">
                  </div>
                  <div class="col-3">
                    <input type="text" class="form-control form-control-lg text-center" id="four" maxlength="1">
                  </div>
                </div>
                <div class="form-check mt-2">
                  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                  <label class="form-check-label" for="defaultCheck1">
                    Did not receive a code? <router-link to="/pages/email/mail-app"
                      class="text-primary ms-2 d-inline-block">Resend</router-link>
                  </label>
                </div>
              </div>
              <div class="col-xl-12 d-grid mt-2">
                <router-link to="/dashboard/crm" class="btn btn-lg btn-primary">Verify</router-link>
              </div>
            </div>
            <div class="text-center">
              <p class="fs-12 text-danger mt-3 mb-0"><sup><i class="ri-asterisk"></i></sup>Don't share the verification
                code with anyone!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
