<script lang="ts">
import landingpagemenu from '../../shared/UI/landingpagemenu.vue';
import { menuData } from '../../data/landingmenuData';
import ReviewsCardComponent from "../../shared/components/@spk/pages/reviews-cards.vue";
import OurteamCardComponent from "../../shared/components/@spk/pages/landing-ourteam-cards.vue";
import LandingPriceComponent from '../../shared/components/@spk/pages/landing-pricing-cards.vue';
import * as landingData from "../../data/pages/landing";
import { pricing } from '../../data/pricing';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
    setup() {
        return {
            pagination: {
                clickable: true,
            },
            modules: [Navigation, Pagination, Keyboard, Autoplay],
        };
    },
    components: {
        landingpagemenu,
        ReviewsCardComponent,
        OurteamCardComponent,
        LandingPriceComponent,
        Swiper,
        SwiperSlide,
        SimpleCardComponent
    },
    data() {
        return {
            menuData,
            landingData,
            pricing
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
        }
    },
};
</script>

<template>
    <div class="landing-page-wrapper">
        <!-- app-header -->
        <header class="app-header">

            <!-- Start::main-header-container -->
            <div class="main-header-container container-fluid">

                <!-- Start::header-content-left -->
                <div class="header-content-left">

                    <!-- Start::header-element -->
                    <div class="header-element">
                        <div class="horizontal-logo">
                            <router-link to="/dashboard/crm" class="header-logo">
                                <img src="/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo">
                                <img src="/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark">
                            </router-link>
                        </div>
                    </div>
                    <!-- End::header-element -->

                    <!-- Start::header-element -->
                    <div class="header-element">
                        <!-- Start::header-link -->
                        <a @click="ToggleMenu" href="javascript:void(0);" class="sidemenu-toggle header-link"
                            data-bs-toggle="sidebar">
                            <span class="open-toggle">
                                <i class="ri-menu-3-line fs-20"></i>
                            </span>
                        </a>
                        <!-- End::header-link -->
                    </div>
                    <!-- End::header-element -->

                </div>
                <!-- End::header-content-left -->

                <!-- Start::header-content-right -->
                <div class="header-content-right">

                    <!-- Start::header-element -->
                    <div class="header-element align-items-center">
                        <!-- Start::header-link|switcher-icon -->
                        <div class="btn-list d-lg-none d-block">
                            <router-link to="/authentication/sign-up/basic" class="btn btn-primary-light">
                                Sign Up
                            </router-link>
                            <button class="btn btn-icon btn-success switcher-icon" data-bs-toggle="offcanvas"
                                data-bs-target="#switcher-canvas">
                                <i class="ri-settings-3-line"></i>
                            </button>
                        </div>
                        <!-- End::header-link|switcher-icon -->
                    </div>
                    <!-- End::header-element -->

                </div>
                <!-- End::header-content-right -->

            </div>
            <!-- End::main-header-container -->

        </header>
        <!-- /app-header -->

        <!-- Start::app-sidebar -->
        <div id="responsive-overlay" @click="mainContentFn"></div>
        <aside class="app-sidebar sticky" id="sidebar">

            <div class="container-xl">
                <!-- Start::main-sidebar -->
                <div class="main-sidebar">

                    <!-- Start::nav -->
                    <nav class="main-menu-container nav nav-pills sub-open">
                        <div class="landing-logo-container">
                            <div class="horizontal-logo">
                                <router-link to="/dashboard/crm" class="header-logo">
                                    <img src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo">
                                    <img src="/images/brand-logos/desktop-white.png" alt="logo" class="desktop-white">
                                </router-link>
                            </div>
                        </div>
                        <div class="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                            </svg></div>
                        <landingpagemenu :menuData="menuData"></landingpagemenu>
                        <div class="slide-right" id="slide-right"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                                width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z">
                                </path>
                            </svg></div>
                        <div class="d-lg-flex d-none">
                            <div class="btn-list d-lg-flex d-none mt-lg-2 mt-xl-0 mt-0">
                                <router-link to="/authentication/sign-up/basic" class="btn btn-wave btn-primary">
                                    Sign Up
                                </router-link>
                                <button class="btn btn-wave btn-icon btn-light switcher-icon" data-bs-toggle="offcanvas"
                                    data-bs-target="#switcher-canvas">
                                    <i class="ri-settings-3-line"></i>
                                </button>
                            </div>
                        </div>
                    </nav>
                    <!-- End::nav -->

                </div>
                <!-- End::main-sidebar -->
            </div>

        </aside>
        <!-- End::app-sidebar -->

        <div class="main-content landing-main px-0">
            <!-- Start:: Section-1 -->
            <section class="landing-banner" id="home">
                <section class="section">
                    <div class="container main-banner-container pb-lg-0">
                        <div class="row">
                            <div class="col-xxl-7 col-xl-7 col-lg-7 col-md-8">
                                <div class="py-lg-5">
                                    <div class="mb-3">
                                        <h5 class="fw-semibold text-fixed-white op-9">BRILLIANCE IN EXECUTION</h5>
                                    </div>
                                    <p class="landing-banner-heading mb-3">Your sure stop place for best theme ends here
                                        with
                                        <span class="text-secondary">YNEX !</span>
                                    </p>
                                    <div class="fs-16 mb-5 text-fixed-white op-7">ynex - Now you can use this admin
                                        template
                                        to
                                        design stunning dashboards that will wow your target viewers or users to no end.
                                    </div>
                                    <router-link to="/dashboard/crm" class="m-1 btn btn-primary">
                                        View Demos
                                        <i class="ri-eye-line ms-2 align-middle"></i>
                                    </router-link>
                                </div>
                            </div>
                            <div class="col-xxl-5 col-xl-5 col-lg-5 col-md-4">
                                <div class="text-end landing-main-image landing-heading-img">
                                    <img src="/images/media/landing/1.png" alt="" class="img-fluid">
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <!-- End:: Section-1 -->

            <!-- Start:: Section-2 -->
            <section class="section section-bg " id="statistics">
                <div class="container text-center position-relative">
                    <p class="fs-12 fw-semibold text-success mb-1"><span
                            class="landing-section-heading">STATISTICS</span>
                    </p>
                    <h3 class="fw-semibold mb-2">More than 120+ projects completed.</h3>
                    <div class="row justify-content-center">
                        <div class="col-xl-7">
                            <p class="text-muted fs-15 mb-5 fw-normal">We are proud to have top class clients and
                                customers,which
                                motivates us to work more on projects.</p>
                        </div>
                    </div>
                    <div class="row  g-2 justify-content-center">
                        <div class="col-xl-12">
                            <div class="row justify-content-evenly">
                                <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="p-3 text-center rounded-2 bg-white border">
                                        <span class="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                            <i class='fs-24 bx bx-spreadsheet'></i>
                                        </span>
                                        <h3 class="fw-semibold mb-0 text-dark">120+</h3>
                                        <p class="mb-1 fs-14 op-7 text-muted ">
                                            Projects
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="p-3 text-center rounded-2 bg-white border">
                                        <span class="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                            <i class='fs-24 bx bx-user-plus'></i>
                                        </span>
                                        <h3 class="fw-semibold mb-0 text-dark">20K+</h3>
                                        <p class="mb-1 fs-14 op-7 text-muted ">
                                            Clients
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="p-3 text-center rounded-2 bg-white border">
                                        <span class="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                            <i class='fs-24 bx bx-money'></i>
                                        </span>
                                        <h3 class="fw-semibold mb-0 text-dark">$45.8M</h3>
                                        <p class="mb-1 fs-14 op-7 text-muted ">
                                            Income Earned
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="p-3 text-center rounded-2 bg-white border">
                                        <span class="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                            <i class='fs-24 bx bx-user-circle'></i>
                                        </span>
                                        <h3 class="fw-semibold mb-0 text-dark">854</h3>
                                        <p class="mb-1 fs-14 op-7 text-muted ">
                                            Employees
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-2 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="p-3 text-center rounded-2 bg-white border">
                                        <span class="mb-3 avatar avatar-lg avatar-rounded bg-primary-transparent">
                                            <i class='fs-24 bx bx-calendar'></i>
                                        </span>
                                        <h3 class="fw-semibold mb-0 text-dark">5+</h3>
                                        <p class="mb-1 fs-14 op-7 text-muted ">
                                            Years of Experience
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-2 -->

            <!-- Start:: Section-3 -->
            <section class="section " id="about">
                <div class="container text-center">
                    <p class="fs-12 fw-semibold text-success mb-1"><span
                            class="landing-section-heading">CUSTOMIZATION</span>
                    </p>
                    <h3 class="fw-semibold mb-2">Designed with precision and well documented</h3>
                    <div class="row justify-content-center">
                        <div class="col-xl-7">
                            <p class="text-muted fs-15 mb-3 fw-normal">ynex comes with multiple customization options
                                that
                                are
                                very
                                easy to implement.</p>
                        </div>
                    </div>
                    <div class="row justify-content-between align-items-center mx-0">
                        <div class="col-xxl-5 col-xl-5 col-lg-5 customize-image text-center">
                            <div class="text-lg-end">
                                <img src="/images/media/landing/3.png" alt="" class="img-fluid">
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 pt-5 pb-0 px-lg-2 px-5 text-start">
                            <h5 class="text-lg-start fw-semibold mb-0">Present your awesome product</h5>
                            <p class=" text-muted">lorem ipsum, dolor sit var ameto condesetrat aiatel varen or
                                damsenlel
                                verman
                                code Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                            <div class="row">
                                <div class="col-12 col-md-12">
                                    <div class="d-flex">
                                        <span>
                                            <i class='bx bxs-badge-check text-primary fs-18'></i>
                                        </span>
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-0">Can Switch Easily From Vertical to
                                                HorizontalMenu.
                                            </h6>
                                            <p class=" text-muted">lorem ipsum, dolor sit var ameto condesetrat aiatel
                                                varen
                                                or
                                                damsenlel verman code Lorem ipsum, dolor sit amet consectetur </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-12">
                                    <div class="d-flex">
                                        <span>
                                            <i class='bx bxs-badge-check text-primary fs-18'></i>
                                        </span>
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-0">Switch Easily From One Color to Another Color
                                                style
                                            </h6>
                                            <p class=" text-muted">lorem ipsum, dolor sit var ameto condesetrat aiatel
                                                varen
                                                or
                                                damsenlel verman code Lorem ipsum, dolor sit amet consectetur </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 col-md-12">
                                    <div class="d-flex">
                                        <span>
                                            <i class='bx bxs-badge-check text-primary fs-18'></i>
                                        </span>
                                        <div class="ms-2">
                                            <h6 class="fw-semibold mb-0">Switch Easily From Fixed to Scrollable Layout.
                                            </h6>
                                            <p class=" text-muted">lorem ipsum, dolor sit var ameto condesetrat aiatel
                                                varen
                                                or
                                                damsenlel verman code Lorem ipsum, dolor sit amet consectetur </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-3 -->

            <!-- Start:: Section-4 -->
            <section class="section section-bg " id="our-mission">
                <div class="container text-center">
                    <p class="fs-12 fw-semibold text-success mb-1"><span class="landing-section-heading">OUR
                            MISSION</span>
                    </p>
                    <h2 class="fw-semibold mb-2">Our mission consists of 8 major steps.</h2>
                    <div class="row justify-content-center mb-5">
                        <div class="col-xl-7">
                            <p class="text-muted fs-15mb-0 fw-normal">Our mission is to make web design easy, so you can
                                focus
                                on
                                building your brand.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="card custom-card text-start landing-missions">
                                <div class="card-body">
                                    <div class="align-items-top">
                                        <div class="mb-2">
                                            <span class="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i class='bx bx-badge-check fs-25'></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold mb-1">
                                                Design Quality
                                            </h6>
                                            <p class="mb-0 text-muted">lorem ipsum, dolor sit var ameto condesetrat
                                                aiatel
                                                varen
                                                or
                                                damsenlel verman code Lorem ipsum, dolor sit amet consectetur
                                                adipisicing
                                                elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="card custom-card text-start landing-missions">
                                <div class="card-body">
                                    <div class="align-items-top">
                                        <div class="mb-2">
                                            <span class="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i class='bx bx-file fs-25'></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold mb-1">
                                                Documentation
                                            </h6>
                                            <p class="mb-0 text-muted">lorem ipsum, dolor sit var ameto condesetrat
                                                aiatel
                                                varen
                                                or
                                                damsenlel verman code Lorem ipsum, dolor sit amet consectetur
                                                adipisicing
                                                elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="card custom-card text-start landing-missions">
                                <div class="card-body">
                                    <div class="align-items-top">
                                        <div class="mb-2">
                                            <span class="avatar avatar-lg avatar-rounded  bg-primary-transparent">
                                                <i class='bx bx-cog fs-25'></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold mb-1">
                                                Customization
                                            </h6>
                                            <p class="mb-0 text-muted">lorem ipsum, dolor sit var ameto condesetrat
                                                aiatel
                                                varen
                                                or
                                                damsenlel verman code Lorem ipsum, dolor sit amet consectetur
                                                adipisicing
                                                elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="card custom-card text-start landing-missions">
                                <div class="card-body">
                                    <div class="align-items-top">
                                        <div class="mb-2">
                                            <span class="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i class='bx bx-cloud-upload fs-25'></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold mb-1">
                                                Regular Updates
                                            </h6>
                                            <p class="mb-0 text-muted">lorem ipsum, dolor sit var ameto condesetrat
                                                aiatel
                                                varen
                                                or
                                                damsenlel verman code Lorem ipsum, dolor sit amet consectetur
                                                adipisicing
                                                elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="card custom-card text-start landing-missions">
                                <div class="card-body">
                                    <div class="align-items-top">
                                        <div class="mb-2">
                                            <span class="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i class='bx bx-support fs-25'></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold mb-1">
                                                24/7 Support
                                            </h6>
                                            <p class="mb-0 text-muted">lorem ipsum, dolor sit var ameto condesetrat
                                                aiatel
                                                varen
                                                or
                                                damsenlel verman code Lorem ipsum, dolor sit amet consectetur
                                                adipisicing
                                                elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="card custom-card text-start landing-missions">
                                <div class="card-body">
                                    <div class="align-items-top">
                                        <div class="mb-2">
                                            <span class="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i class='bx bx-image fs-25'></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold mb-1">
                                                Pre-Built Theme Styles
                                            </h6>
                                            <p class="mb-0 text-muted">lorem ipsum, dolor sit var ameto condesetrat
                                                aiatel
                                                varen
                                                or
                                                damsenlel verman code Lorem ipsum, dolor sit amet consectetur
                                                adipisicing
                                                elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="card custom-card text-start landing-missions">
                                <div class="card-body">
                                    <div class="align-items-top">
                                        <div class="mb-2">
                                            <span class="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i class='bx bx-compass fs-25'></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold mb-1">
                                                Compatibility
                                            </h6>
                                            <p class="mb-0 text-muted">lorem ipsum, dolor sit var ameto condesetrat
                                                aiatel
                                                varen
                                                or
                                                damsenlel verman code Lorem ipsum, dolor sit amet consectetur
                                                adipisicing
                                                elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                            <div class="card custom-card text-start landing-missions">
                                <div class="card-body">
                                    <div class="align-items-top">
                                        <div class="mb-2">
                                            <span class="avatar avatar-lg avatar-rounded bg-primary-transparent">
                                                <i class='bx bx-desktop fs-25'></i>
                                            </span>
                                        </div>
                                        <div>
                                            <h6 class="fw-semibold mb-1">
                                                Fully Responsive
                                            </h6>
                                            <p class="mb-0 text-muted">lorem ipsum, dolor sit var ameto condesetrat
                                                aiatel
                                                varen
                                                or
                                                damsenlel verman code Lorem ipsum, dolor sit amet consectetur
                                                adipisicing
                                                elit
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-4 -->

            <!-- Start:: Section-5 -->
            <section class="section landing-Features" id="features">
                <div class="container text-center">
                    <p class="fs-12 fw-semibold text-success mb-1"><span class="landing-section-heading">Features</span>
                    </p>
                    <h2 class="fw-semibold mb-2 text-fixed-white ">Features Used in YNEX</h2>
                    <div class="row justify-content-center">
                        <div class="col-xl-7">
                            <p class="text-fixed-white op-8 fs-15 mb-3 fw-normal">Some of the reviews our clients gave
                                which
                                brings
                                motivation to work for future projects.</p>
                        </div>
                    </div>
                    <div class="text-start">
                        <div class="justify-content-center">
                            <div class="">
                                <div class="feature-logos mt-sm-5 flex-wrap">
                                    <div class="ms-sm-5 ms-2 text-center">
                                        <img src="/images/media/landing/web/1.png" alt="image" class="featur-icon">
                                        <h5 class="mt-3 text-fixed-white ">Bootstrap5</h5>
                                    </div>
                                    <div class="ms-sm-5 ms-2 text-center">
                                        <img src="/images/media/landing/web/5.png" alt="image" class="featur-icon">
                                        <h5 class="mt-3 text-fixed-white ">Gulp</h5>
                                    </div>
                                    <div class="ms-sm-5 ms-2 text-center">
                                        <img src="/images/media/landing/web/4.png" alt="image" class="featur-icon">
                                        <h5 class="mt-3 text-fixed-white ">Sass</h5>
                                    </div>
                                    <div class="ms-sm-5 ms-2 text-center">
                                        <img src="/images/media/landing/web/pinia.png" alt="image" class="featur-icon">
                                        <h5 class="mt-3 text-fixed-white ">Pinia</h5>
                                    </div>
                                    <div class="ms-sm-5 ms-2 text-center">
                                        <img src="/images/media/landing/web/6.png" alt="image" class="featur-icon">
                                        <h5 class="mt-3 text-fixed-white ">NPM</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-5 -->

            <!-- Start:: Section-6 -->
            <section class="section landing-testimonials section-bg" id="testimonials">
                <div class="container text-center">
                    <p class="fs-12 fw-semibold text-success mb-1"><span
                            class="landing-section-heading">TESTIMONIALS</span>
                    </p>
                    <h3 class="fw-semibold mb-2">We never failed to reach expectations</h3>
                    <div class="row justify-content-center">
                        <div class="col-xl-7">
                            <p class="text-muted fs-15 mb-5 fw-normal">Some of the reviews our clients gave which brings
                                motivation
                                to work for future projects.</p>
                        </div>
                    </div>
                    <Swiper :navigation="false" :pagination="{ clickable: true, dynamicBullets: true, }" :modules="modules" :autoplay="true"
                        class=" pagination-dynamic text-start" :breakpoints="{
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
                            <div class="card custom-card testimonial-card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mb-3">
                                        <span class="avatar avatar-md avatar-rounded me-3">
                                            <img src="/images/faces/15.jpg" alt="">
                                        </span>
                                        <div>
                                            <p class="mb-0 fw-semibold fs-14">Json Taylor</p>
                                            <p class="mb-0 fs-10 fw-semibold text-muted">CEO OF NORJA</p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Earum
                                            autem quaerat distinctio --</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="text-muted">Rating : </span>
                                            <span class="text-warning d-block ms-1">
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-half-fill"></i>
                                            </span>
                                        </div>
                                        <div class="float-end fs-12 fw-semibold text-muted text-end">
                                            <span>12 days ago</span>
                                            <span class="d-block fw-normal fs-12 text-success"><i>Json Taylor</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card custom-card testimonial-card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mb-3">
                                        <span class="avatar avatar-md avatar-rounded me-3">
                                            <img src="/images/faces/4.jpg" alt="">
                                        </span>
                                        <div>
                                            <p class="mb-0 fw-semibold fs-14">Melissa Blue</p>
                                            <p class="mb-0 fs-10 fw-semibold text-muted">MANAGER CHO</p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Earum
                                            autem quaerat distinctio --</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="text-muted">Rating : </span>
                                            <span class="text-warning d-block ms-1">
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-half-fill"></i>
                                            </span>
                                        </div>
                                        <div class="float-end fs-12 fw-semibold text-muted text-end">
                                            <span>7 days ago</span>
                                            <span class="d-block fw-normal fs-12 text-success"><i>Melissa
                                                    Blue</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card custom-card testimonial-card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mb-3">
                                        <span class="avatar avatar-md avatar-rounded me-3">
                                            <img src="/images/faces/2.jpg" alt="">
                                        </span>
                                        <div>
                                            <p class="mb-0 fw-semibold fs-14">Kiara Advain</p>
                                            <p class="mb-0 fs-10 fw-semibold text-muted">CEO OF EMPIRO</p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Earum
                                            autem quaerat distinctio --</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="text-muted">Rating : </span>
                                            <span class="text-warning d-block ms-1">
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-line"></i>
                                            </span>
                                        </div>
                                        <div class="float-end fs-12 fw-semibold text-muted text-end">
                                            <span>2 days ago</span>
                                            <span class="d-block fw-normal fs-12 text-success"><i>Kiara
                                                    Advain</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card custom-card testimonial-card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mb-3">
                                        <span class="avatar avatar-md avatar-rounded me-3">
                                            <img src="/images/faces/10.jpg" alt="">
                                        </span>
                                        <div>
                                            <p class="mb-0 fw-semibold fs-14">Jhonson Smith</p>
                                            <p class="mb-0 fs-10 fw-semibold text-muted">CHIEF SECRETARY MBIO</p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Earum
                                            autem quaerat distinctio --</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="text-muted">Rating : </span>
                                            <span class="text-warning d-block ms-1">
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-half-fill"></i>
                                            </span>
                                        </div>
                                        <div class="float-end fs-12 fw-semibold text-muted text-end">
                                            <span>16 hrs ago</span>
                                            <span class="d-block fw-normal fs-12 text-success"><i>Jhonson
                                                    Smith</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card custom-card testimonial-card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mb-3">
                                        <span class="avatar avatar-md avatar-rounded me-3">
                                            <img src="/images/faces/12.jpg" alt="">
                                        </span>
                                        <div>
                                            <p class="mb-0 fw-semibold fs-14">Dwayne Stort</p>
                                            <p class="mb-0 fs-10 fw-semibold text-muted">CEO ARMEDILLO</p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Earum
                                            autem quaerat distinctio --</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="text-muted">Rating : </span>
                                            <span class="text-warning d-block ms-1">
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-line"></i>
                                            </span>
                                        </div>
                                        <div class="float-end fs-12 fw-semibold text-muted text-end">
                                            <span>22 days ago</span>
                                            <span class="d-block fw-normal fs-12 text-success"><i>Dwayne
                                                    Stort</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card custom-card testimonial-card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mb-3">
                                        <span class="avatar avatar-md avatar-rounded me-3">
                                            <img src="/images/faces/3.jpg" alt="">
                                        </span>
                                        <div>
                                            <p class="mb-0 fw-semibold fs-14">Jasmine Kova</p>
                                            <p class="mb-0 fs-10 fw-semibold text-muted">AGGENT AMIO</p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Earum
                                            autem quaerat distinctio --</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="text-muted">Rating : </span>
                                            <span class="text-warning d-block ms-1">
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-half-fill"></i>
                                            </span>
                                        </div>
                                        <div class="float-end fs-12 fw-semibold text-muted text-end">
                                            <span>26 days ago</span>
                                            <span class="d-block fw-normal fs-12 text-success"><i>Jasmine
                                                    Kova</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card custom-card testimonial-card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mb-3">
                                        <span class="avatar avatar-md avatar-rounded me-3">
                                            <img src="/images/faces/16.jpg" alt="">
                                        </span>
                                        <div>
                                            <p class="mb-0 fw-semibold fs-14">Dolph MR</p>
                                            <p class="mb-0 fs-10 fw-semibold text-muted">CEO MR BRAND</p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Earum
                                            autem quaerat distinctio --</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="text-muted">Rating : </span>
                                            <span class="text-warning d-block ms-1">
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                            </span>
                                        </div>
                                        <div class="float-end fs-12 fw-semibold text-muted text-end">
                                            <span>1 month ago</span>
                                            <span class="d-block fw-normal fs-12 text-success"><i>Dolph MR</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card custom-card testimonial-card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mb-3">
                                        <span class="avatar avatar-md avatar-rounded me-3">
                                            <img src="/images/faces/5.jpg" alt="">
                                        </span>
                                        <div>
                                            <p class="mb-0 fw-semibold fs-14">Brenda Simpson</p>
                                            <p class="mb-0 fs-10 fw-semibold text-muted">CEO AIBMO</p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Earum
                                            autem quaerat distinctio --</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="text-muted">Rating : </span>
                                            <span class="text-warning d-block ms-1">
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-fill me-1"></i>
                                                <i class="ri-star-half-fill"></i>
                                            </span>
                                        </div>
                                        <div class="float-end fs-12 fw-semibold text-muted text-end">
                                            <span>1 month ago</span>
                                            <span class="d-block fw-normal fs-12 text-success"><i>Brenda
                                                    Simpson</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="card custom-card testimonial-card">
                                <div class="card-body">
                                    <div class="d-flex align-items-center mb-3">
                                        <span class="avatar avatar-md avatar-rounded me-3">
                                            <img src="/images/faces/7.jpg" alt="">
                                        </span>
                                        <div>
                                            <p class="mb-0 fw-semibold fs-14">Julia Sams</p>
                                            <p class="mb-0 fs-10 fw-semibold text-muted">CHIEF SECRETARY BHOL</p>
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <span class="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing
                                            elit.
                                            Earum
                                            autem quaerat distinctio --</span>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="d-flex align-items-center">
                                            <span class="text-muted">Rating : </span>
                                            <span class="text-warning d-block ms-1">
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                                <i class="ri-star-fill"></i>
                                            </span>
                                        </div>
                                        <div class="float-end fs-12 fw-semibold text-muted text-end">
                                            <span>2 month ago</span>
                                            <span class="d-block fw-normal fs-12 text-success"><i>Julia Sams</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </section>
            <!-- End:: Section-6 -->

            <!-- Start:: Section-7 -->
            <section class="section  section-bg" id="team">
                <div class="container text-center">
                    <p class="fs-12 fw-semibold text-success mb-1"><span class="landing-section-heading">OUR TEAM</span>
                    </p>
                    <h3 class="fw-semibold mb-2">Great things in business are done by a team.</h3>
                    <div class="row justify-content-center">
                        <div class="col-xl-7">
                            <p class="text-muted fs-15 mb-5 fw-normal">Our team consists of highly qulified employees
                                that
                                works
                                hard to raise company standards.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6 col-sm-12" v-for="card in landingData.ourteam"
                            :key="card.id">
                            <OurteamCardComponent customCardClass="text-center team-card" cardBodyClass=" p-5"
                                :card="card" />
                        </div>
                    </div>
                    <div class="mt-5">
                        <button class="btn btn-primary">View All</button>
                    </div>
                </div>
            </section>
            <!-- End:: Section-7 -->

            <!-- Start:: Section-8 -->
            <section class="section" id="pricing">
                <div class="container text-center">
                    <p class="fs-12 fw-semibold text-success mb-1"><span class="landing-section-heading">PRICING</span>
                    </p>
                    <h3 class="fw-semibold mb-2">ynex comes with most affordable pricing range.</h3>
                    <div class="row justify-content-center">
                        <div class="col-xl-9">
                            <p class="text-muted fs-15 mb-5 fw-normal">Our plans are most affordable and are mainly
                                placed
                                by
                                focussing every category in the sector even basic plan helps better.</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center mb-4">
                        <ul class="nav nav-tabs mb-3 tab-style-6 bg-primary-transparent" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pricing-monthly" data-bs-toggle="tab"
                                    data-bs-target="#pricing-monthly-pane" type="button" role="tab"
                                    aria-controls="pricing-monthly-pane" aria-selected="true">Monthly</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pricing-yearly" data-bs-toggle="tab"
                                    data-bs-target="#pricing-yearly-pane" type="button" role="tab"
                                    aria-controls="pricing-yearly-pane" aria-selected="false">Yearly</button>
                            </li>
                        </ul>
                    </div>
                    <div class="card custom-card overflow-hidden shadow-none">
                        <div class="card-body p-0">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane show active p-0" id="pricing-monthly-pane" role="tabpanel"
                                    aria-labelledby="pricing-monthly" tabindex="0">
                                    <div class="row">
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 border-end border-inline-end-dashed"
                                            v-for="card in pricing" :key="card.id">
                                            <LandingPriceComponent planType="monthly" :card="card" />

                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane p-0" id="pricing-yearly-pane" role="tabpanel"
                                    aria-labelledby="pricing-yearly" tabindex="0">
                                    <div class="row">
                                        <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 border-end border-inline-end-dashed"
                                            v-for="card in pricing" :key="card.id">
                                            <LandingPriceComponent planType="yearly" :card="card" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-8 -->

            <!-- Start:: Section-9 -->
            <section class="section section-bg" id="faq">
                <div class="container text-center">
                    <p class="fs-12 fw-semibold text-success mb-1"><span class="landing-section-heading">F.A.Q</span>
                    </p>
                    <h3 class="fw-semibold mb-2">Frequently asked questions ?</h3>
                    <div class="row justify-content-center">
                        <div class="col-xl-7">
                            <p class="text-muted fs-15 mb-5 fw-normal">We have shared some of the most frequently asked
                                questions to
                                help you out.</p>
                        </div>
                    </div>
                    <div class="row text-start">
                        <div class="col-xl-12">
                            <div class="row gy-2">
                                <div class="col-xl-6">
                                    <SimpleCardComponent cardHeaderClass="d-none">
                                        <div class="accordion accordion-customicon1 accordion-primary"
                                            id="accordionFAQ1">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingcustomicon2One">
                                                    <button class="accordion-button" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon2One" aria-expanded="true"
                                                        aria-controls="collapsecustomicon2One">
                                                        Where can I subscribe to your newsletter?
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon2One"
                                                    class="accordion-collapse collapse show"
                                                    aria-labelledby="headingcustomicon2One"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <div class="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong> It is
                                                        shown by
                                                        default, until the collapse plugin adds the appropriate classes
                                                        that
                                                        we
                                                        use to style each element
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingcustomicon2Two">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon2Two" aria-expanded="false"
                                                        aria-controls="collapsecustomicon2Two">
                                                        Where can in edit my address?
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon2Two" class="accordion-collapse collapse"
                                                    aria-labelledby="headingcustomicon2Two"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <div class="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong> It is
                                                        shown by
                                                        default, until the collapse plugin adds the appropriate classes
                                                        that
                                                        we
                                                        use to style each element
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingcustomicon2Three">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon2Three" aria-expanded="false"
                                                        aria-controls="collapsecustomicon2Three">
                                                        What are your opening hours?
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon2Three" class="accordion-collapse collapse"
                                                    aria-labelledby="headingcustomicon2Three"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <div class="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong> It is
                                                        shown by
                                                        default, until the collapse plugin adds the appropriate classes
                                                        that
                                                        we
                                                        use to style each element
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingcustomicon2Four">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon2Four" aria-expanded="false"
                                                        aria-controls="collapsecustomicon2Four">
                                                        Do I have the right to return an item?
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon2Four" class="accordion-collapse collapse"
                                                    aria-labelledby="headingcustomicon2Four"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <div class="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong> It is
                                                        shown by
                                                        default, until the collapse plugin adds the appropriate classes
                                                        that
                                                        we
                                                        use to style each element
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="collapsecustomicon1Five">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon1Five" aria-expanded="false"
                                                        aria-controls="collapsecustomicon1Five">
                                                        General Terms & Conditions (GTC)
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon1Five" class="accordion-collapse collapse"
                                                    aria-labelledby="headingcustomicon2Five"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <div class="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong>
                                                        It is shown by default, until the collapse plugin adds the
                                                        appropriate classes that we use to style each element. These
                                                        classes control the overall appearance, as well as the showing
                                                        and hiding via CSS transitions. You can modify any of this with
                                                        custom CSS or overriding our default variables. It's also worth
                                                        noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingcustomicon2six">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon2six" aria-expanded="false"
                                                        aria-controls="collapsecustomicon2six">
                                                        Do I need to create an account to make an order?
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon2six" class="accordion-collapse collapse"
                                                    aria-labelledby="headingcustomicon2six"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <div class="accordion-body"> <strong>This is the first item's
                                                            accordion body.</strong> It is shown by default, until the
                                                        collapse plugin adds the appropriate classes that we use to
                                                        style each element. These classes control the overall
                                                        appearance, as well as the showing and hiding via CSS
                                                        transitions. You can modify any of this with custom CSS or
                                                        overriding our default variables. It's also worth noting that
                                                        just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SimpleCardComponent>
                                </div>
                                <div class="col-xl-6">
                                    <SimpleCardComponent cardHeaderClass="d-none">
                                        <div class="accordion accordion-customicon1 accordion-primary"
                                            id="headingcustomicon3Four">
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingcustomicon2seven">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon1seven" aria-expanded="false"
                                                        aria-controls="collapsecustomicon1seven">
                                                        General Terms & Conditions (GTC)
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon1seven" class="accordion-collapse collapse"
                                                    aria-labelledby="headingcustomicon2Four"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <div class="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong>
                                                        It is shown by default, until the collapse plugin adds the
                                                        appropriate classes that we use to style each element. These
                                                        classes control the overall appearance, as well as the showing
                                                        and hiding via CSS transitions. You can modify any of this with
                                                        custom CSS or overriding our default variables. It's also worth
                                                        noting that just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingcustomicon2eight">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon2eight" aria-expanded="false"
                                                        aria-controls="collapsecustomicon2eight">
                                                        Do I need to create an account to make an order?
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon2eight" class="accordion-collapse collapse"
                                                    aria-labelledby="headingcustomicon2eight"
                                                    data-bs-parent="#accordionFAQ1">
                                                    <div class="accordion-body"> <strong>This is the first item's
                                                            accordion body.</strong> It is shown by default, until the
                                                        collapse plugin adds the appropriate classes that we use to
                                                        style each element. These classes control the overall
                                                        appearance, as well as the showing and hiding via CSS
                                                        transitions. You can modify any of this with custom CSS or
                                                        overriding our default variables. It's also worth noting that
                                                        just about any HTML can go within the
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingcustomicon3nine">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon3nine" aria-expanded="false"
                                                        aria-controls="collapsecustomicon3nine">
                                                        What is the order procedure?
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon3nine" class="accordion-collapse collapse"
                                                    aria-labelledby="headingcustomicon3nine"
                                                    data-bs-parent="#accordionFAQ3">
                                                    <div class="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong> It is
                                                        shown by
                                                        default, until the collapse plugin adds the appropriate classes
                                                        that
                                                        we
                                                        use to style each element
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingcustomicon3ten">
                                                    <button class="accordion-button" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon3ten" aria-expanded="true"
                                                        aria-controls="collapsecustomicon3ten">
                                                        How and when do I receive the invoices?
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon3ten"
                                                    class="accordion-collapse collapse show"
                                                    aria-labelledby="headingcustomicon3ten"
                                                    data-bs-parent="#accordionFAQ3">
                                                    <div class="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong> It is
                                                        shown by
                                                        default, until the collapse plugin adds the appropriate classes
                                                        that
                                                        we
                                                        use to style each element
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="headingcustomicon3eleven">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon3eleven"
                                                        aria-expanded="false" aria-controls="collapsecustomicon3eleven">
                                                        Which method of ordering is best for me?
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon3eleven" class="accordion-collapse collapse"
                                                    aria-labelledby="headingcustomicon3eleven"
                                                    data-bs-parent="#accordionFAQ3">
                                                    <div class="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong> It is
                                                        shown by
                                                        default, until the collapse plugin adds the appropriate classes
                                                        that
                                                        we
                                                        use to style each element
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="accordion-item">
                                                <h2 class="accordion-header" id="collapsecustomicon3twelve">
                                                    <button class="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapsecustomicon3twelve"
                                                        aria-expanded="false" aria-controls="collapsecustomicon3twelve">
                                                        What does an order cost?
                                                    </button>
                                                </h2>
                                                <div id="collapsecustomicon3twelve" class="accordion-collapse collapse"
                                                    aria-labelledby="headingcustomicon3twelve"
                                                    data-bs-parent="#accordionFAQ3">
                                                    <div class="accordion-body">
                                                        <strong>This is the first item's accordion body.</strong> It is
                                                        shown by
                                                        default, until the collapse plugin adds the appropriate classes
                                                        that
                                                        we
                                                        use to style each element
                                                        <code>.accordion-body</code>, though the transition does limit
                                                        overflow.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SimpleCardComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-9 -->

            <!-- Start:: Section-10 -->
            <section class="section" id="contact">
                <div class="container text-center">
                    <p class="fs-12 fw-semibold text-success mb-1"><span class="landing-section-heading">CONTACT
                            US</span>
                    </p>
                    <h3 class="fw-semibold mb-2">Have any questions ? We would love to hear from you.</h3>
                    <div class="row justify-content-center">
                        <div class="col-xl-9">
                            <p class="text-muted fs-15 mb-5 fw-normal">You can contact us anytime regarding any queries
                                or
                                deals,dont hesitate to clear your doubts before trying our product.</p>
                        </div>
                    </div>
                    <div class="row text-start">
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="card custom-card border shadow-none">
                                <div class="card-body p-0">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30444.274596168965!2d78.54114692513858!3d17.48198883339408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d17.4886524!2d78.5495041!4m5!1s0x3bcb9c7ec139a15d%3A0x326d1c90786b2ab6!2sspruko%20technologies!3m2!1d17.474805099999998!2d78.570258!5e0!3m2!1sen!2sin!4v1670225507254!5m2!1sen!2sin"
                                        height="365" style="border:0;width:100%" :allowfullscreen="true" loading="lazy"
                                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div
                                class="card custom-card  overflow-hidden section-bg border overflow-hidden shadow-none">
                                <div class="card-body">
                                    <div class="row gy-3 mt-2 px-3">
                                        <div class="col-xl-6">
                                            <div class="row gy-3">
                                                <div class="col-xl-12">
                                                    <label for="contact-address-name" class="form-label ">Full Name
                                                        :</label>
                                                    <input type="text" class="form-control " id="contact-address-name"
                                                        placeholder="Enter Name">
                                                </div>
                                                <div class="col-xl-12">
                                                    <label for="contact-address-phone" class="form-label ">Phone No
                                                        :</label>
                                                    <input type="text" class="form-control " id="contact-address-phone"
                                                        placeholder="Enter Phone No">
                                                </div>
                                                <div class="col-xl-12">
                                                    <label for="contact-address-address" class="form-label ">Address
                                                        :</label>
                                                    <textarea class="form-control " id="contact-address-address"
                                                        rows="1"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xl-6">
                                            <label for="contact-address-message" class="form-label ">Message :</label>
                                            <textarea class="form-control " id="contact-address-message"
                                                rows="8"></textarea>
                                        </div>
                                        <div class="col-xl-12">
                                            <div class="d-flex  mt-4 ">
                                                <div class="">
                                                    <div class="btn-list">
                                                        <button class="btn btn-icon btn-primary-light btn-wave">
                                                            <i class="ri-facebook-line fw-bold"></i>
                                                        </button>
                                                        <button class="btn btn-icon btn-primary-light btn-wave">
                                                            <i class="ri-twitter-x-line fw-bold"></i>
                                                        </button>
                                                        <button class="btn btn-icon btn-primary-light btn-wave">
                                                            <i class="ri-instagram-line fw-bold"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="ms-auto">
                                                    <button class="btn btn-primary  btn-wave">Send Message</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-10 -->

            <!-- Start:: Section-11 -->
            <section class="section landing-footer text-fixed-white">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-12 mb-md-0 mb-3">
                            <div class="px-4">
                                <p class="fw-semibold mb-3">
                                    <router-link to="/dashboard/crm"><img src="/images/brand-logos/desktop-dark.png"
                                            alt=""></router-link>
                                </p>
                                <p class="mb-2 op-6 fw-normal"> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Reprehenderit et magnam, fuga est mollitia eius, quo illum illo inventore optio aut
                                    quas omnis
                                    rem. Dolores accusantium aspernatur minus ea incidunt. </p>
                                <p class="mb-0 op-6 fw-normal">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                    Autem ea
                                    esse ad</p>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6 col-12">
                            <div class="px-4">
                                <h6 class="fw-semibold mb-3 text-fixed-white">PAGES</h6>
                                <ul class="list-unstyled op-6 fw-normal landing-footer-list">
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">Email</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">Profile</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">Timeline</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">Projects</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">Contacts</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">Portfolio</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6 col-12">
                            <div class="px-4">
                                <h6 class="fw-semibold text-fixed-white">INFO</h6>
                                <ul class="list-unstyled op-6 fw-normal landing-footer-list">
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">Our Team</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">Contact US</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">About</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">Services</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">Blog</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white">Terms &amp;
                                            Conditions</a> </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6 col-12">
                            <div class="px-4">
                                <h6 class="fw-semibold text-fixed-white">CONTACT</h6>
                                <ul class="list-unstyled fw-normal landing-footer-list">
                                    <li> <a href="javascript:void(0);" class="text-fixed-white op-6"><i
                                                class="ri-home-4-line me-1 align-middle"></i> New York, NY 10012, US</a>
                                    </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white op-6"><i
                                                class="ri-mail-line me-1 align-middle"></i> info@fmail.com</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white op-6"><i
                                                class="ri-phone-line me-1 align-middle"></i> +(555)-1920 1831</a> </li>
                                    <li> <a href="javascript:void(0);" class="text-fixed-white op-6"><i
                                                class="ri-printer-line me-1 align-middle"></i> +(123) 1293 123</a> </li>
                                    <li class="mt-3">
                                        <p class="mb-2 fw-semibold op-8">FOLLOW US ON :</p>
                                        <div class="mb-0">
                                            <div class="btn-list"> <button
                                                    class="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light">
                                                    <i class="ri-facebook-line fw-bold"></i> </button> <button
                                                    class="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light">
                                                    <i class="ri-twitter-x-line fw-bold"></i> </button> <button
                                                    class="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light">
                                                    <i class="ri-instagram-line fw-bold"></i> </button> <button
                                                    class="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light">
                                                    <i class="ri-github-line fw-bold"></i> </button> <button
                                                    class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light">
                                                    <i class="ri-youtube-line fw-bold"></i> </button> </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End:: Section-11 -->

            <div class="text-center landing-main-footer py-3">
                <span class="text-muted fs-15"> Copyright © 2025<span id="year"></span> <a href="javascript:void(0);"
                        class="text-primary fw-semibold"><u>ynex</u></a>.
                    Designed with <span class="fa fa-heart text-danger"></span> by <a href="javascript:void(0);"
                        class="text-primary fw-semibold"><u>
                            Spruko</u>
                    </a> All
                    rights
                    reserved
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
