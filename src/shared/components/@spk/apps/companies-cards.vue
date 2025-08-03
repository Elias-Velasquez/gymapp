<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        cardFooterClass: String,
        card: Object,
    }
}
</script>
<template>
    <div :class="['card custom-card', customCardClass]">
        <div :class="['card-body', cardBodyClass]">
            <div class="d-flex mb-3 align-items-center flex-wrap gap-2">
                <div>
                    <span class="avatar avatar-lg avatar-rounded">
                        <img :src="card.image" alt="">
                    </span>
                </div>
                <div class="flex-fill">
                    <h5 class="fw-semibold mb-0 d-flex align-items-center"><a href="javascript:void(0);"> {{ card.name
                            }} <i class="bi bi-check-circle-fill text-success fs-16"><v-tooltip activator="parent"
                                    location="top">Verified
                                    candidate</v-tooltip></i></a></h5>
                    <div class="d-flex gap-2">
                        <a href="javascript:void(0);">{{ card.role }}</a>
                        <p class="mb-0 fs-12 text-muted"><i class="bi bi-geo-alt fs-11"></i>
                            {{ card.location }}</p>
                    </div>
                    <div class="d-flex align-items-center fs-12 text-muted">
                        <p class="fs-12 mb-0">Ratings : </p>
                        <div class="min-w-fit-content ms-2">
                            <span class="text-warning me-1" v-for="(starIcon, index) in card.ratings" :key="index"><i
                                    :class="`bi bi-${starIcon.star}`"></i></span>
                        </div>
                        <a href="javascript:void(0);" class="ms-1 min-w-fit-content text-muted">
                            <span>{{ card.review }}</span>
                            <span>Ratings</span>
                        </a>
                    </div>
                </div>
                <div class="btn-list">
                    <a href="javascript:void(0);"
                        class="avatar avatar-sm avatar-rounded bg-primary text-fixed-white"><v-tooltip
                            activator="parent" location="top">Download Resume</v-tooltip><span><i
                                class="ri-download-2-line fs-13 align-middle"></i></span></a>
                    <a href="javascript:void(0);"
                        class="avatar avatar-sm avatar-rounded bg-light text-default"><v-tooltip activator="parent"
                            location="top">Add to Wishlist</v-tooltip><span><i
                                class="ri-heart-line fs-13 align-middle"></i></span></a>
                    <a href="javascript:void(0);"
                        class="avatar avatar-sm avatar-rounded bg-light text-default"><v-tooltip activator="parent"
                            location="top">View Profile</v-tooltip><span><i
                                class="ri-eye-line fs-13 align-middle"></i></span></a>
                </div>
            </div>
            <div class="popular-tags">
                <a href="javascript:void(0);" v-for="badge, index in card.details" :key="index"
                    class="me-1 badge rounded-pill bg-light text-default"><i
                        :class="`bi bi-${badge.icon} text-muted me-1`"></i> {{ badge.name }}</a>
            </div>
        </div>
        <div :class="['card-footer', cardFooterClass]">
            <div class="d-flex align-items-center gap-3 flex-wrap">
                <h6 class="mb-0 fw-semibold">Skills :</h6>
                <div class="popular-tags flex-grow-1">
                    <a href="javascript:void(0);" v-for="skills, index in card.skills" :key="index"
                        class="me-1 badge rounded-pill bg-light text-default">{{ skills.name }}</a>
                </div>
                <div>
                    <a href="javascript:void(0);"
                        :class="`me-1 badge badge-md rounded-pill bg-${card.color}-transparent`">
                        <v-tooltip activator="parent" location="top">{{ card.bondTooltip }}</v-tooltip>
                        <i :class="`bi bi-${card.icon} me-1`"></i>{{ card.title }}
                    </a>
                    <a href="javascript:void(0);"
                        :class="`me-1 badge badge-md rounded-pill bg-${card.color1}-transparent`"><i
                            :class="`bi bi-${card.icon1} me-1`"></i>{{ card.title1 }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
