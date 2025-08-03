<script lang="ts">
import PageHeader from '../../shared/components/pageheader/pageheader.vue';
import * as personalData from '../../data/dashboards/personal';
import CrmdealCardComponent from "../../shared/components/@spk/dashboard/crm-deal-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        CrmdealCardComponent,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Personal",
                list: ['Dashboards', 'Personal']
            },
            personalData: personalData,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-9 col-xl-12">
            <div class="row">
                <div class="col-xl-7">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" v-for="card in personalData.personal"
                            :key="card.id">
                            <SimpleCardComponent :showCardHeader="false" cardClassBody="p-0"
                                customCardClass="overflow-hidden">
                                <div class="p-4">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="mb-3">
                                            <span class="d-block fw-semibold fs-15">{{ card.name }}</span>
                                            <span class="text-muted fs-12 d-block">{{ card.points }}</span>
                                        </div>
                                        <div>
                                            <span :class="`avatar bg-${card.color}`">
                                                <i :class="`bi bi-${card.icon} fs-18`"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="mb-0">
                                            <span class="fs-24 fw-semibold me-1">{{ card.count }}</span>
                                            <span class="text-muted fs-12 ms-1 d-inline-block">{{ card.text }}</span>
                                        </p>
                                        <span class="text-muted">{{ card.message }}</span>
                                    </div>
                                </div>
                                <apexchart height="115px" type="area" :options="card.chart.options"
                                    :series="card.chart.series"></apexchart>
                            </SimpleCardComponent>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5">
                    <SimpleCardComponent :showCardHeader="false" cardClassBody="p-0">
                        <div class="d-flex flex-wrap align-items-center border-bottom border-block-end-dashed">
                            <div class="px-4 py-3 flex-fill border-end border-inline-end-dashed">
                                <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                    <p class="mb-0 flex-fill fs-14 fw-semibold">Instagram</p>
                                    <div class="ms-0">
                                        <span class="avatar bg-light text-danger"><i
                                                class="bi bi-instagram fs-16"></i></span>
                                    </div>
                                </div>
                                <p class="mb-2 fs-24 fw-semibold">121K</p>
                                <div class="flex-between">
                                    <span class="text-muted fs-12">6 min ago</span>
                                    <span class="text-danger d-inline-block"><i
                                            class="bi bi-arrow-down-right me-1 fs-10 mx-1"></i>1.5%</span>
                                </div>
                            </div>
                            <div class="px-4 py-3 flex-fill border-bottom-dashed border-start-dashed">
                                <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                    <p class="mb-0 flex-fill fs-14 fw-semibold">Facebook</p>
                                    <div>
                                        <span class="avatar bg-light text-warning"><i
                                                class="bi bi-facebook fs-16"></i></span>
                                    </div>
                                </div>
                                <p class="mb-2 fs-24 fw-semibold">2.1K</p>
                                <div class="flex-between">
                                    <span class="text-muted fs-12">1 hr ago</span>
                                    <span class="text-warning d-inline-block"><i
                                            class="bi bi-arrow-down-right me-1 fs-10 mx-1"></i>1.9%</span>
                                </div>
                            </div>
                        </div>
                        <div class="d-flex flex-wrap align-items-center">
                            <div class="px-4 py-3 flex-fill border-end border-inline-end-dashed">
                                <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                    <p class="mb-0 flex-fill fs-14 fw-semibold">Youtube</p>
                                    <div class="ms-1">
                                        <span class="avatar bg-light text-info"><i
                                                class="bi bi-youtube fs-16"></i></span>
                                    </div>
                                </div>
                                <p class="mb-2 fs-24 fw-semibold">1.1M</p>
                                <div class="flex-between">
                                    <span class="text-muted fs-12">1 day ago</span>
                                    <span class="text-info d-inline-block"><i
                                            class="bi bi-arrow-up-right me-1 fs-10 mx-1"></i>1.9%</span>
                                </div>
                            </div>
                            <div class="px-4 py-3 flex-fill border-start-dashed">
                                <div class="d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                    <p class="mb-0 flex-fill fs-14 fw-semibold">Twitter</p>
                                    <div>
                                        <span class="avatar bg-light text-purple"><i
                                                class="ri-twitter-x-line fs-16"></i></span>
                                    </div>
                                </div>
                                <p class="mb-2 fs-24 fw-semibold">2.1K</p>
                                <div class="flex-between">
                                    <span class="text-muted fs-12">1 week ago</span>
                                    <span class="text-purple d-inline-block"><i
                                            class="bi bi-arrow-up-right me-1 fs-10 mx-1"></i>1.9%</span>
                                </div>
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-4">
                    <div class="row">
                        <div class="col-xl-12">
                            <SimpleCardComponent :showCardHeader="false">
                                <div class="d-flex justify-content-between mb-4">
                                    <div class="me-1">
                                        <h6 class="fs-15 mg-b-3">Primary Account</h6>
                                        <a href="javascript:void(0);" class="fs-12 text-primary op-8">Change<i
                                                class="bi bi-box-arrow-up-right fs-11 ms-1"></i></a>
                                    </div>
                                    <div class="min-w-fit-content">
                                        <div class="avatar bg-primary-transparent">
                                            <i class="ri-paypal-fill fs-18"></i>
                                        </div>
                                    </div>
                                </div>
                                <p class="fs-24 fw-semibold">$1,29,389.00</p>
                                <p class="mb-1 fs-14">Sarah Jahn SP</p>
                                <div class="d-flex justify-content-between text-muted">
                                    <span>XXXX XXXX XXXX 1116</span>
                                    <span>12/24</span>
                                </div>
                            </SimpleCardComponent>
                        </div>
                        <div class="col-xl-12">
                            <SimpleCardComponent title="Quick Transfer" cardHeaderClass="justify-content-between">
                                <template v-slot:showheader>
                                    <a href="javascript:void(0);" class="text-primary">View History<i
                                            class="bi bi-box-arrow-up-right fs-11 ms-2"></i></a>
                                </template>
                                <div class="avatar-list-stacked mb-4">
                                    <span class="avatar avatar-rounded">
                                        <img src="/images/faces/2.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img src="/images/faces/8.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img src="/images/faces/2.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img src="/images/faces/10.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img src="/images/faces/4.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-rounded">
                                        <img src="/images/faces/13.jpg" alt="img">
                                    </span>
                                    <a aria-label="anchor" class="avatar bg-light text-default avatar-rounded"
                                        href="javascript:void(0);">
                                        <i class="ri-arrow-right-s-line fs-18"></i>
                                    </a>
                                </div>
                                <div class="mt-2">
                                    <div class="mt-2">
                                        <label class="text-muted mb-1">Send / Receive</label>
                                        <div class="input-group">
                                            <span class="input-group-text">Send To</span>
                                            <input type="text" value="11167731611" aria-label="First name"
                                                class="form-control">
                                            <button class="btn btn-light" type="button">Check</button>
                                        </div>
                                        <label class="text-success fs-12">Say Hii</label>
                                    </div>
                                    <div class="input-group mt-3">
                                        <span class="input-group-text">Amount</span>
                                        <input type="text" value="2000" aria-label="First name" class="form-control">
                                    </div>
                                </div>
                                <div class="d-flex gap-3 mt-4">
                                    <button type="button" aria-label="button"
                                        class="btn btn-icon btn-wave btn-primary-light"><i
                                            class="bi bi-arrow-down-up"></i></button>
                                    <button type="button" class="btn btn-primary btn-wave flex-fill">Proceed To
                                        Pay</button>
                                </div>
                            </SimpleCardComponent>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="row">
                        <div class="col-xl-12">
                            <SimpleCardComponent title="Discover">
                                <div class="row gy-sm-0 gy-3">
                                    <div v-for="(item, index) in personalData.Discover" :key="index"
                                        class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-4 text-center">
                                        <a :aria-label="item.label" href="javascript:void(0);"
                                            :class="['btn', item.buttonClass, 'border-0', 'px-4', 'py-3', 'lh-1', 'rounded']">
                                            <i :class="['bi', item.iconClass, 'fs-22']"></i>
                                        </a>
                                        <a href="javascript:void(0);" class="d-block pt-2 text-muted fw-semibold">{{
                                            item.label }}</a>
                                    </div>
                                </div>
                            </SimpleCardComponent>
                        </div>
                        <div class="col-xl-6">
                            <SimpleCardComponent title="Upcoming Events" cardHeaderClass="justify-content-between">
                                <template v-slot:showheader>
                                    <button type="button" class="btn btn-sm btn-light">View All</button>
                                </template>
                                <CrmdealCardComponent :card="personalData.UpcomingEvents"
                                    ulClass="list-unstyled mb-0 personal-upcoming-events" dflexClass="flex-xl-nowrap" />
                            </SimpleCardComponent>
                        </div>
                        <div class="col-xl-6">
                            <SimpleCardComponent title="Recent Messages" cardHeaderClass="justify-content-between">
                                <template v-slot:showheader>
                                    <button type="button" class="btn btn-light btn-sm btn-wave">View All</button>
                                </template>
                                <div class="avatar-list-stacked mb-4">
                                    <span class="avatar avatar-rounded" v-for="(card, index) in personalData.imges"
                                        :key="index">
                                        <img :src="card.img" alt="img">
                                    </span>
                                    <a aria-label="anchor" class="avatar bg-light text-default avatar-rounded"
                                        href="javascript:void(0);">
                                        <i class="ri-arrow-right-s-line fs-18"></i>
                                    </a>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="fw-semibold">Messages</div>
                                    <div><i
                                            class="ri-check-double-line me-1 align-middle text-muted d-inline-flex"></i>Mark
                                        as read
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <ul class="list-unstyled mb-0 personal-messages-list">
                                        <li v-for="card, index in personalData.RecentMessages" :key="index">
                                            <div class="d-flex flex-wrap align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-rounded">
                                                        <img :src="card.avatar" alt="" v-if="card.avatar">
                                                        <span v-else
                                                            class="avatar bg-primary-transparent avatar-rounded">
                                                            <i class="ri-user-line fs-18"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <span class="fw-semibold d-block">{{ card.title }}</span>
                                                    <span class="fs-12 text-muted d-block message">{{ card.comtent
                                                    }}</span>
                                                </div>
                                                <div class="text-end">
                                                    <span class="d-block text-muted fs-12">{{ card.time }}</span>
                                                    <span :class="`badge bg-${card.badgeColor} rounded-pill`">{{
                                                        card.badgeText
                                                    }}</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </SimpleCardComponent>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-12">
            <div class="row">
                <div class="col-xxl-12 col-xl-4">
                    <SimpleCardComponent :showCardHeader="false">
                        <div class="d-flex align-items-top justify-content-between mb-4">
                            <div>
                                <span class="d-block fs-15 fw-semibold">My Profile</span>
                                <span class="d-block fs-12 text-muted">67% Completed - <a href="javascript:void(0);"
                                        class="text-center text-primary">Click Here<i
                                            class="bi bi-box-arrow-up-right fs-10 ms-2 align-middle"></i></a></span>
                            </div>
                            <div class="dropdown">
                                <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                                    data-bs-toggle="dropdown">
                                    <i class="fe fe-more-vertical"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="text-center mb-4">
                            <div class="mb-3">
                                <span class="avatar avatar-xxl avatar-rounded circle-progress p-1">
                                    <img src="/images/faces/9.jpg" alt="">
                                </span>
                            </div>
                            <div>
                                <h5 class="fw-semibold mb-0">Json Taylor</h5>
                                <span class="fs-13 text-muted">jsontaylor345@gmail.com</span>
                            </div>
                        </div>
                        <div class="btn-list text-center">
                            <router-link to="/pages/profile" class="btn btn-primary-light btn-sm">
                                Edit Profile
                            </router-link>
                            <router-link to="/pages/profile" class="btn btn-primary btn-sm">
                                View Profile
                            </router-link>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xxl-12 col-xl-4">
                    <SimpleCardComponent title="My Goals" cardHeaderClass="justify-content-between">
                        <template v-slot:showheader>
                            <button type="button" class="btn btn-sm btn-light">View All</button>
                        </template>
                        <ul class="list-unstyled personal-goals-list mb-0">
                            <li v-for="(goal, index) in personalData.goals" :key="index">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <span :class="['avatar', 'avatar-rounded', goal.iconBgClass]">
                                            <i :class="['bi', goal.iconClass, 'fs-18']"></i>
                                        </span>
                                    </div>
                                    <div class="flex-fill">
                                        <div class="d-flex align-items-center justify-content-between mb-2">
                                            <span class="d-block fw-semibold">{{ goal.title }}</span>
                                            <span :class="['d-block', goal.progressTextClass]">{{ goal.progress
                                            }}%</span>
                                        </div>
                                        <div class="progress progress-animate progress-xs" role="progressbar"
                                            :aria-valuenow="goal.progress" aria-valuemin="0" aria-valuemax="100">
                                            <div class="progress-bar progress-bar-striped"
                                                :class="goal.progressBarClass" :style="{ width: goal.progress + '%' }">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </SimpleCardComponent>
                </div>
                <div class="col-xxl-12 col-xl-4">
                    <SimpleCardComponent title="Favourite Contacts" cardHeaderClass="justify-content-between">
                        <template v-slot:showheader>
                            <button type="button" class="btn btn-sm btn-light">View All</button>
                        </template>
                        <CrmdealCardComponent :card="personalData.FavouriteContacts"
                            ulClass="list-unstyled personal-favourite-contacts mb-0" />
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
