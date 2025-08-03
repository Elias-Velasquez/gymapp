<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as heatmapData from "../../../data/apexcharts/apexchart-heatmap"
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue"
export default {
  components: {
    PageHeader,
    ChartCardComponent,
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Heatmap Charts",
        list: ['Charts', 'Apexcharts', 'Apex Heatmap Charts']
      },
      heatmapData,
      ApexHeatmapChart: [
        { id: 1, title: "Basic Heatmap Chart", type: "heatmap", height: "350", chart: { options: heatmapData.basicHeatmapoptions, series: heatmapData.basicHeatmapseries }, },
        { id: 2, title: "Multi Series Heatmap Chart", type: "heatmap", height: "350", chart: { options: heatmapData.multiSeriesoptions, series: heatmapData.multiSeriesseries }, },
        { id: 3, title: "Color Range Heatmap Chart", type: "heatmap", height: "350", chart: { options: heatmapData.colorRangeoptions, series: heatmapData.colorRangeseries }, },
        { id: 4, title: "Heatmap Range Without Shades", type: "heatmap", height: "350", chart: { options: heatmapData.withoutShadesoptions, series: heatmapData.withoutShadesseries }, },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexHeatmapChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" />
    </div>
  </div>
</template>

<style scoped></style>
