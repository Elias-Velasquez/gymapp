<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
// Update the import path if your auth store is located elsewhere, for example:
import { useAuthStore } from "../../../stores/auth";
// Or, if you are using Pinia and the store is named 'auth.ts' in 'src/stores', ensure the file exists at 'src/stores/auth.ts'
import { useRouter } from 'vue-router';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() { 
        return { modules: [Navigation, Pagination, Keyboard] } 
        },
    computed: {
            auth() {
                return useAuthStore();
            },
        },
    data() {
        return {
            showPassword: false,
            username: '',
            password: ''
        }
    },
    methods: {
        togglePassword() {
            this.showPassword = !this.showPassword;
        },
        async handleLogin() {
            await this.auth.login(this.username, this.password);
            if (this.auth.token) {
                if(this.auth.role === 'ROLE_ADMIN') {
                    this.router.push('/dashboard/crm');
                } else {
                    this.router.push('/pages/profile');
                }
            } else if (this.auth.error) {
                
            }
        }
    },
    mounted() {
        this.router = useRouter();
        document.body.classList.add('bg-white');
         const token = localStorage.getItem('token');
         const role = localStorage.getItem('role');
        if (token) {
            if (role === 'ROLE_ADMIN') {
            this.router.push('/dashboard/crm');
            } else {
            this.router.push('/pages/profile');
            }
        }
    },
    unmounted() {
        document.body.classList.remove('bg-white');
    },
}
</script>

<template>
    <div class="row authentication mx-0">
        <div class="col-xxl-6 col-xl-6 col-lg-12">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-xxl-6 col-xl-7 col-lg-7 col-md-7 col-sm-8 col-12">
                    <div class="p-5">
                         <div class="row gy-3">
                            <div class="col-12">
                                <img src="../../../../assets/logo-circular.png" width="200" class="mb-5 authentication-logo d-block mx-auto" alt="">
                            </div>
                            </div>
                        <p class="h5 mb-4 fw-semibold mb-2">Iniciar Sesión</p>
                        
                       
                        <div class="row gy-3">

                            <div v-if="auth.error != null" class="alert alert-danger d-flex align-items-center" role="alert">
                                <svg class="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg"
                                    enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <g>
                                        <rect fill="none" height="24" width="24" />
                                    </g>
                                    <g>
                                        <g>
                                            <g>
                                                <path
                                                    d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                                <rect height="6" width="2" x="11" y="7" />
                                                <rect height="2" width="2" x="11" y="15" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                                <div>
                                    {{ auth.error }}
                                </div>
                            </div>

                            <div class="col-xl-12 mt-0">
                                <label for="signin-username" class="form-label text-default">Nombre de Cliente</label>
                                <input type="text" class="form-control form-control-lg" id="signin-username" placeholder="cliente" v-model="username">
                            </div>
                            <div class="col-xl-12 mb-3">
                                <label for="signin-password"
                                    class="form-label text-default d-block">Contraseña</label>
                                <div class="input-group">
                                    <input :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg" id="signin-password" placeholder="contraseña" v-model="password">

                                    <button class="btn btn-light" type="button" @click="togglePassword"
                                        id="button-addon2">
                                        <i :class="showPassword ? 'ri-eye-line' : 'ri-eye-off-line'"
                                            class="align-middle"></i>
                                    </button>
                                </div>
                               
                            </div>
                            <div class="col-xl-12 d-grid mt-2">
                                <button class="btn btn-lg btn-primary" @click="handleLogin">Acceder</button>
                            </div>
                        </div>
                        <!-- <div class="text-center">
                            <p class="fs-12 text-muted mt-4">¿No tienes una cuenta? <router-link
                                    to="/authentication/sign-up/cover" class="text-primary">Registrarse</router-link></p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 d-xl-block d-none px-0">
            <div class="authentication-cover custom-bg">
                <!-- <div class="aunthentication-cover-content rounded">
                    <swiper :navigation="true" :pagination="{ clickable: true }" :keyboard="{ enabled: true, }"
                        :modules="modules" class="swiper-wrapper">
                        <swiper-slide>
                            <div
                                class="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                <div>
                                    <div class="mb-5">
                                        <img src="../../../../assets/images.png" class="authentication-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold text-fixed-white">Inicia</h6>
                                    <p class="fw-normal fs-14 op-7"> Ingresa en nuestro sistema y explora nuestro servicio.</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div
                                class="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                <div>
                                    <div class="mb-5">
                                        <img src="../../../../assets/images (1).png" class="authentication-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold text-fixed-white">Consulta</h6>
                                    <p class="fw-normal fs-14 op-7"> Revisa tus ejercicios y haz seguimiento de tu progreso.</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div
                                class="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                <div>
                                    <div class="mb-5">
                                        <img src="../../../../assets/images2.avif" class="authentication-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold text-fixed-white">Personaliza</h6>
                                    <p class="fw-normal fs-14 op-7"> Modifica tus datos y planes de manera que obtengas la atención mas acorde a ti.</p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-bg {
  background-image: url('../../../../assets/background-login.jpg'); /* tu imagen */
  background-size: cover;   /* que cubra toda el área */
  background-position: center; /* centrada */
  background-repeat: no-repeat;
}
</style>
