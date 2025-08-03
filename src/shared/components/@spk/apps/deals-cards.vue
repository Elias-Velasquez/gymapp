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
            <div class="d-flex align-items-top flex-wrap justify-content-between">
                <div>
                    <div :class="`fw-semibold fs-15 ${card.titleClass}`">{{ card.title }}</div>
                    <span class="badge bg-light text-default">{{ card.leads }}</span>
                </div>
                <div>
                    <span :class="`text-${card.color} fw-semibold`">{{ card.price }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
