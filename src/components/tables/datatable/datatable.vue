<template>
  <PageHeader :propData="dataToPass" />
  <div class="row">
    <div class="col-xl-12">
      <SimpleCardComponent :title="title">
        <EasyDataTable class="table text-nowrap" :headers="headers" :items="items" border-cell :rowsPerPage="5"
          :rowsItems="[5, 10, 25, 50, 100]"> 
          <template #item-actions="{ item }">
            <button class="btn btn-sm btn-primary me-1" @click="$emit('edit', item)">Editar</button>
            <button class="btn btn-sm btn-warning me-1" @click="$emit('view', item)">Ver</button>
            <button class="btn btn-sm btn-danger" @click="$emit('delete', item)">Eliminar</button>
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
        current: "Data Tables",
        list: ['Tables', 'Data Tables']
      })
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
  },
  setup() {
    return {

    };
  },
  methods: {
    handleEdit(item) {
      console.log("Editar:", item);
      // lógica para editar
    },
    handleView(item) {
      console.log("Ver:", item);
      // lógica para ver
    },
    handleDelete(item) {
      console.log("Eliminar:", item);
      // lógica para eliminar
    }
  }
});
</script>

<style scoped></style>
