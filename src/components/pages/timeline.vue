<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face10 from "/images/faces/10.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face4 from "/images/faces/4.jpg";

export default {
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Timeline",
                list: ['Pages', 'Timeline']
            },
            timelines: [
                { id: 1, day: "FRIDAY", time: "02:31", img: face4, name: "Emperio", status: "online", created_at: "24,Oct 2022", description: "<p class='mb-0 text-muted'>Project assigned by the manager all<span class='badge bg-primary-transparent fw-semibold mx-1'>files</span>and<span class='badge bg-primary-transparent fw-semibold mx-1'>folders</span>were included</p>" },
                { id: 2, day: "MONDAY", time: "08:47", img: face15, name: "Dwayne Bero", status: "offline", created_at: "30,Sep 2022", description: "<p class='mb-0 text-muted'>Admin and other team accepted your work request</p>" },
                { id: 3, day: "YESTERDAY", time: "18:43", img: face11, name: "Alister Chuk", status: "offline", created_at: "11,Sep 2021", description: "<p class='mb-0 text-muted'>Temporary data will be <span class='badge bg-danger-transparent fw-semibold mx-1'>deleted</span> once dedicated time complated</p>" },
                { id: 4, day: "TODAY", time: "03:18", img: face5, name: "Melissa Blue", status: "online", created_at: "18,Sep 2021", description: "<p class='mb-0 text-muted'>Approved date for sanction of loan is verified <i class='ri-checkbox-circle-line text-success ms-1 fs-16 align-middle'></i></p>" },
                { id: 5, day: "TODAY", time: "12:24", img: face10, name: "Zack Slayer", status: "online", created_at: "15,Sep 2021", description: "<p class='mb-0 text-muted'>Social network accounts are at risk check your <span class='badge bg-success-transparent fw-semibold mx-1'>login</span> details</p>" },
                { id: 6, day: "TODAY", time: "04:11", img: face2, name: "Monika Karen", status: "online", created_at: "12,Sep 2021", description: "<p class='mb-0 text-muted'>Changed the password of gmail 4 hrs ago. <span class='badge bg-secondary'>Update</span></p>" }
            ]
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container">
        <ul class="timeline list-unstyled">
            <li v-for="(timeline, key) of timelines" :key="key">
                <div class="timeline-time text-end">
                    <span class="date">{{ timeline.day }}</span>
                    <span class="time d-inline-block">{{ timeline.time }}</span>
                </div>
                <div class="timeline-icon">
                    <a href="javascript:void(0);"></a>
                </div>
                <div class="timeline-body">
                    <div class="d-flex align-items-top timeline-main-content flex-wrap mt-0">
                        <div class="avatar avatar-md online me-3 avatar-rounded mt-sm-0 mt-4">
                            <img alt="avatar" :src="timeline.img">
                        </div>
                        <div class="flex-fill">
                            <div class="d-flex align-items-center">
                                <div class="mt-sm-0 mt-2">
                                    <p class="mb-0 fs-14 fw-semibold">{{ timeline.name }}</p>
                                    <div v-html="timeline.description"></div>
                                </div>
                                <div class="ms-auto">
                                    <span class="float-end badge bg-light text-muted timeline-badge">
                                        {{ timeline.created_at }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="timeline-loadmore-container">
            <button class="btn btn-info-transparent btn-loader mx-auto">
                <span class="me-2">Loading</span>
                <span class="loading"><i class="ri-loader-4-line fs-16"></i></span>
            </button>
        </div>
    </div>
</template>

<style scoped></style>
