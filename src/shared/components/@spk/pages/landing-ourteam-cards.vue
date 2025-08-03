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
            <span class="avatar avatar-xxl avatar-rounded mb-3 team-avatar">
                <img :src="card.src" alt="">
            </span>
            <p class="fw-semibold fs-17 mb-0 text-default">{{ card.name }}</p>
            <span class="text-muted fs-14 text-primary fw-semibold">{{ card.position }}</span>
            <p class="text-muted mt-2 fs-13">{{ card.content }} </p>
            <div class="mt-2">
                <router-link to="/pages/profile" class="btn btn-light" target="_blank">View profile</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
