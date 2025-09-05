<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import { useAuthStore } from "../../stores/auth";
import { useUserStore } from '../../stores/users';
import axios from "axios";

export default {
  components: { PageHeader },
  data() {
    return {
        mode: 'self',
        error: '',
        successMessage: '',
      dataToPass: {
        current: "Editar Perfil",
        list: ["Pages", "Profile", "Editar Perfil"],
      },
      formUser: {
        username: "",
        direccion: "",
        observaciones: "",
        peso: "",
        altura: "",
      },
      loading: false,
    };
  },
  computed: {
    authStore() {
      return useAuthStore();
    },
    userStore(){
        return useUserStore();
    }
  },
  async mounted() {
  await this.authStore.loadFromStorage();

  this.mode = this.$route.query.mode || 'self';

  if (this.mode === 'admin' && this.userStore.selectedUser) {
    // Editar a otro usuario
    const user = this.userStore.selectedUser;
    this.formUser = { ...user };
  } else {
    // Editar mi propio perfil
    const user = this.authStore.userData;
    this.formUser = { ...user };
  }
},
  methods: {
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    async saveProfile() {
      this.loading = true;
      await this.sleep(5000);
    
      try {
        console.log(this.formUser, 'asd');
        const userJson = {
          username: this.formUser.username,
          password: this.formUser.password || "1234", // ⚠️ si no lo tienes en el form, pon un valor por defecto o pide al user
          nombre: this.formUser.nombre,
          apellidos: this.formUser.apellidos,
          dni: this.formUser.dni,
          peso: this.formUser.peso,
          altura: this.formUser.altura,
          direccion: this.formUser.direccion,
          observaciones: this.formUser.observaciones,
        };

        const formData = new FormData();
        formData.append("userJson", JSON.stringify(userJson));

       if (this.formUser.imagen) {
        formData.append("imagen", this.formUser.imagen);
      } else {
        // enviamos null explícitamente si no hay imagen
        formData.append("imagen", new Blob(), ""); 
        // ⚠️ el backend lo recibe como campo vacío
      }

        let response = await this.userStore.editProfile(this.authStore.userData.username, formData)

        // Actualizar store y localStorage
        this.authStore.userData = { ...this.authStore.userData, ...this.formUser };
        localStorage.setItem("userData", JSON.stringify(this.authStore.userData));

        this.successMessage = "Perfil actualizado correctamente ✅";
        setTimeout(() => {
          this.successMessage = '';
          this.$router.push("/pages/profile");
        }, 3000);
      } catch (err) {
        console.error(err.message, 'qwe');
        this.error = err.message

        setTimeout(() => {
            this.error = ''
        }, 3000)

      } finally {
        this.loading = false;
      }
    },
  },
  
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <div class="row">
    <div class="col-xl-12 ">
      <div class="card custom-card">
        <div class="card-body add-products p-0">
          <div class="p-4 d-flex flex-column">
            <div class="row gy-3">
              <!-- Username -->
              <div class="col-xl-6">
                <label class="form-label">Nombre de cliente</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formUser.username"
                  placeholder="Nombre"
                />
              </div>

              <!-- Dirección -->
              <div class="col-xl-6">
                <label class="form-label">Dirección</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="formUser.direccion"
                  placeholder="Dirección"
                />
              </div>

              <!-- Peso -->
              <div class="col-xl-6">
                <label class="form-label">Peso</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="formUser.peso"
                  placeholder="Peso en kg"
                />
              </div>

              <!-- Altura -->
              <div class="col-xl-6">
                <label class="form-label">Altura</label>
                <input
                  type="number"
                  class="form-control"
                  v-model="formUser.altura"
                  placeholder="Altura en cm"
                />
              </div>

              <!-- Observaciones -->
              <!-- <div class="col-xl-12">
                <label class="form-label">Observaciones</label>
                <textarea
                  class="form-control"
                  rows="3"
                  v-model="formUser.observaciones"
                  placeholder="Observaciones"
                ></textarea>
              </div> -->
            </div>
            <div v-if="error != ''" class="col-xl-4 mt-3 alert alert-danger d-flex align-self-center" role="alert">
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
                      {{ error }}
                  </div>
              </div>

            <div v-if="successMessage != ''" class="col-xl-4 mt-3 alert alert-success d-flex align-self-center" role="alert">
                    <svg class="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                        viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                        <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                        <path
                            d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                    </svg>
                    <div>
                        {{successMessage}}
                    </div>
            </div>

            

          </div>
          <!-- Botones -->
          <div
            class="px-4 py-3 border-top border-block-start-dashed d-flex justify-content-end"
          >
            <button
              class="btn btn-light m-1"
              @click="$router.push(mode === 'admin' ? '/pages/users' : '/pages/profile')"
            >
              {{ mode === 'admin' ? 'Volver' : 'Cancelar' }}
            </button>
            <button v-if="loading"
              class="btn btn-success-light m-1"
              :disabled="loading"
              @click="saveProfile"
            >
              Guardando
                <span class="spinner-grow spinner-grow-sm align-middle" role="status" aria-hidden="true"></span>
            </button>
            <button v-else
              class="btn btn-success-light m-1"
              :disabled="loading"
              @click="saveProfile"
            >
              Guardar cambios
              <i class="bi bi-download ms-2"></i>
            </button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
