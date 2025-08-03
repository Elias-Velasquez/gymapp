<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue";
import * as barData from "../../../data/apexcharts/apexchart-bar"

export default {
  components: {
    PageHeader,
    ChartCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Bar Charts",
        list: ['Charts', 'Apexcharts', 'Apex Bar Charts']
      },
      barData,
      ApexBarChart: [
        { id: 1, title: "Basic Bar Chart", type: "bar", height: "350", chart: { options: barData.basicBarChartOptions, series: barData.basicBarSeries }, },
        { id: 2, title: "Grouped Bar Chart", type: "bar", height: "350", chart: { options: barData.groupBarChartOptions, series: barData.groupBarSeries }, },
        { id: 3, title: "Stacked Bar Chart", type: "bar", height: "350", chart: { options: barData.stackedBarChartOptions, series: barData.stackedBarSeries }, },
        { id: 4, title: "100% Stacked Bar Chart", type: "bar", height: "350", chart: { options: barData.fullBarChartOptions, series: barData.fullBarSeries }, },
        { id: 5, title: "Bar Chart With Negative Values", type: "bar", height: "350", chart: { options: barData.negativeBarChartOptions, series: barData.negativeBarSeries }, },
        { id: 6, title: "Bar Chart With Markers", type: "bar", height: "350", chart: { options: barData.markersBarChartOptions, series: barData.markersBarSeries }, },
        { id: 7, title: "Reversed Bar Chart", type: "bar", height: "350", chart: { options: barData.reversedBarChartOptions, series: barData.reversedBarSeries }, },
        { id: 8, title: "Bar With Categogry DataLabels", type: "bar", height: "350", chart: { options: barData.categoriesBarChartOptions, series: barData.categoriesBarSeries }, },
        { id: 9, title: "Patterned Bar Chart", type: "bar", height: "350", chart: { options: barData.patternBarChartOptions, series: barData.patternBarSeries }, },
        { id: 10, title: "Bar With Image Fill", type: "bar", height: "350", chart: { options: barData.imageBarChartOptions, series: barData.imageBarSeries }, },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexBarChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" />
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>
