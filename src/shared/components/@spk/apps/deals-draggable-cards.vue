<script lang="js">
export default {
    props: {
        cardBodyClass: String,
        card: Object,
    }
}
</script>
<template>
    <div :class="['card-body', cardBodyClass]">
        <div class="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
            <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                    <span class="avatar avatar-sm avatar-rounded">
                        <img :src="card.avatar" alt="">
                    </span>
                </div>
                <div class="fs-14">{{ card.title }}</div>
            </div>
            <div>{{ card.amount }}</div>
        </div>
        <div class="deal-description">
            <div class="my-1">
                <a href="javascript:void(0);" class="company-name">{{ card.company }}</a>
            </div>
            <div class="text-muted fs-12">{{ card.date }}</div>
        </div>
    </div>
</template>