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
            <div class="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                <div class="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                    <div class="me-3">
                        <span :class="`avatar avatar-rounded bg-${card.iconBg}`">
                            <i :class="`ti ${card.icon} fs-16`"></i>
                        </span>
                    </div>
                    <div>
                        <span class="d-block text-muted">{{ card.name }}</span>
                        <span class="fs-16 fw-semibold">{{ card.count }} <i :class="card.countIcon"></i></span>
                    </div>
                </div>
                <div :id="card.chartId">
                    <apexchart width="100px" height="40px" type="line" :options="card.chart.options"
                        :series="card.chart.series"></apexchart>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>