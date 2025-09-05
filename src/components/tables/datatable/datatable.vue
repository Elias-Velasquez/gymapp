<template>
  <PageHeader :propData="dataToPass" />
  <div class="row">
    <div class="col-xl-12">
      <SimpleCardComponent :title="title">
        <EasyDataTable class="table text-nowrap" tableClass="table text-nowrap table-hover" :headers="headers" :items="items" border-cell :rowsPerPage="25"  
                body-text-direction="center"
                header-text-direction="center"
          :rowsItems="[5, 10, 25, 50, 100]" > 
           <!-- Slot para status -->
          <template #item-status="item">
            <span 
              class="badge" 
              :class="{
                'bg-danger': item.status === 'Baja',
                'bg-success': item.status === 'Alta',
                'bg-primary': item.status === 'Pendiente'
              }"
            >
              {{ item.status }}
            </span>
          </template>

          <template #item-actions="item">
            <!-- Ver -->
            <button 
              class="btn btn-sm btn-warning me-1" 
              @click="$emit('view', item)" 
              data-bs-toggle="tooltip" 
              data-bs-placement="top" 
              title="Ver">
              <i class="ri-eye-line"></i>
            </button>

            <!-- Editar -->
            <button 
              class="btn btn-sm btn-info me-1" 
              @click="$emit('edit', item)" 
              data-bs-toggle="tooltip" 
              data-bs-placement="top" 
              title="Editar">
              <i class="ri-edit-line"></i>
            </button>

            <button 
              v-if="showAssistance" 
              class="btn btn-sm btn-success me-1" 
              @click="$emit('assistance', item)" 
              data-bs-toggle="tooltip" 
              data-bs-placement="top" 
              title="Asistencia">
              <i class="ri-hand"></i>
            </button>
            <!-- Eliminar -->
            <button 
              class="btn btn-sm btn-danger" 
              @click="$emit('delete', item)" 
              data-bs-toggle="tooltip" 
              data-bs-placement="top" 
              title="Eliminar">
              <i class="ri-delete-bin-line"></i>
            </button>

            <!-- Asistencia -->
          </template>
        </EasyDataTable>
      </SimpleCardComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted  } from 'vue';
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import { Header, Item } from 'vue3-easy-data-table';
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue";
import { Tooltip } from 'bootstrap';

export default defineComponent({
  emits: ['edit', 'view', 'delete'],
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
      default: () => ({
        // current: "Gestión",
        // list: ['Tables', 'Data Tables']
      })
    },
    headers: {
      type: Array as () => Header[],
      required: true
    },
    items: {
      type: Array as () => Item[],
      required: true
    },
    showAssistance: {   // ✅ Nueva prop
      type: Boolean,
      default: false
    }
  },
  setup() {
    onMounted(() => {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
    });

    return {
      // headers,
      // items
    };
  },
  methods: {
    handleEdit(item) {

      // lógica para editar
    },
    handleView(item) {

      // lógica para ver
    },
    handleDelete(item) {
;
      // lógica para eliminar
    }
  }
});
</script>

<style scoped></style>
