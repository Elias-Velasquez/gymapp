<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        card: Object,
    }
}
</script>

<template>
    <div :class="['card custom-card', customCardClass]">
        <div :class="['card-body', cardBodyClass]">
            <div class="btn-list float-end">
                <a href="javascript:void(0);"
                    class="avatar avatar-rounded avatar-sm me-2 text-default bg-light"><v-tooltip activator="parent"
                        location="top">Add to wishlist</v-tooltip><span><i class="bi bi-heart"></i></span></a>
                <a href="javascript:void(0);"
                    class="avatar avatar-rounded avatar-sm text-warning bg-warning-transparent"><v-tooltip
                        activator="parent" location="top">Featured Jobs</v-tooltip><span><i
                            class="bi bi-star-fill"></i></span></a>
            </div>
            <div class="d-flex mb-3 flex-wrap gap-2">
                <div>
                    <span class="avatar avatar-lg avatar-rounded bg-primary bg-opacity-10 border"
                        v-html="card.icon"></span>
                </div>
                <div class="ms-2">
                    <h5 class="fw-semibold mb-0 d-flex align-items-center"><a href="javascript:void(0);"> {{ card.title
                            }}</a></h5>
                    <a href="javascript:void(0);"><i class="bi bi-building"></i> {{ card.company }}</a>
                </div>
            </div>
            <div class="popular-tags mb-3">
                <a href="javascript:void(0);" v-for="(badge, index) in card.badgeIcon" :key="index"
                    class="badge rounded-pill bg-light text-default me-1"><i
                        :class="`bi bi-${badge.iconClass} text-muted me-1`"></i> {{ badge.badgeText }}</a>
            </div>
            <div class="d-flex justify-content-between">
                <h6 class="fw-semibold mb-0">{{ card.salary }}</h6>
                <router-link to="/apps/jobs/search-jobs" class="text-primary fw-semibold fs-14">
                    Apply Now <i class="fe fe-arrow-right ms-1 d-inline-flex"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoprd></style>
