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
            if (this.imageFile) {
                return URL.createObjectURL(this.imageFile);
            }
            // imagen por defecto
            return "../../../../assets/default-avatar.png";
            }
        },
    async mounted() {
        await this.user.getUsers()
        this.items = this.user.user
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
                    sortable: false, 
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
                    text: "Contrato", 
                    value: "contrato", 
                    sortable: false, 
                    width: 200   // Nueva columna para información del contrato
                },
                { 
                    text: "Estado", 
                    value: "status", 
                    sortable: false, 
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
                peso: 70,        // Valor inicial del slider
                altura: 1.70,    // Valor inicial del slider
                direccion: "",
                enabled: true,
                observaciones: ""
            },
            imageFile: null,
            userToDelete: null,
            isSubmitting: false,
            formErrors: {},
            isSubmittingAssistance: false,
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

        // VALIDACIONES MEJORADAS PARA SLIDERS
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

            // PESO - VALIDACIÓN ACTUALIZADA PARA SLIDER (0-250kg)
            if (!this.createForm.peso || this.createForm.peso <= 0) {
                this.formErrors.peso = 'El peso es requerido y debe ser mayor a 0';
                isValid = false;
            } else if (this.createForm.peso < 10) {
                this.formErrors.peso = 'El peso mínimo es 10 kg';
                isValid = false;
            } else if (this.createForm.peso > 250) {
                this.formErrors.peso = 'El peso máximo es 250 kg';
                isValid = false;
            }

            // ALTURA - VALIDACIÓN ACTUALIZADA PARA SLIDER (0-2.5m)
            if (!this.createForm.altura || this.createForm.altura <= 0) {
                this.formErrors.altura = 'La altura es requerida y debe ser mayor a 0';
                isValid = false;
            } else if (this.createForm.altura < 0.5) {
                this.formErrors.altura = 'La altura mínima es 0.5 metros';
                isValid = false;
            } else if (this.createForm.altura > 2.5) {
                this.formErrors.altura = 'La altura máxima es 2.5 metros';
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
                let response = await this.authStore.register(formData);
                
                // Verificar si la respuesta indica éxito
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
                        `${userPayload.nombre} ${userPayload.apellidos} ha sido agregado al sistema`,
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
            // IMPORTANTE: Limpiar estado anterior primero
            this.userToAssist = null;
            
            // Pequeña pausa para asegurar que el DOM se actualice
            await this.$nextTick();
            
            // Ahora asignar el nuevo usuario
            this.userToAssist = user;
            
            // Log para debug (puedes removerlo después)
            
            // Abrir modal de confirmación
            const modalEl = document.getElementById("assistanceConfirmModal");
            if (modalEl) {
                const modal = new Modal(modalEl);
                modal.show();
            }
        },

        async confirmAssistance(user) {
        if (this.isSubmittingAssistance) return;

        this.isSubmittingAssistance = true;

        try {
            // Mostrar loading
            this.showLoadingAlert(
                'Registrando asistencia...',
                'Procesando la confirmación de asistencia'
            );

            // Llamar al método del store de Pinia
            const response = await this.user.addAssistance(user.username);

            // Verificar si la respuesta indica éxito
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
                this.closeAssistanceModal();

                // Mostrar éxito
                this.showSuccessNotification(
                    '¡Asistencia registrada!',
                    `Se confirmó la asistencia de ${user.nombre} ${user.apellidos}`,
                    'El acceso ha sido agregado al historial'
                );
            } else {
                // Error del servidor
                const errorMessage = response?.message || response?.error || 'Error al registrar la asistencia';
                this.showErrorNotification(
                    'Error al registrar asistencia',
                    errorMessage,
                    'Verifica que el usuario tenga un contrato activo'
                );
            }

        } catch (err) {
            console.error('Error al registrar asistencia:', err);
            
            let errorMessage = 'No se pudo registrar la asistencia. Inténtalo nuevamente.';
            let footerMessage = 'Verifica tu conexión a internet';

            // Manejar diferentes tipos de errores
            if (err.response?.status === 400) {
                errorMessage = 'El usuario no tiene un contrato válido o activo';
                footerMessage = 'Verifica que el usuario tenga accesos disponibles';
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
                'Error al registrar asistencia',
                errorMessage,
                footerMessage
            );
        } finally {
            this.isSubmittingAssistance = false;
        }
    },

    closeAssistanceModal() {
        const modalEl = document.getElementById("assistanceConfirmModal");
        if (modalEl) {
            const modal = Modal.getInstance(modalEl) || new Modal(modalEl);
            modal.hide();
            const backdrop = document.querySelector(".modal-backdrop");
            if (backdrop) backdrop.remove();
            document.body.classList.remove("modal-open");
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("padding-right");
        }
        
        // IMPORTANTE: Limpiar datos después de cerrar
        this.userToAssist = null;
        this.isSubmittingAssistance = false;
    },

    formatDate(dateString) {
        if (!dateString) return 'No especificada';
        
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        } catch (error) {
            return 'Fecha inválida';
        }
    },

    formatDateTime(dateString) {
        if (!dateString) return 'No registrado';
        
        try {
            const date = new Date(dateString);
            return date.toLocaleString('es-ES', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            return 'Fecha inválida';
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
                peso: 70,        // Valor inicial del slider
                altura: 1.70,    // Valor inicial del slider
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

        // MÉTODOS PARA FORMATEAR VALORES DE SLIDERS
        formatSliderValue(value, type) {
            if (type === 'peso') {
                return Math.round(value * 10) / 10; // 1 decimal
            } else if (type === 'altura') {
                return Math.round(value * 100) / 100; // 2 decimales
            }
            return value;
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
            // Establecer el usuario seleccionado en el store
            this.user.selectedUser = user;
            
            // Log para debug
            
            // Navegar al perfil en modo admin
            this.$router.push({ 
                path: '/pages/profile', 
                query: { mode: 'admin' } 
            });
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
                                        
                                        <!-- MODAL ELEGANTE COMPLETO -->
                                        <div class="modal fade" id="exampleModalScrollable2" tabindex="-1"
                                            aria-labelledby="exampleModalScrollable2" data-bs-keyboard="false" aria-hidden="true">
                                            <div class="modal-dialog modal-dialog-centered modal-lg">
                                                <div class="modal-content elegant-modal">
                                                    <!-- HEADER MEJORADO CON GRADIENTE -->
                                                    <div class="modal-header elegant-header">
                                                        <div class="header-content">
                                                            <div class="header-icon">
                                                                <i class="ri-user-add-line"></i>
                                                            </div>
                                                            <div class="header-text">
                                                                <h5 class="modal-title mb-0">Agregar Nuevo Cliente</h5>
                                                                <small class="text-white-50">Complete la información del cliente</small>
                                                            </div>
                                                        </div>
                                                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>

                                                    <div class="modal-body elegant-body">
                                                        <div class="container-fluid">
                                                            <div class="row g-4">

                                                                <!-- SECCIÓN DE IMAGEN -->
                                                                <div class="col-12">
                                                                    <div class="image-upload-section">
                                                                        <div class="image-preview-container">
                                                                            <div class="image-preview">
                                                                                <img :src="previewImage" alt="Vista previa" />
                                                                                <div class="image-overlay">
                                                                                    <i class="ri-camera-line"></i>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="upload-controls">
                                                                            <label class="upload-label">
                                                                                <i class="ri-upload-cloud-2-line me-2"></i>
                                                                                Seleccionar imagen
                                                                                <input type="file" 
                                                                                       class="d-none" 
                                                                                       accept="image/*"
                                                                                       @change="handleFileChange">
                                                                            </label>
                                                                            <small class="text-muted">JPG, PNG o GIF (máx. 5MB)</small>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <!-- INFORMACIÓN PERSONAL -->
                                                                <div class="col-12">
                                                                    <div class="section-divider">
                                                                        <i class="ri-user-line"></i>
                                                                        <span>Información Personal</span>
                                                                    </div>
                                                                </div>

                                                                <!-- EMAIL -->
                                                                <div class="col-12">
                                                                    <div class="elegant-input-group">
                                                                        <label class="elegant-label">
                                                                            <i class="ri-mail-line"></i>
                                                                            Correo Electrónico *
                                                                        </label>
                                                                        <input v-model="createForm.username" 
                                                                               type="email" 
                                                                               :class="`elegant-input ${getErrorClass('username')}`" 
                                                                               placeholder="correo@ejemplo.com">
                                                                        <div v-if="formErrors.username" class="elegant-error">
                                                                            <i class="ri-error-warning-line"></i>
                                                                            {{ formErrors.username }}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <!-- NOMBRE Y APELLIDOS -->
                                                                <div class="col-md-6">
                                                                    <div class="elegant-input-group">
                                                                        <label class="elegant-label">
                                                                            <i class="ri-user-3-line"></i>
                                                                            Nombre *
                                                                        </label>
                                                                        <input v-model="createForm.nombre" 
                                                                               type="text" 
                                                                               :class="`elegant-input ${getErrorClass('nombre')}`" 
                                                                               placeholder="Nombre del cliente">
                                                                        <div v-if="formErrors.nombre" class="elegant-error">
                                                                            <i class="ri-error-warning-line"></i>
                                                                            {{ formErrors.nombre }}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-6">
                                                                    <div class="elegant-input-group">
                                                                        <label class="elegant-label">
                                                                            <i class="ri-user-4-line"></i>
                                                                            Apellidos *
                                                                        </label>
                                                                        <input v-model="createForm.apellidos" 
                                                                               type="text" 
                                                                               :class="`elegant-input ${getErrorClass('apellidos')}`" 
                                                                               placeholder="Apellidos del cliente">
                                                                        <div v-if="formErrors.apellidos" class="elegant-error">
                                                                            <i class="ri-error-warning-line"></i>
                                                                            {{ formErrors.apellidos }}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <!-- DNI -->
                                                                <div class="col-md-6">
                                                                    <div class="elegant-input-group">
                                                                        <label class="elegant-label">
                                                                            <i class="ri-id-card-line"></i>
                                                                            Documento de Identidad *
                                                                        </label>
                                                                        <input v-model="createForm.dni" 
                                                                               type="text" 
                                                                               :class="`elegant-input ${getErrorClass('dni')}`" 
                                                                               placeholder="12345678">
                                                                        <div v-if="formErrors.dni" class="elegant-error">
                                                                            <i class="ri-error-warning-line"></i>
                                                                            {{ formErrors.dni }}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <!-- DIRECCIÓN -->
                                                                <div class="col-md-6">
                                                                    <div class="elegant-input-group">
                                                                        <label class="elegant-label">
                                                                            <i class="ri-map-pin-line"></i>
                                                                            Dirección
                                                                        </label>
                                                                        <input v-model="createForm.direccion" 
                                                                               type="text" 
                                                                               class="elegant-input" 
                                                                               placeholder="Dirección completa">
                                                                    </div>
                                                                </div>

                                                                <!-- DATOS FÍSICOS -->
                                                                <div class="col-12">
                                                                    <div class="section-divider">
                                                                        <i class="ri-heart-pulse-line"></i>
                                                                        <span>Información Física</span>
                                                                    </div>
                                                                </div>

                                                                <!-- PESO CON SLIDER -->
                                                                <div class="col-md-6">
                                                                    <div class="slider-group">
                                                                        <label class="elegant-label">
                                                                            <i class="ri-scales-3-line"></i>
                                                                            Peso: <span class="value-display">{{ createForm.peso || 0 }} kg</span>
                                                                        </label>
                                                                        <div class="slider-container">
                                                                            <input type="range" 
                                                                                   v-model.number="createForm.peso"
                                                                                   min="0" 
                                                                                   max="250" 
                                                                                   step="0.1"
                                                                                   class="elegant-slider peso-slider"
                                                                                   :class="{ 'error': formErrors.peso }">
                                                                            <div class="slider-track">
                                                                                <div class="slider-progress" 
                                                                                     :style="{ width: (createForm.peso / 250 * 100) + '%' }"></div>
                                                                            </div>
                                                                            <div class="slider-labels">
                                                                                <span>0 kg</span>
                                                                                <span>250 kg</span>
                                                                            </div>
                                                                        </div>
                                                                        <div v-if="formErrors.peso" class="elegant-error">
                                                                            <i class="ri-error-warning-line"></i>
                                                                            {{ formErrors.peso }}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <!-- ALTURA CON SLIDER -->
                                                                <div class="col-md-6">
                                                                    <div class="slider-group">
                                                                        <label class="elegant-label">
                                                                            <i class="ri-ruler-line"></i>
                                                                            Altura: <span class="value-display">{{ createForm.altura || 0 }} m</span>
                                                                        </label>
                                                                        <div class="slider-container">
                                                                            <input type="range" 
                                                                                   v-model.number="createForm.altura"
                                                                                   min="0" 
                                                                                   max="2.5" 
                                                                                   step="0.01"
                                                                                   class="elegant-slider altura-slider"
                                                                                   :class="{ 'error': formErrors.altura }">
                                                                            <div class="slider-track">
                                                                                <div class="slider-progress" 
                                                                                     :style="{ width: (createForm.altura / 2.5 * 100) + '%' }"></div>
                                                                            </div>
                                                                            <div class="slider-labels">
                                                                                <span>0.0 m</span>
                                                                                <span>2.5 m</span>
                                                                            </div>
                                                                        </div>
                                                                        <div v-if="formErrors.altura" class="elegant-error">
                                                                            <i class="ri-error-warning-line"></i>
                                                                            {{ formErrors.altura }}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <!-- SEGURIDAD -->
                                                                <div class="col-12">
                                                                    <div class="section-divider">
                                                                        <i class="ri-shield-user-line"></i>
                                                                        <span>Seguridad</span>
                                                                    </div>
                                                                </div>

                                                                <!-- CONTRASEÑAS -->
                                                                <div class="col-md-6">
                                                                    <div class="elegant-input-group">
                                                                        <label class="elegant-label">
                                                                            <i class="ri-lock-line"></i>
                                                                            Contraseña *
                                                                        </label>
                                                                        <div class="password-input-wrapper">
                                                                            <input v-model="createForm.password" 
                                                                                   :type="showPassword ? 'text' : 'password'" 
                                                                                   :class="`elegant-input ${getErrorClass('password')}`"
                                                                                   placeholder="Mínimo 6 caracteres">
                                                                            <button type="button" 
                                                                                    class="password-toggle"
                                                                                    @click="togglePassword('create-password')">
                                                                                <i :class="showPassword ? 'ri-eye-off-line' : 'ri-eye-line'"></i>
                                                                            </button>
                                                                        </div>
                                                                        <div v-if="formErrors.password" class="elegant-error">
                                                                            <i class="ri-error-warning-line"></i>
                                                                            {{ formErrors.password }}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div class="col-md-6">
                                                                    <div class="elegant-input-group">
                                                                        <label class="elegant-label">
                                                                            <i class="ri-lock-2-line"></i>
                                                                            Confirmar Contraseña *
                                                                        </label>
                                                                        <div class="password-input-wrapper">
                                                                            <input v-model="createForm.confirmPassword" 
                                                                                   :type="showConfirmPassword ? 'text' : 'password'" 
                                                                                   :class="`elegant-input ${getErrorClass('confirmPassword')}`"
                                                                                   placeholder="Repetir contraseña">
                                                                            <button type="button" 
                                                                                    class="password-toggle"
                                                                                    @click="togglePassword('create-confirmpassword')">
                                                                                <i :class="showConfirmPassword ? 'ri-eye-off-line' : 'ri-eye-line'"></i>
                                                                            </button>
                                                                        </div>
                                                                        <div v-if="formErrors.confirmPassword" class="elegant-error">
                                                                            <i class="ri-error-warning-line"></i>
                                                                            {{ formErrors.confirmPassword }}
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <!-- OBSERVACIONES -->
                                                                <div class="col-12">
                                                                    <div class="elegant-input-group">
                                                                        <label class="elegant-label">
                                                                            <i class="ri-sticky-note-line"></i>
                                                                            Observaciones
                                                                        </label>
                                                                        <textarea v-model="createForm.observaciones" 
                                                                                  class="elegant-textarea" 
                                                                                  rows="3" 
                                                                                  placeholder="Notas adicionales sobre el cliente (opcional)"></textarea>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                    <!-- FOOTER MEJORADO -->
                                                    <div class="modal-footer elegant-footer">
                                                        <button type="button" class="btn elegant-btn-secondary" data-bs-dismiss="modal">
                                                            <i class="ri-close-line me-2"></i>
                                                            Cancelar
                                                        </button>
                                                        <button type="button" 
                                                                class="btn elegant-btn-primary"  
                                                                @click.prevent="submit"
                                                                :disabled="isSubmitting">
                                                            <span v-if="isSubmitting" class="spinner-border spinner-border-sm me-2"></span>
                                                            <i v-else class="ri-user-add-line me-2"></i>
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
                
                />
            </div>
        </div>
    </div>
    <!-- MODAL DE CONFIRMACIÓN DE ASISTENCIA -->
<div class="modal fade" id="assistanceConfirmModal" tabindex="-1" aria-labelledby="assistanceConfirmModalLabel" data-bs-keyboard="false" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content elegant-modal">
            <!-- HEADER -->
            <div class="modal-header elegant-header">
                <div class="header-content">
                    <div class="header-icon">
                        <i class="ri-checkbox-circle-line"></i>
                    </div>
                    <div class="header-text">
                        <h5 class="modal-title mb-0">Confirmar Asistencia</h5>
                        <small class="text-white-50">Registrar acceso al gimnasio</small>
                    </div>
                </div>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body elegant-body">
                <div class="container-fluid" v-if="userToAssist">
                    <!-- INFORMACIÓN DEL CLIENTE -->
                    <div class="client-info-card">
                        <div class="client-avatar">
                            <img :src="userToAssist.imagen || '../../../../assets/default-avatar.png'" :alt="userToAssist.nombre">
                        </div>
                        <div class="client-details">
                            <h4 class="client-name">{{ userToAssist.nombre }} {{ userToAssist.apellidos }}</h4>
                            <p class="client-email">{{ userToAssist.username }}</p>
                            <span class="client-status" :class="userToAssist.enabled ? 'status-active' : 'status-inactive'">
                                <i :class="userToAssist.enabled ? 'ri-check-line' : 'ri-close-line'"></i>
                                {{ userToAssist.enabled ? 'Activo' : 'Inactivo' }}
                            </span>
                        </div>
                    </div>

                    <!-- CASO: USUARIO CON CONTRATO -->
                    <div v-if="userToAssist.contrato" class="contract-info">
                        <div class="section-divider">
                            <i class="ri-file-text-line"></i>
                            <span>Información del Contrato</span>
                        </div>
                        
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="info-item">
                                    <label class="info-label">
                                        <i class="ri-calendar-line"></i>
                                        Tipo de Contrato
                                    </label>
                                    <div class="info-value">
                                        {{ userToAssist.contrato.tipoContrato || 'No especificado' }}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="info-item">
                                    <label class="info-label">
                                        <i class="ri-time-line"></i>
                                        Accesos Actuales
                                    </label>
                                    <div class="info-value accent">
                                        {{ userToAssist.contrato.accesos || 0 }} accesos
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="info-item">
                                    <label class="info-label">
                                        <i class="ri-calendar-check-line"></i>
                                        Fecha de Inicio
                                    </label>
                                    <div class="info-value">
                                        {{ formatDate(userToAssist.contrato.fechaInicio) }}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="info-item">
                                    <label class="info-label">
                                        <i class="ri-calendar-close-line"></i>
                                        Fecha de Fin
                                    </label>
                                    <div class="info-value">
                                        {{ formatDate(userToAssist.contrato.fechaFin) }}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="info-item">
                                    <label class="info-label">
                                        <i class="ri-history-line"></i>
                                        Último Acceso
                                    </label>
                                    <div class="info-value">
                                        {{ formatDateTime(userToAssist.contrato.ultimoAcceso) }}
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-6">
                                <div class="info-item">
                                    <label class="info-label">
                                        <i class="ri-add-circle-line"></i>
                                        Accesos Después
                                    </label>
                                    <div class="info-value success">
                                        {{ (userToAssist.contrato.accesos || 0) + 1 }} accesos
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-md-12">
                                <div class="info-item">
                                    <label class="info-label">
                                        <i class="ri-calendar-2-line"></i>
                                        Sesiones del Plan
                                    </label>
                                    <div class="info-value">
                                        {{ userToAssist.contrato.sesiones || 0 }} sesiones
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CASO: USUARIO SIN CONTRATO -->
                    <div v-else class="no-contract-warning">
                        <div class="warning-content">
                            <i class="ri-error-warning-line"></i>
                            <div>
                                <h6>Cliente sin contrato activo</h6>
                                <p>Este cliente no tiene un contrato registrado en el sistema.</p>
                                <p class="mb-0">No se puede registrar asistencia hasta que se le asigne un plan.</p>
                            </div>
                        </div>
                    </div>

                    <!-- CONFIRMACIÓN - SOLO SI TIENE CONTRATO -->
                    <div v-if="userToAssist.contrato" class="confirmation-section">
                        <div class="confirmation-message">
                            <i class="ri-question-line"></i>
                            <div>
                                <h6>¿Confirmar registro de asistencia?</h6>
                                <p>Se agregará 1 acceso al historial de <strong>{{ userToAssist.nombre }} {{ userToAssist.apellidos }}</strong></p>
                                <p class="mb-0">Los accesos pasarán de <strong>{{ userToAssist.contrato.accesos }}</strong> a <strong>{{ userToAssist.contrato.accesos + 1 }}</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- FOOTER -->
            <div class="modal-footer elegant-footer">
                <button type="button" class="btn elegant-btn-secondary" data-bs-dismiss="modal">
                    <i class="ri-close-line me-2"></i>
                    {{ userToAssist?.contrato ? 'Cancelar' : 'Cerrar' }}
                </button>
                
                <!-- BOTÓN ACTIVO - SOLO SI TIENE CONTRATO -->
                <button type="button" 
                        class="btn btn-custom"  
                        @click="confirmAssistance(userToAssist)"
                        :disabled="isSubmittingAssistance"
                        v-if="userToAssist?.contrato">
                    <span v-if="isSubmittingAssistance" class="spinner-border spinner-border-sm me-2"></span>
                    <i v-else class="ri-checkbox-circle-line me-2"></i>
                    {{ isSubmittingAssistance ? 'Registrando...' : 'Confirmar Asistencia' }}
                </button>
                
                <!-- BOTÓN BLOQUEADO - SOLO SI NO TIENE CONTRATO -->
                <button type="button" 
                        class="btn elegant-btn-disabled"
                        disabled
                        v-else-if="userToAssist">
                    <i class="ri-close-circle-line me-2"></i>
                    Sin Contrato Activo
                </button>
            </div>
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

/* ESTILOS ELEGANTES PARA EL MODAL */
.elegant-modal {
    border: none;
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    overflow: hidden;
}

/* HEADER CON GRADIENTE */
.elegant-header {
    background: linear-gradient(135deg, #111c43 0%, rgb(0, 109, 254) 100%);
    border: none;
    padding: 2rem;
    position: relative;
}

.elegant-header::before {
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
    gap: 1rem;
    position: relative;
    z-index: 1;
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

.header-text h5 {
    color: white;
    font-weight: 600;
    font-size: 1.5rem;
}

/* BODY ELEGANTE */
.elegant-body {
    padding: 2rem;
    background: linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%);
}

/* SECCIÓN DIVISORES */
.section-divider {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
    color: #475569;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e2e8f0;
}

.section-divider i {
    font-size: 1.2rem;
    color: #111c43;
}

/* UPLOAD DE IMAGEN */
.image-upload-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.image-preview-container {
    position: relative;
}

.image-preview {
    width: 120px;
    height: 120px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.image-preview img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.image-preview:hover .image-overlay {
    opacity: 1;
}

.image-overlay i {
    color: white;
    font-size: 1.5rem;
}

.upload-label {
    background: linear-gradient(135deg, #111c43 0%, rgb(0, 109, 254) 100%);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    border: none;
    transition: transform 0.2s ease;
}

.upload-label:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.25);
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

.elegant-input.is-invalid {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

/* PASSWORDS */
.password-input-wrapper {
    position: relative;
}

.password-toggle {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #6b7280;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    transition: all 0.2s ease;
}

.password-toggle:hover {
    background: #f3f4f6;
    color: #374151;
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

.elegant-slider::-webkit-slider-thumb:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}

.elegant-slider::-moz-range-thumb {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: linear-gradient(135deg, #111c43 0%, rgb(0, 109, 254) 100%);
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    border: none;
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

/* ERRORES ELEGANTES */
.elegant-error {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #ef4444;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    padding: 0.5rem;
    background: rgba(239, 68, 68, 0.05);
    border-radius: 8px;
    border-left: 3px solid #ef4444;
}

/* FOOTER ELEGANTE */
.elegant-footer {
    padding: 1.5rem 2rem;
    background: white;
    border-top: 1px solid #e2e8f0;
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

.elegant-btn-secondary:hover {
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

.elegant-btn-primary:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.btn-custom{
    background: linear-gradient(135deg, #111c43 0%, rgb(0, 109, 254) 100%);
    border: none;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    font-weight: 500;
    transition: all 0.2s ease;
}

/* RESPONSIVE */
@media (max-width: 768px) {
    .elegant-header {
        padding: 1.5rem;
    }
    
    .elegant-body {
        padding: 1.5rem;
    }
    
    .header-content {
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
    }
    
    .elegant-footer {
        flex-direction: column-reverse;
    }
    
    .elegant-btn-secondary,
    .elegant-btn-primary {
        width: 100%;
        justify-content: center;
    }
}

.client-info-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    padding: 1.5rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    margin-bottom: 1.5rem;
    border-left: 4px solid #111c43;
}

.client-avatar {
    flex-shrink: 0;
}

.client-avatar img {
    width: 80px;
    height: 80px;
    border-radius: 15px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.client-details {
    flex: 1;
}

.client-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: #1f2937;
    margin-bottom: 0.25rem;
}

.client-email {
    color: #6b7280;
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

.client-status {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
}

.status-active {
    background: rgba(34, 197, 94, 0.1);
    color: #16a34a;
}

.status-inactive {
    background: rgba(239, 68, 68, 0.1);
    color: #dc2626;
}

/* INFORMACIÓN DEL CONTRATO */
.contract-info {
    background: white;
    border-radius: 15px;
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    margin-bottom: 1.5rem;
}

/* AVISO DE SIN CONTRATO */
.no-contract-warning {
    background: linear-gradient(135deg, #fef2f2, #fee2e2);
    border-radius: 15px;
    padding: 2rem;
    border-left: 4px solid #ef4444;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(239, 68, 68, 0.2);
}

.warning-content {
    display: flex;
    align-items: flex-start;
    gap: 1.5rem;
}

.warning-content i {
    font-size: 2rem;
    color: #dc2626;
    margin-top: 0.25rem;
    flex-shrink: 0;
    background: rgba(239, 68, 68, 0.1);
    padding: 0.75rem;
    border-radius: 50%;
}

.warning-content h6 {
    font-size: 1.25rem;
    font-weight: 600;
    color: #991b1b;
    margin-bottom: 0.75rem;
}

.warning-content p {
    color: #b91c1c;
    margin-bottom: 0.5rem;
    line-height: 1.5;
    font-size: 1rem;
}

/* BOTÓN DESHABILITADO MEJORADO */
.elegant-btn-disabled {
    background: linear-gradient(135deg, #f1f5f9, #e2e8f0);
    border: 2px solid #cbd5e1;
    color: #64748b;
    padding: 0.75rem 2rem;
    border-radius: 12px;
    font-weight: 500;
    cursor: not-allowed;
    opacity: 0.8;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* RESPONSIVE PARA AVISO */
@media (max-width: 768px) {
    .warning-content {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .warning-content i {
        align-self: center;
        font-size: 1.75rem;
        padding: 0.5rem;
    }
    
    .no-contract-warning {
        padding: 1.5rem;
    }
}
</style>