<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as scatterData from "../../../data/apexcharts/apexchart-scatter"
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue"
export default {
  components: {
    PageHeader,
    ChartCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Scatter Charts",
        list: ['Charts', 'Apexcharts', 'Apex Scatter Charts']
      },
      scatterData,
      ApexScatterChart: [
        { id: 1, title: "Basic Scatter Chart", type: "scatter", height: "350", chart: { options: scatterData.basicScatteroptions, series: scatterData.basicScatterseries }, },
        { id: 2, title: "Datetime Scatter Chart", type: "scatter", height: "350", chart: { options: scatterData.datetimeoptions, series: scatterData.datetimeseries }, },
        { id: 3, title: "Image Fill Scatter Chart", type: "scatter", height: "350", chart: { options: scatterData.scatteroptions, series: scatterData.scatterseries1 }, },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexScatterChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" />
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>
