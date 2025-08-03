<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as bubbleData from "../../../data/apexcharts/apexchart-bubble"
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue"
export default {
  components: {
    PageHeader,
    ChartCardComponent,
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Bubble Charts",
        list: ['Charts', 'Apexcharts', 'Apex Bubble Charts']
      },
      bubbleData,
      ApexBubbleChart: [
        { id: 1, title: "Simple Bubble Chart", type: "", height: "350", chart: { options: bubbleData.Chartoptions, series: bubbleData.series }, chartId: "bubble-simple" },
        { id: 2, title: "3D Bubble Chart", type: "", height: "350", chart: { options: bubbleData.bubble3DChartoptions, series: bubbleData.bubble3Dseries }, chartId: "bubble-3d" },
      ],

    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexBubbleChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" :chartId="card.chartId" />
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>
