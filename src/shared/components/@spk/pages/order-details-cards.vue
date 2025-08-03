<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardHeaderClass: String,
        cardBodyClass: String,
        cardFooterClass: String,
    }
}
</script>

<template>
    <div :class="['card custom-card', customCardClass]">
        <div :class="['card-header', cardHeaderClass]">
            <slot name="cardHedaer"></slot>
        </div>
        <div :class="['card-body', cardBodyClass]">
            <slot name="cardBody"></slot>
        </div>
        <div :class="['card-footer', cardFooterClass]">
            <slot name="cardFooter"></slot>
        </div>
    </div>
</template>

<style scoped></style>