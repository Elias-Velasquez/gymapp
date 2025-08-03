<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import media40 from '/images/media/media-40.jpg';
import media41 from '/images/media/media-41.jpg';
import media42 from '/images/media/media-42.jpg';
import media43 from '/images/media/media-43.jpg';
import media44 from '/images/media/media-44.jpg';
import media45 from '/images/media/media-45.jpg';
import media46 from '/images/media/media-46.jpg';
import media60 from '/images/media/media-60.jpg';

export default {
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Gallery",
                list: ['Apps', 'Gallery']
            },
            lightbox: null,
            items: [
                { src: media40, w: 600, h: 400, thumbnail: media40, alt: 'alt' },
                { src: media41, w: 600, h: 400, thumbnail: media41, alt: 'alt' },
                { src: media42, w: 600, h: 400, thumbnail: media42, alt: 'alt' },
                { src: media43, w: 600, h: 400, thumbnail: media43, alt: 'alt' },
                { src: media44, w: 600, h: 400, thumbnail: media44, alt: 'alt' },
                { src: media45, w: 600, h: 400, thumbnail: media45, alt: 'alt' },
                { src: media46, w: 600, h: 400, thumbnail: media46, alt: 'alt' },
                { src: media60, w: 600, h: 400, thumbnail: media60, alt: 'alt' },
            ],
        };
    },
    mounted() {
        if (!this.lightbox) {
            this.lightbox = new PhotoSwipeLightbox({
                gallery: '#RandomUniqueId',
                children: 'a',
                pswpModule: () => import('photoswipe'),
                bgOpacity: 0.8,
                wheelToZoom: true,
                zoomTitle: 'Zoom',
            });
            this.lightbox.init();
        }
    },
    unmounted() {
        if (this.lightbox) {
            this.lightbox.destroy();
            this.lightbox = null;
        }
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!--Start::row-1-->
    <div class="row" id="RandomUniqueId">
        <div class="col-lg-3 col-md-3 col-sm-6 col-12" v-for="(image, key) in items" :key="key">
            <a class="card" :href="image.src" :data-pswp-width="image.w" :data-pswp-height="image.h" target="_blank"
                rel="noreferrer">
                <img :src="image.thumbnail" alt="" style="width:100%; border-radius:0.25rem;overflow:hidden" />
            </a>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
