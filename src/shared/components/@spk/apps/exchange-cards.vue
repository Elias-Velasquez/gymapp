<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        card: Object,
        showBadge: { type: Boolean, default: false },
    }
}
</script>

<template>
    <div :class="['card custom-card mb-3', customCardClass]">
        <div :class="['card-body pb-0', cardBodyClass]">
            <div class="d-flex align-items-top justify-content-between flex-wrap">
                <div>
                    <div class="d-flex align-items-center gap-2 mb-3">
                        <div class="lh-1">
                            <span class="avatar avatar-rounded avatar-xs">
                                <img :src="card.img" alt="Coin Image" />
                            </span>
                        </div>
                        <h6 class="fw-semibold mb-0">{{ card.name }}</h6>
                    </div>
                    <span class="fs-25 d-flex align-items-center">
                        {{ card.percentage }}
                        <span class="fs-12 text-warning op-7 ms-2">{{ card.percentage }}<i
                                class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span>
                        <template v-if="showBadge">
                            <span class="badge bg-success-transparent fs-10 ms-2">24H</span>
                        </template>
                    </span>
                </div>
                <div class="text-end">
                    <span :class="`d-block fs-14 mb-1 text-${card.valueColor}`">{{ card.value }}</span>
                    <span class="d-block text-success fw-semibold">{{ card.price }}</span>
                </div>
            </div>
        </div>
        <apexchart class="mt-1 w-100" type="area" height="60" :options="card.chart.options" :series="card.chart.series">
        </apexchart>
    </div>
</template>

<style scoped></style>
