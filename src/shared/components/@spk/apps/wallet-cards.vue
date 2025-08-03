<script lang="js">
export default {
    props: {
        cusromCardClass: String,
        cardHeaderClass: String,
        cardBodyClass: String,
        card: Object,
    }
}
</script>

<template>
    <div :class="['card custom-card', cusromCardClass]">
        <div :class="['card-header', cardHeaderClass]">
            <div class="card-title">
                {{ card.title }}
            </div>
        </div>
        <div :class="['card-body', cardBodyClass]">
            <div class="d-flex align-items-center justify-content-between gap-2">
                <div class="d-flex align-items-center gap-2">
                    <div class="lh-1">
                        <span class="avatar avatar-rounded">
                            <img :src="card.iconSrc" alt="">
                        </span>
                    </div>
                    <div>
                        <span class="d-block text-muted fs-12 fw-normal">{{ card.available }}</span>
                        <span class="fw-semibold">{{ card.count }}</span>
                    </div>
                </div>
                <div>
                    <span class="fw-semibold">{{ card.price }}</span>
                    <span class="d-block text-muted fs-12 fw-normal">{{ card.usd }}</span>
                </div>
            </div>
        </div>
        <div class="card-footer">
            <div class="btn-list text-center">
                <button class="btn btn-primary-light btn-w-lg btn-wave">Deposit</button>
                <button class="btn btn-success-light btn-w-lg btn-wave">Withdraw</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>