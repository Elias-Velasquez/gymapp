<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

declare const jsVectorMap: any;

export default defineComponent({
  components: {
    PageHeader,
    SimpleCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Leaflet",
        list: ['Maps', 'JsVector'],
      },
      data: [
        { id: 1, name: "Basic Vector Map", chartid: "vector-map" },
        { id: 2, name: "Map With Markers", chartid: "marker-map" },
        { id: 3, name: "Map With Image Markers", chartid: "marker-image-map" },
        { id: 4, name: "Map With Lines", chartid: "lines-map" },
      ]
    };
  },

  setup() {
    onMounted(() => {
      // Basic Vector Map
      const basicmap = new jsVectorMap({
        selector: "#vector-map",
        map: "world_merc",
      });

      // Map with Markers
      const markers = [
        { name: 'Russia', coords: [61, 105], style: { fill: '#5c5cff', stroke: 'red' } },
        { name: 'Greenland', coords: [72, -42], style: { fill: '#ff9251' } },
        { name: 'Canada', coords: [56, -106], style: { fill: '#3cd66c' } },
        { name: 'Palestine', coords: [31.5, 34.8], style: { fill: 'yellow' } },
        { name: 'Brazil', coords: [-14.2350, -51.9253], style: { fill: '#000' } },
      ];

      const markersmap = new jsVectorMap({
        map: 'world_merc',
        selector: '#marker-map',
        markersSelectable: true,
        onMarkerSelected(index: number, isSelected: boolean, selectedMarkers: any[]) {
          console.log(index, isSelected, selectedMarkers);
        },
        labels: {
          markers: {
            render(marker: any) {
              return marker.name;
            },
          },
        },
        markers: markers,
        markerStyle: {
          hover: { stroke: "#DDD", strokeWidth: 3, fill: '#FFF' },
          selected: { fill: '#ff525d' },
        },
        markerLabelStyle: {
          initial: {
            fontFamily: 'Poppins',
            fontSize: 13,
            fontWeight: 500,
            fill: '#35373e',
          },
        },
      });

      // Map with Image Markers
      const imagemarkers = [
        { name: 'Palestine', coords: [31.5, 34.8] },
        { name: 'Russia', coords: [61, 105] },
        { name: 'Greenland', coords: [72, -42] },
        { name: 'Canada', coords: [56, -106] },
      ];

      const imagemap = new jsVectorMap({
        map: 'world_merc',
        selector: '#marker-image-map',
        labels: {
          markers: {
            render(marker: any) {
              return marker.name;
            },
          },
        },
        markers: imagemarkers,
        markerStyle: {
          initial: { image: true },
        },
        series: {
          markers: [
            {
              attribute: 'image',
              scale: {
                marker1title: {
                  url: `${import.meta.env.BASE_URL}images/brand-logos/toggle-logo.png`,
                  offset: [10, 0],
                },
                marker2title: {
                  url: `${import.meta.env.BASE_URL}images/brand-logos/toggle-logo.png`,
                  offset: [10, 0],
                },
              },
              values: {
                0: 'marker1title',
                1: 'marker2title',
                2: 'marker2title',
                3: 'marker1title',
              },
            },
          ],
        },
      });

      // Map with Lines
      const linesmarkers = [
        { name: 'Russia', coords: [61.5240, 105.3188] },
        { name: 'Egypt', coords: [26.8206, 30.8025] },
        { name: 'Greenland', coords: [71.7069, -42.6043], offsets: [2, 10] },
        { name: 'Canada', coords: [56, -106], offsets: [-7, 12] },
      ];

      const lines = [
        { from: 'Russia', to: 'Egypt', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
        { from: 'Canada', to: 'Russia', style: { stroke: '#abb0b7', strokeWidth: 1.5 } },
      ];

      new jsVectorMap({
        map: 'world_merc',
        selector: '#lines-map',
        labels: {
          markers: {
            render(marker: any, index: number) {
              return marker.name;
            },
            offsets(index: number) {
              return linesmarkers[index].offsets || [0, 0];
            },
          },
        },
        markers: linesmarkers,
        lines: lines,
        lineStyle: { animation: true, strokeDasharray: "6 3 6" },
        markerStyle: {
          initial: { r: 6, fill: '#1266f1', stroke: '#fff', strokeWidth: 3 },
        },
        markerLabelStyle: {
          initial: {
            fontSize: 13,
            fontWeight: 500,
            fill: '#35373e',
          },
        },
      });

      // World Vector Map
      // new jsVectorMap({
      //   selector: "#world-map",
      //   map: "world",
      //   regionStyle: {
      //     initial: {
      //       stroke: "#e9e9e9",
      //       strokeWidth: .15,
      //       fill: "#845adf",
      //       fillOpacity: 1,
      //     },
      //   },
      // });
    });
  },
});
</script>


<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div v-for="(map, index) in data" :key="index" :class="map.id === 5 ? 'col-xl-12' : 'col-xl-6'">
      <SimpleCardComponent :title="map.name">
        <div :id="map.chartid" style="width: 100%; height: 350px;"></div>
      </SimpleCardComponent>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped></style>
