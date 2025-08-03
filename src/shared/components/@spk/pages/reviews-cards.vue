<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        card: Object,
        showReadmore: { type: Boolean, default: false, },
        showStarRating: { type: Boolean, default: false }
    },
}
</script>

<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <div class="d-flex align-items-center mb-3">
                <span class="avatar avatar-md avatar-rounded me-3">
                    <img :src="card.avatar" alt="">
                </span>
                <div>
                    <p class="mb-0 fw-semibold fs-14 text-primary">{{ card.name }}</p>
                    <p class="mb-0 fs-10 fw-semibold text-muted">{{ card.position }}</p>
                </div>
            </div>
            <div class="mb-3">
                <span class="text-muted">{{ card.message }}
                    <template v-if="showReadmore">
                        <a href="javascript:void(0);" class="fw-semibold fs-11 text-primary" data-bs-toggle="tooltip"
                            data-bs-custom-class="tooltip-primary" data-bs-placement="top"
                            data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read
                            More</a>
                    </template>
                </span>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <template v-if="showStarRating">
                    <div class="d-flex align-items-center">
                        <span class="text-muted">Rating : </span>
                        <span class="text-warning d-block ms-1">
                            <i :class="`ri-star-${star.icon} me-1`" v-for="star in card.rating"></i>
                        </span>
                    </div>
                </template>
                <div class="float-end fs-12 fw-semibold text-muted text-end">
                    <span>{{ card.date }}</span>
                    <span class="d-block fw-normal fs-12 text-success"><i>{{ card.name }}</i></span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
