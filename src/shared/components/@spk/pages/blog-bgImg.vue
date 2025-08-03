<script lang="js">
export default {
    props: {
        customCardClass: {
            type: String,
            default: ''
        },
        mainContentClass: {
            type: String,
            default: ''
        },
        cardFooterClass: {
            type: String,
            default: ''
        },
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <a href="javascript:void(0);">
        <div class="card custom-card" :class="customCardClass">
            <img :src="card.img" class="card-img" alt="...">
            <div :class="mainContentClass">
                <div class="card-footer" :class="cardFooterClass">
                    <h6 class="fw-semibold mb-0 text-fixed-white">{{ card.content }}</h6>
                </div>
            </div>
        </div>
    </a>
</template>

<style scoped></style>