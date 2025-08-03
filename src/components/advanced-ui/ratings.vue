<script lang="ts">
import { defineComponent } from 'vue';
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import StarRating from 'vue-star-rating';
import { ratingConfigs } from "../../data/advanced-ui/ratings";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default defineComponent({
  components: {
    PageHeader,
    StarRating,
    SimpleCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Ratings",
        list: ['Advanced UI', 'Ratings'],
      },

      ratingConfigs,
      resetableRating: 1,
    };
  },
});
</script>

<template>
  <PageHeader :propData="dataToPass" />
  <div class="row">
    <div v-for="(ratingConfig, index) in ratingConfigs" :key="index" :class="ratingConfig.colClass">
      <SimpleCardComponent :title="ratingConfig.title">
        <div class="d-flex flex-wrap align-items-center justify-content-between">
          <p class="fs-14 mb-0 fw-semibold">{{ ratingConfig.description }}</p>
          <star-rating v-bind="ratingConfig.starOptions" v-model:rating="ratingConfig.rating"></star-rating>
          <button v-if="ratingConfig.resetable" class="btn btn-icon btn-sm btn-danger-light ms-3"
            id="rater-reset-button" @click="ratingConfig.rating = 0"><v-tooltip activator="parent"
              location="top">Reset</v-tooltip>
            <i class="ri-restart-line"></i>
          </button>
        </div>
      </SimpleCardComponent>
    </div>
  </div>
</template>

<style scoped></style>
