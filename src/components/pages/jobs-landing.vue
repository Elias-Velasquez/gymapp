<script lang="ts">

import landingpagemenu from '../../shared/UI/landingpagemenu.vue';
import { menuData } from '../../data/job-landingmenuData';
import { ref } from "vue";
import * as jobLandingData from "../../data/pages/job-landing";
import searchjobs from "../../shared/UI/searchjobs.vue";
import { jobsListData } from '../../data/search-jobs.js';
import BasicCardComponent from "../../shared/UI/basic-cards.vue";
import SwiperjsCardComponent from "../../shared/components/@spk/swiperjs-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';

export default {
    components: {
        landingpagemenu,
        searchjobs,
        BasicCardComponent,
        SwiperjsCardComponent,
        SimpleCardComponent,
        Swiper,
        SwiperSlide,
    },
    setup() {
        const thumbsSwiper = ref(null);

        const setThumbsSwiper = (swiper: any) => {
            thumbsSwiper.value = swiper;
        };
        return {
            pagination: {
                clickable: true,
            },
            modules: [Navigation, Pagination, Keyboard, Autoplay],
            thumbsSwiper,
            setThumbsSwiper
        };
    },
    data() {
        return {
            menuData,
            url: import.meta.env.BASE_URL,
            jobLandingData,
            jobsListData,
        }
    },
    methods: {
        ToggleMenu() {
            let html = document.querySelector('html') as Element;
            if (window.innerWidth <= 992) {
                let dataToggled = html.getAttribute('data-toggled');
                if (dataToggled == 'open') {
                    html.setAttribute('data-toggled', 'close');
                } else {
                    html.setAttribute('data-toggled', 'open');
                }
            }
        },
        mainContentFn() {
            // Used to close the menu in Horizontal and small screen
            let html = document.documentElement;
            if (window.innerWidth < 992) {
                html.setAttribute('data-toggled', 'close');
            }
        },
        //sticky-pin
        handleScroll() {
            if (window.scrollY > 30) {
                let Scolls = document.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.add("sticky-pin");
                });
            } else {
                let Scolls = document.querySelectorAll(".sticky");
                Scolls.forEach((e) => {
                    e.classList.remove("sticky-pin");
                });
            }
        },
    },
    //sticky-pin
    created() {
        window.addEventListener("scroll", this.handleScroll);
        this.handleScroll();
    },
    unmounted() {
        window.removeEventListener("scroll", this.handleScroll);
    },
}
</script>

<template>
    <header class="app-header">
        <div class="main-header-container container-fluid">
            <div class="header-content-left">
                <div class="header-element">
                    <div class="horizontal-logo">
                        <router-link to="/dashboard/crm" class="header-logo">
                            <img src="/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo">
                            <img src="/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark">
                        </router-link>
                    </div>
                </div>
                <div class="header-element">
                    <a href="#" class="sidemenu-toggle header-link" data-bs-toggle="sidebar">
                        <span class="open-toggle">
                            <i class="ri-menu-3-line fs-20"></i>
                        </span>
                    </a>
                </div>
            </div>
            <div class="header-content-right">
                <div class="header-element align-items-center">
                    <div class="btn-list d-lg-none d-block">
                        <router-link to="/authentication/sign-up/basic" class="btn btn-wave btn-primary"> Sign Up
                        </router-link>
                        <router-link to="/apps/jobs/job-post" class="btn btn-wave btn-secondary"> Job Post
                        </router-link>
                        <button class="btn btn-icon btn-success switcher-icon" data-bs-toggle="offcanvas"
                            data-bs-target="#switcher-canvas">
                            <i class="ri-settings-3-line"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div id="responsive-overlay" @click="mainContentFn"></div>
    <aside class="app-sidebar sticky" id="sidebar">
        <div class="container-xl">
            <div class="main-sidebar">
                <nav class="main-menu-container nav nav-pills sub-open">
                    <div class="landing-logo-container">
                        <div class="horizontal-logo">
                            <router-link to="/dashboard/crm" class="header-logo">
                                <img src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo">
                                <img src="/images/brand-logos/desktop-white.png" alt="logo" class="desktop-white">
                            </router-link>
                        </div>
                    </div>
                    <landingpagemenu :menuData="menuData" />
                    <div class="slide-left d-none" id="slide-left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                        </svg>
                    </div>
                    <div class="slide-right d-none" id="slide-right">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24"
                            viewBox="0 0 24 24">
                            <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path>
                        </svg>
                    </div>
                    <div class="d-lg-flex d-none">
                        <div class="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                            <router-link to="/authentication/sign-up/basic" class="btn btn-wave btn-primary"> Sign Up
                            </router-link>
                            <router-link to="/apps/jobs/job-post" class="btn btn-wave btn-secondary"> Job Post
                            </router-link>
                            <button class="btn btn-wave btn-icon btn-light switcher-icon" data-bs-toggle="offcanvas"
                                data-bs-target="#switcher-canvas">
                                <i class="ri-settings-3-line"></i>
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </aside>


    <!-- Start:: Section-1 -->
    <div class="landing-banner" id="home">
        <section class="section pb-0">
            <div class="container main-banner-container">
                <div class="row justify-content-center text-center">
                    <div class="col-xxl-7 col-xl-7 col-lg-8">
                        <div class="">
                            <h5 class="landing-banner-heading mb-3"><span
                                    class="text-secondary fw-bold">6000+</span>Jobs, Find your dream job</h5>
                            <p class="fs-18 mb-5 op-8 fw-normal text-fixed-white">Register &amp; get free access to
                                latest openings worldwide. Create &amp; submit your resume with few easy steps.</p>
                            <div class="mb-3 custom-form-group">
                                <input type="text" class="form-control form-control-lg shadow-sm landing-jobs-form"
                                    placeholder="Job title, Keywords or Company.." aria-label="Recipient's username">
                                <div class="custom-form-btn bg-transparent">
                                    <a href="javascript:void(0);" class="gps-location"><i
                                            class="ti ti-current-location"></i></a>
                                    <button class="btn btn-primary border-0" type="button"><i
                                            class="bi bi-search me-sm-2"></i> <span>Search</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <!-- End:: Section-1 -->

    <!-- Start:: Section-2 -->
    <section class="section section-bg " id="jobs">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-5">
                <div>
                    <p class="fs-12 fw-semibold mb-1">Find jobs</p>
                    <h3 class="fw-semibold mb-0">Browse Jobs by Top Categories</h3>
                    <span class="text-muted fs-15 fw-normal d-block">Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</span>
                </div>
                <div>
                    <a href="javascript:void(0);" class="btn btn-wave btn-primary">
                        View All Categories <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12" v-for="card in jobLandingData.Categories" :key="card.id">
                    <div class="card custom-card border">
                        <div class="row g-0">
                            <div class="col-md-3 col-4">
                                <img :src="card.image" class="img-fluid rounded-start h-100 browse-jobs-image"
                                    alt="...">
                            </div>
                            <div class="col-md-9 col-8 my-auto">
                                <div class="card-body">
                                    <h5 class="card-title fw-semibold">{{ card.title }}</h5>
                                    <p><span class="text-default fw-semibold">{{ card.available }}</span> available</p>
                                    <a class="text-primary fw-semibold" href="javascript:void(0);">Explore Jobs<i
                                            class="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End:: Section-2 -->

    <!-- Start:: Section-3 -->
    <section class="section bg-light" id="steps">
        <div class="container text-center">
            <div class="row justify-content-center text-center mb-5">
                <div class="col-xl-6">
                    <p class="fs-12 fw-semibold mb-1"><span class="landing-section-heading">Steps</span></p>
                    <h3 class="fw-semibold mb-2">How it works ?</h3>
                    <span class="text-muted fs-15 fw-normal d-block">Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</span>
                </div>
            </div>
            <div class="row text-start">
                <div class="col-12 col-md-4" v-for="card in jobLandingData.steps" :key="card.id">
                    <SimpleCardComponent :showCardHeader="false">
                        <div class="mb-3 ms-1">
                            <div class="icon-style">
                                <span class="avatar avatar-lg avatar-rounded bg-primary svg-white"
                                    v-html="card.icon"></span>
                            </div>
                        </div>
                        <h5 class="fw-semibold">
                            {{ card.title }}
                        </h5>
                        <p class="op-8">
                            {{ card.description }}
                        </p>
                        <a class="mx-1 text-primary fw-semibold" href="javascript:void(0);">{{ card.register }}<i
                                class="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i></a>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
    </section>
    <!-- End:: Section-3 -->

    <!-- Start:: Section-4 -->
    <section class="section bg-banner-2 text-fixed-white py-0">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-md-5 col-xl-4 text-center mt-4 d-lg-block d-none">
                    <img src="/images/media/jobs-landing/8.png" width="350" alt="">
                </div>
                <div class="col-md-7 col-xl-8">
                    <div class="my-4">
                        <h2 class="fw-semibold mb-3 text-fixed-white">Are You Looking For A Job? Just <a
                                href="javascript:void(0);" class="text-fixed-white text-decoration-line"> <u>drop</u>
                            </a> resume..</h2>
                        <p class="mb-4 fs-15 op-8 fw-normal">Est amet sit vero sanctus labore no sed nonumy. Sit ipsum
                            sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum.Est amet sit vero
                            sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.. </p>
                        <a href="javascript:void(0);" class="btn btn-light btn-lg"><i class="ti ti-upload"></i> Upload
                            Your Resume</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End:: Section-4 -->

    <!-- Start:: Section-5 -->
    <section class="section" id="features">
        <div class="container">
            <div class="row justify-content-center text-center mb-5">
                <div class="col-xl-6">
                    <p class="fs-12 fw-semibold mb-1"><span class="landing-section-heading">Find jobs</span></p>
                    <h3 class="fw-semibold mb-2">Featured Jobs</h3>
                    <span class="text-muted fs-15 fw-normal d-block">Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua</span>
                </div>
            </div>
            <div class="row mb-3">
                <div class="col-lg-6" v-for="(value, key) in jobsListData.slice(0, 4)" :key="key">
                    <searchjobs :jobsListData=value />
                </div>
            </div>
            <div class="text-center">
                <a href="javascript:void(0);" class="btn btn-lg btn-wave btn-primary">
                    View All Jobs <i class="bi bi-arrow-right"></i>
                </a>
            </div>
        </div>
    </section>
    <!-- End:: Section-5 -->

    <!-- Start:: Section-6 -->
    <section class="section bg-primary">
        <div class="container">
            <div class="row justify-content-center text-center mb-5 text-fixed-white">
                <div class="col-xl-6">
                    <h3 class="fw-semibold mb-2 text-fixed-white">Which Type Of Job You Want ?</h3>
                    <span class="fs-15 fw-normal d-block op-8">Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua</span>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6" v-for="card in jobLandingData.typeOfJob" :key="card.id">
                    <BasicCardComponent cardClass="feature-style" :showCardBody="true">
                        <template v-slot:cardBody>
                            <a href="javascript:void(0);" class="stretched-link"></a>
                            <div class="feature-style-icon bg-primary-transparent" v-html="card.icon"></div>
                            <h5 class="mb-1 fw-semibold text-default">{{ card.title }}</h5>
                            <p class="text-muted">{{ card.available }}</p>
                            <a class="text-primary fw-semibold" href="javascript:void(0);">Explore Jobs<i
                                    class="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i></a>
                        </template>
                    </BasicCardComponent>
                </div>
            </div>
        </div>
    </section>
    <!-- End:: Section-6 -->

    <!-- Start:: Section-7 -->
    <section class="section bg-banner-1 bg-light py-0" id="candidate">
        <div class="container">
            <div class="row align-items-center justify-content-center">
                <div class="col-lg-4 d-lg-block d-none text-center mt-4">
                    <img src="/images/media/jobs-landing/7.png" width="260" alt="">
                </div>
                <div class="col-md-8 my-4">
                    <h2 class="fw-semibold mb-3">Are You Looking For A best Candidate? <br> Just <a
                            href="javascript:void(0);" class="text-primary text-decoration-line"> <u>Publish</u> </a>
                        your
                        job here..</h2>
                    <span class="mb-4 fs-15 fw-normal text-muted d-block">Est amet sit vero sanctus labore no sed
                        nonumy.
                        Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum.Est amet sit
                        vero
                        sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.. </span>
                    <a href="javascript:void(0);" class="btn btn-primary btn-lg"><i class="ti ti-upload"></i> Publish
                        new
                        job</a>
                </div>
            </div>
        </div>
    </section>
    <!-- End:: Section-7 -->

    <!-- Start:: Section-8 -->
    <section class="section">
        <div class="container">
            <div class="row mb-5 justify-content-center text-center">
                <p class="fs-12 fw-semibold mb-1"><span class="landing-section-heading">Our Blog</span> </p>
                <h3 class="fw-semibold mb-2">Latest News Updates & Blogs</h3>
                <div class="col-xl-9">
                    <span class="b-block fw-normal fs-15 text-muted">Sed do eiusmod tempor incididunt ut labore et
                        dolore
                        magna aliqua</span>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col" v-for="card in jobLandingData.ourBlog" :key="card.id">
                    <BasicCardComponent cardClass="custom-card border shadow-none" :showCardBody="true">
                        <template v-slot:card>
                            <a href="javascript:void(0);">
                                <img :src="card.image" class="card-img-top" alt="Blog post image">
                            </a>
                        </template>
                        <template v-slot:cardBody>
                            <span :class="`badge bg-${card.color} blog-badge`">{{ card.badge }}</span>
                            <h5 class="fw-semibold mb-1">{{ card.title }}</h5>
                            <p class="card-text">{{ card.description }}</p>
                            <a class="text-primary fw-semibold" href="javascript:void(0);">
                                Read this post
                                <i class="ri-arrow-right-s-line align-middle transform-arrow lh-1"></i>
                            </a>
                        </template>
                    </BasicCardComponent>
                </div>
            </div>
        </div>
    </section>
    <!-- End:: Section-8 -->

    <!-- Start:: Section-9 -->
    <section class="section bg-banner" id="employers">
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <h2 class="fw-semibold text-fixed-white">Let Employers easy to find you !</h2>
                    <span class="d-block fw-normal fs-15 op-8">Est amet sit vero sanctus labore no sed ipsum ipsum
                        nonumy.
                        Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et
                        kasd.Est
                        amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</span>
                </div>
                <div class="col-lg-3 text-end my-auto">
                    <a href="javascript:void(0);" class="btn btn-lg btn-danger">Upload Your Resume</a>
                </div>
            </div>
        </div>
    </section>
    <!-- End:: Section-9 -->

    <!-- Start:: Section-10 -->
    <section class="section bg-light">
        <div class="container text-center">
            <div class="row mb-5 justify-content-center text-center">
                <p class="fs-12 fw-semibold mb-1"><span class="landing-section-heading">FAQ'S</span> </p>
                <h3 class="fw-semibold mb-2">Frequently Asked Questions?</h3>
                <div class="col-xl-9">
                    <span class="b-block fw-normal fs-15 text-muted">Sed do eiusmod tempor incididunt ut labore et
                        dolore
                        magna aliqua</span>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xxl-4 col-xl-4 col-lg-3 col-md-6 col-sm-6 col-12" v-for="card in jobLandingData.faqs"
                    :key="card.id">
                    <BasicCardComponent cardClass="custom-card text-start featured-card-4" :showCardBody="true"
                        cardBodyClass="p-3">
                        <template v-slot:card>
                            <a href="javascript:void(0);" class="open-link"></a>
                        </template>
                        <template v-slot:cardBody>
                            <div class="d-flex align-items-center">
                                <div
                                    class="me-2 p-2 bg-primary-transparent rounded-circle border border-primary border-opacity-10">
                                    <span class="avatar avatar-rounded bg-primary" v-html="card.icon"> </span>
                                </div>
                                <h6 class="fw-semibold mb-0">
                                    {{ card.title }}
                                </h6>
                            </div>
                        </template>
                    </BasicCardComponent>
                </div>
            </div>
        </div>
    </section>
    <!-- End:: Section-10 -->

    <!-- Start:: Section-11 -->
    <section class="section landing-testimonials">
        <div class="container text-center">
            <div class="row mb-5 justify-content-center text-center">
                <p class="fs-12 fw-semibold mb-1"><span class="landing-section-heading">TESTIMONIALS</span> </p>
                <h3 class="fw-semibold mb-2">We never failed to reach expectations</h3>
                <div class="col-xl-9">
                    <span class="b-block fw-normal fs-15 text-muted">Some of the reviews our clients gave which
                        brings
                        motivation to work for future projects.</span>
                </div>
            </div>
            <swiper :navigation="false" :pagination="{ clickable: true,dynamicBullets: true, }" :modules="modules" :autoplay="true"
                class="pagination-dynamic text-start" :breakpoints="{
                    '0': {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    '768': {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    '992': {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }">
                <swiper-slide>
                    <div class=" card custom-card featured-card-1 border shadow-none">
                        <div class="card-body p-4">
                            <span class="review-quote">
                                <i class="bi bi-quote"></i>
                            </span>
                            <span class="review-quote">
                                <i class="bi bi-quote"></i>
                            </span>
                            <div class="d-flex mb-2 align-items-center">
                                <span class="avatar avatar-lg avatar-rounded me-2">
                                    <img src="/images/faces/11.jpg" alt="">
                                </span>
                                <div>
                                    <p class="mb-0 fw-semibold fs-16 text-primary">Json Taylor</p>
                                    <p class="fs-10 mb-0 fw-semibold text-muted">CEO OF NORJA</p>
                                </div>
                            </div>
                            <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum
                                sanctus ea
                                magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                                amet
                                sit vero sanctus labor</span>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card custom-card featured-card-1 border shadow-none">
                        <div class="card-body p-4">
                            <span class="review-quote">
                                <i class="bi bi-quote"></i>
                            </span>
                            <span class="review-quote">
                                <i class="bi bi-quote"></i>
                            </span>
                            <div class="d-flex mb-2 align-items-center">
                                <span class="avatar avatar-lg avatar-rounded me-2">
                                    <img src="/images/faces/1.jpg" alt="">
                                </span>
                                <div>
                                    <p class="mb-0 fw-semibold fs-16 text-primary">Melissa Blue</p>
                                    <p class="fs-10 mb-0 fw-semibold text-muted">MANAGER CHO</p>
                                </div>
                            </div>
                            <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum
                                sanctus ea
                                magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                                amet
                                sit vero sanctus labor</span>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card custom-card featured-card-1 border shadow-none">
                        <div class="card-body p-4">
                            <span class="review-quote">
                                <i class="bi bi-quote"></i>
                            </span>
                            <div class="d-flex mb-2 align-items-center">
                                <span class="avatar avatar-lg avatar-rounded me-2">
                                    <img src="/images/faces/14.jpg" alt="">
                                </span>
                                <div>
                                    <p class="mb-0 fw-semibold fs-16 text-primary">Kiara Advain</p>
                                    <p class="fs-10 mb-0 fw-semibold text-muted">CEO OF EMPIRO</p>
                                </div>
                            </div>
                            <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum
                                sanctus ea
                                magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                                amet
                                sit vero sanctus labor</span>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card custom-card featured-card-1 border shadow-none">
                        <div class="card-body p-4">
                            <span class="review-quote">
                                <i class="bi bi-quote"></i>
                            </span>
                            <div class="d-flex mb-2 align-items-center">
                                <span class="avatar avatar-lg avatar-rounded me-2">
                                    <img src="/images/faces/8.jpg" alt="">
                                </span>
                                <div>
                                    <p class="mb-0 fw-semibold fs-16 text-primary">Jhonson Smith</p>
                                    <p class="fs-10 mb-0 fw-semibold text-muted">CHIEF SECRETARY MBIO</p>
                                </div>
                            </div>
                            <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum
                                sanctus ea
                                magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                                amet
                                sit vero sanctus labor</span>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card custom-card featured-card-1 border shadow-none">
                        <div class="card-body p-4">
                            <span class="review-quote">
                                <i class="bi bi-quote"></i>
                            </span>
                            <div class="d-flex mb-2 align-items-center">
                                <span class="avatar avatar-lg avatar-rounded me-2">
                                    <img src="/images/faces/4.jpg" alt="">
                                </span>
                                <div>
                                    <p class="mb-0 fw-semibold fs-16 text-primary">Dwayne Stort</p>
                                    <p class="fs-10 mb-0 fw-semibold text-muted">CEO ARMEDILLO</p>
                                </div>
                            </div>
                            <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum
                                sanctus ea
                                magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                                amet
                                sit vero sanctus labor</span>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card custom-card featured-card-1 border shadow-none">
                        <div class="card-body p-4">
                            <span class="review-quote">
                                <i class="bi bi-quote"></i>
                            </span>
                            <div class="d-flex mb-2 align-items-center">
                                <span class="avatar avatar-lg avatar-rounded me-2">
                                    <img src="/images/faces/9.jpg" alt="">
                                </span>
                                <div>
                                    <p class="mb-0 fw-semibold fs-16 text-primary">Jasmine Kova</p>
                                    <p class="fs-10 mb-0 fw-semibold text-muted">AGGENT AMIO</p>
                                </div>
                            </div>
                            <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum
                                sanctus ea
                                magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                                amet
                                sit vero sanctus labor</span>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card custom-card featured-card-1 border shadow-none">
                        <div class="card-body p-4">
                            <span class="review-quote">
                                <i class="bi bi-quote"></i>
                            </span>
                            <div class="d-flex mb-2 align-items-center">
                                <span class="avatar avatar-lg avatar-rounded me-2">
                                    <img src="/images/faces/10.jpg" alt="">
                                </span>
                                <div>
                                    <p class="mb-0 fw-semibold fs-16 text-primary">Dolph MR</p>
                                    <p class="fs-10 mb-0 fw-semibold text-muted">CEO MR BRAND</p>
                                </div>
                            </div>
                            <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum
                                sanctus ea
                                magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                                amet
                                sit vero sanctus labor</span>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card custom-card featured-card-1 border shadow-none">
                        <div class="card-body p-4">
                            <span class="review-quote">
                                <i class="bi bi-quote"></i>
                            </span>
                            <div class="d-flex mb-2 align-items-center">
                                <span class="avatar avatar-lg avatar-rounded me-2">
                                    <img src="/images/faces/13.jpg" alt="">
                                </span>
                                <div>
                                    <p class="mb-0 fw-semibold fs-16 text-primary">Brenda Simpson</p>
                                    <p class="fs-10 mb-0 fw-semibold text-muted">CEO AIBMO</p>
                                </div>
                            </div>
                            <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum
                                sanctus ea
                                magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                                amet
                                sit vero sanctus labor</span>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="card custom-card featured-card-1 border shadow-none">
                        <div class="card-body p-4">
                            <span class="review-quote">
                                <i class="bi bi-quote"></i>
                            </span>
                            <div class="d-flex mb-2 align-items-center">
                                <span class="avatar avatar-lg avatar-rounded me-2">
                                    <img src="/images/faces/6.jpg" alt="">
                                </span>
                                <div>
                                    <p class="mb-0 fw-semibold fs-16 text-primary">Melissa Blue</p>
                                    <p class="fs-10 mb-0 fw-semibold text-muted">MANAGER CHO</p>
                                </div>
                            </div>
                            <span>- Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum
                                sanctus ea
                                magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est
                                amet
                                sit vero sanctus labor</span>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
    <!-- End:: Section-11 -->

    <!-- Start:: Section-12 -->
    <section class="section bg-banner" id="career-advice">
        <div class="row justify-content-center">
            <div class="col-lg-6 text-center">
                <div class="mb-4">
                    <h3 class="fw-semibold mb-2 text-fixed-white">&#128512; Your dream job is waiting for you !</h3>
                </div>
                <span class="fs-15 fw-normal op-8 d-block mb-4 px-lg-0 px-3">Est amet sit vero sanctus labore no sed
                    ipsum
                    ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum
                    erat et
                    kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</span>
                <a href="javascript:void(0);" class="btn btn-lg btn-light m-1"><i class="bi bi-search me-1"></i> Search
                    Jobs</a>
                <a href="javascript:void(0);" class="btn btn-lg btn-danger m-1"><i class="bi bi-send me-1"></i> Apply
                    Job
                    Now</a>
            </div>
        </div>
    </section>
    <!-- End:: Section-12 -->

    <!-- Start:: Footer -->

    <div class="landing-main-footer landing-jobs-footer py-3 py-3">
        <div class="container">
            <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                <div>
                    <span class="text-fixed-white op-7 fs-14"> © Copyright 2025<span id="year"></span> <a
                            href="javascript:void(0);" class="text-primary fs-15 fw-semibold">Ynex</a>.
                    </span>
                </div>
                <div>
                    <ul class="list-unstyled fw-normal landing-footer-list mb-0">
                        <li>
                            <a href="javascript:void(0);" class="text-fixed-white op-8">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="text-fixed-white op-8">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="text-fixed-white op-8">Legal</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="text-fixed-white op-8">Contact</a>
                        </li>
                        <li>
                            <a href="javascript:void(0);" class="text-fixed-white op-8">Report Abuse</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: Footer -->
</template>

<style scoped></style>
