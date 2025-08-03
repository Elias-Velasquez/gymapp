<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import BlogCardComponent from '../../../shared/components/@spk/pages/blog-cards.vue';
import BlogBgCardComponent from '../../../shared/components/@spk/pages/blog-bgImg.vue';
import { blog, blog1, blog2, blogBg, featuredPosts } from '../../../data/pages/blog';
import blogSuggestion from "../../../shared/components/@spk/pages/blog-suggestion.vue";

export default {
    components: {
        PageHeader,
        BlogCardComponent,
        BlogBgCardComponent,
        blogSuggestion
    },
    data() {
        return {
            dataToPass: {
                current: "Blog",
                list: ['Pages', 'Blog', 'Blog']
            },
            blog, blog1, blog2, blogBg, featuredPosts
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <div class="container-lg my-5">
        <!-- Start::row-1 -->
        <div class="row">
            <div class="col-xxl-6 col-xl-12 ">
                <div class="card custom-card overflow-hidden">
                    <div class="card-body p-0">
                        <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade"
                            data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active" data-bs-interval="2000">
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/media-70.jpg" class="d-block w-100" alt="...">
                                        <div class="carousel-caption blog-caption text-start">
                                            <p class="mb-2">The agency has a diverse workforce of just under 18,000
                                                civil
                                                servants, and works with many more U.S.</p>
                                            <h6 class="fw-semibold mb-2 text-fixed-white">N.A.S.A</h6>
                                            <div class="d-flex align-items-center">
                                                <span>
                                                    <img src="/images/faces/15.jpg" alt=""
                                                        class="avatar avatar-sm avatar-rounded me-2">
                                                </span>
                                                <div class="fw-semibold">Json Taylor - <span
                                                        class="fs-11 op-7 fw-normal">12,Dec
                                                        2022 - 04:34PM</span></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/media-71.jpg" class="d-block w-100" alt="...">
                                        <div class="carousel-caption blog-caption text-start">
                                            <p class="mb-2">NASA is committed to providing all categories of businesses
                                                in
                                                both
                                                NASA prime contracts and subcontracts. </p>
                                            <h6 class="fw-semibold mb-2 text-fixed-white">NASA Businesses</h6>
                                            <div class="d-flex align-items-center">
                                                <span>
                                                    <img src="/images/faces/15.jpg" alt=""
                                                        class="avatar avatar-sm avatar-rounded me-2">
                                                </span>
                                                <div class="fw-semibold">Elisha Keens - <span
                                                        class="fs-11 op-7 fw-normal">23,Dec 2022 - 11:27AM</span></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item" data-bs-interval="2000">
                                    <a href="javascript:void(0);">
                                        <img src="/images/media/media-72.jpg" class="d-block w-100" alt="...">
                                        <div class="carousel-caption blog-caption text-start">
                                            <p class="mb-2">NASA Nelson served in the U.S. Senate for 18 years from
                                                Florida
                                                space shuttle mission 61-C in 1986.</p>
                                            <h6 class="fw-semibold mb-2 text-fixed-white">NASA Leadership</h6>
                                            <div class="d-flex align-items-center">
                                                <span>
                                                    <img src="/images/faces/4.jpg" alt=""
                                                        class="avatar avatar-sm avatar-rounded me-2">
                                                </span>
                                                <div class="fw-semibold">Melissa Blue - <span
                                                        class="fs-11 op-7 fw-normal">16,Dec 2022 - 9:45AM</span></div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-6 col-xl-12">
                <div class="row">
                    <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6" v-for="card in blog" :key="card.id">
                        <BlogCardComponent link="/pages/blog/blog-details" :card="card">
                        </BlogCardComponent>
                    </div>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h5 class="mb-0 fw-semibold">Popular Topics</h5>
                    <p class="mb-0 fw-semibold">
                        <a href="javascript:void(0);" class="text-primary"><u>View All</u></a>
                    </p>
                </div>
                <div class="row">
                    <div class="col-xxl-2 col-xl-2 col-md-4 col-sm-4 col-6" v-for="card in blogBg" :key="card.id">
                        <BlogBgCardComponent :card="card" customCardClass="bg-dark overlay-card text-fixed-white"
                            mainContentClass="card-img-overlay d-flex flex-column p-0 over-content-bottom"
                            cardFooterClass="border-top-0">
                        </BlogBgCardComponent>
                    </div>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="row">
                    <div class="col-xl-6 col-xxl-8 col-lg-12 col-md-12">
                        <div class="row">
                            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6" v-for="card in blog1" :key="card.id">
                                <BlogCardComponent link="/pages/blog/blog-details" :card="card" />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-xxl-4 col-lg-12 col-md-12">
                        <div class="card custom-card">
                            <div class="card-header d-flex align-items-center justify-content-between">
                                <div class="card-title">
                                    Featured Blogs
                                </div>
                                <div>
                                    <span class="badge bg-primary-transparent">32 Blogs</span>
                                </div>
                            </div>
                            <div class="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item" v-for="post in featuredPosts" :key="post.id">
                                        <blogSuggestion :post="post" :showIcon="true" />
                                    </li>
                                    <li class="list-group-item text-center">
                                        <button class="btn btn-primary-light">Load more</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-12">
                <div class="row">
                    <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" v-for="card in blog2">
                        <BlogCardComponent link="/pages/blog/blog-details" :card="card">
                        </BlogCardComponent>
                    </div>
                </div>
            </div>
        </div>
        <!--End::row-1 -->

        <!-- Start: pagination -->
        <div class="float-end mb-4">
            <nav aria-label="Page navigation" class="">
                <ul class="pagination mb-0">
                    <li class="page-item disabled">
                        <a class="page-link" href="javascript:void(0);">
                            Prev
                        </a>
                    </li>
                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                    <li class="page-item">
                        <a class="page-link" href="javascript:void(0);">
                            <i class="bi bi-three-dots"></i>
                        </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="javascript:void(0);">17</a></li>
                    <li class="page-item">
                        <a class="page-link text-primary" href="javascript:void(0);">
                            next
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- End: pagination -->
    </div>
</template>

<style scoped></style>
