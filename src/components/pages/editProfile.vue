<template>
  <!-- <PageHeader :propData="dataToPass" /> -->

  <div class="row justify-content-center mt-4">
    <div class="col-xl-10">
      <div class="card elegant-profile-card">
        <!-- HEADER ELEGANTE -->
        <div class="card-header elegant-profile-header">
          <div class="header-content">
            <div class="header-icon">
              <i class="ri-user-settings-line"></i>
            </div>
            <div class="header-text">
              <h4 class="mb-0">{{ mode === 'admin' ? 'Editar Cliente' : 'Editar Mi Perfil' }}</h4>
              <small class="text-white-50">
                {{ mode === 'admin' ? 'Modificar información del cliente' : 'Actualiza tu información personal' }}
              </small>
            </div>
          </div>
          <div class="user-avatar" v-if="formUser.imagen">
            <img :src="formUser.imagen" :alt="formUser.nombre" />
          </div>
        </div>

        <!-- BODY ELEGANTE -->
        <div class="card-body elegant-profile-body">
          <form @submit.prevent="saveProfile">
            
            <!-- INFORMACIÓN PERSONAL -->
            <div class="profile-section">
              <div class="section-divider">
                <i class="ri-user-line"></i>
                <span>Información Personal</span>
              </div>
              
              <div class="row g-4">
                <!-- Nombre -->
                <div class="col-md-6" v-if="formUser.nombre !== undefined">
                  <div class="elegant-input-group">
                    <label class="elegant-label">
                      <i class="ri-user-3-line"></i>
                      Nombre
                    </label>
                    <input
                      type="text"
                      class="elegant-input"
                      v-model="formUser.nombre"
                      placeholder="Nombre del cliente"
                      :disabled="loading"
                    />
                  </div>
                </div>

                <!-- Apellidos -->
                <div class="col-md-6" v-if="formUser.apellidos !== undefined">
                  <div class="elegant-input-group">
                    <label class="elegant-label">
                      <i class="ri-user-4-line"></i>
                      Apellidos
                    </label>
                    <input
                      type="text"
                      class="elegant-input"
                      v-model="formUser.apellidos"
                      placeholder="Apellidos del cliente"
                      :disabled="loading"
                    />
                  </div>
                </div>

                <!-- Email -->
                <div class="col-md-6">
                  <div class="elegant-input-group">
                    <label class="elegant-label">
                      <i class="ri-mail-line"></i>
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      class="elegant-input"
                      v-model="formUser.username"
                      placeholder="correo@ejemplo.com"
                      :disabled="loading"
                    />
                  </div>
                </div>

                <!-- DNI -->
                <div class="col-md-6" v-if="formUser.dni !== undefined">
                  <div class="elegant-input-group">
                    <label class="elegant-label">
                      <i class="ri-id-card-line"></i>
                      Documento de Identidad
                    </label>
                    <input
                      type="text"
                      class="elegant-input"
                      v-model="formUser.dni"
                      placeholder="12345678"
                      :disabled="loading"
                    />
                  </div>
                </div>

                <!-- Dirección -->
                <div class="col-12">
                  <div class="elegant-input-group">
                    <label class="elegant-label">
                      <i class="ri-map-pin-line"></i>
                      Dirección
                    </label>
                    <input
                      type="text"
                      class="elegant-input"
                      v-model="formUser.direccion"
                      placeholder="Dirección completa"
                      :disabled="loading"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- INFORMACIÓN FÍSICA -->
            <div class="profile-section">
              <div class="section-divider">
                <i class="ri-heart-pulse-line"></i>
                <span>Información Física</span>
              </div>
              
              <div class="row g-4">
                <!-- Peso con Slider -->
                <div class="col-md-6">
                  <div class="slider-group">
                    <label class="elegant-label">
                      <i class="ri-scales-3-line"></i>
                      Peso: <span class="value-display">{{ formUser.peso || 0 }} kg</span>
                    </label>
                    <div class="slider-container">
                      <input 
                        type="range" 
                        v-model.number="formUser.peso"
                        min="0" 
                        max="250" 
                        step="0.1"
                        class="elegant-slider peso-slider"
                        :disabled="loading">
                      <div class="slider-track">
                        <div class="slider-progress" 
                             :style="{ width: (formUser.peso / 250 * 100) + '%' }"></div>
                      </div>
                      <div class="slider-labels">
                        <span>0 kg</span>
                        <span>250 kg</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Altura con Slider -->
                <div class="col-md-6">
                  <div class="slider-group">
                    <label class="elegant-label">
                      <i class="ri-ruler-line"></i>
                      Altura: <span class="value-display">{{ formUser.altura || 0 }} m</span>
                    </label>
                    <div class="slider-container">
                      <input 
                        type="range" 
                        v-model.number="formUser.altura"
                        min="0" 
                        max="2.5" 
                        step="0.01"
                        class="elegant-slider altura-slider"
                        :disabled="loading">
                      <div class="slider-track">
                        <div class="slider-progress" 
                             :style="{ width: (formUser.altura / 2.5 * 100) + '%' }"></div>
                      </div>
                      <div class="slider-labels">
                        <span>0.0 m</span>
                        <span>2.5 m</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- OBSERVACIONES -->
            <div class="profile-section" v-if="formUser.observaciones !== undefined">
              <div class="section-divider">
                <i class="ri-sticky-note-line"></i>
                <span>Observaciones</span>
              </div>
              
              <div class="elegant-input-group">
                <textarea
                  class="elegant-textarea"
                  rows="4"
                  v-model="formUser.observaciones"
                  placeholder="Notas adicionales (opcional)"
                  :disabled="loading"
                ></textarea>
              </div>
            </div>

          </form>
        </div>

        <!-- FOOTER ELEGANTE -->
        <div class="card-footer elegant-profile-footer">
          <button
            type="button"
            class="btn elegant-btn-secondary"
            @click="handleCancel"
            :disabled="loading"
          >
            <i class="ri-arrow-left-line me-2"></i>
            {{ mode === 'admin' ? 'Volver' : 'Cancelar' }}
          </button>
          
          <button
            type="button"
            class="btn elegant-btn-primary"
            @click="saveProfile"
            :disabled="loading"
          >
            <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
            <i v-else class="ri-save-line me-2"></i>
            {{ loading ? 'Guardando...' : 'Guardar Cambios' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import { useAuthStore } from "../../stores/auth";
import { useUserStore } from '../../stores/users';
import axios from "axios";

// Importar SweetAlert2
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
  components: { PageHeader },
  data() {
    return {
      mode: 'self',
      dataToPass: {
        current: "Editar Perfil",
        list: ["Pages", "Profile", "Editar Perfil"],
      },
      formUser: {
        username: "",
        direccion: "",
        observaciones: "",
        peso: 70,
        altura: 1.70,
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
    // NOTIFICACIONES SWEETALERT2
    showSuccessNotification(title, message, footerText = null) {
      return Swal.fire({
        icon: 'success',
        title: title,
        text: message,
        footer: footerText ? `<span class="text-success"><i class="ri-information-line me-1"></i>${footerText}</span>` : null,
        confirmButtonColor: '#28a745',
        confirmButtonText: 'Perfecto',
        timer: 4000,
        timerProgressBar: true,
        allowOutsideClick: false
      });
    },

    showErrorNotification(title, message, footerText = null) {
      return Swal.fire({
        icon: 'error',
        title: title,
        text: message,
        footer: footerText ? `<span class="text-danger"><i class="ri-error-warning-line me-1"></i>${footerText}</span>` : null,
        confirmButtonColor: '#dc3545',
        confirmButtonText: 'Entendido',
        allowOutsideClick: false
      });
    },

    showLoadingAlert(title, message) {
      Swal.fire({
        title: title,
        text: message,
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        }
      });
    },

    showConfirmDialog(title, message) {
      return Swal.fire({
        title: title,
        text: message,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#111c43',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Sí, guardar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
      });
    },

    async saveProfile() {
      if (this.loading) return;

      // Validación básica
      if (!this.formUser.username || !this.formUser.username.trim()) {
        this.showErrorNotification(
          'Campo requerido',
          'El correo electrónico es obligatorio',
          'Completa la información requerida'
        );
        return;
      }

      // Confirmación antes de guardar
      const result = await this.showConfirmDialog(
        '¿Guardar cambios?',
        'Se actualizará la información del perfil'
      );

      if (!result.isConfirmed) return;

      this.loading = true;

      try {
        // Mostrar loading
        this.showLoadingAlert(
          'Guardando cambios...',
          'Por favor espera mientras actualizamos la información'
        );

        const userJson = {
          username: this.formUser.username,
          password: this.formUser.password || "1234",
          nombre: this.formUser.nombre,
          apellidos: this.formUser.apellidos,
          dni: this.formUser.dni,
          peso: String(this.formUser.peso),
          altura: String(this.formUser.altura),
          direccion: this.formUser.direccion,
          observaciones: this.formUser.observaciones,
          enabled: true
        };

        const formData = new FormData();
        formData.append("userJson", JSON.stringify(userJson));

        if (this.formUser.imagen) {
          formData.append("imagen", this.formUser.imagen);
        } else {
          formData.append("imagen", new Blob(), "");
        }

        // Determinar qué endpoint usar
        const targetUsername = this.mode === 'admin' 
          ? this.userStore.selectedUser?.username 
          : this.authStore.userData?.username;

        let response = await this.userStore.editProfile(targetUsername, formData);
        // Verificar éxito
        const isSuccess = response && (
          response.success === true || 
          response.status === 'success' || 
          response.statusCode === 200 ||
          response.ok === true ||
          !response.error
        );

        if (isSuccess) {
          // Actualizar datos locales si es perfil propio
          if (this.mode !== 'admin') {
            this.authStore.userData = { ...this.authStore.userData, ...this.formUser };
            localStorage.setItem("userData", JSON.stringify(this.authStore.userData));
          }

          // Mostrar éxito
          await this.showSuccessNotification(
            '¡Perfil actualizado!',
            `${this.mode === 'admin' ? 'Cliente' : 'Tu perfil'} se ha actualizado correctamente`,
            'Los cambios se han guardado exitosamente'
          );

          // Redirigir
          const redirectPath = this.mode === 'admin' ? '/pages/users' : '/pages/profile';
          this.$router.push(redirectPath);

        } else {
          // Error del servidor
          const errorMessage = response?.message || response?.error || 'Error al actualizar el perfil';
          this.showErrorNotification(
            'Error al guardar',
            errorMessage,
            'Verifica los datos e inténtalo nuevamente'
          );
        }

      } catch (err) {
        console.error('Error al guardar perfil:', err);
        
        let errorMessage = 'No se pudo actualizar el perfil. Inténtalo nuevamente.';
        let footerMessage = 'Verifica tu conexión a internet';

        // Manejar diferentes tipos de errores
        if (err.response?.status === 400) {
          errorMessage = 'Los datos proporcionados no son válidos';
          footerMessage = 'Revisa que el email no esté ya registrado por otro usuario';
        } else if (err.response?.status === 404) {
          errorMessage = 'Usuario no encontrado';
          footerMessage = 'El usuario puede haber sido eliminado';
        } else if (err.response?.status === 500) {
          errorMessage = 'Error interno del servidor';
          footerMessage = 'Contacta al administrador del sistema';
        } else if (!navigator.onLine) {
          errorMessage = 'Sin conexión a internet';
          footerMessage = 'Verifica tu conexión e inténtalo nuevamente';
        }

        this.showErrorNotification(
          'Error al actualizar perfil',
          errorMessage,
          footerMessage
        );

      } finally {
        this.loading = false;
      }
    },

    async handleCancel() {
      
        const redirectPath = this.mode === 'admin' ? '/pages/users' : '/pages/profile';
        this.$router.push(redirectPath);
      
    }
  }
};
</script>

<style scoped>
/* CARD PRINCIPAL ELEGANTE */
.elegant-profile-card {
  border: none;
  border-radius: 20px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

/* HEADER ELEGANTE */
.elegant-profile-header {
  background: linear-gradient(135deg, #111c43 0%, rgb(0, 109, 254) 100%);
  border: none;
  padding: 2rem;
  position: relative;
}

.elegant-profile-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  opacity: 0.3;
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.header-content > div:first-child {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-icon {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
}

.header-icon i {
  font-size: 1.5rem;
  color: white;
}

.header-text h4 {
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
}

.user-avatar {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border: 3px solid rgba(255, 255, 255, 0.2);
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* BODY ELEGANTE */
.elegant-profile-body {
  padding: 2rem;
  background: linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%);
}

/* SECCIONES */
.profile-section {
  margin-bottom: 2rem;
}

.profile-section:last-child {
  margin-bottom: 0;
}

.section-divider {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: #475569;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.section-divider i {
  font-size: 1.2rem;
  color: #111c43;
}

/* INPUTS ELEGANTES */
.elegant-input-group {
  margin-bottom: 1.5rem;
}

.elegant-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
}

.elegant-label i {
  color: #111c43;
  font-size: 1.1rem;
}

.elegant-input, .elegant-textarea {
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.elegant-input:focus, .elegant-textarea:focus {
  outline: none;
  border-color: #111c43;
  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

.elegant-input:disabled, .elegant-textarea:disabled {
  background: #f8fafc;
  cursor: not-allowed;
  opacity: 0.7;
}

/* SLIDERS ELEGANTES */
.slider-group {
  margin-bottom: 1.5rem;
}

.slider-container {
  position: relative;
  padding: 1rem 0;
}

.elegant-slider {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #e2e8f0;
  outline: none;
  cursor: pointer;
  -webkit-appearance: none;
  position: relative;
  z-index: 2;
}

.elegant-slider:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.elegant-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: linear-gradient(135deg, #111c43 0%, rgb(0, 109, 254) 100%);
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  transition: all 0.2s ease;
}

.elegant-slider::-webkit-slider-thumb:hover:not(:disabled) {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.slider-track {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  transform: translateY(-50%);
  pointer-events: none;
}

.slider-progress {
  height: 100%;
  background: linear-gradient(90deg, #111c43 0%, rgb(0, 109, 254) 100%);
  border-radius: 4px;
  transition: width 0.2s ease;
}

.slider-labels {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
}

.value-display {
  color: #111c43;
  font-weight: 600;
  font-size: 1.1rem;
}

/* FOOTER ELEGANTE */
.elegant-profile-footer {
  padding: 1.5rem 2rem;
  background: white;
  border-top: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.elegant-btn-secondary {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  color: #475569;
  padding: 0.75rem 1.5rem;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.elegant-btn-secondary:hover:not(:disabled) {
  background: #e2e8f0;
  border-color: #cbd5e1;
  transform: translateY(-1px);
}

.elegant-btn-primary {
  background: linear-gradient(135deg, #111c43 0%, rgb(0, 109, 254) 100%);
  border: none;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
}

.elegant-btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.35);
}

.elegant-btn-primary:disabled, .elegant-btn-secondary:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .elegant-profile-header {
    padding: 1.5rem;
  }
  
  .elegant-profile-body {
    padding: 1.5rem;
  }
  
  .header-content {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
  
  .elegant-profile-footer {
    flex-direction: column-reverse;
    gap: 1rem;
  }
  
  .elegant-btn-secondary,
  .elegant-btn-primary {
    width: 100%;
    justify-content: center;
  }
  
  .user-avatar {
    width: 60px;
    height: 60px;
  }
}
</style>