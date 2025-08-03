<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as treemapData from "../../../data/apexcharts/apexchart-treemap";
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue"
export default {
  components: {
    PageHeader,
    ChartCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Treemap Charts",
        list: ['Charts', 'Apexcharts', 'Apex Treemap Charts']
      },
      treemapData,
      ApexTreemapChart: [
        { id: 1, title: "Basic Treemap Chart", type: "treemap", height: "350", chart: { options: treemapData.basicTreemapoptions, series: treemapData.basicTreemapseries }, },
        { id: 2, title: "Multi Dimensional Treemap Chart", type: "treemap", height: "350", chart: { options: treemapData.multioptions, series: treemapData.multiseries }, },
        { id: 3, title: "Distributed Treemap Chart", type: "treemap", height: "350", chart: { options: treemapData.distributedTreemapoptions, series: treemapData.distributedTreemapseries }, },
        { id: 4, title: "Treemap with color ranges", type: "treemap", height: "350", chart: { options: treemapData.treemapoptions, series: treemapData.treemapseries }, },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexTreemapChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" />
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>
