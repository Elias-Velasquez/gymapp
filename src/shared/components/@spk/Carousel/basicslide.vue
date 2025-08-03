<template>
  <Carousel :settings="settings" :breakpoints="breakpoints" :autoplay="20000" :wrap-around="true">
    <Slide v-for="slide in owlCarouselData" :key="slide">
      <div class="item">
        <div class="card">
          <div class="card-body user-card text-center p-5">
            <div class="main-img-user avatar-lg online text-center">
              <img :src="slide.src" />
            </div>
            <div class="mt-2">
              <h5 class="mb-1">Joyce Chua</h5>
              <p class="mb-1">Team Leader</p>
              <span class="text-muted"><i class="far fa-check-circle text-success mx-1"></i>Verified</span>
            </div>
            <a href="javascript:;" class="btn ripple btn-primary btn-sm mt-3">View Profile</a>
          </div>
        </div>
      </div>
    </Slide>

    <template>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import img6 from "/images/faces/6.jpg";
import img5 from "/images/faces/5.jpg";
import img7 from "/images/faces/7.jpg";
import img9 from "/images/faces/9.jpg";
import img10 from "/images/faces/10.jpg";
import img8 from "/images/faces/11.jpg";

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
        src: img7,
        name: "Steem STEEM",
        value: 2.345467,
      },
    ],

    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: "center",
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: "start",
      },
      1400: {
        itemsToShow: 5,
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
