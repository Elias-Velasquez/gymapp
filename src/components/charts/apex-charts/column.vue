<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue";
import * as culumnData from "../../../data/apexcharts/apexchart-column";

export default {
  components: {
    PageHeader,
    ChartCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Column Charts",
        list: ['Charts', 'Apexcharts', 'Apex Column Charts']
      },
      culumnData,
      ApexColumnChart: [
        { id: 1, title: "Basic Column Chart", type: "bar", height: "350", chart: { options: culumnData.basicColumnoptions, series: culumnData.basicColumnseries }, },
        { id: 2, title: "Column Chart With Datalabels", type: "bar", height: "350", chart: { options: culumnData.datalabelsColumnoptions, series: culumnData.datalabelsColumnseries }, },
        { id: 3, title: "Stacked Column Chart", type: "bar", height: "350", chart: { options: culumnData.stackedoptions, series: culumnData.stackedseries }, },
        { id: 4, title: "100% Stacked Column Chart", type: "bar", height: "350", chart: { options: culumnData.stackedfulloptions, series: culumnData.stackedfullseries }, },
        { id: 5, title: "Column Chart With Markers", type: "bar", height: "350", chart: { options: culumnData.markersoptions, series: culumnData.markersseries }, },
        { id: 6, title: "Column Chart With Rotated Labels", cardBodyClass: "custom-chart-class", type: "bar", height: "350", chart: { options: culumnData.rotatedoptions, series: culumnData.rotatedseries }, },
        { id: 7, title: "Column Chart With Negative Values", type: "bar", height: "350", chart: { options: culumnData.negativeoptions, series: culumnData.negativeseries }, },
        { id: 8, title: "Range Column Chart", type: "bar", height: "350", chart: { options: culumnData.rangeoptions, series: culumnData.rangeseries }, },
        { id: 9, title: "Distributed Columns Chart", type: "bar", height: "350", chart: { options: culumnData.distributedoptions, series: culumnData.distributedseries }, },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexColumnChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" :cardBodyClass="card.cardBodyClass" />
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>
