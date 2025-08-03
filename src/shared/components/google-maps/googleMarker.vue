<script lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
import { reactive } from "vue";
export default {
  components: {
    GoogleMap,
    Marker,
  },
  setup() {
    const center = { lat: 42.35805, lng: -71.0636 };
    const positions = reactive({
      lists: [{ lat: 42.35805, lng: -71.0636 }],
    });
    return { center, positions };
  },
}
</script>

<template>
  <GoogleMap api-key="AIzaSyCW16SmpzDNLsrP-npQii6_8vBu_EJvEjA" :center="center" :zoom="3"
    style="width: 100%; height: 300px">
    <Marker v-for="(location, index) in positions.lists" :key="index"
      :options="{ position: { lat: location.lat, lng: location.lng } }" />
  </GoogleMap>
</template>

<style scoped></style>
