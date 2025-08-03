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
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card custom-card" :class="customCardClass">
        <div class="card-body" :class="cardBodyClass">
            <span class="avatar avatar-xl avatar-rounded mb-3">
                <img :src="card.image" alt="Card Image">
            </span>
            <p class="fw-semibold fs-15 mb-0">{{ card.name }}</p>
            <span class="text-muted fs-12">{{ card.email }}</span>
        </div>
        <div class="card-footer">
            <div class="btn-list">
                <button :class="`btn btn-sm btn-icon btn-${details.iconColor}-light btn-wave waves-effect waves-light`"
                    v-for="(details, key) in card.socialMedia" :key="key">
                    <i :class="`ri-${details.icon}-line fw-semibold`"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Add your styles here */
</style>
