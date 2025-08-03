<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardBodyClass: String,
        cardHeaderClass: String,
        title: String,
        card: Object,
        mapId: String,
        showCountriesData: { type: Boolean, default: false },
        showWidgetsMap: { type: Boolean, default: false },
    }
}
</script>

<template>
    <div :class="['card custom-card', customCardClass]">
        <div :class="['card-header justify-content-between', cardHeaderClass]">
            <div class="card-title">
                {{ title }}
            </div>
            <slot name="showHeader"></slot>
        </div>
        <div :class="['card-body', cardBodyClass]">
            <slot name="mapContent"></slot>
            <div class="row g-0">
                <div class="col-xxl-4 col-xl-12 sales-visitors-countries">
                    <div class="mt-2" v-if="showCountriesData">
                        <ul class="list-unstyled p-4 my-auto">
                            <li class="mb-3" v-for="card, index in card" :key="index">
                                <span class="fs-12">
                                    <i
                                        :class="`ri-checkbox-blank-circle-fill align-middle me-2 d-inline-block text-${card.iconClass}`"></i>{{
                                    card.country }}
                                </span>
                                <span class="fw-semibold float-end">{{ card.count }}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="h-100 my-auto" v-if="showWidgetsMap">
                        <ul class="list-group">
                            <li class="list-group-item" v-for="(card, index) in card" :key="index">
                                <div class="d-flex flex-wrap align-items-center justify-content-between">
                                    <div>
                                        <i
                                            :class="`ri-checkbox-blank-circle-fill text-${card.iconClass} fs-8 me-1 align-middle d-inline-block`"></i>{{
                                        card.country }}
                                    </div>
                                    <div>{{ card.visitors }}</div>
                                    <div :class="`text-${card.textColor}`"><i
                                            :class="`ri-arrow-${card.dir}-s-line align-middle me-1 d-inline-block`"></i>{{
                                        card.percentageChange }}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xxl-8 col-xl-12 text-center">
                    <div :id="mapId"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
