<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import { DoughnutChart, LineChart, BarChart, ScatterChart, BubbleChart, RadarChart, PolarAreaChart, PieChart } from 'vue-chart-3';
import { Chart as ChartJS, registerables } from 'chart.js';
import * as chartjsData from "../../data/chartjs/chartjs";
import ChartjsCardComponent from "../../shared/components/@spk/charts/chartjs-cards.vue"


ChartJS.register(...registerables);

export default {
  components: {
    PageHeader,
    DoughnutChart,
    LineChart,
    BarChart,
    ScatterChart,
    BubbleChart,
    RadarChart,
    PolarAreaChart,
    PieChart,
    ChartjsCardComponent
  },
  data() {
    return {

      dataToPass: {
        current: "ChartJs Charts",
        list: ['Charts', 'ChartJs Charts']
      },
      chartjsData,
      chartjs: [
        { type: LineChart, title: 'Chartjs Line Chart', data: chartjsData.linedata, height: "300px" },
        { type: BarChart, title: 'Chartjs Bar Chart', data: chartjsData.bardata, height: "300px" },
        { type: PieChart, title: 'Chartjs Pie Chart', data: chartjsData.singledata, height: "300px" },
        { type: DoughnutChart, title: 'Chartjs Doughnut Chart', data: chartjsData.singledata, height: "300px" },
        { type: PolarAreaChart, title: 'Chartjs Polar Chart', data: chartjsData.singledata2, height: "300px" },
        { type: RadarChart, title: 'Chartjs Radial Chart', data: chartjsData.radialdata, height: "300px" },
        { type: ScatterChart, title: 'Chartjs Scatter Chart', data: chartjsData.scatterdata, height: "300px" },
        { type: BubbleChart, title: 'Chartjs Bubble Chart', data: chartjsData.Bubbledata, height: "300px" },
      ],
    };
  }
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div v-for="(card, index) in chartjs" :key="index" class="col-xl-6">
      <ChartjsCardComponent :title="card.title" :type="card.type" :height="card.height" :data="card.data" />
    </div>
  </div>
</template>
