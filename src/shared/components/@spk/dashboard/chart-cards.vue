<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardHeaderClass: String,
        cardBodyClass: String,
        card: Object,
        title: String,
        showCardFooter: { type: Boolean, default: false },
        cardFooterClass: String,
        showGitImg: { type: Boolean, default: false },
        chartId: String
    }
}
</script>
<template>
    <div :class="['card custom-card', customCardClass]">
        <div :class="['card-header justify-content-between', cardHeaderClass]">
            <div class="card-title"> {{ title }}</div>
            <slot name="cardHeader"></slot>
        </div>
        <div :class="['card-body', cardBodyClass]">
            <slot name="showData"></slot>
            <div class="content-wrapper" :id="chartId">
                <apexchart v-if="card.chart && card.chart.options" :height="card.height" :type="card.type"
                    :options="card.chart.options" :width="card.width" :series="card.chart.series" />
                <template v-if="showGitImg">
                    <div class="github-style d-flex align-items-center">
                        <div class="me-2">
                            <img class="userimg rounded" src="/images/faces/1.jpg" data-hovercard-user-id="634573"
                                alt="" width="38" height="38">
                        </div>
                        <div class="userdetails lh-1">
                            <a class="username fw-semibold fs-14">coder</a>
                            <span class="cmeta d-block mt-1">
                                <span class="commits">95</span> commits
                            </span>
                        </div>
                    </div>
                </template>
                <apexchart v-if="card.chart.secondaryOptions" :height="card.height" :type1="card.type"
                    :options="card.chart.secondaryOptions" :series="card.chart.secondarySeries" />
                <apexchart v-if="card.chart.tertiaryOptions" :height="card.height" :type="card.type"
                    :options="card.chart.tertiaryOptions" :series="card.chart.tertiarySeries" />
                <slot name="ChartCardComponent"></slot>
            </div>
        </div>
        <template v-if="showCardFooter">
            <div :class="['card-footer', cardFooterClass]">
                <slot name="cardFooter"></slot>
            </div>
        </template>
    </div>
</template>

<style scoped></style>