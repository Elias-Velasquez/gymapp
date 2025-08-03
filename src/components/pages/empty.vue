<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      dataToPass: {
        current: "Empty",
        list: ['Pages', 'Empty']
      },
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row"></div>
  <!--End::row-1 -->
</template>

<style scoped></style>
