<script lang="ts">
import { GoogleMap, Polygon } from "vue3-google-map";
import { reactive } from "vue";
export default {
  components: {
    GoogleMap,
    Polygon,
  },
  setup() {
    const center = { lat: 24.886, lng: -70.268 };
    const triangleCoords = [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ];
    const bermudaTriangle = {
      paths: triangleCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    };

    return { center, bermudaTriangle };
  },
}
</script>

<template>
  <GoogleMap api-key="AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA" :center="center" :zoom="3"
    style="width: 100%; height: 300px">
    <Polygon :options="bermudaTriangle" />
  </GoogleMap>
</template>

<style scoped></style>
