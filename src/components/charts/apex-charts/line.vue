<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue";
import * as lineData from "../../../data/apexcharts/apexchart-line";

export default {
  components: {
    PageHeader,
    ChartCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Line Charts",
        list: ["Charts", "Apexcharts", "Apex Line Charts"]
      },
      ApexLineChart: [
        { id: 1, title: "Basic Line Chart", type: "line", height: "350", chart: { options: lineData.basicoptions, series: lineData.basicseries } },
        { id: 2, title: "Line Chart With Data Labels", type: "line", height: "350", chart: { options: lineData.datalabelsoptions, series: lineData.datalabelsseries } },
        { id: 3, title: "Zoomable Time Series", type: "area", height: "350", chart: { options: lineData.timeoptions, series: lineData.timeseries } },
        { id: 4, title: "Line With Annotations", type: "line", height: "350", chart: { options: lineData.annotationsoptions, series: lineData.annotationsseries } },
        { id: 5, title: "Brush Chart", type1: "area", type: "line", height: "175", chart: { options: lineData.brushoptions, series: lineData.brushseries, secondaryOptions: lineData.brush1options, secondarySeries: lineData.brush1series } },
        { id: 6, title: "StepLine Chart", type: "line", height: "350", chart: { options: lineData.steplineoptions, series: lineData.steplineseries } },
        { id: 7, title: "Gradient Line Chart", type: "line", height: "350", chart: { options: lineData.gradientoptions, series: lineData.gradientseries } },
        { id: 8, title: "Missing/Null Values Chart", type: "line", height: "350", chart: { options: lineData.missingoptions, series: lineData.missingseries } },
        { id: 9, title: "Real Time Chart", type: "line", height: "350", chart: { options: lineData.realtimeoptions, series: lineData.realtimeseries } },
        { id: 10, title: "Dashed Line Chart", type: "line", height: "350", chart: { options: lineData.dashedoptions, series: lineData.dashedseries } },
        { id: 11, title: "Syncing Charts", type: "line", height: "166", chart: { options: lineData.syncingoptions, series: lineData.syncingseries, secondaryOptions: lineData.syncing1options, secondarySeries: lineData.syncing1series, tertiaryOptions: lineData.syncing2options, tertiarySeries: lineData.syncing2series } }
      ],
    };
  }
};
</script>


<template>
  <PageHeader :propData="dataToPass" />
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexLineChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" />
    </div>
  </div>
</template>

<style scoped></style>
