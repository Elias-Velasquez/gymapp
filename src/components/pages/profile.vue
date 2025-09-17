<template>
    <!-- <PageHeader :propData="dataToPass" /> -->

    <!-- Start::row-1 -->
    <div class="row mt-4">
        <!-- COLUMNA PRINCIPAL DEL PERFIL -->
        <div class="col-xxl-8 col-xl-12">
            <div class="card elegant-profile-card">
                <!-- HEADER DEL PERFIL -->
                <div class="card-header elegant-profile-header">
                    <div class="profile-cover-content">
                        <div class="user-info">
                            <div class="user-avatar">
                                <img :src="userProfile?.imagen || '/assets/default-avatar.png'" :alt="userProfile?.nombre">
                                <div class="status-indicator" :class="userProfile?.enabled ? 'online' : 'offline'"></div>
                            </div>
                            <div class="user-details">
                                <h3 class="user-name text-white">{{ userProfile?.nombre }} {{ userProfile?.apellidos }}</h3>
                                <p class="user-email">{{ userProfile?.username }}</p>
                                <div class="user-meta">
                                    <span class="meta-item">
                                        <i class="ri-id-card-line"></i>
                                        {{ userProfile?.dni }}
                                    </span>
                                    <span class="meta-item">
                                        <i class="ri-map-pin-line"></i>
                                        {{ userProfile?.direccion || 'Sin dirección' }}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="profile-actions">
                            <button 
                                class="btn elegant-btn-light"
                                @click="$router.push(mode === 'self' 
                                    ? { path: '/pages/edit-profile' } 
                                    : { path: '/pages/edit-profile', query: { mode: 'admin' } })"
                            >
                                <i class="ri-edit-line me-2"></i>
                                Editar Perfil
                            </button>
                        </div>
                    </div>
                </div>

                <!-- ESTADÍSTICAS DEL USUARIO -->
                <div class="card-body p-0">
                    <div class="profile-stats">
                        <div class="stat-item">
                            <div class="stat-icon peso">
                                <i class="ri-scales-3-line"></i>
                            </div>
                            <div class="stat-info">
                                <h4>{{ userProfile?.peso }} kg</h4>
                                <p>Peso actual</p>
                            </div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-icon altura">
                                <i class="ri-ruler-line"></i>
                            </div>
                            <div class="stat-info">
                                <h4>{{ userProfile?.altura }} m</h4>
                                <p>Altura</p>
                            </div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-icon accesos">
                                <i class="ri-door-open-line"></i>
                            </div>
                            <div class="stat-info">
                                <h4>{{ userProfile?.contrato?.accesos || 0 }}</h4>
                                <p>Accesos totales</p>
                            </div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-icon sesiones">
                                <i class="ri-calendar-check-line"></i>
                            </div>
                            <div class="stat-info">
                                <h4>{{ userProfile?.contrato?.sesiones || 0 }}</h4>
                                <p>Sesiones</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- COLUMNA DE INFORMACIÓN ADICIONAL -->
        <div class="col-xxl-4 col-xl-12">
            <!-- INFORMACIÓN DEL CONTRATO -->
            <div class="card elegant-info-card">
                <div class="card-header elegant-card-header">
                    <div class="header-title">
                        <i class="ri-file-text-line"></i>
                        <span>Contrato Actual</span>
                    </div>
                    <button 
                        class="btn elegant-btn-primary-sm"
                        @click="openContractModal"
                        data-bs-toggle="modal"
                        data-bs-target="#contractModal"
                    >
                        <i class="ri-add-line me-1"></i>
                        Agregar
                    </button>
                </div>
                <div class="card-body">
                    <div v-if="userProfile?.contrato" class="contract-details">
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="ri-bookmark-line"></i>
                                Tipo
                            </div>
                            <div class="detail-value">{{ userProfile.contrato.tipoContrato }}</div>
                        </div>
                        
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="ri-calendar-check-line"></i>
                                Inicio
                            </div>
                            <div class="detail-value">{{ formatDate(userProfile.contrato.fechaInicio) }}</div>
                        </div>
                        
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="ri-calendar-close-line"></i>
                                Fin
                            </div>
                            <div class="detail-value">{{ formatDate(userProfile.contrato.fechaFin) }}</div>
                        </div>
                        
                        <div class="detail-row">
                            <div class="detail-label">
                                <i class="ri-time-line"></i>
                                Último acceso
                            </div>
                            <div class="detail-value">{{ formatDateTime(userProfile.contrato.ultimoAcceso) }}</div>
                        </div>
                    </div>
                    
                    <div v-else class="no-contract">
                        <i class="ri-file-forbid-line"></i>
                        <p>Sin contrato activo</p>
                        <small>Agrega un contrato para comenzar</small>
                    </div>
                </div>
            </div>

            <!-- OBSERVACIONES -->
            <!-- <div class="card elegant-info-card" v-if="userProfile?.observaciones">
                <div class="card-header elegant-card-header">
                    <div class="header-title">
                        <i class="ri-sticky-note-line"></i>
                        <span>Observaciones</span>
                    </div>
                </div>
                <div class="card-body">
                    <p class="observations-text">{{ userProfile.observaciones }}</p>
                </div>
            </div> -->

            <!-- INFORMACIÓN ADICIONAL -->
        </div>
        <div class="card elegant-info-card">
            <div class="card-header elegant-card-header">
                <div class="header-title">
                    <i class="ri-information-line"></i>
                    <span>Información del Sistema</span>
                </div>
            </div>
            <div class="card-body">
                <div class="detail-row">
                    <div class="detail-label">
                        <i class="ri-calendar-line"></i>
                        Registro
                    </div>
                    <div class="detail-value">{{ formatDate(userProfile?.createdAt) }}</div>
                </div>
                
                <div class="detail-row">
                    <div class="detail-label">
                        <i class="ri-time-line"></i>
                        Último login
                    </div>
                    <div class="detail-value">{{ formatDateTime(userProfile?.last_login) }}</div>
                </div>
                
                <div class="detail-row" v-if="mode === 'self' && userProfile?.roles?.[0]">
                    <div class="detail-label">
                        <i class="ri-shield-user-line"></i>
                        Rol
                    </div>
                    <div class="detail-value">{{ userProfile.roles[0].name }}</div>
                </div>
            </div>
        </div>



            <div class="card elegant-info-card" v-if="userProfile?.sesiones && userProfile.sesiones.length > 0">
                <div class="card-header elegant-card-header">
                    <div class="header-title">
                        <i class="ri-calendar-check-line"></i>
                        <span>Últimas Sesiones</span>
                    </div>
                    <span class="badge bg-primary">{{ userProfile.sesiones.length }}</span>
                </div>
                <div class="card-body">
                    <div class="sessions-list">
                        <div 
                            v-for="(sesion, index) in getLastThreeItems(userProfile.sesiones)" 
                            :key="sesion.id"
                            class="session-item"
                            :class="{ 'border-bottom': index < Math.min(userProfile.sesiones.length, 3) - 1 }"
                        >
                            <div class="session-info">
                                <div class="session-icon">
                                    <i class="ri-calendar-event-line"></i>
                                </div>
                                <div class="session-details">
                                    <div class="session-date">{{ formatDate(sesion.fecha) }}</div>
                                    <div class="session-time">{{ formatTime(sesion.fecha) }}</div>
                                </div>
                            </div>
                            <div class="session-id">
                                #{{ sesion.id }}
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="userProfile.sesiones.length > 1" class="show-more-sessions">
                        <button 
                            type="button" 
                            class="btn btn-outline-primary btn-sm"
                            @click="openSessionsModal"
                            data-bs-toggle="modal"
                            data-bs-target="#sessionsModal"
                        >
                            <i class="ri-eye-line me-1"></i>
                            Ver todas las sesiones ({{ userProfile.sesiones.length }})
                        </button>
                    </div>
                </div>
            </div>

            <!-- ÚLTIMOS PAGOS -->
            <div class="card elegant-info-card" v-if="userProfile?.pagos && userProfile.pagos.length > 0">
                <div class="card-header elegant-card-header">
                    <div class="header-title">
                        <i class="ri-money-dollar-circle-line"></i>
                        <span>Últimos Pagos</span>
                    </div>
                    <span class="badge bg-success">{{ userProfile.pagos.length }}</span>
                </div>
                <div class="card-body">
                    <div class="payments-list">
                        <div 
                            v-for="(pago, index) in getLastThreeItems(userProfile.pagos)" 
                            :key="pago.id"
                            class="payment-item"
                            :class="{ 'border-bottom': index < Math.min(userProfile.pagos.length, 3) - 1 }"
                        >
                            <div class="payment-info">
                                <div class="payment-icon">
                                    <i class="ri-secure-payment-line"></i>
                                </div>
                                <div class="payment-details">
                                    <div class="payment-date">{{ formatDate(pago.fecha) }}</div>
                                    <div class="payment-time">{{ formatTime(pago.fecha) }}</div>
                                </div>
                            </div>
                            <div class="payment-amount">
                                <span class="amount">{{ formatCurrency(pago.cantidad) }}</span>
                                <small class="payment-id">#{{ pago.id }}</small>
                            </div>
                        </div>
                    </div>
                    
                    <div v-if="userProfile.pagos.length > 1" class="show-more-payments">
                        <button 
                            type="button" 
                            class="btn btn-outline-success btn-sm"
                            @click="openPaymentsModal"
                            data-bs-toggle="modal"
                            data-bs-target="#paymentsModal"
                        >
                            <i class="ri-eye-line me-1"></i>
                            Ver todos los pagos ({{ userProfile.pagos.length }})
                        </button>
                    </div>
                </div>
            </div>

            <!-- CARDS DE PLACEHOLDER CUANDO NO HAY DATOS -->
            <!-- Sin Sesiones -->
            <div class="card elegant-info-card" v-if="!userProfile?.sesiones || userProfile.sesiones.length === 0">
                <div class="card-header elegant-card-header">
                    <div class="header-title">
                        <i class="ri-calendar-check-line"></i>
                        <span>Sesiones</span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="no-data">
                        <i class="ri-calendar-close-line"></i>
                        <p>Sin sesiones registradas</p>
                        <small>Las sesiones aparecerán aquí cuando se registren</small>
                    </div>
                </div>
            </div>

            <!-- Sin Pagos -->
            <div class="card elegant-info-card" v-if="!userProfile?.pagos || userProfile.pagos.length === 0">
                <div class="card-header elegant-card-header">
                    <div class="header-title">
                        <i class="ri-money-dollar-circle-line"></i>
                        <span>Pagos</span>
                    </div>
                </div>
                <div class="card-body">
                    <div class="no-data">
                        <i class="ri-money-dollar-circle-line"></i>
                        <p>Sin pagos registrados</p>
                        <small>Los pagos aparecerán aquí cuando se registren</small>
                    </div>
                </div>
            </div>
    </div>

    <div class="modal fade" id="sessionsModal" tabindex="-1" aria-labelledby="sessionsModalLabel" data-bs-keyboard="false" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content elegant-modal">
                <!-- HEADER -->
                <div class="modal-header elegant-header">
                    <div class="header-content">
                        <div class="header-icon">
                            <i class="ri-calendar-check-line"></i>
                        </div>
                        <div class="header-text">
                            <h5 class="modal-title mb-0">Todas las Sesiones</h5>
                            <small class="text-white-50">{{ userProfile?.nombre }} {{ userProfile?.apellidos }} - {{ userProfile?.sesiones?.length || 0 }} sesiones registradas</small>
                        </div>
                    </div>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body elegant-body p-0">
                    <!-- Usar el componente DataTable reutilizable -->
                    <DatatableVue
                        :title="''"
                        :headers="sessionsHeaders"
                        :items="sessionsTableData"
                        :tableType="'sessions'"
                        :dataToPass="{}"
                        @view="handleSessionView"
                        @edit="handleSessionEdit"
                        @delete="handleSessionDelete"
                    />
                </div>

                <div class="modal-footer elegant-footer">
                    <button type="button" class="btn elegant-btn-secondary" data-bs-dismiss="modal">
                        <i class="ri-close-line me-2"></i>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- MODAL PARA VER TODOS LOS PAGOS -->
    <div class="modal fade" id="paymentsModal" tabindex="-1" aria-labelledby="paymentsModalLabel" data-bs-keyboard="false" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content elegant-modal">
                <!-- HEADER -->
                <div class="modal-header elegant-header">
                    <div class="header-content">
                        <div class="header-icon">
                            <i class="ri-money-dollar-circle-line"></i>
                        </div>
                        <div class="header-text">
                            <h5 class="modal-title mb-0">Todos los Pagos</h5>
                            <small class="text-white-50">{{ userProfile?.nombre }} {{ userProfile?.apellidos }} - {{ userProfile?.pagos?.length || 0 }} pagos registrados</small>
                        </div>
                    </div>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body elegant-body p-0">
                    <!-- Usar el componente DataTable reutilizable -->
                    <DatatableVue
                        :title="''"
                        :headers="paymentsHeaders"
                        :items="paymentsTableData"
                        :tableType="'payments'"
                        :dataToPass="{}"
                        @view="handlePaymentView"
                        @edit="handlePaymentEdit"
                        @delete="handlePaymentDelete"
                    />
                </div>

                <div class="modal-footer elegant-footer">
                    <button type="button" class="btn elegant-btn-secondary" data-bs-dismiss="modal">
                        <i class="ri-close-line me-2"></i>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- MODAL PARA AGREGAR CONTRATO -->
    <div class="modal fade" id="contractModal" tabindex="-1" aria-labelledby="contractModalLabel" data-bs-keyboard="false" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content elegant-modal">
                <!-- HEADER -->
                <div class="modal-header elegant-header">
                    <div class="header-content">
                        <div class="header-icon">
                            <i class="ri-file-add-line"></i>
                        </div>
                        <div class="header-text">
                            <h5 class="modal-title mb-0">Agregar Nuevo Contrato</h5>
                            <small class="text-white-50">Para {{ userProfile?.nombre }} {{ userProfile?.apellidos }}</small>
                        </div>
                    </div>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body elegant-body">
                    <div class="container-fluid">
                        <div class="row g-4">
                            
                            <!-- TIPO DE CONTRATO -->
                            <div class="col-12">
                                <div class="elegant-input-group">
                                    <label class="elegant-label">
                                        <i class="ri-bookmark-line"></i>
                                        Tipo de Contrato *
                                    </label>
                                    <select 
                                        v-model="contractForm.tipoContratoId" 
                                        :class="`elegant-input ${getContractErrorClass('tipoContratoId')}`"
                                        :disabled="loadingContractTypes || isSubmittingContract"
                                    >
                                        <option value="">Selecciona un tipo de contrato</option>
                                        <option 
                                            v-for="tipo in contractTypes" 
                                            :key="tipo.id" 
                                            :value="tipo.id"
                                        >
                                            {{ tipo.label }}
                                        </option>
                                    </select>
                                    <div v-if="contractFormErrors.tipoContratoId" class="elegant-error">
                                        <i class="ri-error-warning-line"></i>
                                        {{ contractFormErrors.tipoContratoId }}
                                    </div>
                                </div>
                            </div>

                            <!-- FECHAS -->
                            <div class="col-md-6">
                                <div class="elegant-input-group">
                                    <label class="elegant-label">
                                        <i class="ri-calendar-check-line"></i>
                                        Fecha de Inicio *
                                    </label>
                                    <input 
                                        type="date" 
                                        v-model="contractForm.fechaInicio"
                                        :class="`elegant-input ${getContractErrorClass('fechaInicio')}`"
                                        :disabled="isSubmittingContract"
                                    >
                                    <div v-if="contractFormErrors.fechaInicio" class="elegant-error">
                                        <i class="ri-error-warning-line"></i>
                                        {{ contractFormErrors.fechaInicio }}
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="elegant-input-group">
                                    <label class="elegant-label">
                                        <i class="ri-calendar-close-line"></i>
                                        Fecha de Fin *
                                    </label>
                                    <input 
                                        type="date" 
                                        v-model="contractForm.fechaFin"
                                        :class="`elegant-input ${getContractErrorClass('fechaFin')}`"
                                        :disabled="isSubmittingContract"
                                    >
                                    <div v-if="contractFormErrors.fechaFin" class="elegant-error">
                                        <i class="ri-error-warning-line"></i>
                                        {{ contractFormErrors.fechaFin }}
                                    </div>
                                </div>
                            </div>

                            <!-- ACCESOS Y SESIONES -->
                            <div class="col-md-6">
                                <div class="elegant-input-group">
                                    <label class="elegant-label">
                                        <i class="ri-door-open-line"></i>
                                        Accesos *
                                    </label>
                                    <input 
                                        type="number" 
                                        v-model.number="contractForm.accesos"
                                        :class="`elegant-input ${getContractErrorClass('accesos')}`"
                                        placeholder="Número de accesos"
                                        min="1"
                                        :disabled="isSubmittingContract"
                                    >
                                    <div v-if="contractFormErrors.accesos" class="elegant-error">
                                        <i class="ri-error-warning-line"></i>
                                        {{ contractFormErrors.accesos }}
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="elegant-input-group">
                                    <label class="elegant-label">
                                        <i class="ri-calendar-check-line"></i>
                                        Sesiones *
                                    </label>
                                    <input 
                                        type="number" 
                                        v-model.number="contractForm.sesiones"
                                        :class="`elegant-input ${getContractErrorClass('sesiones')}`"
                                        placeholder="Número de sesiones"
                                        min="1"
                                        :disabled="isSubmittingContract"
                                    >
                                    <div v-if="contractFormErrors.sesiones" class="elegant-error">
                                        <i class="ri-error-warning-line"></i>
                                        {{ contractFormErrors.sesiones }}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <!-- FOOTER -->
                <div class="modal-footer elegant-footer">
                    <button type="button" class="btn elegant-btn-secondary" data-bs-dismiss="modal">
                        <i class="ri-close-line me-2"></i>
                        Cancelar
                    </button>
                    <button 
                        type="button" 
                        class="btn btn-custom"  
                        @click="submitContract"
                        :disabled="isSubmittingContract"
                    >
                        <span v-if="isSubmittingContract" class="spinner-border spinner-border-sm me-2"></span>
                        <i v-else class="ri-file-add-line me-2"></i>
                        {{ isSubmittingContract ? 'Creando...' : 'Crear Contrato' }}
                    </button>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import { useAuthStore } from '../../stores/auth.js';
import { useUserStore } from '../../stores/users';
import { Modal } from "bootstrap";
import axios from "axios";
import DatatableVue from '../tables/datatable/datatable.vue';

// Importar SweetAlert2
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default {
    components: {
        PageHeader,
        DatatableVue
    },
    data() {
        return {
            mode: 'self',
            userProfile: {
                username: '',
                roles: [],
                direccion: '',
                peso: '',
                altura: '',
                last_login: '',
                contrato: {},
                pagos:[],
                sesiones: []
            },
            dataToPass: {
                current: "Perfil",
            },
            contractTypes: [],
            loadingContractTypes: false,
            isSubmittingContract: false,
            contractForm: {
                tipoContratoId: '',
                fechaInicio: '',
                fechaFin: '',
                accesos: 1,
                sesiones: 1,
                estadoContratoId: 1
            },
            contractFormErrors: {},
            sessionsHeaders: [
                { text: "Fecha y Hora", value: "fecha", sortable: true, width: 200 },
                { text: "Día de la Semana", value: "diaSemana", sortable: false, width: 150 },
                { text: "Hace", value: "tiempoTranscurrido", sortable: false, width: 120 },
                { text: "Acciones", value: "actions", sortable: false, width: 120 }
            ],

            // Headers para la tabla de pagos
            paymentsHeaders: [
                { text: "Fecha y Hora", value: "fecha", sortable: true, width: 200 },
                { text: "Cantidad", value: "cantidad", sortable: true, width: 120 },
                { text: "Día de la Semana", value: "diaSemana", sortable: false, width: 150 },
                { text: "Hace", value: "tiempoTranscurrido", sortable: false, width: 120 },
                { text: "Acciones", value: "actions", sortable: false, width: 120 }
            ]
        };
    },
    computed: {
        authStore() {
            return useAuthStore();
        },
        userStore() {
            return useUserStore();
        },
        sessionsTableData() {
        if (!this.userProfile?.sesiones) return [];
        
        return this.userProfile.sesiones
            .slice()
            .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
            .map(sesion => ({
                id: sesion.id,
                fecha: this.formatDateTimeComplete(sesion.fecha),
                diaSemana: this.getDayOfWeek(sesion.fecha),
                tiempoTranscurrido: this.getTimeAgo(sesion.fecha),
                // Datos originales para usar en acciones
                originalData: sesion
            }));
        },

        // Datos procesados para la tabla de pagos
        paymentsTableData() {
            if (!this.userProfile?.pagos) return [];
            
            return this.userProfile.pagos
                .slice()
                .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                .map(pago => ({
                    id: pago.id,
                    fecha: this.formatDateTimeComplete(pago.fecha),
                    cantidad: this.formatCurrency(pago.cantidad),
                    diaSemana: this.getDayOfWeek(pago.fecha),
                    tiempoTranscurrido: this.getTimeAgo(pago.fecha),
                    // Datos originales para usar en acciones
                    originalData: pago
                }));
        }
    },
    async mounted() {
        await this.authStore.loadFromStorage();
        
        // Obtener el modo desde la query
        this.mode = this.$route.query.mode || 'self';

        if (this.mode === 'admin') {
            // Modo admin: intentar usar el usuario seleccionado
            if (this.userStore.selectedUser) {
                this.userProfile = this.userStore.selectedUser;
            } else {
                // Si no hay usuario seleccionado, redirigir a la tabla de usuarios
                console.warn('No selected user found, redirecting to users table');
                this.$router.push('/pages/users');
                return;
            }
        } else {
            // Modo self: usar datos del usuario autenticado
            this.userProfile = this.authStore.userData 
                || (localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null);
        }

        // Verificar que tenemos datos válidos
        if (!this.userProfile) {
            console.error('No user profile data available');
            this.$router.push('/pages/users');
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

        // MÉTODO PARA ABRIR MODAL DE CONTRATO
        async openContractModal() {
            await this.fetchContractTypes();
            this.resetContractForm();
        },

        // OBTENER TIPOS DE CONTRATO
        async fetchContractTypes() {
            if (this.contractTypes.length > 0) return; // Ya los tenemos
            const token = localStorage.getItem('token')
            this.loadingContractTypes = true;
            try {
                const response = await axios.get('http://69.62.111.126:8080/api/contratos/tipos_contrato', {
                    headers: {
                    Authorization: `Bearer ${token}`
                    }
                });
                this.contractTypes = response.data;
            } catch (error) {
                console.error('Error fetching contract types:', error);
                this.showErrorNotification(
                    'Error al cargar tipos de contrato',
                    'No se pudieron obtener los tipos de contrato disponibles',
                    'Inténtalo nuevamente'
                );
            } finally {
                this.loadingContractTypes = false;
            }
        },

        // VALIDAR FORMULARIO DE CONTRATO
        validateContractForm() {
            this.contractFormErrors = {};
            let isValid = true;

            // Tipo de contrato
            if (!this.contractForm.tipoContratoId) {
                this.contractFormErrors.tipoContratoId = 'Selecciona un tipo de contrato';
                isValid = false;
            }

            // Fecha de inicio
            if (!this.contractForm.fechaInicio) {
                this.contractFormErrors.fechaInicio = 'La fecha de inicio es requerida';
                isValid = false;
            }

            // Fecha de fin
            if (!this.contractForm.fechaFin) {
                this.contractFormErrors.fechaFin = 'La fecha de fin es requerida';
                isValid = false;
            } else if (this.contractForm.fechaInicio && this.contractForm.fechaFin <= this.contractForm.fechaInicio) {
                this.contractFormErrors.fechaFin = 'La fecha de fin debe ser posterior a la de inicio';
                isValid = false;
            }

            // Accesos
            if (!this.contractForm.accesos || this.contractForm.accesos < 1) {
                this.contractFormErrors.accesos = 'Debe tener al menos 1 acceso';
                isValid = false;
            }

            // Sesiones
            if (!this.contractForm.sesiones || this.contractForm.sesiones < 1) {
                this.contractFormErrors.sesiones = 'Debe tener al menos 1 sesión';
                isValid = false;
            }

            return isValid;
        },

        // ENVIAR CONTRATO
        async submitContract() {
            if (this.isSubmittingContract) return;

            // Validar formulario
            if (!this.validateContractForm()) {
                this.showErrorNotification(
                    'Formulario incompleto',
                    'Por favor corrige los errores marcados en el formulario',
                    'Revisa que todos los campos estén correctos'
                );
                return;
            }

            this.isSubmittingContract = true;

            try {
                // Mostrar loading
                this.showLoadingAlert(
                    'Creando contrato...',
                    'Por favor espera mientras procesamos la información'
                );

                const contractData = {
                    tipoContratoId: this.contractForm.tipoContratoId,
                    fechaInicio: this.contractForm.fechaInicio + 'T00:00:00',
                    fechaFin: this.contractForm.fechaFin + 'T23:59:59',
                    accesos: this.contractForm.accesos,
                    sesiones: this.contractForm.sesiones,
                    estadoContratoId: 1
                };

                const token = localStorage.getItem('token')
                const response = await axios.post(
                    `http://69.62.111.126:8080/api/contratos/${this.userProfile.username}`,
                    contractData,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem('token')}`
                        }
                    }
                );

                // Cerrar modal
                this.closeContractModal();

                // Cerrar loading y mostrar éxito
                Swal.close();
                await this.showSuccessNotification(
                    '¡Contrato creado exitosamente!',
                    `Se ha creado el contrato para ${this.userProfile.nombre} ${this.userProfile.apellidos}`,
                    'El contrato ya está activo'
                );

                // Recargar datos del usuario
                if (this.mode === 'admin') {
                    // En modo admin, actualizar el usuario en el store
                    await this.userStore.getUsers();
                    const updatedUser = this.userStore.user.find(u => u.username === this.userProfile.username);
                    if (updatedUser) {
                        this.userProfile = updatedUser;
                        this.userStore.selectedUser = updatedUser;
                    }
                } else {
                    // En modo self, recargar datos del usuario autenticado
                    await this.authStore.loadFromStorage();
                    this.userProfile = this.authStore.userData;
                }

            } catch (err) {
                console.error('Error creating contract:', err);
                
                // Cerrar loading y mostrar error
                Swal.close();
                
                let errorMessage = 'No se pudo crear el contrato. Inténtalo nuevamente.';
                let footerMessage = 'Verifica tu conexión a internet';

                if (err.response?.status === 400) {
                    errorMessage = 'Los datos del contrato no son válidos';
                    footerMessage = 'Revisa las fechas y valores ingresados';
                } else if (err.response?.status === 409) {
                    errorMessage = 'El usuario ya tiene un contrato activo';
                    footerMessage = 'Finaliza el contrato actual antes de crear uno nuevo';
                } else if (err.response?.status === 500) {
                    errorMessage = 'Error interno del servidor';
                    footerMessage = 'Contacta al administrador del sistema';
                }

                this.showErrorNotification(
                    'Error al crear contrato',
                    errorMessage,
                    footerMessage
                );

            } finally {
                this.isSubmittingContract = false;
            }
        },

        // CERRAR MODAL DE CONTRATO
        closeContractModal() {
            const modalEl = document.getElementById("contractModal");
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

        // RESETEAR FORMULARIO DE CONTRATO
        resetContractForm() {
            this.contractForm = {
                tipoContratoId: '',
                fechaInicio: '',
                fechaFin: '',
                accesos: 1,
                sesiones: 1,
                estadoContratoId: 1
            };
            this.contractFormErrors = {};
        },

        // OBTENER CLASE DE ERROR PARA CONTRATO
        getContractErrorClass(field) {
            return this.contractFormErrors[field] ? 'is-invalid' : '';
        },

        // FORMATEAR FECHAS
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
        formatCurrency(amount) {
            if (amount === null || amount === undefined) return '€0,00';
            
            try {
                return new Intl.NumberFormat('es-ES', {
                    style: 'currency',
                    currency: 'EUR'
                }).format(amount);
            } catch (error) {
                return `€${amount}`;
            }
        },
        getLastThreeItems(array) {
            if (!array || !Array.isArray(array)) return [];
            
            // Ordenar por fecha descendente (más reciente primero) y tomar los primeros 3
            return array
                .slice()
                .sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
                .slice(0, 3);
        },
        formatTime(dateString) {
            if (!dateString) return '';
            
            try {
                const date = new Date(dateString);
                return date.toLocaleTimeString('es-ES', {
                    hour: '2-digit',
                    minute: '2-digit'
                });
            } catch (error) {
                return '';
            }
        },
        openSessionsModal() {
        console.log('Abriendo modal de sesiones');
    },

    openPaymentsModal() {
        console.log('Abriendo modal de pagos');
    },

    // === MÉTODOS PARA FORMATEAR DATOS ===
    formatDateTimeComplete(dateString) {
        if (!dateString) return 'Sin fecha';
        
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            return 'Fecha inválida';
        }
    },

    getDayOfWeek(dateString) {
        if (!dateString) return '';
        
        try {
            const date = new Date(dateString);
            const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            return days[date.getDay()];
        } catch (error) {
            return '';
        }
    },

    getTimeAgo(dateString) {
        if (!dateString) return '';
        
        try {
            const now = new Date();
            const date = new Date(dateString);
            const diffInSeconds = Math.floor((now - date) / 1000);
            
            if (diffInSeconds < 60) return 'Hace menos de 1 min';
            if (diffInSeconds < 3600) return `Hace ${Math.floor(diffInSeconds / 60)} min`;
            if (diffInSeconds < 86400) return `Hace ${Math.floor(diffInSeconds / 3600)} h`;
            if (diffInSeconds < 2592000) return `Hace ${Math.floor(diffInSeconds / 86400)} días`;
            if (diffInSeconds < 31536000) return `Hace ${Math.floor(diffInSeconds / 2592000)} meses`;
            return `Hace ${Math.floor(diffInSeconds / 31536000)} años`;
        } catch (error) {
            return '';
        }
    },

    // === MANEJADORES DE EVENTOS DE SESIONES ===
    handleSessionView(sesion) {
        console.log('Ver sesión:', sesion);
        // Implementar lógica para ver detalles de la sesión
        // Por ejemplo: mostrar un modal con más información
        alert(`Ver detalles de la sesión #${sesion.id}\nFecha: ${sesion.fecha}`);
    },

    handleSessionEdit(sesion) {
        console.log('Editar sesión:', sesion);
        // Implementar lógica para editar la sesión
        // Por ejemplo: redirigir a página de edición o abrir modal de edición
        alert(`Editar sesión #${sesion.id}`);
    },

    handleSessionDelete(sesion) {
        console.log('Eliminar sesión:', sesion);
        // Implementar lógica para eliminar la sesión
        if (confirm(`¿Estás seguro de que quieres eliminar la sesión #${sesion.id}?`)) {
            // Llamar al API para eliminar
            console.log('Sesión eliminada');
        }
    },

    // === MANEJADORES DE EVENTOS DE PAGOS ===
    handlePaymentView(pago) {
        console.log('Ver pago:', pago);
        // Implementar lógica para ver detalles del pago
        alert(`Ver detalles del pago #${pago.id}\nCantidad: ${pago.cantidad}\nFecha: ${pago.fecha}`);
    },

    handlePaymentEdit(pago) {
        console.log('Editar pago:', pago);
        // Implementar lógica para editar el pago
        alert(`Editar pago #${pago.id}`);
    },

    handlePaymentDelete(pago) {
        console.log('Eliminar pago:', pago);
        // Implementar lógica para eliminar el pago
        if (confirm(`¿Estás seguro de que quieres eliminar el pago #${pago.id}?`)) {
            // Llamar al API para eliminar
            console.log('Pago eliminado');
        }
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

/* HEADER DEL PERFIL */
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

.profile-cover-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1;
}

.user-info {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.user-avatar {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    border: 4px solid rgba(255, 255, 255, 0.3);
}

.user-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.status-indicator {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 3px solid white;
}

.status-indicator.online {
    background: #22c55e;
}

.status-indicator.offline {
    background: #ef4444;
}

.user-details {
    color: white;
}

.user-name {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.user-email {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    opacity: 0.9;
}

.user-meta {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.meta-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.95rem;
    opacity: 0.8;
}

.profile-actions {
    display: flex;
    gap: 1rem;
}

.elegant-btn-light {
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 12px;
    font-weight: 500;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
}

.elegant-btn-light:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    color: white;
}

/* ESTADÍSTICAS */
.profile-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 0;
    padding: 1.3rem;
    background: linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%);
}

.stat-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    border-right: 1px solid #e2e8f0;
}

.stat-item:last-child {
    border-right: none;
}

.stat-icon {
    width: 60px;
    height: 60px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: white;
}

.stat-icon.peso {
    background: linear-gradient(135deg, #f59e0b, #d97706);
}

.stat-icon.altura {
    background: linear-gradient(135deg, #06b6d4, #0891b2);
}

.stat-icon.accesos {
    background: linear-gradient(135deg, #10b981, #059669);
}

.stat-icon.sesiones {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
}

.stat-info h4 {
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: #1f2937;
}

.stat-info p {
    font-size: 0.9rem;
    color: #6b7280;
    margin: 0;
}

/* CARDS DE INFORMACIÓN */
.elegant-info-card {
    border: none;
    border-radius: 15px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
    margin-bottom: 1.5rem;
}

.elegant-card-header {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    border: none;
    padding: 1.5rem;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header-title {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
    color: #374151;
}

.header-title i {
    font-size: 1.2rem;
    color: #111c43;
}

.elegant-btn-primary-sm {
    background: linear-gradient(135deg, #111c43 0%, rgb(0, 109, 254) 100%);
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
}

.elegant-btn-primary-sm:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
}

/* DETALLES DEL CONTRATO */
.contract-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.detail-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid #f1f5f9;
}

.detail-row:last-child {
    border-bottom: none;
}

.detail-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #6b7280;
    font-size: 0.9rem;
    font-weight: 500;
}

.detail-label i {
    color: #111c43;
}

.detail-value {
    font-weight: 600;
    color: #374151;
    text-align: right;
}

/* SIN CONTRATO */
.no-contract {
    text-align: center;
    padding: 2rem;
    color: #6b7280;
}

.no-contract i {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #d1d5db;
}

.no-contract p {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.no-contract small {
    font-size: 0.9rem;
}

/* OBSERVACIONES */
.observations-text {
    line-height: 1.6;
    color: #374151;
    margin: 0;
}

/* ESTILOS DEL MODAL */
.elegant-modal {
    border: none;
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    overflow: hidden;
}

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

.elegant-body {
    padding: 2rem;
    background: linear-gradient(145deg, #f8fafc 0%, #e2e8f0 100%);
}

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

.elegant-input {
    width: 100%;
    padding: 1rem 1.25rem;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
}

.elegant-input:focus {
    outline: none;
    border-color: #111c43;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    transform: translateY(-1px);
}

.elegant-input.is-invalid {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.elegant-input:disabled {
    background: #f8fafc;
    cursor: not-allowed;
    opacity: 0.7;
}

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

.elegant-footer {
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

.elegant-btn-success {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    border: none;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 12px;
    font-weight: 500;
    transition: all 0.2s ease;
    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
}

.elegant-btn-success:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.35);
}

.elegant-btn-success:disabled, .elegant-btn-secondary:disabled {
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
    .profile-cover-content {
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
    }
    
    .user-info {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
    
    .user-avatar {
        width: 100px;
        height: 100px;
    }
    
    .user-name {
        font-size: 1.5rem;
    }
    
    .profile-stats {
        grid-template-columns: 1fr;
        padding: 1rem;
    }
    
    .stat-item {
        border-right: none;
        border-bottom: 1px solid #e2e8f0;
        justify-content: center;
    }
    
    .stat-item:last-child {
        border-bottom: none;
    }
    
    .elegant-footer {
        flex-direction: column-reverse;
        gap: 1rem;
    }
    
    .elegant-btn-secondary,
    .elegant-btn-success {
        width: 100%;
        justify-content: center;
    }
}

/* Estilos para las cards de Sesiones y Pagos */

/* Lista de Sesiones */
.sessions-list {
    .session-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        
        &.border-bottom {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .session-info {
            display: flex;
            align-items: center;
            gap: 12px;
            
            .session-icon {
                width: 40px;
                height: 40px;
                border-radius: 10px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 16px;
            }
            
            .session-details {
                .session-date {
                    font-weight: 600;
                    color: var(--bs-gray-800);
                    font-size: 14px;
                    margin-bottom: 2px;
                }
                
                .session-time {
                    color: var(--bs-gray-600);
                    font-size: 12px;
                }
            }
        }
        
        .session-id {
            color: var(--bs-gray-500);
            font-size: 12px;
            font-weight: 500;
            background: var(--bs-gray-100);
            padding: 4px 8px;
            border-radius: 6px;
        }
    }
}

/* Lista de Pagos */
.payments-list {
    .payment-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        
        &.border-bottom {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .payment-info {
            display: flex;
            align-items: center;
            gap: 12px;
            
            .payment-icon {
                width: 40px;
                height: 40px;
                border-radius: 10px;
                background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 16px;
            }
            
            .payment-details {
                .payment-date {
                    font-weight: 600;
                    color: var(--bs-gray-800);
                    font-size: 14px;
                    margin-bottom: 2px;
                }
                
                .payment-time {
                    color: var(--bs-gray-600);
                    font-size: 12px;
                }
            }
        }
        
        .payment-amount {
            text-align: right;
            
            .amount {
                display: block;
                font-weight: 700;
                color: #28a745;
                font-size: 16px;
                margin-bottom: 2px;
            }
            
            .payment-id {
                color: var(--bs-gray-500);
                font-size: 11px;
                background: var(--bs-gray-100);
                padding: 2px 6px;
                border-radius: 4px;
            }
        }
    }
}

/* Indicadores de "mostrar más" */
.show-more-sessions,
.show-more-payments {
    text-align: center;
    margin-top: 12px;
    padding-top: 12px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    small {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }
}

/* Estado sin datos */
.no-data {
    text-align: center;
    padding: 30px 20px;
    
    i {
        font-size: 48px;
        color: var(--bs-gray-400);
        margin-bottom: 12px;
        display: block;
    }
    
    p {
        font-weight: 600;
        color: var(--bs-gray-600);
        margin-bottom: 6px;
        font-size: 16px;
    }
    
    small {
        color: var(--bs-gray-500);
        font-size: 14px;
    }
}

/* Badges en headers */
.card-header .badge {
    font-size: 11px;
    padding: 4px 8px;
    font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .session-item,
    .payment-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        
        .session-id,
        .payment-amount {
            align-self: flex-end;
        }
    }
    
    .session-info,
    .payment-info {
        width: 100%;
    }
}

.sessions-list {
    .session-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        
        &.border-bottom {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .session-info {
            display: flex;
            align-items: center;
            gap: 12px;
            
            .session-icon {
                width: 40px;
                height: 40px;
                border-radius: 10px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 16px;
            }
            
            .session-details {
                .session-date {
                    font-weight: 600;
                    color: var(--bs-gray-800);
                    font-size: 14px;
                    margin-bottom: 2px;
                }
                
                .session-time {
                    color: var(--bs-gray-600);
                    font-size: 12px;
                }
            }
        }
        
        .session-id {
            color: var(--bs-gray-500);
            font-size: 12px;
            font-weight: 500;
            background: var(--bs-gray-100);
            padding: 4px 8px;
            border-radius: 6px;
        }
    }
}

/* Lista de Pagos */
.payments-list {
    .payment-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 0;
        
        &.border-bottom {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .payment-info {
            display: flex;
            align-items: center;
            gap: 12px;
            
            .payment-icon {
                width: 40px;
                height: 40px;
                border-radius: 10px;
                background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 16px;
            }
            
            .payment-details {
                .payment-date {
                    font-weight: 600;
                    color: var(--bs-gray-800);
                    font-size: 14px;
                    margin-bottom: 2px;
                }
                
                .payment-time {
                    color: var(--bs-gray-600);
                    font-size: 12px;
                }
            }
        }
        
        .payment-amount {
            text-align: right;
            
            .amount {
                display: block;
                font-weight: 700;
                color: #28a745;
                font-size: 16px;
                margin-bottom: 2px;
            }
            
            .payment-id {
                color: var(--bs-gray-500);
                font-size: 11px;
                background: var(--bs-gray-100);
                padding: 2px 6px;
                border-radius: 4px;
            }
        }
    }
}

/* Indicadores de "mostrar más" con botones */
.show-more-sessions,
.show-more-payments {
    text-align: center;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    
    .btn {
        font-size: 12px;
        padding: 6px 12px;
        border-radius: 8px;
        transition: all 0.2s ease;
        
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
    }
}

/* Estado sin datos */
.no-data {
    text-align: center;
    padding: 30px 20px;
    
    i {
        font-size: 48px;
        color: var(--bs-gray-400);
        margin-bottom: 12px;
        display: block;
    }
    
    p {
        font-weight: 600;
        color: var(--bs-gray-600);
        margin-bottom: 6px;
        font-size: 16px;
    }
    
    small {
        color: var(--bs-gray-500);
        font-size: 14px;
    }
}

/* Badges en headers */
.card-header .badge {
    font-size: 11px;
    padding: 4px 8px;
    font-weight: 600;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .session-item,
    .payment-item {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
        
        .session-id,
        .payment-amount {
            align-self: flex-end;
        }
    }
    
    .session-info,
    .payment-info {
        width: 100%;
    }
}
</style>