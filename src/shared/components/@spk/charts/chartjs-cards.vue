<script lang="ts">
export default {
  props: {
    customCardClass: String,
    cardHeaderClass: String,
    title: String,
    height: String,
    cardBodyClass: String,
    type: {
      type: Object as () => Vue.Component,
      required: true
    },
    data: {
      type: [Object, Array],
      required: true
    }
  }
};
</script>

<template>
  <div :class="['card custom-card', customCardClass]">
    <div :class="['card-header', cardHeaderClass]">
      <div class="card-title">{{ title }}</div>
    </div>
    <div :class="['card-body', cardBodyClass]">
      <component :is="type" :height="height" :chartData="data" />
    </div>
  </div>
</template>

<style scoped></style>
