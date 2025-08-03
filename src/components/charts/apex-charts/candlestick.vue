<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as candleData from "../../../data/apexcharts/apexchart-candlestick"
import ChartCardComponent from "../../../shared/components/@spk/dashboard/chart-cards.vue"
export default {
  components: {
    PageHeader,
    ChartCardComponent,
  },
  data() {
    return {
      dataToPass: {
        current: "Apex Candlestick Charts",
        list: ['Charts', 'Apexcharts', 'Apex Candlestick Charts']
      },
      candleData,
      ApexCandlestickChart: [
        { id: 1, title: "Basic Candlestick Chart", type: "candlestick", height: "350", chart: { options: candleData.basicCandleoptions, series: candleData.basicCandleseries }, },
        { id: 2, title: "Candlestick Synced With Brush Chart", type: "", height: "170", secondaryheight: "170", chart: { options: candleData.syncedoptions, series: candleData.syncedseries, secondaryOptions: candleData.brushoptionsBar, secondarySeries: candleData.brushseries12 }, },
        { id: 3, title: "Candlestick With Cateory X-axis", type: "candlestick", height: "350", chart: { options: candleData.categoryoptions, series: candleData.categoryseries }, },
        { id: 4, title: "Candlestick With Line Chart", chartId: "candlestick-line", type: "candlestick", height: "350", chart: { options: candleData.lineCombooptions, series: candleData.lineComboseries }, },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-6" v-for="card in ApexCandlestickChart" :key="card.id">
      <ChartCardComponent :card="card" :title="card.title" />
    </div>
  </div>
  <!--End::row-1 -->
</template>

<style scoped></style>
