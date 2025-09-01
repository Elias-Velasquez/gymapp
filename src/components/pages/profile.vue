<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import ProfileCardComponent from '../../shared/components/@spk/pages/profile-cards.vue';
import Activities from "../../shared/components/@spk/activities.vue";
import { useAuthStore } from '../../stores/auth.js';
import { useUserStore } from '../../stores/users';

export default {
    components: {
        PageHeader, ProfileCardComponent, Activities
    },
    data() {
        return {
            mode: 'self',
            // userProfile: localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null,
            userProfile: {
                username: '',
                roles: [],
                direccion: '',
                peso: '',
                altura: '',
                last_login: '',
                contrato: {}
                },
            dataToPass: {
                current: "Mis Datos",
                // list: ['Pages', 'Profile']
            },
            lightbox: null,

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
                    { name: "Contrato base Enero 2025", email: "2025-01-05 13:29:00" },
                    { name: "Contrato base Junio 2025", email: "2025-06-05 14:05:00"},
                    { name: "Cambio de Contrato Vip", email: "2025-08-05 15:19:00"},
                ],
                suggestions: [
                    { name: "Alister"},
                    { name: "Samantha Sams"},
                    { name: "Jason Mama"},
                    { name: "Alicia Sierra" },
                    { name: "Kiara Advani" },
                ],
                skills: ["Cloud computing", "Data analysis", "DevOps", "Machine learning", "Programming", "Security", "Python", "JavaScript", "Ruby", "PowerShell", "Statistics", "SQL"],

            },
            profile: [
                { id: 1, name: 'Samantha May', email: 'samanthamay2912@gmail.com', role: 'Team Member', color: "info" },
                { id: 2, name: 'Andrew Garfield', email: 'andrewgarfield98@gmail.com', role: 'Team Lead', color: "success" },
                { id: 3, name: 'Jessica Cashew', email: 'jessicacashew143@gmail.com', role: 'Team Member', color: "info" },
                { id: 4, name: 'Simon Cowan', email: 'jessicacashew143@gmail.com', role: 'Team Manager', color: "warning" },
                { id: 5, name: 'Amanda Nunes', email: 'amandanunes45@gmail.com', role: 'Team Member', color: "info" },
                { id: 6, name: 'Mahira Hose', email: 'mahirahose9456@gmail.com', role: 'Team Member', color: "info" },
            ],
            recentPosts: [
                { id: 1, size: "md", title: "Animals", description: "There are many variations of passages of Lorem Ipsum available", },
                { id: 2, size: "md", title: "Travel", description: "Latin words, combined with a handful of model sentence", },
                { id: 3, size: "md", title: "Interior", description: "Contrary to popular belief, Lorem Ipsum is not simply random", },
                { id: 4, size: "md", title: "Nature", description: " It is a long established fact that a reader will be distracted by the readable content", },
            ],
            activitys: [
                { id: 1, avatar: "E", avatarColor: 'primary', img: "", description: "<p class='mb-2'><b>You</b> Commented on <b>alexander taylor</b> post <a class='text-secondary' href='javascript:void(0);'><u>#beautiful day</u></a>.<span class='float-end fs-11 text-muted'>24,Dec 2022 - 14:34</span></p>", classimg: "me-2", avatarList: [] },
                { id: 2, avatar: "",  description: "<p class='text-muted mb-2'><span class='text-default'><b>Json Smith</b> reacted to the post &#128077;</span>.<span class='float-end fs-11 text-muted'>18,Dec 2022 - 12:16</span></p><p class='text-muted mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!</p>", media: [], avatarList: [] },
                { id: 3, avatar: "", description: "<p class='text-muted mb-2'><span class='text-default'><b>Alicia Keys</b> shared a document with <b>you</b></span>.<span class='float-end fs-11 text-muted'>21,Dec 2022 - 15:32</span></p>",  avatarList: [], },
                { id: 4, avatar: "P", avatarColor: 'success', img: "", description: "<p class='text-muted mb-2'><span class='text-default'><b>You</b> shared a post with 4 people <b>Simon,Sasha,Anagha,Hishen</b></span>.<span class='float-end fs-11 text-muted'>28,Dec 2022 - 18:46</span></p>"},
                { id: 5, avatar: "", description: "<p class='text-muted mb-1'><span class='text-default'><b>Melissa Blue</b> liked your post <b>travel excites</b></span>.<span class='float-end fs-11 text-muted'>11,Dec 2022 - 11:18</span></p><p class='text-muted'>you are already feeling the tense atmosphere of the video playing in the background</p>", classimg: "me-2", avatarList: [] },
                { id: 6, avatar: "", description: "<p class='mb-1'><b>You</b> Commented on <b>Peter Engola</b> post <a class='text-secondary' href='javascript:void(0);'><u>#Mother Nature</u></a>.<span class='float-end fs-11 text-muted'>24,Dec 2022 - 14:34</span></p><p class='text-muted'>Technology id developing rapidly kepp uo your work &#128076;</p>", classimg: "me-2", avatarList: [] },
            ],
            posts: [
                { id: 1, avatar: "", username: "sonya taylor", date: "24, Dec - 04:32PM", message: "<p class='fs-12 text-muted mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p class='fs-12 text-muted mb-3'>As opposed to using 'Content here &#128076;</p>", media: [], type: "Fashion", typeBg: "primary", avatarList: [] },
                { id: 2, avatar: "", username: "sonya taylor", date: "26, Dec - 12:45PM", message: "<p class='fs-12 text-muted mb-1'>Shared pictures with 4 of friends <span>Hiren,Sasha,Biden,Thara</span>.</p>", type: "Nature", typeBg: "success" },
                { id: 3, avatar: "", username: "sonya taylor", date: "29, Dec - 09:53AM", message: "<p class='fs-12 text-muted mb-1'>Sharing an article that excites me about nature more than what i thought. </p><p class='mb-3 profile-post-link'><a href='javascript:void(0);' class='fs-12 text-primary'><u>https://www.discovery.com/nature/caring-for-coral</u></a></p>", media: "", type: "Travel", typeBg: "secondary", avatarList: [] },
                { id: 4, avatar: "", username: "sonya taylor", date: "22, Dec - 11:22PM", message: "<p class='fs-12 text-muted mb-1'>Shared pictures with 3 of your friends <span>Maya,Jacob,Amanda</span>.</p>", type: "Nature", typeBg: "success" },
                { id: 5, avatar: "", username: "sonya taylor", date: "18, Dec - 12:28PM", message: "<p class='fs-12 text-muted mb-1'>Followed this author for top class themes with best code you can get in the  market.</p> <p class='mb-3 profile-post-link'><a href='https://themeforest.net/user/spruko/portfolio' target='_blank' class='fs-12 text-primary'><u>https://themeforest.net/user/spruko/portfolio</u></a></p>", media: "", type: "Travel", typeBg: "secondary", avatarList: [] },
                { id: 6, avatar: "", username: "sonya taylor", date: "02, Dec - 06:32AM", message: "<p class='fs-12 text-muted mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p><p class='fs-12 text-muted mb-3'>There are many variations of passages &#128079;&#128525;</p>", media: "", type: "Fashion", typeBg: "primary", avatarList: [] },
            ]
        };
    },
    computed: {
        authStore() {
            return useAuthStore();
        },
         userStore() {
            return useUserStore();
        }
    },
    async mounted() {
       
        await this.authStore.loadFromStorage();
        // this.userProfile = this.authStore.userData;
        this.mode = this.$route.query.mode || 'self';


        if (this.mode === 'admin' && this.userStore.selectedUser) {
            // Modo admin → usamos el usuario seleccionado
            this.userProfile = this.userStore.selectedUser;
          
        } else {
            // Modo self → usamos el userData (store o localStorage como fallback)
            this.userProfile = this.authStore.userData 
                || (localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null);
           
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

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-4 col-xl-12">
            <div class="card custom-card overflow-hidden">
                <div class="card-body p-0">
                    <div class="d-sm-flex align-items-top p-4 border-bottom-0 main-profile-cover">
                        <!-- <div>
                            <span class="avatar avatar-xxl avatar-rounded online me-3">
                                <img src="/images/faces/9.jpg" alt="">
                            </span>
                        </div> -->
                        <div class="flex-fill main-profile-info">
                            <div class="d-flex align-items-center justify-content-between">
                                <h6 class="fw-semibold mb-1 text-fixed-white">{{this.userProfile?.username}} <i :class="`ri-id-card-line align-middle fw-normal fs-25`"></i></h6>
                                <button 
                                    class="btn btn-light btn-wave"
                                    @click="$router.push(mode === 'self' 
                                        ? { path: '/pages/edit-profile' } 
                                        : { path: '/pages/edit-profile', query: { mode: 'admin' } })"
                                    >
                                    <i class="ri-edit-line me-1 align-middle"></i>Editar Perfil
                                    </button>
                            </div>
                            <p class="mb-1 text-muted text-fixed-white op-7">{{this.userProfile?.roles[0]?.name}}</p>
                            <p class="fs-12 text-fixed-white mb-4 op-5">
                                <span class="me-3"><i class="ri-building-line me-1 align-middle"></i>{{this.userProfile?.dni}}</span>
                                <span><i class="ri-map-pin-line me-1 align-middle"></i>{{this.userProfile?.direccion}}</span>
                            </p>
                            <div class="d-flex mb-0">
                                <div class="me-4">
                                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">{{this.userProfile?.peso}} <i :class="`ri-weight-line fw-normal align-middle fs-18`"></i></p>
                                    <p class="mb-0 fs-11 op-5 text-fixed-white">Peso</p>
                                </div>
                                <div class="me-4">
                                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">{{this.userProfile?.altura}} <i :class="`ri-expand-height-line fw-normal align-middle fs-18`"></i></p>
                                    <p class="mb-0 fs-11 op-5 text-fixed-white">Altura</p>
                                </div>
                                <div class="me-4">
                                    <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">{{this.userProfile?.last_login}} <i :class="`ri-pass-valid-line fw-normal align-middle fs-18`"></i> </p>
                                    <p class="mb-0 fs-11 op-5 text-fixed-white">Ultima Sesión</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="p-4 border-bottom border-block-end-dashed">
                        <div class="d-flex align-items-center justify-content-between">
                            <p class="fs-15 mb-2 me-4 fw-semibold">Contrato Actual:</p>
                            <button 
                                    class="btn btn-light btn-wave"
                                    >
                                    <i class="ri-file-add-line me-1 align-middle"></i>Agregar contracto
                                    </button>
                        </div>
                        
                        <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-contract-line align-middle fs-14`"></i>
                                </span>
                                Tipo de contrato - {{ this.userProfile?.contrato?.tipoContratoId }}
                            </p>
                        </div>
                         <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-alert-line align-middle fs-14`"></i>
                                </span>
                                Estado de contrato - {{ this.userProfile?.contrato?.estadoContratoId }}
                            </p>
                        </div>
                         <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-arrow-up-box-line align-middle fs-14`"></i>
                                </span>
                                Accesos - {{ this.userProfile?.contrato?.accesos }}
                            </p>
                        </div>

                         <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-pass-valid-line align-middle fs-14`"></i>
                                </span>
                                Sesiones - {{ this.userProfile?.contrato?.sesiones }}
                            </p>
                        </div>

                         <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-calendar-check-fill align-middle fs-14`"></i>
                                </span>
                                Fecha de Inicio - {{ this.userProfile?.contrato?.fechaInicio }}
                            </p>
                        </div>

                        <div class="text-muted">
                            <p class="mb-2">
                                <span class="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                    <i :class="`ri-calendar-close-fill align-middle fs-14`"></i>
                                </span>
                                Fecha de Fin - {{ this.userProfile?.contrato?.fechaFin }}
                            </p>
                        </div>

                    </div>

                    <div class="p-4 border-bottom border-block-end-dashed">
                        <div class="mb-4">
                            <p class="fs-15 mb-2 fw-semibold">Observaciones:</p>
                            <p class="fs-12 text-muted op-7 mb-0"> {{this.userProfile?.observaciones}} </p>
                        </div>
                    </div>

                    <!-- <div class="p-4">
                        <p class="fs-15 mb-2 me-4 fw-semibold">Historial de pagos :</p>
                        <ul class="list-group">
                            <li class="list-group-item" v-for="(follower, index) of profileDetails.followers"
                                :key="index">
                                <div class="d-sm-flex align-items-top">
                                    <span class="avatar avatar-sm">
                                      
                                    </span>
                                    <div class="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                        <p class="mb-0 lh-1">{{ follower.name }}</p>
                                        <span class="fs-11 text-muted op-7">{{ follower.email }}</span>
                                    </div>
                                    <button class="btn btn-light btn-wave btn-sm">Ver detalle</button>
                                </div>
                            </li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-12">
            <div class="row">

                <div class="col-xl-8 col-xl-">
                    <div class="card custom-card">
                        <div class="card-header">
                            <div class="card-title">
                                Contratos
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-group">
                                <li class="list-group-item" v-for="(details, key) of this.userProfile?.contrato" :key="key">
                                    
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
                <!-- <div class="col-xl-4">
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
                </div> -->
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
