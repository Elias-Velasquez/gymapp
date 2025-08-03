<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as radialbarData from "../../../data/apexcharts/apexchart-radialbar"
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue"
export default {
  components: {
    PageHeader,
    ChartCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Radarbar Charts",
        list: ['Charts', 'Apexcharts', 'Apex Radarbar Charts']
      },
      radialbarData,
      ApexRadialbarChart: [
        { id: 1, title: "Basic Pie Chart", type: "radialBar", height: "300", chart: { options: radialbarData.basicRadialbaroptions, series: radialbarData.basicRadialbarseries }, },
        { id: 2, title: "Multiple Radialbar Chart", type: "radialBar", height: "300", chart: { options: radialbarData.multipleRadialbaroptions, series: radialbarData.multipleRadialbarseries }, },
        { id: 3, title: "Circle Chart - Custom Angle", type: "radialBar", height: "300", chart: { options: radialbarData.customoptions, series: radialbarData.customseries }, },
        { id: 4, title: "Gradient Circle Chart", type: "radialBar", height: "300", chart: { options: radialbarData.gradientRadialbaroptions, series: radialbarData.gradientRadialbarseries }, },
        { id: 5, title: "Stroked Circular Gauge", type: "radialBar", height: "300", chart: { options: radialbarData.strokedoptions, series: radialbarData.strokedseries }, },
        { id: 6, title: "Circle Chart With Image", type: "radialBar", height: "300", chart: { options: radialbarData.imageoptions, series: radialbarData.imageseries }, },
        { id: 7, title: "Semi Circular Gauge", type: "radialBar", height: "300", chart: { options: radialbarData.circularoptions, series: radialbarData.circularseries }, },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexRadialbarChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" />
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>
