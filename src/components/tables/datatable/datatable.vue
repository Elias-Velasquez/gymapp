<template>
  <PageHeader :propData="dataToPass" />
  <div class="row">
    <div class="col-xl-12">
      <SimpleCardComponent :title="title">
        <EasyDataTable 
          class="table text-nowrap" 
          tableClass="table text-nowrap table-hover" 
          :headers="headers" 
          :items="items" 
          border-cell 
          :rowsPerPage="25"  
          body-text-direction="center"
          header-text-direction="center"
          :rowsItems="[5, 10, 25, 50, 100]"
        > 
          <!-- SLOT ESPECIAL: Solo para tablas de tipo 'users' -->
          <template v-if="tableType === 'users'" #item-cliente="item">
            <div class="d-flex align-items-center" style="min-width: 320px;">
              <div class="position-relative me-3">
                <span class="avatar avatar-md avatar-rounded">
                  <img :src="item.imagen || '/assets/default-avatar.png'" alt="avatar" />
                </span>
                <!-- Indicador de actividad -->
                <span 
                  class="position-absolute bottom-0 end-0 p-1 border border-light rounded-circle"
                  :class="getActivityStatus(item.last_login)"
                  data-bs-toggle="tooltip" 
                  :title="`Último acceso: ${formatLastLogin(item.last_login)}`"
                >
                </span>
              </div>
              <div class="flex-grow-1" style="min-width: 0; text-align: start!important;">
                <div class="lh-1 mb-1">
                  <span class="fw-semibold fs-14 text-nowrap">{{ item.nombre }} {{ item.apellidos }}</span>
                  <span v-if="!item.enabled" class="badge bg-secondary ms-2" style="font-size: 0.6rem;">
                    Inactivo
                  </span>
                </div>
                <div class="lh-1 mb-1">
                  <span class="fs-12 text-muted d-block text-truncate" style="max-width: 250px;">
                    <i class="ri-mail-line me-1"></i>{{ item.username }}
                  </span>
                </div>
                <div class="lh-1">
                  <span class="fs-11 text-muted">
                    <i class="ri-time-line me-1"></i>{{ formatLastLogin(item.last_login) }}
                  </span>
                </div>
              </div>
            </div>
          </template>

          <!-- SLOT ESPECIAL: Solo para tablas de tipo 'users' - Información de contacto -->
          <template v-if="tableType === 'users'" #item-contacto="item">
            <div class="text-start">
              <div class="d-flex align-items-center mb-1" v-if="item.dni">
                <i class="ri-id-card-line me-2 text-primary"></i>
                <small class="fw-medium">{{ item.dni }}</small>
              </div>
              <div class="d-flex align-items-center" v-if="item.direccion">
                <i class="ri-map-pin-line me-2 text-success"></i>
                <small class="text-muted" :title="item.direccion">
                  {{ truncateText(item.direccion, 25) }}
                </small>
              </div>
            </div>
          </template>

          <!-- SLOT ESPECIAL: Solo para tablas de tipo 'users' - Info física -->
          <template v-if="tableType === 'users'" #item-fisico="item">
            <div class="text-center">
              <div class="d-flex justify-content-center align-items-center mb-1">
                <i class="ri-scales-3-line me-1 text-warning"></i>
                <span class="fw-medium">{{ item.peso }}</span>
                <small class="text-muted ms-1">kg</small>
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <i class="ri-ruler-line me-1 text-info"></i>
                <span class="fw-medium">{{ item.altura }}</span>
                <small class="text-muted ms-1">m</small>
              </div>
            </div>
          </template>

          <!-- SLOT GENÉRICO: Para cualquier campo 'status' -->
          <template #item-status="item">
            <span 
              class="badge"
              :class="getStatusClass(item.status)"
            >
              <i :class="getStatusIcon(item.status)" class="me-1"></i>
              {{ item.status }}
            </span>
          </template>

          <!-- SLOT GENÉRICO: Para cualquier campo 'actions' -->
          <template #item-actions="item">
            <div class="hstack gap-1 justify-content-center flex-wrap">
              <!-- Ver -->
              <a href="javascript:void(0);" 
                 class="btn btn-icon btn-sm btn-primary-transparent rounded-pill" 
                 @click="$emit('view', item)"
                 data-bs-toggle="tooltip" 
                 title="Ver">
                <i class="ri-eye-line"></i>
              </a>

              <!-- Editar -->
              <a href="javascript:void(0);" 
                 class="btn btn-icon btn-sm btn-info-transparent rounded-pill" 
                 @click="$emit('edit', item)"
                 data-bs-toggle="tooltip" 
                 title="Editar">
                <i class="ri-edit-line"></i>
              </a>

              <!-- Acción personalizada (solo si se especifica) -->
              <a v-if="showCustomAction" 
                 href="javascript:void(0);" 
                 :class="`btn btn-icon btn-sm rounded-pill ${customActionClass}`"
                 @click="$emit('customAction', item)"
                 data-bs-toggle="tooltip" 
                 :title="customActionTooltip">
                <i :class="customActionIcon"></i>
              </a>

              <!-- Toggle estado (solo para usuarios) -->
              <a v-if="tableType === 'users'" 
                 href="javascript:void(0);" 
                 :class="`btn btn-icon btn-sm rounded-pill ${item.enabled ? 'btn-warning-transparent' : 'btn-success-transparent'}`"
                 @click="$emit('toggleStatus', item)"
                 data-bs-toggle="tooltip" 
                 :title="item.enabled ? 'Desactivar' : 'Activar'">
                <i :class="item.enabled ? 'ri-pause-circle-line' : 'ri-play-circle-line'"></i>
              </a>

              <!-- Eliminar -->
              <a href="javascript:void(0);" 
                 class="btn btn-icon btn-sm btn-danger-transparent rounded-pill" 
                 @click="$emit('delete', item)"
                 data-bs-toggle="tooltip" 
                 title="Eliminar">
                <i class="ri-delete-bin-line"></i>
              </a>
            </div>
          </template>
        </EasyDataTable>
      </SimpleCardComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import { Header, Item } from 'vue3-easy-data-table';
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue";
import { Tooltip } from 'bootstrap';

export default defineComponent({
  emits: ['edit', 'view', 'delete', 'customAction', 'toggleStatus'],
  components: {
    PageHeader,
    SimpleCardComponent 
  },
  props: {
    title: {
      type: String,
      required: true
    },
    dataToPass: {
      type: Object,
      default: () => ({})
    },
    headers: {
      type: Array as () => Header[],
      required: true
    },
    items: {
      type: Array as () => Item[],
      required: true
    },
    // PROP SIMPLE: Define el tipo de tabla
    tableType: {
      type: String,
      default: 'generic', // 'users', 'products', 'payments', 'generic'
      validator: (value: string) => ['users', 'products', 'payments', 'generic'].includes(value)
    },
    // Props opcionales para acciones personalizadas
    showCustomAction: {
      type: Boolean,
      default: false
    },
    customActionIcon: {
      type: String,
      default: 'ri-heart-line'
    },
    customActionClass: {
      type: String,
      default: 'btn-success-transparent'
    },
    customActionTooltip: {
      type: String,
      default: 'Acción personalizada'
    }
  },
  setup() {
    onMounted(() => {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
    });

    const getActivityStatus = (lastLogin: string) => {
      if (!lastLogin) return 'bg-danger';
      const now = new Date();
      const loginDate = new Date(lastLogin);
      const diffDays = (now.getTime() - loginDate.getTime()) / (1000 * 3600 * 24);
      
      if (diffDays <= 7) return 'bg-success';
      if (diffDays <= 30) return 'bg-warning';
      return 'bg-danger';
    };

    const formatLastLogin = (lastLogin: string) => {
      if (!lastLogin) return 'Nunca';
      const now = new Date();
      const loginDate = new Date(lastLogin);
      const diffDays = Math.floor((now.getTime() - loginDate.getTime()) / (1000 * 3600 * 24));
      
      if (diffDays === 0) return 'Hoy';
      if (diffDays === 1) return 'Ayer';
      if (diffDays < 7) return `Hace ${diffDays} días`;
      if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
      return `Hace ${Math.floor(diffDays / 30)} meses`;
    };

    const truncateText = (text: string, maxLength: number) => {
      if (!text) return '';
      return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    const getStatusClass = (status: string) => {
      const statusMap: { [key: string]: string } = {
        'Alta': 'bg-success',
        'Baja': 'bg-danger', 
        'Pendiente': 'bg-warning',
        'Activo': 'bg-success',
        'Inactivo': 'bg-danger'
      };
      return statusMap[status] || 'bg-light text-dark';
    };

    const getStatusIcon = (status: string) => {
      const iconMap: { [key: string]: string } = {
        'Alta': 'ri-checkbox-circle-line',
        'Baja': 'ri-close-circle-line',
        'Pendiente': 'ri-time-line',
        'Activo': 'ri-checkbox-circle-line',
        'Inactivo': 'ri-close-circle-line'
      };
      return iconMap[status] || 'ri-question-line';
    };

    return {
      getActivityStatus,
      formatLastLogin,
      truncateText,
      getStatusClass,
      getStatusIcon
    };
  }
});
</script>

<style scoped>
.avatar img {
  object-fit: cover;
}

.badge {
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
}

.btn-icon {
  transition: all 0.2s ease;
}

.btn-icon:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.fs-11 {
  font-size: 0.75rem;
}

.fs-12 {
  font-size: 0.8rem;
}

.fs-14 {
  font-size: 0.9rem;
}

/* Aumentar altura de las filas de la tabla */
:deep(.vue3-easy-data-table__body tr) {
  height: 80px; /* Altura fija para las filas */
}

:deep(.vue3-easy-data-table__body td) {
  padding: 1rem 0.75rem !important; /* Más padding vertical */
  vertical-align: middle !important; /* Centrar verticalmente */
}

/* Específico para la columna del cliente para que el contenido esté centrado */
:deep(.vue3-easy-data-table__body td:first-child) {
  padding: 1.25rem 0.75rem !important;
}

/* Asegurar que los avatares no se deformen */
.avatar {
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .hstack {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem !important;
  }
  
  .btn-icon {
    width: auto;
    min-width: 2rem;
  }
  
  .avatar {
    width: 2.5rem !important;
    height: 2.5rem !important;
  }
  
  /* En móviles, filas un poco más pequeñas */
  :deep(.vue3-easy-data-table__body tr) {
    height: 70px;
  }
  
  :deep(.vue3-easy-data-table__body td) {
    padding: 0.75rem 0.5rem !important;
  }
}
</style>