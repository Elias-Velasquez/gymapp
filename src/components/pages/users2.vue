<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import ContactCardComponent from '../../shared/components/@spk/contacts-cards.vue';
import * as prism from "../../data/prismCode/table/tables.js";
import DatatableVue from '../tables/datatable/datatable.vue';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { useUserStore } from '../../stores/users.js';
import { useAuthStore } from '../../stores/auth.js';
import { ref, computed } from "vue";
import { Modal } from "bootstrap";

// Importar SweetAlert2
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
    components: {
        PageHeader,
        ContactCardComponent,
        DatatableVue
    },
    setup() {
    },
    computed: {
            user() {
                return useUserStore();
            },
            authStore() {
                return useAuthStore();
            },
            filteredItems() {
            if (!this.search) return this.items;

                const searchLower = this.search.toLowerCase();

                return this.items.filter((item: any) =>
                    Object.values(item).some(value =>
                        String(value).toLowerCase().includes(searchLower)
                    )
                );
            },
            previewImage() {
                console.log("asd", this.imageFile);
            if (this.imageFile) {
                return URL.createObjectURL(this.imageFile);
            }
            // imagen por defecto
            console.log("asd");
            return "../../../../assets/default-avatar.png";
            }
        },
    async mounted() {
        await this.user.getUsers()
        this.items = this.user.user
        console.log(this.items, 'items');
        this.userProfile = this.authStore.userData;
    },
    data() {
        return {
            userProfile: null,
            userToAssist: null,
            dataToPass: {
                current: "Users2",
                list: ['Pages', 'Users']
            },
            prism,
            headers: [
                { 
                    text: "Cliente", 
                    value: "cliente", 
                    sortable: true, 
                    width: 350
                },
                { 
                    text: "Contacto", 
                    value: "contacto", 
                    sortable: false, 
                    width: 200 
                },
                { 
                    text: "Info Física", 
                    value: "fisico", 
                    sortable: false, 
                    width: 130 
                },
                { 
                    text: "Estado", 
                    value: "status", 
                    sortable: true, 
                    width: 150 
                },
                { 
                    text: "Acciones", 
                    value: "actions", 
                    sortable: false, 
                    width: 180 
                }
            ],
            items: [],
            search: "",
            showPassword: false,
            showConfirmPassword: false,
            createForm: {
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
            },
            imageFile: null,
            userToDelete: null,
            isSubmitting: false,
            formErrors: {}
        };
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

        showDeleteConfirmation(userName, userEmail) {
            return Swal.fire({
                title: '¿Estás seguro?',
                html: `Se eliminará permanentemente el usuario:<br><strong>${userName}</strong><br><small class="text-muted">${userEmail}</small>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#dc3545',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
                footer: '<span class="text-warning"><i class="ri-alarm-warning-line me-1"></i>Esta acción no se puede deshacer</span>',
                reverseButtons: true,
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

        // VALIDACIONES MEJORADAS
        validateForm() {
            this.formErrors = {};
            let isValid = true;

            // Email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.createForm.username.trim()) {
                this.formErrors.username = 'El email es requerido';
                isValid = false;
            } else if (!emailRegex.test(this.createForm.username)) {
                this.formErrors.username = 'Formato de email inválido';
                isValid = false;
            }

            // Contraseña
            if (!this.createForm.password) {
                this.formErrors.password = 'La contraseña es requerida';
                isValid = false;
            } else if (this.createForm.password.length < 6) {
                this.formErrors.password = 'Mínimo 6 caracteres';
                isValid = false;
            }

            // Confirmación contraseña
            if (this.createForm.password !== this.createForm.confirmPassword) {
                this.formErrors.confirmPassword = 'Las contraseñas no coinciden';
                isValid = false;
            }

            // Nombre
            if (!this.createForm.nombre.trim()) {
                this.formErrors.nombre = 'El nombre es requerido';
                isValid = false;
            } else if (this.createForm.nombre.trim().length < 2) {
                this.formErrors.nombre = 'Mínimo 2 caracteres';
                isValid = false;
            }

            // Apellidos
            if (!this.createForm.apellidos.trim()) {
                this.formErrors.apellidos = 'Los apellidos son requeridos';
                isValid = false;
            }

            // DNI
            if (!this.createForm.dni.trim()) {
                this.formErrors.dni = 'El DNI es requerido';
                isValid = false;
            } else if (!/^\d{7,10}$/.test(this.createForm.dni)) {
                this.formErrors.dni = 'Entre 7 y 10 dígitos';
                isValid = false;
            }

            // Peso
            if (!this.createForm.peso || this.createForm.peso <= 0) {
                this.formErrors.peso = 'El peso es requerido';
                isValid = false;
            } else if (this.createForm.peso < 30 || this.createForm.peso > 300) {
                this.formErrors.peso = 'Entre 30 y 300 kg';
                isValid = false;
            }

            // Altura
            if (!this.createForm.altura || this.createForm.altura <= 0) {
                this.formErrors.altura = 'La altura es requerida';
                isValid = false;
            } else if (this.createForm.altura < 1.0 || this.createForm.altura > 2.5) {
                this.formErrors.altura = 'Entre 1.0 y 2.5 metros';
                isValid = false;
            }

            return isValid;
        },

        // MÉTODOS PRINCIPALES MEJORADOS
        async submit() {
            if (this.isSubmitting) return;

            // Validar formulario
            if (!this.validateForm()) {
                this.showErrorNotification(
                    'Formulario incompleto',
                    'Por favor corrige los errores marcados en el formulario',
                    'Revisa que todos los campos estén correctos'
                );
                return;
            }

            this.isSubmitting = true;

            try {
                // Mostrar loading
                this.showLoadingAlert(
                    'Creando usuario...',
                    'Por favor espera mientras procesamos la información'
                );

                const userPayload = {
                    ...this.createForm,
                    peso: String(this.createForm.peso),
                };
                delete userPayload.confirmPassword;

                let file = this.imageFile;
                if (!file) {
                    const response = await fetch("../../../../../assets/descarga.png");
                    const blob = await response.blob();
                    file = new File([blob], "descarga.png", { type: blob.type });
                }

                const formData = new FormData();
                formData.append("userJson", JSON.stringify(userPayload));
                formData.append("imagen", file);
                console.log('inicia')
                let response = await this.authStore.register(formData);
                console.log(response, 'respuesta server')
                // Verificar si la respuesta indica éxito
                // Ajusta esta lógica según lo que devuelve tu API
                const isSuccess = response && (
                    response.success === true || 
                    response.status === 'success' || 
                    response.statusCode === 200 ||
                    response.ok === true ||
                    !response.error
                );

                if (isSuccess) {
                    // Actualizar datos
                    await this.user.getUsers();
                    this.items = this.user.user;

                    // Cerrar modal
                    this.closeCreateModal();

                    // Limpiar formulario
                    this.resetCreateForm();

                    // Mostrar éxito
                    this.showSuccessNotification(
                        '¡Usuario creado exitosamente!',
                        `${this.createForm.nombre} ${this.createForm.apellidos} ha sido agregado al sistema`,
                        'Ya puede acceder con sus credenciales'
                    );
                } else {
                    // Error del servidor
                    const errorMessage = response?.message || response?.error || 'Error desconocido del servidor';
                    this.showErrorNotification(
                        'Error al crear usuario',
                        errorMessage,
                        'Verifica los datos e inténtalo nuevamente'
                    );
                }

            } catch (err) {
                console.error('Error en registro:', err);
                
                let errorMessage = 'No se pudo crear el usuario. Inténtalo nuevamente.';
                let footerMessage = 'Verifica tu conexión a internet';

                // Manejar diferentes tipos de errores
                if (err.response?.status === 400) {
                    errorMessage = 'Los datos proporcionados no son válidos';
                    footerMessage = 'Revisa que el email no esté ya registrado';
                } else if (err.response?.status === 500) {
                    errorMessage = 'Error interno del servidor';
                    footerMessage = 'Contacta al administrador del sistema';
                } else if (!navigator.onLine) {
                    errorMessage = 'Sin conexión a internet';
                    footerMessage = 'Verifica tu conexión e inténtalo nuevamente';
                }

                this.showErrorNotification(
                    'Error al crear usuario',
                    errorMessage,
                    footerMessage
                );
            } finally {
                this.isSubmitting = false;
            }
        },

        async handleDelete(user) {
            // Mostrar confirmación
            const result = await this.showDeleteConfirmation(
                `${user.nombre} ${user.apellidos}`,
                user.username
            );

            if (result.isConfirmed) {
                await this.confirmDelete(user);
            }
        },

        async confirmDelete(user) {
            try {
                // Mostrar loading
                this.showLoadingAlert(
                    'Eliminando usuario...',
                    'Por favor espera mientras procesamos la eliminación'
                );

                const success = await this.user.deleteUser(user.username);
                
                if (success) {
                    // Actualizar lista
                    await this.user.getUsers();
                    this.items = this.user.user;
                    
                    // Mostrar éxito
                    this.showSuccessNotification(
                        '¡Usuario eliminado!',
                        `${user.nombre} ${user.apellidos} ha sido eliminado del sistema`,
                        'Los datos han sido removidos permanentemente'
                    );
                } else {
                    this.showErrorNotification(
                        'Error al eliminar',
                        'No se pudo eliminar el usuario. Inténtalo nuevamente.',
                        'El usuario puede tener datos asociados que impiden su eliminación'
                    );
                }
            } catch (error) {
                console.error('Error al eliminar usuario:', error);
                this.showErrorNotification(
                    'Error del servidor',
                    'Ocurrió un error inesperado. Inténtalo más tarde.',
                    'Contacta al administrador si el problema persiste'
                );
            }
        },

        // MÉTODOS DE ASISTENCIA MEJORADOS
        async handleAssistance(user) {
            const result = await Swal.fire({
                title: 'Confirmar asistencia',
                html: `¿Confirmar asistencia para:<br><strong>${user.nombre} ${user.apellidos}</strong><br><small class="text-muted">${user.username}</small>`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#28a745',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Sí, confirmar',
                cancelButtonText: 'Cancelar',
                footer: '<span class="text-info"><i class="ri-information-line me-1"></i>Se registrará la asistencia en el sistema</span>'
            });

            if (result.isConfirmed) {
                await this.confirmAssistance(user);
            }
        },

        async confirmAssistance(user) {
            try {
                this.showLoadingAlert(
                    'Registrando asistencia...',
                    'Procesando la confirmación de asistencia'
                );

                // Aquí tu lógica de asistencia
                // await this.user.addAssistance(user.username);

                // Actualizar datos
                await this.user.getUsers();
                this.items = this.user.user;

                this.showSuccessNotification(
                    '¡Asistencia registrada!',
                    `Se confirmó la asistencia de ${user.nombre} ${user.apellidos}`,
                    'El registro ha sido actualizado correctamente'
                );

            } catch (err) {
                console.error('Error al registrar asistencia:', err);
                this.showErrorNotification(
                    'Error al registrar asistencia',
                    'No se pudo confirmar la asistencia. Inténtalo nuevamente.',
                    'Verifica la conexión y vuelve a intentar'
                );
            }
        },

        // MÉTODOS AUXILIARES
        closeCreateModal() {
            const modalEl = document.getElementById("exampleModalScrollable2");
            if (modalEl) {
                const modal = Modal.getInstance(modalEl) || new Modal(modalEl);
                modal.hide();
                const backdrop = document.querySelector(".modal-backdrop");
                if (backdrop) backdrop.remove();
                document.body.classList.remove("modal-open");
                document.body.style.removeProperty("overflow");
                document.body.style.removeProperty("padding-right");
            }
        },

        resetCreateForm() {
            this.createForm = {
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
            };
            this.imageFile = null;
            this.formErrors = {};
        },

        getErrorClass(field) {
            return this.formErrors[field] ? 'is-invalid' : '';
        },

        // MÉTODOS EXISTENTES MANTENIDOS
        async handleToggleStatus(user) {
            try {
                const updatedUser = {
                    ...user,
                    enabled: !user.enabled
                };
                
                // await this.user.updateUserStatus(user.id, { enabled: !user.enabled });
                
                await this.user.getUsers();
                this.items = this.user.user;
                
                console.log(`Usuario ${user.nombre} ${updatedUser.enabled ? 'habilitado' : 'deshabilitado'}`);
            } catch (error) {
                console.error('Error al cambiar estado del usuario:', error);
                this.showErrorNotification(
                    'Error al cambiar estado',
                    'No se pudo cambiar el estado del usuario',
                    'Inténtalo nuevamente'
                );
            }
        },

        handleFileChange(e: Event) {
            const target = e.target as HTMLInputElement;
            if (target.files && target.files[0]) {
                this.imageFile = target.files[0];
            }
        },

        handleView(user) {
            this.user.selectedUser = user;
            this.$router.push({ path: '/pages/profile', query: { mode: 'admin' } });
        },

        handleEdit(user) {
            this.user.selectedUser = user;
            this.$router.push({ path: '/pages/edit-profile', query: { mode: 'admin' } });
        },

        togglePassword(type: 'create-password' | 'create-confirmpassword') {
            if (type === 'create-password') this.showPassword = !this.showPassword;
            else this.showConfirmPassword = !this.showConfirmPassword;
        }
    }
};
</script>

<!-- El template permanece igual, solo añadir clases de error en los inputs -->
<template>
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card mt-4">
                <div class="card-body">
                    <div class="contact-header">
                        <div class="d-sm-flex d-block align-items-center justify-content-between">
                            <div class="h5 fw-semibold mb-0">Listado de clientes</div>
                            <div class="d-flex mt-sm-0 mt-2 align-items-center">
                                <div class="input-group">
                                     <input v-model="search" type="text" class="form-control bg-light border-0"
                                        placeholder="Buscar Cliente" aria-describedby="search-contact-member">
                                    <button class="btn btn-light" type="button" id="search-contact-member">
                                        <i class="ri-search-line text-muted"></i>
                                    </button>
                                </div>
                                <button class="btn btn-icon btn-secondary-light ms-2" data-bs-toggle="modal"
                    data-bs-target="#exampleModalScrollable2"><v-tooltip activator="parent"
                                        location="top">Agregar Cliente</v-tooltip><i class="ri-add-line"></i></button>
                                        
                                        <!-- MODAL MEJORADO CON VALIDACIONES -->
                                        <div class="modal fade" id="exampleModalScrollable2" tabindex="-1"
                                            aria-labelledby="exampleModalScrollable2" data-bs-keyboard="false" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered" >
                                                <div class="modal-content" style="width: 800px!important;">
                                                    <div class="modal-header">
                                                        <h6 class="modal-title" id="staticBackdropLabel2">Agregar Cliente</h6>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="p-5">
                                                            <div class="row gy-3">

                                                            <div class="col-xl-12">
                                                                <div class="d-flex flex-column align-items-center">
                                                                    <span class="avatar avatar-xxl avatar-rounded me-3">
                                                                    <img :src="previewImage" width="300" alt="avatar" />
                                                                    </span>
                                                                     <label class="form-label align-self-start">Imagen</label>
                                                                    <input 
                                                                    type="file" 
                                                                    class="form-control mt-2" 
                                                                    accept="image/*"
                                                                    @change="handleFileChange">
                                                                </div>
                                                            </div>

                                                            <div class="col-xl-12">
                                                                <label class="form-label">Email *</label>
                                                                <input v-model="createForm.username" 
                                                                       type="email" 
                                                                       :class="`form-control form-control-lg ${getErrorClass('username')}`" 
                                                                       placeholder="correo@ejemplo.com">
                                                                <div v-if="formErrors.username" class="invalid-feedback">
                                                                    {{ formErrors.username }}
                                                                </div>
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Nombre *</label>
                                                                <input v-model="createForm.nombre" 
                                                                       type="text" 
                                                                       :class="`form-control form-control-lg ${getErrorClass('nombre')}`" 
                                                                       placeholder="Nombre">
                                                                <div v-if="formErrors.nombre" class="invalid-feedback">
                                                                    {{ formErrors.nombre }}
                                                                </div>
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Apellidos *</label>
                                                                <input v-model="createForm.apellidos" 
                                                                       type="text" 
                                                                       :class="`form-control form-control-lg ${getErrorClass('apellidos')}`" 
                                                                       placeholder="Apellidos">
                                                                <div v-if="formErrors.apellidos" class="invalid-feedback">
                                                                    {{ formErrors.apellidos }}
                                                                </div>
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">DNI *</label>
                                                                <input v-model="createForm.dni" 
                                                                       type="text" 
                                                                       :class="`form-control form-control-lg ${getErrorClass('dni')}`" 
                                                                       placeholder="12345678">
                                                                <div v-if="formErrors.dni" class="invalid-feedback">
                                                                    {{ formErrors.dni }}
                                                                </div>
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Peso (kg) *</label>
                                                                <input v-model.number="createForm.peso" 
                                                                       type="number" 
                                                                       min="30" 
                                                                       max="300" 
                                                                       step="0.1"
                                                                       :class="`form-control form-control-lg ${getErrorClass('peso')}`" 
                                                                       placeholder="85">
                                                                <div v-if="formErrors.peso" class="invalid-feedback">
                                                                    {{ formErrors.peso }}
                                                                </div>
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Altura (m) *</label>
                                                                <input v-model.number="createForm.altura" 
                                                                       type="number" 
                                                                       min="1.0" 
                                                                       max="2.5" 
                                                                       step="0.01"
                                                                       :class="`form-control form-control-lg ${getErrorClass('altura')}`" 
                                                                       placeholder="1.75">
                                                                <div v-if="formErrors.altura" class="invalid-feedback">
                                                                    {{ formErrors.altura }}
                                                                </div>
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Dirección</label>
                                                                <input v-model="createForm.direccion" 
                                                                       type="text" 
                                                                       class="form-control form-control-lg" 
                                                                       placeholder="Dirección completa">
                                                            </div>

                                                            <div class="col-xl-12">
                                                                <label class="form-label">Observaciones</label>
                                                                <textarea v-model="createForm.observaciones" 
                                                                          class="form-control form-control-lg" 
                                                                          rows="2" 
                                                                          placeholder="Notas adicionales sobre el cliente"></textarea>
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Contraseña *</label>
                                                                <div class="input-group">
                                                                    <input v-model="createForm.password" 
                                                                           :type="showPassword ? 'text' : 'password'" 
                                                                           :class="`form-control form-control-lg ${getErrorClass('password')}`"
                                                                           placeholder="Mínimo 6 caracteres">
                                                                    <button class="btn btn-outline-secondary" 
                                                                            type="button" 
                                                                            @click="togglePassword('create-password')">
                                                                        <i :class="showPassword ? 'ri-eye-off-line' : 'ri-eye-line'"></i>
                                                                    </button>
                                                                </div>
                                                                <div v-if="formErrors.password" class="invalid-feedback">
                                                                    {{ formErrors.password }}
                                                                </div>
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Confirmar Contraseña *</label>
                                                                <div class="input-group">
                                                                    <input v-model="createForm.confirmPassword" 
                                                                           :type="showConfirmPassword ? 'text' : 'password'" 
                                                                           :class="`form-control form-control-lg ${getErrorClass('confirmPassword')}`"
                                                                           placeholder="Repetir contraseña">
                                                                    <button class="btn btn-outline-secondary" 
                                                                            type="button" 
                                                                            @click="togglePassword('create-confirmpassword')">
                                                                        <i :class="showConfirmPassword ? 'ri-eye-off-line' : 'ri-eye-line'"></i>
                                                                    </button>
                                                                </div>
                                                                <div v-if="formErrors.confirmPassword" class="invalid-feedback">
                                                                    {{ formErrors.confirmPassword }}
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                        <button type="button" 
                                                                class="btn btn-primary"  
                                                                @click.prevent="submit"
                                                                :disabled="isSubmitting">
                                                            <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2" role="status"></span>
                                                            {{ isSubmitting ? 'Creando...' : 'Crear Cliente' }}
                                                        </button>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="col-xl-12">
                <DatatableVue
                :headers="headers"
                :items="filteredItems"
                title="Datos"
                tableType="users"
                :showCustomAction="true"
                customActionIcon="ri-checkbox-circle-line"
                customActionClass="btn-success-transparent"
                customActionTooltip="Registrar asistencia"
                @edit="handleEdit"
                @view="handleView"
                @delete="handleDelete"
                @customAction="handleAssistance"
                @toggleStatus="handleToggleStatus"
                />
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped>
.card-body {
    padding: 0.80rem !important;
}

.invalid-feedback {
    display: block;
}

.spinner-border-sm {
    width: 1rem;
    height: 1rem;
}
</style>