<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { useAuthStore } from "../../../stores/auth";
import { ref } from "vue";

export default {
    components: { Swiper, SwiperSlide },
    setup() {
        const authStore = useAuthStore();

        const form = ref({
            username: "",
            password: "",
            confirmPassword: "",
            nombre: "",
            apellidos: "",
            dni: "",
            peso: "",
            altura: "",
            direccion: "",
            enabled: true,
            observaciones: ""
        })

        const imageFile = ref<File | null>(null);

        const submit = async () => {
            console.log('form', form.value);
            if (form.value.password !== form.value.confirmPassword) {
                alert("Las contraseñas no coinciden");
                return;
            }

            const userPayload = {
                ...form.value,
                peso: String(form.value.peso),   // asegurar que va como string
            }
            delete userPayload.confirmPassword;

            // si no hay imagen cargada, cargamos una por defecto
            let file = imageFile.value
            if (!file) {
                const response = await fetch("../../../../../assets/descarga.png"); // pon un archivo en public/images/
                const blob = await response.blob();
                file = new File([blob], "descarga.png", { type: blob.type });
            }

            try {
                let response = await authStore.register(userPayload, file)
                console.log('response', response);
            
            } catch (err) {
                alert("Error en el registro ❌")
            }
        }

        return { modules: [Navigation, Pagination, Keyboard], form, imageFile, submit }
    },
    data() {
        return {
            showPassword: false,
            showConfirmPassword: false,
        }
    },
    methods: {
        togglePassword(type: 'create-password' | 'create-confirmpassword') {
            if (type === 'create-password') this.showPassword = !this.showPassword;
            else this.showConfirmPassword = !this.showConfirmPassword;
        }
    },
    mounted() { document.body.classList.add('bg-white'); },
    unmounted() { document.body.classList.remove('bg-white'); }
}
</script>

<template>
    <div class="row authentication mx-0">
        <div class="col-xxl-7 col-xl-7 col-lg-12">
            <div class="row justify-content-center align-items-center h-100">
        <div class="col-xxl-6 col-xl-7 col-lg-7 col-md-7 col-sm-8 col-12">
          <div class="p-5">
            <p class="h5 fw-semibold mb-2">Sign Up</p>
            <div class="row gy-3">
              <div class="col-xl-12">
                <label class="form-label">Email</label>
                <input v-model="form.username" type="email" class="form-control form-control-lg" placeholder="email">
              </div>

              <div class="col-xl-12">
                <label class="form-label">First Name</label>
                <input v-model="form.nombre" type="text" class="form-control form-control-lg" placeholder="first name">
              </div>

              <div class="col-xl-12">
                <label class="form-label">Last Name</label>
                <input v-model="form.apellidos" type="text" class="form-control form-control-lg" placeholder="last name">
              </div>

              <div class="col-xl-12">
                <label class="form-label">DNI</label>
                <input v-model="form.dni" type="text" class="form-control form-control-lg" placeholder="dni">
              </div>

              <div class="col-xl-6">
                <label class="form-label">Peso (kg)</label>
                <input v-model="form.peso" type="number" class="form-control form-control-lg" placeholder="85">
              </div>

              <div class="col-xl-6">
                <label class="form-label">Altura (m)</label>
                <input v-model="form.altura" type="text" class="form-control form-control-lg" placeholder="1.84">
              </div>

              <div class="col-xl-12">
                <label class="form-label">Dirección</label>
                <input v-model="form.direccion" type="text" class="form-control form-control-lg" placeholder="direccion">
              </div>

              <div class="col-xl-12">
                <label class="form-label">Observaciones</label>
                <textarea v-model="form.observaciones" class="form-control form-control-lg" rows="2"></textarea>
              </div>

              <div class="col-xl-12">
                <label class="form-label">Password</label>
                <input v-model="form.password" :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg">
              </div>

              <div class="col-xl-12">
                <label class="form-label">Confirm Password</label>
                <input v-model="form.confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" class="form-control form-control-lg">
              </div>

              <div class="col-xl-12">
                <label class="form-label">Imagen</label>
                <input type="file" class="form-control" @change="e => imageFile = e.target.files[0]">
              </div>

              <div class="col-xl-12 d-grid mt-3">
                <button class="btn btn-lg btn-primary" @click.prevent="submit">Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        <div class="col-xxl-5 col-xl-5 col-lg-5 d-xl-block d-none px-0">
            <div class="authentication-cover">
                <div class="aunthentication-cover-content rounded">
                    <swiper :navigation="true" :pagination="{ clickable: true }" :keyboard="{ enabled: true, }"
                        :modules="modules" class="swiper-wrapper">
                        <swiper-slide>
                            <div
                                class="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                <div>
                                    <div class="mb-5">
                                        <img src="/images/authentication/2.png" class="authentication-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold text-fixed-white">Sign Up</h6>
                                    <p class="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem
                                        voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at
                                        ratione.</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div
                                class="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                <div>
                                    <div class="mb-5">
                                        <img src="/images/authentication/3.png" class="authentication-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold text-fixed-white">Sign Up</h6>
                                    <p class="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem
                                        voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at
                                        ratione.</p>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div
                                class="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                <div>
                                    <div class="mb-5">
                                        <img src="/images/authentication/2.png" class="authentication-image" alt="">
                                    </div>
                                    <h6 class="fw-semibold text-fixed-white">Sign Up</h6>
                                    <p class="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing
                                        elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem
                                        voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at
                                        ratione.</p>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
    </div>
    
</template>

<style scoped></style>
