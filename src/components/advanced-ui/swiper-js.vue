<script lang="ts">
import { defineComponent, ref } from 'vue';
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import * as swiperjsData from "../../data/swiperjs-cards";
import SwiperjsCardComponent from "../../shared/components/@spk/swiperjs-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default defineComponent({
  components: {
    PageHeader,
    swiperjsData,
    SwiperjsCardComponent,
    SimpleCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "SwiperJs",
        list: ['Advanced UI', 'SwiperJs']
      },
      swiperjsData
    };
  },
  setup() {
    const thumbsSwiper = ref(null);
    const setThumbsSwiper = (swiper: any) => {
      thumbsSwiper.value = swiper;
    };

    return {
      thumbsSwiper,
      setThumbsSwiper
    };
  }
});
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <div class="row">
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Basic Swiper">
        <SwiperjsCardComponent :swiperItems="swiperjsData.basic" swiperClass="notification-slider" :pagination="false"
          :navigation="false" :autoplay="true">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Swiper With Navigation">
        <SwiperjsCardComponent :swiperItems="swiperjsData.withNavigation" swiperClass="notification-slider"
          :pagination="false" :navigation="true" :autoplay="true">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Swiper with Pagination">
        <SwiperjsCardComponent :swiperItems="swiperjsData.withPagination" swiperClass="notification-slider"
          :pagination="true" :navigation="false" :autoplay="true">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Dynamic Pagination">
        <SwiperjsCardComponent :swiperItems="swiperjsData.dynamicPagination" swiperClass="notification-slider"
          :navigation="false" :autoplay="true" :pagination="{ dynamicBullets: true }">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Pagination With Progress">
        <SwiperjsCardComponent :swiperItems="swiperjsData.paginationWithProgress" swiperClass="notification-slider"
          :autoplay="true" :pagination="{ type: 'progressbar' }" :navigation="true">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Pagination Fraction">
        <SwiperjsCardComponent :swiperItems="swiperjsData.PaginationFraction" swiperClass="notification-slider"
          :autoplay="true" :pagination="{ type: 'fraction' }" :navigation="true">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Custom Pagination">
        <SwiperjsCardComponent :swiperItems="swiperjsData.PaginationFraction"
          swiperClass="notification-slider custom-pagination" :autoplay="true" :pagination="true"
          :navigation="false">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Keyboard Control">
        <SwiperjsCardComponent :swiperItems="swiperjsData.KeyboardControl" swiperClass="notification-slider"
          :autoplay="true" :slidesPerView="1" :spaceBetween="30" :keyboard="{ enabled: true }"
          :pagination="{ clickable: true }" :navigation="true">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Nested Swiper">
        <SwiperjsCardComponent :swiperItems="swiperjsData.NestedSwiper" swiperClass="notification-slider"
          :slidesPerView="1" :spaceBetween="30" :keyboard="{ enabled: true }" :pagination="{ clickable: true }"
          :navigation="true">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Effect Cube">
        <SwiperjsCardComponent :swiperItems="swiperjsData.effectCube" swiperClass="notification-slider" :effect="'cube'"
          :grabCursor="true" :cubeEffect="{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }"
          :pagination="true" :navigation="false">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Effect Fade">
        <SwiperjsCardComponent :swiperItems="swiperjsData.effectFade" swiperClass="notification-slider"
          :spaceBetween="30" :effect="'fade'" :navigation="true" :pagination="{ clickable: true }">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
      <SimpleCardComponent title="Effect Flip">
        <SwiperjsCardComponent :swiperItems="swiperjsData.EffectFlip" swiperClass="notification-slider" :effect="'flip'"
          :grabCursor="true" :pagination="true" :navigation="true">
          <template #default="{ card }">
            <img :src="card.src" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
  </div>
  <div class="row">
    <div class="col-xl-12">
      <SimpleCardComponent title="Effect Coverflow">
        <SwiperjsCardComponent :swiperItems="swiperjsData.effectCoverflow" swiperClass="notification-slider"
          :effect="'coverflow'" :grabCursor="true" :autoHeight="true" :pagination="true" :navigation="false"
          :coverflowEffect="{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }" :breakpoints="{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
              centeredSlides: false,
            },
            1200: {
              slidesPerView: 5,
              spaceBetween: 50,
              centeredSlides: false,
            }
          }">
          <template #default="{ card }">
            <div :style="{ height: '300px' }">
              <img :src="card.src" :class="card.imgClass" alt="Image" />
            </div>
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
  </div>
  <div class="row">
    <div class="col-xl-12">
      <SimpleCardComponent title="Thumbs Gallery">
        <SwiperjsCardComponent :swiperItems="swiperjsData.thumbsGallery" swiperClass="mySwiper2" :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }" :spaceBetween="10" :pagination="false" :navigation="true" :thumbs="{ swiper: thumbsSwiper }">
          <template #default="{ card }">
            <img :src="card.src" class="img-fluid rounded" alt="Image" />
          </template>
        </SwiperjsCardComponent>
        <SwiperjsCardComponent :swiperItems="swiperjsData.thumbsGallery" swiperClass="mySwiper mt-3"
          @swiper="setThumbsSwiper" :spaceBetween="10" :slidesPerView="4" :freeMode="true" :watchSlidesProgress="true"
          :pagination="false" :navigation="false">
          <template #default="{ card }">
            <img :src="card.src" class="img-fluid" alt="Image" />
          </template>
        </SwiperjsCardComponent>
      </SimpleCardComponent>
    </div>
  </div>
</template>

<style scoped></style>
