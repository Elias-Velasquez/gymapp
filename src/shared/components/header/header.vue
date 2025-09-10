<template lang="">

    <!-- app-header -->
    <header class="app-header">
        <!-- Start::main-header-container -->
        <div class="main-header-container container-fluid">

            <!-- Start::header-content-left -->
            <div class="header-content-left">

                <!-- Start::header-element -->
                <div class="header-element">
                    <div class="horizontal-logo">           
                        <router-link  to='/dashboard/crm' class="header-logo">
                            <img src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo">
                            <img src="/images/brand-logos/toggle-logo.png" alt="logo" class="toggle-logo">
                            <img src="/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark">
                            <img src="/images/brand-logos/toggle-dark.png" alt="logo" class="toggle-dark">
                            <img src="/images/brand-logos/desktop-white.png" alt="logo" class="desktop-white">
                            <img src="/images/brand-logos/toggle-white.png" alt="logo" class="toggle-white">
                        </router-link>
                    </div>
                </div>
                <!-- End::header-element -->

                <!-- Start::header-element -->
                <div class="header-element">
                    <!-- Start::header-link -->
                    <a @click="ToggleMenu" aria-label="Hide Sidebar" class="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle" href="javascript:void(0);"><span></span></a>
                    <!-- End::header-link -->
                </div>
                <!-- End::header-element -->

            </div>
            <!-- End::header-content-left -->

            <!-- Start::header-content-right -->
            <div class="header-content-right">

                <!-- Start::header-element -->
                <!-- <div class="header-element header-search">
                    
                    <a href="javascript:void(0);" class="header-link" data-bs-toggle="modal" data-bs-target="#searchModal">
                        <i class="bx bx-search-alt-2 header-link-icon"></i>
                    </a>
                    
                </div> -->
                <!-- End::header-element -->

                <!-- Start::header-element -->
                
                <!-- <div class="header-element country-selector">
                        Start::header-link|dropdown-toggle
                        <div class="header-element country-selector"> 
                            <a href="javascript:void(0);" class="header-link" data-bs-toggle="modal" data-bs-target="#countryModal"> 
                                <img src="/images/flags/us_flag.jpg" alt="img" class="rounded-circle header-link-icon"> 
                                <span class="fw-semibold mb-0 lh-1">EN</span> 
                            </a> 
                        </div>
                </div> -->
                <!-- End::header-element -->

                <!-- Start::header-element -->
                <div class="header-element header-theme-mode">
                    <!-- Start::header-link|layout-setting -->
                    <a href="javascript:void(0);" class="header-link layout-setting">
                        <span class="light-layout" @click="colorthemeFn('dark')">
                            <!-- Start::header-link-icon -->
                        <i class="bx bx-moon header-link-icon"></i>
                            <!-- End::header-link-icon -->
                        </span>
                        <span class="dark-layout" @click="colorthemeFn('light')">
                            <!-- Start::header-link-icon -->
                        <i class="bx bx-sun header-link-icon"></i>
                            <!-- End::header-link-icon -->
                        </span>
                    </a>
                    <!-- End::header-link|layout-setting -->
                </div>
                <!-- End::header-element -->

                <!-- Start::header-element -->
                <div class="header-element cart-dropdown">
                    <!-- Start::header-link|dropdown-toggle -->
                    <!-- <a href="javascript:void(0);" class="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                        <i class="bx bx-cart header-link-icon"></i>
                        <span class="badge bg-primary rounded-pill header-icon-badge" id="cart-icon-badge">{{cartList.length}}</span>
                    </a> -->
                    <!-- End::header-link|dropdown-toggle -->
                    <!-- Start::main-header-dropdown -->
                    <!-- <div class="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                        <div class="p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="mb-0 fs-17 fw-semibold">Cart Items</p>
                                <span class="badge bg-success-transparent" id="cart-data">{{cartList.length}} Items</span>
                            </div>
                        </div>
                        <div><hr class="dropdown-divider"></div>
                        <ul v-if="cartList.length" class="list-unstyled mb-0" id="header-cart-items-scroll">
                            <li v-for="(item, key) in cartList" :key=key class="dropdown-item">
                                <div class="d-flex align-items-start cart-dropdown-item">
                                    <img :src="item.img" alt="img" class="avatar avatar-sm avatar-rounded br-5 me-3">
                                    <div class="flex-grow-1">
                                        <div class="d-flex align-items-start justify-content-between mb-0">
                                            <div class="mb-0 fs-13 text-dark fw-semibold">
                                                <router-link to="/pages/ecommerce/cart" class="text-dark">{{item.title}}</router-link>
                                            </div>
                                            <div>
                                                <span class="text-black mb-1">${{item.price}}</span>
                                                <a @click="removeItemFromCart(item)" href="javascript:void(0);" class="header-cart-remove float-end dropdown-item-close"><i class="ti ti-trash"></i></a>
                                            </div>
                                        </div>
                                        <div class="min-w-fit-content d-flex align-items-start justify-content-between">
                                            <ul class="header-product-item">
                                                <li v-for="(cat, index) in item.categoryList" :key="index" :class="cat.valueBgColor ? `badge ${cat.valueBgColor} fs-10` : ''">{{cat.value}}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div v-if="cartList.length" class="p-3 empty-header-item border-top">
                            <div class="d-grid">
                                <router-link to="/pages/ecommerce/checkout" class="btn btn-primary">Proceed to checkout</router-link>
                            </div>
                        </div>
                        <div v-if="!cartList.length" class="p-5 empty-item">
                            <div class="text-center">
                                <span class="avatar avatar-xl avatar-rounded bg-warning-transparent">
                                    <i class="ri-shopping-cart-2-line fs-2"></i>
                                </span>
                                <h6 class="fw-bold mb-1 mt-3">Your Cart is Empty</h6>
                                <span class="mb-3 fw-normal fs-13 d-block">Add some items to make me happy :)</span>
                                <router-link to="/pages/ecommerce/products" class="btn btn-primary btn-wave btn-sm m-1" data-abc="true">continue shopping <i class="bi bi-arrow-right ms-1"></i></router-link>
                            </div>
                        </div>
                    </div> -->
                    <!-- End::main-header-dropdown -->
                </div>
                <!-- End::header-element -->

                <!-- Start::header-element -->
                
                <!-- End::header-element -->

                <!-- Start::header-element -->
                <div class="header-element header-shortcuts-dropdown">
                    <!-- Start::header-link|dropdown-toggle -->
                    <!-- <a href="javascript:void(0);" class="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="notificationDropdown" aria-expanded="false">
                        <i class="bx bx-grid-alt header-link-icon"></i>
                    </a>
                    End::header-link|dropdown-toggle 
                    Start::main-header-dropdown
                    <div class="main-header-dropdown header-shortcuts-dropdown dropdown-menu pb-0 dropdown-menu-end" aria-labelledby="notificationDropdown">
                        <div class="p-3">
                            <div class="d-flex align-items-center justify-content-between">
                                <p class="mb-0 fs-17 fw-semibold">Related Apps</p>
                            </div>
                        </div>
                        <div class="dropdown-divider mb-0"></div>
                        <div class="main-header-shortcuts p-2" id="header-shortcut-scroll">
                            <div class="row g-2">
                                <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/apps/figma.png" alt="">
                                            </span>
                                            <span class="d-block fs-12">Figma</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/apps/microsoft-powerpoint.png" alt="">
                                            </span>
                                            <span class="d-block fs-12">Power Point</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/apps/microsoft-word.png" alt="">
                                            </span>
                                            <span class="d-block fs-12">MS Word</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/apps/calender.png" alt="">
                                            </span>
                                            <span class="d-block fs-12">Calendar</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/apps/sketch.png" alt="">
                                            </span>
                                            <span class="d-block fs-12">Sketch</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/apps/google-docs.png" alt="">
                                            </span>
                                            <span class="d-block fs-12">Docs</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/apps/google.png" alt="">
                                            </span>
                                            <span class="d-block fs-12">Google</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/apps/translate.png" alt="">
                                            </span>
                                            <span class="d-block fs-12">Translate</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="javascript:void(0);">
                                        <div class="text-center p-3 related-app">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <img src="/images/apps/google-sheets.png" alt="">
                                            </span>
                                            <span class="d-block fs-12">Sheets</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="p-3 border-top">
                            <div class="d-grid">
                                <a href="javascript:void(0);" class="btn btn-primary">View All</a>
                            </div>
                        </div>
                    </div> -->
                    <!-- End::main-header-dropdown -->
                </div>
                <!-- End::header-element -->

                <!-- Start::header-element -->
                <div class="header-element header-fullscreen">
                    <!-- Start::header-link -->
                    <a @click="toggleFullScreen();" href="javascript:void(0);" class="header-link">
                        <i v-if="!isFullScreen" class="bx bx-fullscreen full-screen-open header-link-icon"></i>
                        <i v-if="isFullScreen" class="bx bx-exit-fullscreen full-screen-close header-link-icon"></i>
                    </a>
                    <!-- End::header-link -->
                </div>
                <!-- End::header-element -->

                <!-- Start::header-element -->
                <div class="header-element"> <!-- Start::header-link|dropdown-toggle --> 
                    <a href="javascript:void(0);" class="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" 
                     data-bs-auto-close="outside" aria-expanded="false"> <div class="d-flex align-items-center"> 
                        <div class="me-sm-2 me-0"> 
                           <img src="/images/faces/9.jpg" alt="img" width="32" height="32" class="rounded-circle"> 
                        </div> 
                        <div class="d-sm-block d-none"> 
                            <p class="fw-semibold mb-0 lh-1">{{ displayName }}</p>
        
                            <!-- Username (email) -->
                            <small class="text-muted text-center d-block">{{ auth.user }}</small>
                            
                            <!-- Rol -->
                            <span v-if="auth.role == 'ROLE_ADMIN'" style="background-color: rgb(0, 109, 254)!important;" class="op-7 fw-normal text-center d-block fs-11 badge bg-info" >Administrador</span> 
                            <span v-else-if="auth.role == 'ROLE_USER'" style="background-color: rgb(0, 109, 254)!important;" class="op-7 fw-normal color-info d-block text-center fs-11 badge bg-info">Cliente</span> 
                        </div> 
                    </div> 
                </a> <!-- End::header-link|dropdown-toggle --> 
                <ul class="main-header-dropdown dropdown-menu pt-0 overflow-hidden header-profile-dropdown dropdown-menu-end" aria-labelledby="mainHeaderProfile" style=""> 
                    <li><router-link class="dropdown-item d-flex" to="/pages/profile"><i class="ti ti-user-circle fs-18 me-2 op-7"></i>Mi Perfil</router-link></li> 
                     <!-- <li><router-link class="dropdown-item d-flex border-block-end" to="/pages/to-do-list"><i class="ti ti-clipboard-check fs-18 me-2 op-7"></i>Gestor de tareas</router-link></li> 
                    <li><router-link class="dropdown-item d-flex" to="/pages/email/mail-settings"><i class="ti ti-adjustments-horizontal fs-18 me-2 op-7"></i>Configuración</router-link></li>  -->
                    <li><a class="dropdown-item d-flex" href="javascript:void(0);" @click="handleLogout">
                            <i class="ti ti-logout fs-18 me-2 op-7"></i>Salir
                        </a>
                    </li>
                </ul> 
            </div>

                <!-- End::header-element -->

                <!-- Start::header-element -->
                <!-- <div class="header-element">
                    <!-- Start::header-link|switcher-icon 
                    <a href="javascript:void(0);" class="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas">
                        <i class="bx bx-cog header-link-icon"></i>
                    </a>
                     End::header-link|switcher-icon
                </div> -->
                <!-- End::header-element -->

            </div>
            <!-- End::header-content-right -->

        </div>
        <!-- End::main-header-container -->
    </header>
    <!-- /app-header -->

    
    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModal" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                  <div class="input-group">
                    <a href="javascript:void(0);" class="input-group-text" id="Search-Grid"><i class="fe fe-search header-link-icon fs-18"></i></a>
                    <input type="search" class="form-control border-0 px-2" placeholder="Search" aria-label="Username">
                    <a href="javascript:void(0);" class="input-group-text" id="voice-search"><i class="fe fe-mic header-link-icon"></i></a>
                    <a href="javascript:void(0);" class="btn btn-light btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="fe fe-more-vertical"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                    </ul>
                  </div>
                  <div class="mt-4">
                    <p class="font-weight-semibold text-muted mb-2">Are You Looking For...</p>
                    <span class="search-tags" v-for="(header,index) in header" :key="index">
                        <i :class="`fe fe-${header.icon} me-2`"></i>{{header.name}}
                        <a href="javascript:void(0)" class="tag-addon"  @click="removeHeader(index)">
                            <i class="fe fe-x"></i>
                        </a>
                    </span>
                  </div>
                  <div class="my-4">
                    <p class="font-weight-semibold text-muted mb-2">Recent Search :</p>
                    <div class="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                      <router-link to="/pages/notifications"><span>Notifications</span></router-link>
                      <a class="ms-auto lh-1" href="javascript:void(0);" data-bs-dismiss="alert" aria-label="Close"><i class="fe fe-x text-muted"></i></a>
                    </div>
                    <div class="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                      <router-link to="/ui-elements/alerts"><span>Alerts</span></router-link>
                      <a class="ms-auto lh-1" href="javascript:void(0);" data-bs-dismiss="alert" aria-label="Close"><i class="fe fe-x text-muted"></i></a>
                    </div>
                    <div class="p-2 border br-5 d-flex align-items-center text-muted mb-0 alert">
                      <router-link to="/pages/email/mail-app"><span>Mail</span></router-link>
                      <a class="ms-auto lh-1" href="javascript:void(0);" data-bs-dismiss="alert" aria-label="Close"><i class="fe fe-x text-muted"></i></a>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="btn-group ms-auto">
                    <button class="btn btn-sm btn-primary-light">Search</button>
                    <button class="btn btn-sm btn-primary">Clear Recents</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="modal fade" id="countryModal" tabindex="-1" aria-labelledby="countryModal" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-body">
                    <label class="form-label fs-16">Select Location</label>
                    <multiselect1 :show-labels="false" v-model="searchSelectedValue1"
                        :options="searchSelectedOptions1"  placeholder="Select one"
                        label="name" track-by="name">
                    </multiselect1>

                    <label class="form-label fs-16 mt-2">Select Language</label>
                    <multiselect1 :show-labels="false" v-model="searchSelectedValue"
                        :options="searchSelectedOptions" placeholder="Select one"
                        label="name" track-by="name">
                    </multiselect1>
                </div>
                <div class="modal-footer"> 
                    <button type="button" class="btn btn-primary-light" data-bs-dismiss="modal">Close</button> 
                    <button type="button" class="btn btn-primary">Save changes</button> 
                </div>
              </div>
            </div>
        </div>
        
</template>
<script>
import { switcherStore } from '../../../stores/switcher';
import { notificationList, cartList, header } from '../../../data/headerdata.js';
import { useRouter } from 'vue-router';
import { useAuthStore } from "../../../stores/auth";
export default {


    setup() {
        const switcher = switcherStore();

        const colorthemeFn = value => { localStorage.setItem('ynexcolortheme', value); switcher.colorthemeFn(value) };
        const router = useRouter();

        const logout = () => {
            logUserOut();
            router.push('/');
        };
        return {
            switcher,
            colorthemeFn,
            logout
        }
    },
    computed: {
        auth() {
                return useAuthStore();
            },

           displayName() {

                const { nombre, apellidos, username } = this.auth.userData;
                if (nombre && apellidos) {
                return `${nombre} ${apellidos}`;
                }
                return username; // si no tiene nombre/apellido, mostramos el email
            } 
    },
    data() {
        return {
            notificationList, cartList, header,
            isFullScreen: false,
            searchSelectedValue: { name: 'English (En)', language: 'English (En)' },
            searchSelectedOptions: [
                { name: 'Deutsch (DE)', language: 'Deutsch (DE)' },
                { name: 'English (En)', language: 'English (En)' },
                { name: 'Española (ES)', language: 'Española (ES)' },
                { name: 'Français (FR)', language: 'Français (FR)' },
                { name: 'Italiana (IT)', language: 'Italiana (IT)' },
                { name: 'Русский (RU)', language: 'Русский (RU)' },
                { name: 'عربي (AR)', language: 'عربي (AR)' },
                { name: '한국인 (KO)', language: '한국인 (KO)' }
            ],
            searchSelectedValue1: { name: 'Argentina', language: 'Argentina' },
            searchSelectedOptions1: [
                { name: 'Argentina', language: 'Argentina' },
                { name: 'France', language: 'France' },
                { name: 'Germany', language: 'Germany' },
                { name: 'Italy', language: 'Italy' },
                { name: 'Netherlands', language: 'Netherlands' },
                { name: 'Spain', language: 'Spain' },
                { name: 'United States', language: 'United States' },
            ],
        }
    },
    methods: {
        ToggleMenu() {
            let html = document.querySelector('html');
            if (window.innerWidth <= 991) {
                let dataToggled = html.getAttribute('data-toggled');
                if (dataToggled == 'open') {
                    html.setAttribute('data-toggled', 'close');
                } else {
                    html.setAttribute('data-toggled', 'open');
                }
            } else {
                let menuNavLayoutType = html.getAttribute('data-nav-style');
                let verticalStyleType = html.getAttribute('data-vertical-style');
                if (menuNavLayoutType) {
                    let dataToggled = html.getAttribute('data-toggled');
                    if (dataToggled) {
                        html.removeAttribute('data-toggled');
                    } else {
                        html.setAttribute('data-toggled', menuNavLayoutType + '-closed');
                    }
                } else if (verticalStyleType) {
                    let dataToggled = html.getAttribute('data-toggled');
                    if (verticalStyleType == 'doublemenu') {
                        if (html.getAttribute('data-toggled') === 'double-menu-open' && document.querySelector('.double-menu-active')) {
                            html.setAttribute('data-toggled', 'double-menu-close');
                        } else {
                            if (document.querySelector('.double-menu-active')) {
                                html.setAttribute('data-toggled', 'double-menu-open');
                            }
                        }
                    } else if (dataToggled) {
                        html.removeAttribute('data-toggled');
                    } else {
                        switch (verticalStyleType) {
                            case 'closed':
                                html.setAttribute('data-toggled', 'close-menu-close');
                                break;
                            case 'icontext':
                                html.setAttribute('data-toggled', 'icon-text-close');
                                break;
                            case 'overlay':
                                html.setAttribute('data-toggled', 'icon-overlay-close');
                                break;
                            case 'detached':
                                html.setAttribute('data-toggled', 'detached-close');
                                break;
                        }
                    }
                }
            }
        },
        async handleLogout() {
            try {
                await this.auth.logout();
                this.$router.push('/authentication/sign-in/cover');
            } catch (error) {
                console.error('Logout failed:', error);
            }
        },
        toggleFullScreen() {
            const element = document.documentElement; // Full-screen target element

            if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
                // If in full-screen mode, exit it
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            } else {
                // If not in full-screen mode, enter it
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            }
        },
        removeNotification(item) {
            this.notificationList = this.notificationList.filter(itm => itm.id != item.id);
        },
        removeItemFromCart(item) {
            this.cartList = this.cartList.filter(itm => itm.id != item.id);
        },
        fullscreenchanged() {
            if (document.fullscreenElement) {
                this.isFullScreen = true;
            } else {
                this.isFullScreen = false;
            }
        },
        removeHeader(index) {
            this.header.splice(index, 1);
        }
    },
    async mounted() {
        await this.auth.loadFromStorage();

        document.addEventListener("fullscreenchange", this.fullscreenchanged);
    },
}
</script>
