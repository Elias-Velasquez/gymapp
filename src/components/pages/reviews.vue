<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import ReviewsCardComponent from "../../shared/components/@spk/pages/reviews-cards.vue";
import face2 from "/images/faces/2.jpg";
import face3 from "/images/faces/3.jpg";
import face4 from "/images/faces/4.jpg";
import face15 from "/images/faces/15.jpg";
import face16 from "/images/faces/16.jpg";
import face5 from "/images/faces/5.jpg";
import face12 from "/images/faces/12.jpg";
import face7 from "/images/faces/7.jpg";
import face10 from "/images/faces/10.jpg";

export default {
    components: {
        PageHeader, ReviewsCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Reviews",
                list: ['Pages', 'Reviews']
            },
            testimonials: [
                { id: 1, name: "Json Taylor", position: "CEO OF NORJA", avatar: face15, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: [{ icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "half-fill" },], date: "12 days ago", },
                { id: 2, name: "Melissa Blue", position: "MANAGER CHO", avatar: face4, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: [{ icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "half-fill" },], date: "7 days ago", },
                { id: 3, name: "Kiara Advain", position: "CEO OF EMPIRO", avatar: face2, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: [{ icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "line" },], date: "2 days ago", },
                { id: 4, name: "Jhonson Smith", position: "CHIEF SECRETARY MBIO", avatar: face10, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: [{ icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "half-fill" },], date: "16 hrs ago", },
                { id: 5, name: "Dwayne Stort", position: "CEO ARMEDILLO", avatar: face12, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: [{ icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "line" },], date: "22 days ago", },
                { id: 6, name: "Jasmine Kova", position: "AGGENT AMIO", avatar: face3, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: [{ icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "half-fill" },], date: "26 days ago", },
                { id: 7, name: "Dolph MR", position: "CEO MR BRAND", avatar: face16, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: [{ icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "fill" },], date: "1 month ago", },
                { id: 8, name: "Brenda Simpson", position: "CEO AIBMO", avatar: face5, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: [{ icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "half-fill" },], date: "1 month ago", },
                { id: 9, name: "Julia Sams", position: "CHIEF SECRETARY BHOL", avatar: face7, message: "- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  --", rating: [{ icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "fill" }, { icon: "fill" },], date: "2 months ago", },
            ]
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container-lg reviews-container">
        <!-- Start::row-1 -->
        <div class="row justify-content-center">
            <div class="col-xxl-10 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div class="row gy-4">
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12" v-for="card in testimonials"
                        :key="card.id">
                        <ReviewsCardComponent :card="card" customCardClass="testimonial-card" :showReadmore=true
                            :showStarRating="true" />
                    </div>
                    <ul class="pagination mb-5 justify-content-end">
                        <li class="page-item disabled">
                            <a class="page-link" href="javascript:void(0);">
                                Prev
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item">
                            <a class="page-link text-primary" href="javascript:void(0);">
                                next
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--End::row-1 -->
    </div>
</template>

<style scoped></style>
