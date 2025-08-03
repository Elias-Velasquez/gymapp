<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as boxplotData from "../../../data/apexcharts/apexchart-boxplot"
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue";

export default {
  components: {
    PageHeader,
    ChartCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Boxplot Charts",
        list: ['Charts', 'Apexcharts', 'Apex Boxplot Charts']
      },
      boxplotData,
      ApexBoxplotChart: [
        { id: 1, title: "Basic Boxplot Chart", type: "candlestick", height: "350", chart: { options: boxplotData.basicChartoptions, series: boxplotData.basicSeries }, },
        { id: 2, title: "Boxplot With Scatter Chart", type: "candlestick", height: "350", chart: { options: boxplotData.scatterChartoptions, series: boxplotData.scatterseries }, },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexBoxplotChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" />
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>
