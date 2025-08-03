<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import faces11 from '/images/faces/11.jpg';
import faces15 from '/images/faces/15.jpg';
import faces4 from '/images/faces/4.jpg';
import faces5 from '/images/faces/5.jpg';
import faces2 from '/images/faces/2.jpg';


export default {
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Notifications",
                list: ['Pages', 'Notifications']
            },
            notificationList: [
                { id: 1, name: "Emperio", avatar: faces4, status: "online", description: "<p class='mb-0 text-muted'>Project assigned by the manager all<span class='badge bg-primary-transparent fw-semibold mx-1'>files</span>and<span class='badge bg-primary-transparent fw-semibold mx-1'>folders</span>were included</p>", created: "12 mins ago", date: "24,Oct 2022" },
                { id: 2, name: "Dwayne Bero", avatar: faces15, status: "offline", description: "<p class='mb-0 text-muted'>Admin and other team accepted your work request</p>", created: "17 mins ago", date: "30,Sep 2022" },
                { id: 3, name: "Alister Chuk", avatar: faces11, status: "offline", description: "<p class='mb-0 text-muted'>Temporary data will be <span class='badge bg-danger-transparent fw-semibold mx-1'>deleted</span> once dedicated time complated</p>", created: "4 hrs ago", date: "11,Sep 2021" },
                { id: 4, name: "Melissa Blue", avatar: faces5, status: "online", description: "<p class='mb-0 text-muted'>Approved date for sanction of loan is verified <i class='ri-checkbox-circle-line text-success ms-1 fs-16 align-middle'></i></p>", created: "5 hrs ago", date: "18,Sep 2021" },
                { id: 5, name: "Zack Slayer", avatar: null, icons: 'ZS', status: "online", description: "<p class='mb-0 text-muted'>Social network accounts are at risk check your <span class='badge bg-success-transparent fw-semibold mx-1'>login</span> details</p>", created: "9 hrs ago", date: "15,Sep 2021" },
                { id: 6, name: "Monika Karen", avatar: faces2, status: "online", description: "<p class='mb-0 text-muted'>Changed the password of gmail 4 hrs ago. <span class='badge bg-secondary'>Update</span></p>", created: "12 hrs ago", date: "12,Sep 2021" },
            ]
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container-lg">
        <!-- Start::row-1 -->
        <div class="row justify-content-center">
            <div class="col-xxl-8 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <ul class="list-unstyled mb-0 notification-container">
                    <li v-for="(notify, index) of notificationList" :key="index">
                        <div class="card custom-card un-read">
                            <div class="card-body p-3">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-top mt-0 flex-wrap">
                                        <div class="lh-1">
                                            <span v-if="notify.avatar" class="avatar avatar-md me-3 avatar-rounded"
                                                :class="notify.status">
                                                <img alt="avatar" :src="notify.avatar">
                                            </span>
                                            <div v-if="notify.icons"
                                                class="avatar avatar-md bg-primary me-3 avatar-rounded"
                                                :class="notify.status">
                                                {{ notify.icons }}
                                            </div>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="d-flex align-items-center">
                                                <div class="mt-sm-0 mt-2">
                                                    <p class="mb-0 fs-14 fw-semibold">{{ notify.name }}</p>
                                                    <div v-html="notify.description"></div>
                                                    <span class="mb-0 d-block text-muted fs-12">{{ notify.created
                                                    }}</span>
                                                </div>
                                                <div class="ms-auto">
                                                    <span class="float-end badge bg-light text-muted">
                                                        {{ notify.date }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="text-center">
                    <button class="btn btn-info-transparent btn-loader my-3 mx-auto">
                        <span class="me-2">Loading</span>
                        <span class="loading"><i class="ri-loader-4-line fs-16"></i></span>
                    </button>
                </div>
            </div>
        </div>
        <!--End::row-1 -->
    </div>
</template>

<style scoped></style>
