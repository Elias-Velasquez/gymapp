<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import media39 from "/images/media/media-39.jpg";
import media17 from "/images/media/media-17.jpg";
import media18 from "/images/media/media-18.jpg";
import media75 from "/images/media/media-75.jpg";
import media56 from "/images/media/media-56.jpg";
import media59 from "/images/media/media-59.jpg";
import media54 from "/images/media/media-54.jpg";
import media61 from "/images/media/media-61.jpg";
import media64 from "/images/media/media-64.jpg";
import media52 from "/images/media/media-52.jpg";
import media29 from "/images/media/media-29.jpg";
import face1 from "/images/faces/1.jpg";
import face2 from "/images/faces/2.jpg";
import face3 from "/images/faces/3.jpg";
import face8 from "/images/faces/8.jpg";
import face9 from "/images/faces/9.jpg";
import face10 from "/images/faces/10.jpg";
import face4 from "/images/faces/4.jpg";
import face6 from "/images/faces/6.jpg";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face16 from "/images/faces/16.jpg";
import face11 from "/images/faces/11.jpg";
import face12 from "/images/faces/12.jpg";
import face13 from "/images/faces/13.jpg";
import face7 from "/images/faces/7.jpg";
import media40 from '/images/media/media-40.jpg';
import media41 from '/images/media/media-41.jpg';
import media42 from '/images/media/media-42.jpg';
import media43 from '/images/media/media-43.jpg';
import media44 from '/images/media/media-44.jpg';
import media45 from '/images/media/media-45.jpg';
import media46 from '/images/media/media-46.jpg';
import media60 from '/images/media/media-60.jpg';
import media26 from '/images/media/media-26.jpg';
import media32 from '/images/media/media-32.jpg';
import media30 from '/images/media/media-30.jpg';
import media31 from '/images/media/media-31.jpg';
import filemanager3 from '/images/media/file-manager/3.png';
import ProfileCardComponent from '../../shared/components/@spk/pages/profile-cards.vue';
import Activities from "../../shared/components/@spk/activities.vue";
import { useAuthStore } from '../../stores/auth.js';

export default {
    components: {
        PageHeader, ProfileCardComponent, Activities
    },
    data() {
        return {
            userProfile: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null,
            dataToPass: {
                current: "Profile",
                list: ['Pages', 'Profile']
            },
            lightbox: null,
            images: [
                { src: media40, w: 600, h: 400, thumbnail: media40, alt: 'alt' },
                { src: media41, w: 600, h: 400, thumbnail: media41, alt: 'alt' },
                { src: media42, w: 600, h: 400, thumbnail: media42, alt: 'alt' },
                { src: media43, w: 600, h: 400, thumbnail: media43, alt: 'alt' },
                { src: media44, w: 600, h: 400, thumbnail: media44, alt: 'alt' },
                { src: media45, w: 600, h: 400, thumbnail: media45, alt: 'alt' },
                { src: media46, w: 600, h: 400, thumbnail: media46, alt: 'alt' },
                { src: media60, w: 600, h: 400, thumbnail: media60, alt: 'alt' },
                { src: media26, w: 600, h: 400, thumbnail: media26, alt: 'alt' },
                { src: media32, w: 600, h: 400, thumbnail: media32, alt: 'alt' },
                { src: media30, w: 600, h: 400, thumbnail: media30, alt: 'alt' },
                { src: media31, w: 600, h: 400, thumbnail: media31, alt: 'alt' },
            ],
            profileDetails: {
                bio: `I am <b class="text-default">Sonya Taylor,</b> here by conclude that,i am the founder and managing director of the prestigeous company name laugh at all and acts as the cheif executieve officer of the company.`,
                contactInformation: [
                    { icon: "mail", title: "sonyataylor2531@gmail.com" },
                    { icon: "phone", title: "+(555) 555-1234" },
                    { icon: "map-pin", title: "MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071" },
                ],
                personalInformation: { Name: "Sonya Taylor", Email: "sonyataylor2531@gmail.com", Phone: "+(555) 555-1234", Designation: "C.E.O", Age: "28", Experience: "10 Years", },
                links: [{ name: "https://www.spruko.com/", links: "https://www.spruko.com/" }, { name: "https://themeforest.net/user/spruko/portfolio", links: "https://themeforest.net/user/spruko/portfolio" }],
                socialMedia: [
                    { name: "facebook", links: "", icon: "facebook", iconColor: "primary" },
                    { name: "twitter", links: "", icon: "twitter-x", iconColor: "secondary" },
                    { name: "instagram", links: "", icon: "instagram", iconColor: "warning" },
                    { name: "github", links: "", icon: "github", iconColor: "success" },
                    { name: "youtube", links: "", icon: "youtube", iconColor: "danger" },
                ],
                followers: [
                    { name: "Contrato base Enero 2025", email: "2025-01-05 13:29:00", avatar: face1 },
                    { name: "Contrato base Junio 2025", email: "2025-06-05 14:05:00", avatar: face3 },
                    { name: "Cambio de Contrato Vip", email: "2025-08-05 15:19:00", avatar: face6 },
                ],
                suggestions: [
                    { name: "Alister", avatar: face15 },
                    { name: "Samantha Sams", avatar: face4 },
                    { name: "Jason Mama", avatar: face11 },
                    { name: "Alicia Sierra", avatar: face5 },
                    { name: "Kiara Advani", avatar: face7 },
                ],
                skills: ["Cloud computing", "Data analysis", "DevOps", "Machine learning", "Programming", "Security", "Python", "JavaScript", "Ruby", "PowerShell", "Statistics", "SQL"],

            },
            profile: [
                { id: 1, name: 'Samantha May', email: 'samanthamay2912@gmail.com', role: 'Team Member', imgSrc: face2, color: "info" },
                { id: 2, name: 'Andrew Garfield', email: 'andrewgarfield98@gmail.com', role: 'Team Lead', imgSrc: face15, color: "success" },
                { id: 3, name: 'Jessica Cashew', email: 'jessicacashew143@gmail.com', role: 'Team Member', imgSrc: face5, color: "info" },
                { id: 4, name: 'Simon Cowan', email: 'jessicacashew143@gmail.com', role: 'Team Manager', imgSrc: face11, color: "warning" },
                { id: 5, name: 'Amanda Nunes', email: 'amandanunes45@gmail.com', role: 'Team Member', imgSrc: face7, color: "info" },
                { id: 6, name: 'Mahira Hose', email: 'mahirahose9456@gmail.com', role: 'Team Member', imgSrc: face12, color: "info" },
            ],
            recentPosts: [
                { id: 1, img: media39, size: "md", title: "Animals", description: "There are many variations of passages of Lorem Ipsum available", },
                { id: 2, img: media56, size: "md", title: "Travel", description: "Latin words, combined with a handful of model sentence", },
                { id: 3, img: media54, size: "md", title: "Interior", description: "Contrary to popular belief, Lorem Ipsum is not simply random", },
                { id: 4, img: media64, size: "md", title: "Nature", description: " It is a long established fact that a reader will be distracted by the readable content", },
            ],
            activitys: [
                { id: 1, avatar: "E", avatarColor: 'primary', img: "", description: "<p class='mb-2'><b>You</b> Commented on <b>alexander taylor</b> post <a class='text-secondary' href='javascript:void(0);'><u>#beautiful day</u></a>.<span class='float-end fs-11 text-muted'>24,Dec 2022 - 14:34</span></p>", media: [{ img: media17, name: media17 }, { img: media18, name: media18 }], classimg: "me-2", avatarList: [] },
                { id: 2, avatar: "", img: face11, description: "<p class='text-muted mb-2'><span class='text-default'><b>Json Smith</b> reacted to the post &#128077;</span>.<span class='float-end fs-11 text-muted'>18,Dec 2022 - 12:16</span></p><p class='text-muted mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!</p>", media: [], avatarList: [] },
                { id: 3, avatar: "", img: face4, description: "<p class='text-muted mb-2'><span class='text-default'><b>Alicia Keys</b> shared a document with <b>you</b></span>.<span class='float-end fs-11 text-muted'>21,Dec 2022 - 15:32</span></p>", media: [{ img: filemanager3, name: filemanager3, Size: true }], avatarList: [], },
                { id: 4, avatar: "P", avatarColor: 'success', img: "", description: "<p class='text-muted mb-2'><span class='text-default'><b>You</b> shared a post with 4 people <b>Simon,Sasha,Anagha,Hishen</b></span>.<span class='float-end fs-11 text-muted'>28,Dec 2022 - 18:46</span></p>", media: [{ img: media75, name: media75 }], avatarList: [{ img: face2, name: face2 }, { img: face8, name: face8 }, { img: face3, name: face3 }, { img: face10, name: face10 }] },
                { id: 5, avatar: "", img: face5, description: "<p class='text-muted mb-1'><span class='text-default'><b>Melissa Blue</b> liked your post <b>travel excites</b></span>.<span class='float-end fs-11 text-muted'>11,Dec 2022 - 11:18</span></p><p class='text-muted'>you are already feeling the tense atmosphere of the video playing in the background</p>", media: [{ img: media59, name: media59 }, { img: media60, name: media60 }, { img: media61, name: media61 }], classimg: "me-2", avatarList: [] },
                { id: 6, avatar: "", img: media39, description: "<p class='mb-1'><b>You</b> Commented on <b>Peter Engola</b> post <a class='text-secondary' href='javascript:void(0);'><u>#Mother Nature</u></a>.<span class='float-end fs-11 text-muted'>24,Dec 2022 - 14:34</span></p><p class='text-muted'>Technology id developing rapidly kepp uo your work &#128076;</p>", media: [{ img: media26, name: media26 }, { img: media29, name: media29 },], classimg: "me-2", avatarList: [] },
            ],
            posts: [
                { id: 1, avatar: "", img: face9, username: "sonya taylor", date: "24, Dec - 04:32PM", message: "<p class='fs-12 text-muted mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p class='fs-12 text-muted mb-3'>As opposed to using 'Content here &#128076;</p>", media: [], type: "Fashion", typeBg: "primary", avatarList: [] },
                { id: 2, avatar: "", img: face9, username: "sonya taylor", date: "26, Dec - 12:45PM", message: "<p class='fs-12 text-muted mb-1'>Shared pictures with 4 of friends <span>Hiren,Sasha,Biden,Thara</span>.</p>", media: [{ img: media52, name: media52 }, { img: media56, name: media56 }], type: "Nature", typeBg: "success", avatarList: [{ img: face2, name: face2 }, { img: face8, name: face8 }, { img: face3, name: face3 }, { img: face10, name: face10 }] },
                { id: 3, avatar: "", img: face9, username: "sonya taylor", date: "29, Dec - 09:53AM", message: "<p class='fs-12 text-muted mb-1'>Sharing an article that excites me about nature more than what i thought. </p><p class='mb-3 profile-post-link'><a href='javascript:void(0);' class='fs-12 text-primary'><u>https://www.discovery.com/nature/caring-for-coral</u></a></p>", media: "", type: "Travel", typeBg: "secondary", avatarList: [] },
                { id: 4, avatar: "", img: face9, username: "sonya taylor", date: "22, Dec - 11:22PM", message: "<p class='fs-12 text-muted mb-1'>Shared pictures with 3 of your friends <span>Maya,Jacob,Amanda</span>.</p>", media: [{ img: media40, name: media40 }, { img: media45, name: media45 }], type: "Nature", typeBg: "success", avatarList: [{ img: face1, name: face1 }, { img: face5, name: face5 }, { img: face16, name: face16 }] },
                { id: 5, avatar: "", img: face9, username: "sonya taylor", date: "18, Dec - 12:28PM", message: "<p class='fs-12 text-muted mb-1'>Followed this author for top class themes with best code you can get in the  market.</p> <p class='mb-3 profile-post-link'><a href='https://themeforest.net/user/spruko/portfolio' target='_blank' class='fs-12 text-primary'><u>https://themeforest.net/user/spruko/portfolio</u></a></p>", media: "", type: "Travel", typeBg: "secondary", avatarList: [] },
                { id: 6, avatar: "", img: face9, username: "sonya taylor", date: "02, Dec - 06:32AM", message: "<p class='fs-12 text-muted mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p class='fs-12 text-muted mb-3'>There are many variations of passages &#128079;&#128525;</p>", media: "", type: "Fashion", typeBg: "primary", avatarList: [] },
            ]
        };
    },
    computed: {
        authStore() {
            return useAuthStore();
        },
    },
    mounted() {
        console.log('profile mounted');
        this.userProfile = this.authStore.userData;

        console.log('data', this.authStore);
        console.log('data', this.authStore.userData);
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

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-4 col-xl-12">
            <div class="card custom-card overflow-hidden">
                <div class="card-body p-0">
                    <div class="d-sm-flex align-items-top p-4 border-bottom-0 main-profile-cover">
                        <div>
                            <span class="avatar avatar-xxl avatar-rounded online me-3">
                                <img src="/images/faces/9.jpg" alt="">
                            </span>
                        </div>
                        <div class="flex-fill main-profile-info">
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="fw-semibold mb-1 text-fixed-white">{{this.userProfile.username}}</h6>
                                <button class="btn btn-light btn-wave"><i
                                        class="ri-add-line me-1 align-middle"></i>Follow</button>
                            </div>
                            <p class="mb-1 text-muted text-fixed-white op-7">{{this.userProfile.roles[0].name}}</p>
                            <p class="fs-12 text-fixed-white mb-4 op-5">
                                <span class="me-3"><i class="ri-building-line me-1 align-middle"></i>{{this.userProfile.dni}}</span>
                                <span><i class="ri-map-pin-line me-1 align-middle"></i>{{this.userProfile.direccion}}</span>
                            </p>
                            <div class="d-flex mb-0">
                                <div class="me-4">
                                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">{{this.userProfile.peso}}</p>
                                    <p class="mb-0 fs-11 op-5 text-fixed-white">Peso</p>
                                </div>
                                <div class="me-4">
                                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">{{this.userProfile.altura}}</p>
                                    <p class="mb-0 fs-11 op-5 text-fixed-white">Altura</p>
                                </div>
                                <div class="me-4">
                                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">{{this.userProfile.last_login}}</p>
                                    <p class="mb-0 fs-11 op-5 text-fixed-white">Ultima Sesión</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-4 border-bottom border-block-end-dashed">
                        <p class="fs-15 mb-2 me-4 fw-semibold">Contrato :</p>
                        <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-phone-line align-middle fs-14`"></i>
                                </span>
                                Tipo de contrato - {{ this.userProfile.contrato?.tipoContratoId }}
                            </p>
                        </div>
                         <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-phone-line align-middle fs-14`"></i>
                                </span>
                                Estado de contrato - {{ this.userProfile.contrato?.estadoContratoId }}
                            </p>
                        </div>
                         <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-phone-line align-middle fs-14`"></i>
                                </span>
                                Accesos - {{ this.userProfile.contrato?.accesos }}
                            </p>
                        </div>

                         <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-phone-line align-middle fs-14`"></i>
                                </span>
                                Sesiones - {{ this.userProfile.contrato?.sesiones }}
                            </p>
                        </div>

                         <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-phone-line align-middle fs-14`"></i>
                                </span>
                                Fecha de Inicio - {{ this.userProfile.contrato?.fechaInicio }}
                            </p>
                        </div>

                        <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-phone-line align-middle fs-14`"></i>
                                </span>
                                Fecha de Fin - {{ this.userProfile.contrato?.fechaFin }}
                            </p>
                        </div>

                    </div>

                    <div class="p-4 border-bottom border-block-end-dashed">
                        <div class="mb-4">
                            <p class="fs-15 mb-2 fw-semibold">Observaciones:</p>
                            <p class="fs-12 text-muted op-7 mb-0"> {{this.userProfile.observaciones}} </p>
                        </div>
                    </div>
                    <!-- <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-center">
                        <p class="fs-15 mb-2 me-4 fw-semibold">Social Networks :</p>
                        <div class="btn-list mb-0">
                            <button
                                :class="`btn btn-sm btn-icon btn-${details.iconColor}-light btn-wave waves-effect waves-light`"
                                v-for="(details, key) in profileDetails.socialMedia" :key="key">
                                <i :class="`ri-${details.icon}-line fw-semibold`"></i>
                            </button>
                        </div>
                    </div>
                    <div class="p-4 border-bottom border-block-end-dashed">
                        <p class="fs-15 mb-2 me-4 fw-semibold">Skills :</p>
                        <div>
                            <a href="javascript:void(0);" v-for="(skill, index) of profileDetails.skills" :key="index">
                                <span class="badge bg-light text-muted m-1">{{ skill }}</span>
                            </a>
                        </div>
                    </div> -->
                    <div class="p-4">
                        <p class="fs-15 mb-2 me-4 fw-semibold">Historial de pagos :</p>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="(follower, index) of profileDetails.followers"
                                :key="index">
                                <div class="d-sm-flex align-items-top">
                                    <span class="avatar avatar-sm">
                                        <img :src="follower.avatar" alt="img">
                                    </span>
                                    <div class="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                        <p class="mb-0 lh-1">{{ follower.name }}</p>
                                        <span class="fs-11 text-muted op-7">{{ follower.email }}</span>
                                    </div>
                                    <button class="btn btn-light btn-wave btn-sm">Ver detalle</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-8 col-xl-12">
            <div class="row">
                <!-- <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div
                                class="p-3 border-bottom border-block-end-dashed d-flex align-items-center justify-content-between">
                                <div>
                                    <ul class="nav nav-tabs mb-0 tab-style-6 justify-content-start" id="myTab"
                                        role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="activity-tab" data-bs-toggle="tab"
                                                data-bs-target="#activity-tab-pane" type="button" role="tab"
                                                aria-controls="activity-tab-pane" aria-selected="true"><i
                                                    class="ri-gift-line me-1 align-middle "></i>Activity</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="posts-tab" data-bs-toggle="tab"
                                                data-bs-target="#posts-tab-pane" type="button" role="tab"
                                                aria-controls="posts-tab-pane" aria-selected="false"><i
                                                    class="ri-bill-line me-1 align-middle "></i>Posts</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="followers-tab" data-bs-toggle="tab"
                                                data-bs-target="#followers-tab-pane" type="button" role="tab"
                                                aria-controls="followers-tab-pane" aria-selected="false"><i
                                                    class="ri-money-dollar-box-line me-1 align-middle "></i>Friends</button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="gallery-tab" data-bs-toggle="tab"
                                                data-bs-target="#gallery-tab-pane" type="button" role="tab"
                                                aria-controls="gallery-tab-pane" aria-selected="false"><i
                                                    class="ri-exchange-box-line me-1 align-middle "></i>Gallery</button>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p class="fw-semibold mb-2">Profile 60% completed - <a href="javascript:void(0);"
                                            class="text-primary fs-12">Finish now</a></p>
                                    <div class="progress progress-xs progress-animate">
                                        <div class="progress-bar bg-primary" role="progressbar" aria-valuenow="60"
                                            aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="p-3">
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane show active fade p-0 border-0" id="activity-tab-pane"
                                        role="tabpanel" aria-labelledby="activity-tab" tabindex="0">
                                        <ul class="list-unstyled profile-timeline">
                                            <li v-for="(activity, key) of activitys" :key="key">
                                                <Activities :activity="activity" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane fade p-0 border-0" id="posts-tab-pane" role="tabpanel"
                                        aria-labelledby="posts-tab" tabindex="0">
                                        <ul class="list-group">
                                            <li class="list-group-item">
                                                <div class="d-sm-flex align-items-center lh-1">
                                                    <div class="me-3">
                                                        <span class="avatar avatar-md avatar-rounded">
                                                            <img src="/images/faces/9.jpg" alt="">
                                                        </span>
                                                    </div>
                                                    <div class="flex-fill me-sm-2 mt-1 mt-sm-0">
                                                        <div class="input-group">
                                                            <input type="text" class="form-control"
                                                                placeholder="Recipient's username"
                                                                aria-label="Recipient's username with two button addons">
                                                            <button class="btn btn-light btn-wave d-none d-sm-block"
                                                                type="button"><i class="bi bi-emoji-smile"></i></button>
                                                            <button class="btn btn-light btn-wave" type="button"><i
                                                                    class="bi bi-paperclip"></i></button>
                                                            <button class="btn btn-light btn-wave" type="button"><i
                                                                    class="bi bi-camera"></i></button>
                                                            <button class="btn btn-primary btn-wave"
                                                                type="button">Post</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <PerfectScrollbar>
                                                <li class="list-group-item border-top-0 border-bottom-0"
                                                    id="profile-posts-scroll">
                                                    <div class="row gy-3">
                                                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12"
                                                            v-for="(post, key) of posts" :key="key">
                                                            <div class="rounded border">
                                                                <div class="p-3 d-flex align-items-top flex-wrap">
                                                                    <div class="me-2">
                                                                        <span v-if="post.img"
                                                                            class="avatar avatar-sm avatar-rounded">
                                                                            <img :src="post.img" alt="">
                                                                        </span>
                                                                        <span v-if="post.avatar"
                                                                            class="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                                                            {{ post.avatar }}
                                                                        </span>

                                                                    </div>
                                                                    <div class="flex-fill">
                                                                        <p class="mb-1 fw-semibold lh-1">{{
                                                                            post.username
                                                                            == "sonya taylor" ? 'You' : post.username}}
                                                                        </p>
                                                                        <p class="fs-11 mb-2 text-muted">{{ post.date }}
                                                                        </p>
                                                                        <div v-html="post.message"></div>
                                                                        <div v-if="post.media.length"
                                                                            class="d-flex lh-1 justify-content-between mb-3">
                                                                            <div>
                                                                                <a href="javascript:void(0);"
                                                                                    v-for="(media, key) of post.media"
                                                                                    :key="key">
                                                                                    <span class="avatar avatar-md me-1">
                                                                                        <img :src="media.img"
                                                                                            :alt="media.name">
                                                                                    </span>
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            class="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                            <div>
                                                                                <div class="btn-list">
                                                                                    <button
                                                                                        class="btn btn-primary-light btn-sm btn-wave me-2">
                                                                                        Comment
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-success-light btn-wave me-2">
                                                                                        <i class="ri-thumb-up-line"></i>
                                                                                    </button>
                                                                                    <button
                                                                                        class="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                        <i class="ri-share-line"></i>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div class="d-flex align-items-top">
                                                                            <div>
                                                                                <span
                                                                                    :class="`badge bg-${post.typeBg}-transparent me-2`">{{
                                                                                    post.type }}</span>
                                                                            </div>
                                                                            <div class="dropdown">
                                                                                <button
                                                                                    class="btn btn-sm btn-icon btn-light btn-wave"
                                                                                    type="button"
                                                                                    data-bs-toggle="dropdown"
                                                                                    aria-expanded="false">
                                                                                    <i class="ti ti-dots-vertical"></i>
                                                                                </button>
                                                                                <ul class="dropdown-menu">
                                                                                    <li><a class="dropdown-item"
                                                                                            href="javascript:void(0);">Delete</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="javascript:void(0);">Hide</a>
                                                                                    </li>
                                                                                    <li><a class="dropdown-item"
                                                                                            href="javascript:void(0);">Edit</a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div v-if="post.avatarList.length"
                                                                            class="avatar-list-stacked d-block mt-4 text-end">
                                                                            <span
                                                                                class="avatar avatar-xs avatar-rounded"
                                                                                v-for="(avatar, key) of post.avatarList">
                                                                                <img :src="avatar.img"
                                                                                    :alt="avatar.name">
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </PerfectScrollbar>
                                            <li class="list-group-item">
                                                <div class="text-center">
                                                    <button class="btn btn-primary-light btn-wave">Show All</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="tab-pane fade p-0 border-0" id="followers-tab-pane" role="tabpanel"
                                        aria-labelledby="followers-tab" tabindex="0">
                                        <div class="row">
                                            <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12"
                                                v-for="card in profile" :key="card.id">
                                                <ProfileCardComponent customCardClass="shadow-none border"
                                                    cardBodyClass="p-4" avatarClass="avatar avatar-xl avatar-rounded"
                                                    :imgSrc="card.imgSrc" nameClass="mb-0 fw-semibold" :name="card.name"
                                                    emailClass="fs-12 op-7 mb-1 text-muted" :email="card.email"
                                                    :badgeClass="`badge bg-${card.color}-transparent rounded-pill`"
                                                    :badgeText="card.role" cardFooterClass="text-center">
                                                </ProfileCardComponent>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="text-center mt-4">
                                                    <button class="btn btn-primary-light btn-wave">Show All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade p-0 border-0" id="gallery-tab-pane" role="tabpanel"
                                        aria-labelledby="gallery-tab" tabindex="0">
                                        <div class="row" id="RandomUniqueId">
                                            <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-12"
                                                v-for="(image, key) in images" :key="key">
                                                <a :href="image.src" :data-pswp-width="image.w"
                                                    :data-pswp-height="image.h" target="_blank" rel="noreferrer"
                                                    class="glightbox card">
                                                    <img :src="image.thumbnail" alt=""
                                                        style="width:100%; border-radius:0.25rem;overflow:hidden" />
                                                </a>
                                            </div>
                                            <div class="col-xl-12">
                                                <div class="text-center mt-4">
                                                    <button
                                                        class="btn btn-primary-light btn-wave waves-effect waves-light">Show
                                                        All</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
                <div class="col-xl-4 col-xl-">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Contrato
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item" v-for="(details, key) of this.userProfile.contrato" :key="key">
                                    
                                    <div class="d-flex flex-wrap align-items-center">
                                        <div class="me-2 fw-semibold">
                                            {{ key }} :
                                        </div>
                                        <span class="fs-12 text-muted">{{ details }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card custom-card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="card-title">
                                Entrenamientos
                            </div>
                            <div>
                                <span class="badge bg-primary-transparent">Today</span>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item" v-for="post in recentPosts" :key="post.id">
                                    <a href="javascript:void(0);">
                                        <div class="d-flex flex-wrap align-items-center">
                                            <span class="avatar avatar-md me-3">
                                                <img :src="post.img" class="img-fluid" alt="...">
                                            </span>
                                            <div class="flex-fill">
                                                <p class="fw-semibold mb-0">{{ post.title }}</p>
                                                <p class="mb-1 fs-12 profile-recent-posts text-truncate text-muted">
                                                    {{ post.description }}
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card custom-card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="card-title">
                                Nutrición
                            </div>
                            <div>
                                <button class="btn btn-sm btn-success-light btn-wave">View All</button>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item" v-for="(suggestion, index) of profileDetails.suggestions"
                                    :key="index">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="fw-semibold d-flex align-items-center">
                                            <span class="avatar avatar-xs me-2">
                                                <img :src="suggestion.avatar" alt="">
                                            </span>{{ suggestion.name }}
                                        </div>
                                        <div>
                                            <button class="btn btn-sm btn-icon btn-primary-light">
                                                <i class="ri-add-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
