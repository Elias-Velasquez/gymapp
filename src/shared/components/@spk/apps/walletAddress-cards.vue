<script lang="js">
export default {
    props: {
        customCardClass: String,
        cardHeaderClass: String,
        cardBodyClass: String,
        card: Object,
    }
}
</script>
<template>
    <div :class="['card custom-card', customCardClass]">
        <div :class="['card-header', cardHeaderClass]">
            <div class="card-title">
                {{ card.title }}
            </div>
            <div>
                <button class="btn btn-primary-ghost btn-wave">{{ card.connectBtn }}</button>
            </div>
        </div>
        <div :class="['card-body', cardBodyClass]">
            <div class="d-flex align-items-center flex-wrap justify-content-between gap-4 mb-3">
                <div class="flex-fill">
                    <label for="btc-wallet-address1" class="form-label">{{ card.walletAddress }}</label>
                    <div class="input-group">
                        <input type="text" class="form-control" id="btc-wallet-address1" :value="card.code"
                            placeholder="Placeholder">
                        <button class="btn btn-primary">Copy</button>
                    </div>
                </div>
                <div>
                    <span class="avatar avatar-xxl border">
                        <img :src="card.qrCodeSrc" class="p-1 qr-image" alt="">
                    </span>
                </div>
            </div>
            <div class="row gy-3">
                <div class="col-xl-4" v-for="(wallet, index) in card.wallet" :key="index">
                    <div class="rounded p-3 bg-light">
                        <div class="d-flex align-items-center gap-3">
                            <div class="lh-1">
                                <span :class="`avatar bg-${wallet.color}-transparent`">
                                    <i :class="wallet.icon"></i>
                                </span>
                            </div>
                            <div>
                                <span class="d-block text-muted">{{ wallet.share }}</span>
                                <span class="d-block fw-semibold">{{ wallet.count }} <span
                                        class="fs-12 text-muted fw-normal">{{ wallet.coin }}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped></style>
