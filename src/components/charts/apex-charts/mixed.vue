<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue";
import * as mixedData from "../../../data/apexcharts/apexchart-mixed"
export default {
  components: {
    PageHeader,
    ChartCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Mixed Charts",
        list: ['Charts', 'Apexcharts', 'Apex Mixed Charts']
      },
      mixedData,
      ApexMixedChart: [
        { id: 1, title: "Line & Column Chart", type: "line", height: "350", chart: { options: mixedData.basicoptions, series: mixedData.basicseries }, },
        { id: 2, title: "Multiple Y-Axis Chart", type: "line", height: "350", chart: { options: mixedData.multipleoptions, series: mixedData.multipleseries }, },
        { id: 3, title: "Line & Area Chart", type: "line", height: "350", chart: { options: mixedData.areaoptions, series: mixedData.areaseries }, },
        { id: 4, title: "Line,Column & Area Chart", type: "line", height: "350", chart: { options: mixedData.columnoptions, series: mixedData.columnseries }, },
      ]
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexMixedChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" />
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>
