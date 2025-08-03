<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as radarData from "../../../data/apexcharts/apexchart-radar"
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue"
export default {
  components: {
    PageHeader,
    ChartCardComponent,
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Radar Charts",
        list: ['Charts', 'Apexcharts', 'Apex Radar Charts']
      },
      radarData,
      ApexRadarChart: [
        { id: 1, title: "Basic Radar Chart", type: "radar", height: "350", chart: { options: radarData.basicRadaroptions, series: radarData.basicRadarseries }, },
        { id: 2, title: "Radar Chart-Multiple Series", type: "radar", height: "350", chart: { options: radarData.multipleRadaroptions, series: radarData.multipleRadarseries }, },
        { id: 3, title: "Radar Chart Poygon Fill", type: "radar", height: "350", chart: { options: radarData.polygnoptions, series: radarData.polygnseries }, },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexRadarChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" />
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>
