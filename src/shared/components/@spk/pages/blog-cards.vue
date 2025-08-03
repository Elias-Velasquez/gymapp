<script lang="js">
export default {
    props: {
        customCardClass: {
            type: String,
            default: ''
        },
        cardBodyClass: {
            type: String,
            default: ''
        },
        cardFooterClass: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        },
        card: Object
    }
}
</script>

<template>
    <div class="card custom-card" :class="customCardClass">
        <a href="javascript:void(0);">
            <img :src="card.img" class="card-img-top" alt="Card Image">
        </a>
        <div class="card-body" :class="cardBodyClass">
            <router-link :to="link" class="fw-semibold fs-14 text-dark mb-1">{{ card.title }}</router-link>
            <p class="card-text text-muted mb-3">{{ card.content }}</p>
            <a href="javascript:void(0);" class="btn btn-primary-light">{{ card.readMore }}</a>
        </div>
        <div class="card-footer" :class="cardFooterClass">
            <div class="d-flex align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                    <div class="avatar avatar-sm avatar-rounded me-2">
                        <img :src="card.src" alt="Avatar">
                    </div>
                    <div>
                        <p class="mb-0 fw-semibold">{{ card.name }}</p>
                        <p class="text-muted fs-10 mb-0">{{ card.date }}</p>
                    </div>
                </div>
                <div class="btn-list">
                    <button aria-label="Thumb" type="button" class="btn btn-icon btn-light btn-sm me-2">
                        <i class="ri-thumb-up-line"></i>
                    </button>
                    <button aria-label="Chat" type="button" class="btn btn-icon btn-light btn-sm">
                        <i class="ri-chat-2-line"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
