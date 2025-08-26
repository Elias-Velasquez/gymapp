<template>
  <PageHeader :propData="dataToPass" />
  <div class="row">
    <div class="col-xl-12">
      <SimpleCardComponent :title="title">
        <EasyDataTable class="table text-nowrap" :headers="headers" :items="items" border-cell :rowsPerPage="25"  
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
            <button class="btn btn-sm btn-warning me-1" @click="$emit('view', item)"><i class="ri-eye-line me-1"></i>Ver</button>
            <button class="btn btn-sm btn-primary me-1" @click="$emit('edit', item)"><i class="ri-edit-line me-1"></i>Editar</button>
            <button class="btn btn-sm btn-danger" @click="$emit('delete', item)"><i class="ri-delete-bin-line me-1"></i>Eliminar</button>
          </template>
        </EasyDataTable>
      </SimpleCardComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import { Header, Item } from 'vue3-easy-data-table';
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue"

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
  },
  setup() {


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
