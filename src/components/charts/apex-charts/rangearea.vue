<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as rangeareaData from "../../../data/apexcharts/apexchart-rangearea"
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue"
export default {
  components: {
    PageHeader,
    ChartCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Range Area Charts",
        list: ['Charts', 'Apexcharts', 'Apex Range Area Charts']
      },
      rangeareaData,
      ApexRadialbarChart: [
        { id: 1, title: "Basic Range Area Chart", type: "rangeArea", height: "350", chart: { options: rangeareaData.basicRangeoptions, series: rangeareaData.basicRangeseries }, },
        { id: 2, title: "Combo Range Area Chart", type: "rangeArea", height: "350", chart: { options: rangeareaData.rangeAreaOpctions, series: rangeareaData.rangeArea }, },
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
