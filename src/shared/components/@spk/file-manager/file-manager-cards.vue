<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        card: {
            type: Object,
            required: true,
        }
    }
}
</script>

<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <a href="javascript:void(0);">
                <div class="d-flex justify-content-between flex-wrap">
                    <div class="file-format-icon" v-html="card.icon"></div>
                    <div>
                        <span class="fw-semibold mb-1">
                            {{ card.title }}
                        </span>
                        <span class="fs-10 d-block text-muted text-end">
                            {{ card.size }}
                        </span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<style scoped></style>