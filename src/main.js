import './style.scss';
import { createApp } from 'vue';
import router from './router/index';
import App from './App.vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import VueApexCharts from 'vue3-apexcharts';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world-merc.js';
import 'jsvectormap/dist/maps/world.js';
import 'jsvectormap/dist/jsvectormap.min.css';
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';
import Vue3ColorPicker from 'vue3-colorpicker';
import 'vue3-colorpicker/style.css';
import DropZone from 'dropzone-vue';
import Datepicker1 from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import VueSweetalert2 from 'vue-sweetalert2';
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { Countdown } from 'vue3-flip-countdown';
import multiselect1 from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.css";
import VueCountdown from '@chenfengyuan/vue-countdown';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VueEditor } from "vue3-editor";
import TableComponent from '../src/shared/UI/tables-re.vue';
import { vMaska } from 'maska';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';

const app = createApp(App);
const pinia = createPinia();
const vuetify = createVuetify({ ssr: false, components, directives, });
app.use(pinia);
app.component('apexchart', VueApexCharts);
app.component('Datepicker1', Datepicker1);
app.component("EasyDataTable", Vue3EasyDataTable);
app.component("Countdown", Countdown);
app.component("multiselect1", multiselect1);
app.component(VueCountdown.name, VueCountdown);
app.component("VueEditor", VueEditor);
app.component("TableComponent", TableComponent);
app.component("PerfectScrollbar", PerfectScrollbar);
app.use(router);
app.use(vuetify);
app.use(PerfectScrollbarPlugin);
app.use(Vue3ColorPicker);
app.use(DropZone);
app.use(VueSweetalert2);
app.directive('maska', vMaska);
app.mount('#app');
app.use(Particles, {
    init: async (engine) => {
      await loadSlim(engine);
    },
  });
  

