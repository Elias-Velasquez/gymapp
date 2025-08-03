<script lang="js">
export default {
    props: {
        hasBadge: { type: Boolean, default: false },
        planType: String,
        card: Object
    }
}
</script>

<template>
    <div :class="card.cardClass">
        <template v-if="card.hasBadge">
            <span class="pricing-offer-details shadow">
                <span class="fw-semibold">10%</span> <span class="fs-10 op-8 ms-1">Off</span>
            </span>
        </template>

        <h6 class="fw-semibold text-center">{{ card.title }}</h6>
        <div class="py-4 d-flex align-items-center justify-content-center">
            <div class="pricing-svg1" v-html="card.icon"></div>
            <div class="text-end ms-5">
                <p :class="`fs-25 fw-semibold mb-0 ${card.text}`">{{ planType == "monthly" ? card.price : card.yearPrice
                    }}</p>
                <p class="text-muted fs-11 fw-semibold mb-0">{{ planType == "monthly" ? "Per Month" : "Per Year" }}</p>
            </div>
        </div>
        <ul class="list-unstyled text-center fs-12 px-3 pt-3 mb-0">
            <li class="mb-3" v-for="(plan, key) of card.providerList" :key="key">
                <span class="text-muted">{{ plan.title }}<span
                        class="badge bg-light text-default ms-1">{{ plan.value }}</span></span>
            </li>
        </ul>
        <div class="d-grid">
            <button :class="`btn ${card.btnClass} btn-wave`">Get Started</button>
        </div>
    </div>
</template>

<style scoped></style>
