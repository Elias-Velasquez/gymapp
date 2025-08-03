<template>
  <Carousel :settings="settings" :breakpoints="breakpoints" :autoplay="1500" :wrap-around="true">
    <Slide v-for="slide in owlCarouselData" :key="slide">
      <div class="item">
        <a href="javascript:void(0)" class="me-2">
          <img :src="slide.src" />
        </a>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import img6 from "/images/media/jobs-landing/blog/1.jpg";
import img5 from "/images/media/jobs-landing/blog/2.jpg";
import img7 from "/images/media/jobs-landing/blog/3.jpg";
import img9 from "/images/media/jobs-landing/blog/1.jpg";
import img10 from "/images/media/jobs-landing/blog/3.jpg";
import img8 from "/images/media/jobs-landing/blog/2.jpg";

export default defineComponent({
  name: "Breakpoints",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings

    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    owlCarouselData: [
      {
        id: 1,
        src: img10,
        name: "Bitcoin BTC",
        value: 1.343434,
      },
      {
        id: 2,
        src: img9,
        name: "Ethereum ETH",
        value: 3.763674,
      },
      {
        id: 3,
        src: img8,
        name: "Ripple  XRP",
        value: 12.53647,
      },
      {
        id: 4,
        src: img7,
        name: "litecoin  LTC",
        value: 3.635387,
      },
      {
        id: 5,
        src: img5,
        name: "Dash DASH",
        value: 3.635387,
      },
      {
        id: 6,
        src: img6,
        name: "Monero  XMR",
        value: 5.34578,
      },
      {
        id: 7,
        src: img8,
        name: "Neo  NEO",
        value: 4.435456,
      },
      {
        id: 8,
        src: img8,
        name: "Steem STEEM",
        value: 2.345467,
      },
    ],

    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 4,
        snapAlign: "start",
      },
    },
  }),
});
</script>
<style scoped>
.carousel__next {
  display: none;
}

.carousel__prev {
  display: none;
}
</style>
