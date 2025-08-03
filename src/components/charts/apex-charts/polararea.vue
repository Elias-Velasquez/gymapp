<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as polarareaData from "../../../data/apexcharts/apexchart-polararea"
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue"
export default {
  components: {
    PageHeader,
    ChartCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Apex PolarArea Charts",
        list: ['Charts', 'Apexcharts', 'Apex PolarArea Charts']
      },
      polarareaData,
      ApexPolarChart: [
        { id: 1, title: "Basic Polar Area Chart", type: "polarArea", height: "350", chart: { options: polarareaData.basicoptions, series: polarareaData.basicseries }, cardBodyClass: 'polar-area-charts' },
        { id: 2, title: "Polar Area Monochrome Chart", type: "polarArea", height: "350", chart: { options: polarareaData.monochromeoptions, series: polarareaData.monochromeseries }, },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexPolarChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" :cardBodyClass="card.cardBodyClass" />
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>
