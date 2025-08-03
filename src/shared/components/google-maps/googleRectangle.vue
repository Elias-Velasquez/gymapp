<script lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
export default {
  components: {
    GoogleMap,
    Marker,
  },
  setup() {
    const center = { lat: 33.678, lng: -116.243 };
    const rectangle = {
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      bounds: {
        north: 33.685,
        south: 33.671,
        east: -116.234,
        west: -116.251,
      },
    };

    return { center, rectangle };
  },
}
</script>

<template>
  <GoogleMap api-key="AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA" :center="center" :zoom="3"
    style="width: 100%; height: 300px" mapTypeId="terrain">
    <Rectangle :options="rectangle" />
  </GoogleMap>
</template>

<style scoped></style>
