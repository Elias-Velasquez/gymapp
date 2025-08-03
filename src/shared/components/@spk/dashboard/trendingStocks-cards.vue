<script lang="js">
export default {
    props: {
        customCardClass: String,
        card: Object,
    }
}
</script>

<template>
    <div :class="['card custom-card', customCardClass]">
        <div class="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
            <div class="d-flex flex-fill align-items-center">
                <div class="me-2">
                    <span :class="`avatar ${card.iconClass} p-2`">
                        <i :class="card.icon"></i>
                    </span>
                </div>
                <div class="lh-1">
                    <span class="fw-semibold d-block mb-2 text-default">{{ card.name }}</span>
                    <span class="d-block text-muted fs-12">{{ card.count }}</span>
                </div>
            </div>
            <span class="text-success fs-12 text-end">
                <i :class="card.percentageIcon1Class"></i>
                {{ card.percentage }}<i :class="card.percentageIconClass"></i>
                <span class="d-block">{{ card.money }}</span>
            </span>
        </div>
        <div class="d-flex gap-2">
            <button type="button" class="btn btn-sm btn-light flex-fill">Short</button>
            <button type="button" class="btn btn-sm btn-primary-light flex-fill">Buy</button>
        </div>
    </div>
</template>

<style scoped></style>