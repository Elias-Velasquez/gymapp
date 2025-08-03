<script lang="ts">
import { defineComponent } from 'vue';
import face2 from "/images/faces/2.jpg";
import face8 from "/images/faces/8.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face5 from "/images/faces/5.jpg";
import face9 from "/images/faces/9.jpg";
import face10 from "/images/faces/10.jpg";
import face13 from "/images/faces/13.jpg";
import face15 from "/images/faces/13.jpg";
import face1 from "/images/faces/1.jpg";
import face3 from "/images/faces/3.jpg";
import face14 from "/images/faces/14.jpg";
import face6 from "/images/faces/6.jpg";

export default defineComponent({
  data() {
    return {

    };
  },
  methods: {
    deleteItem(index: number) {
      this.tasks.splice(index, 1);
    },
  },
});
</script>

<template>

</template>
<style scoped></style>