<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as buySellData from '../../../data/apps/buySell';
import squareBitcoin from "/images/crypto-currencies/square-color/Bitcoin.svg";
import squareEthereum from "/images/crypto-currencies/square-color/Ethereum.svg";
import squareLitecoin from "/images/crypto-currencies/square-color/Litecoin.svg";

export default {
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Buy & Sell",
                list: [
                    'Apps', 'Crypto', 'Buy & Sell'
                ]
            },
            buySellData: buySellData,
            cryptocurrencies: [
                { id: 1, symbol: 'BTC/USD', price: '27.53612', change: '-0.06%', changeClass: 'text-danger', imgSrc: squareBitcoin, },
                { id: 2, symbol: 'ETH/USD', price: '20.6782', change: '+2.86%', changeClass: 'text-success', imgSrc: squareEthereum, },
                { id: 3, symbol: 'LTC/USD', price: '54.2912', change: '+15.93%', changeClass: 'text-success', imgSrc: squareLitecoin, },
            ],

            singleSelecteValue: { name: 'BTC', language: 'BTC' },
            singleSelecteOptions: [
                { name: 'ETH', language: 'ETH' },
                { name: 'XRP', language: 'XRP' },
                { name: 'DASH', language: 'DASH' },
                { name: 'NEO', language: 'NEO' },
                { name: 'LTC', language: 'LTC' },
                { name: 'BSD', language: 'BSD' }
            ],

            singleSelecte: { name: 'USD', language: 'USD' },
            singleSelecteOption: [
                { name: 'USD', language: 'USD' },
                { name: 'AUD', language: 'AUD' },
                { name: 'ARS', language: 'ARS' },
                { name: 'AZN', language: 'AZN' },
                { name: 'BGN', language: 'BGN' },
                { name: 'BRL', language: 'BRL' }
            ],

            singleSelecteValue1: { name: 'BTC', language: 'BTC' },
            singleSelecte1: { name: 'USD', language: 'USD' },
            singleSelecte2: { name: 'USD', language: 'USD' }
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <div class="container">
        <!-- Start::row-1 -->
        <div class="row">
            <div class="col-xl-4">
                <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title">
                            Buy Crypto
                        </div>
                    </div>
                    <div class="card-body">
                        <div>
                            <div class="input-group mb-3 flex-nowrap custom-multiselect" id="custom-select">
                                <input type="text" class="form-control" aria-label="crypto buy select"
                                    placeholder="Select Currency">
                                <multiselect1 :show-labels="false" v-model="singleSelecteValue"
                                    :options="singleSelecteOptions" placeholder="Select one" label="name"
                                    track-by="name">
                                </multiselect1>
                            </div>
                            <div class="input-group mb-3 flex-nowrap custom-multiselect">
                                <input type="text" class="form-control" aria-label="crypto buy select">
                                <multiselect1 :show-labels="false" v-model="singleSelecte"
                                    :options="singleSelecteOption" placeholder="Select one" label="name"
                                    track-by="name">
                                </multiselect1>
                            </div>
                            <div>
                                <div class="fs-14 py-2"><span class="fw-semibold text-dark">Price:</span><span
                                        class="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span
                                        class="text-dark fw-semibold float-end">BTC</span></div>
                                <div class="fs-14 py-2"><span class="fw-semibold text-dark">Amount:</span><span
                                        class="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span
                                        class="text-dark fw-semibold float-end">LTC</span></div>
                                <div class="fw-semibold fs-14 py-2">Total: <span class="fs-14 d-inline-block">22.00
                                        BTC</span></div>
                                <div class="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                                <label class="fw-semibold fs-12 mt-4 mb-2">SELECT PAYMENT METHOD :</label>
                                <div class="row g-2">
                                    <div class="col-xl-6">
                                        <div class="p-2 border rounded">
                                            <div class="form-check mb-0">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault1" checked>
                                                <label class="form-check-label fs-12" for="flexRadioDefault1">
                                                    Credit / Debit Cards
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-6">
                                        <div class="p-2 border rounded">
                                            <div class="form-check mb-0">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault2">
                                                <label class="form-check-label fs-12" for="flexRadioDefault2">
                                                    Paypal
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-12">
                                        <div class="p-2 border rounded">
                                            <div class="form-check mb-0">
                                                <input class="form-check-input" type="radio" name="flexRadioDefault"
                                                    id="flexRadioDefault3">
                                                <label class="form-check-label fs-12" for="flexRadioDefault3">
                                                    Wallet
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid mt-4 pt-1">
                                <button type="button" class="btn btn-primary btn-wave btn-lg">BUY</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4">
                <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title">
                            Sell Crypto
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-pane border-0 p-0" id="sell-crypto1" role="tabpanel"
                            aria-labelledby="sell-crypto1">
                            <div class="input-group mb-3 flex-nowrap custom-multiselect">
                                <input type="text" class="form-control" aria-label="crypto buy select"
                                    placeholder="Select Currency">
                                <multiselect1 :show-labels="false" v-model="singleSelecteValue1"
                                    :options="singleSelecteOptions" placeholder="Select one" label="name"
                                    track-by="name">
                                </multiselect1>
                            </div>
                            <div class="input-group mb-3 flex-nowrap custom-multiselect">
                                <input type="text" class="form-control" aria-label="crypto buy select">
                                <multiselect1 :show-labels="false" v-model="singleSelecte1"
                                    :options="singleSelecteOption" placeholder="Select one" label="name"
                                    track-by="name">
                                </multiselect1>
                            </div>
                            <div class="mb-3">
                                <span class="form-label">Crypto Value :</span>
                                <div class="position-relative">
                                    <div
                                        class="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1">
                                        <div class="gap-2 d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar bg-light p-2">
                                                    <img src="/images/crypto-currencies/regular/Bitcoin.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Bitcoin - BTC</div>
                                        </div>
                                        <div class="text-end">
                                            <span class="fw-semibold d-block">0.374638535 BTC</span>
                                            <span class="text-muted">$5,364.65</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <span class="form-label">Deposit To :</span>
                                <div class="position-relative">
                                    <div class="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                                        <div class="lh-1">
                                            <span class="avatar bg-light p-2">
                                                <i class="ri-bank-line text-info fs-20"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span class="fw-semibold d-block">Banking</span>
                                            <span class="text-muted">Checking ...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="fs-14 py-2">
                                    <div class="d-inline-flex">
                                        <span class="fw-semibold text-dark">Price:</span><span
                                            class="text-muted ms-2 fs-14">6.003435</span>
                                    </div>
                                    <span class="text-dark fw-semibold float-end">BTC</span>
                                </div>
                                <div class="fs-14 py-2">
                                    <div class="d-inline-flex">
                                        <span class="fw-semibold text-dark">Amount:</span><span
                                            class="text-muted ms-2 fs-14">2,34,4543.00</span>
                                    </div>
                                    <span class="text-dark fw-semibold float-end">LTC</span>
                                </div>
                            </div>
                            <div class="d-grid mt-4">
                                <button type="button" class="btn btn-danger btn-wave btn-lg">SELL</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-4">
                <div class="card custom-card">
                    <div class="card-header">
                        <div class="card-title">
                            Quick Secure Transfer
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="tab-pane border-0 p-0" id="sell-crypto" role="tabpanel"
                            aria-labelledby="sell-crypto">
                            <div class="mb-3">
                                <span class="form-label">Crypto Value :</span>
                                <div class="position-relative">
                                    <a href="javascript:void(0);" class="stretched-link"></a>
                                    <div
                                        class="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1">
                                        <div class="gap-2 d-flex align-items-center">
                                            <div class="lh-1">
                                                <span class="avatar bg-light p-2">
                                                    <img src="/images/crypto-currencies/regular/Bitcoin.svg" alt="">
                                                </span>
                                            </div>
                                            <div class="fw-semibold">Bitcoin - BTC</div>
                                        </div>
                                        <div class="text-end">
                                            <span class="fw-semibold d-block">0.374638535 BTC</span>
                                            <span class="text-muted">$5,364.65</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <span class="form-label">Deposit To :</span>
                                <div class="position-relative">
                                    <a href="javascript:void(0);" class="stretched-link"></a>
                                    <div class="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                                        <div class="lh-1">
                                            <span class="avatar bg-light p-2">
                                                <i class="ri-bank-line text-info fs-20"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span class="fw-semibold d-block">Banking</span>
                                            <span class="text-muted">Checking ...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <span class="d-block fw-semibold">Amount :</span>
                                <div class="d-flex align-items-center justify-content-between text-muted">
                                    <div>Weekly Bank Limit</div>
                                    <div>$10,000 remaining</div>
                                </div>
                            </div>
                            <div class="input-group mb-3 flex-nowrap custom-multiselect">
                                <input type="text" class="form-control" aria-label="crypto buy select">
                                <multiselect1 :show-labels="false" v-model="singleSelecte1"
                                    :options="singleSelecteOption" placeholder="Select one" label="name"
                                    track-by="name">
                                </multiselect1>
                            </div>
                            <div>
                                <div class="fs-14 py-2">
                                    <div class="d-inline-flex">
                                        <span class="fw-semibold text-dark">Price:</span><span
                                            class="text-muted ms-2 fs-14">6.003435</span>
                                    </div>
                                    <span class="text-dark fw-semibold float-end">BTC</span>
                                </div>
                                <div class="fs-14 py-2">
                                    <div class="d-inline-flex">
                                        <span class="fw-semibold text-dark">Amount:</span><span
                                            class="text-muted ms-2 fs-14">2,34,4543.00</span>
                                    </div>
                                    <span class="text-dark fw-semibold float-end">LTC</span>
                                </div>
                            </div>
                            <div class="d-grid mt-4">
                                <button type="button" class="btn btn-success btn-wave btn-lg">Transfer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--End::row-1 -->

        <!-- Start:: row-2 -->
        <div class="row">
            <div class="col-xl-12">
                <div class="card custom-card">
                    <div class="card-header justify-content-between">
                        <div class="card-title">
                            Buy & Sell Statistics
                        </div>
                        <div class="btn-group flex-wrap" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary btn-sm btn-wave">1D</button>
                            <button type="button" class="btn btn-primary-light btn-sm btn-wave">1W</button>
                            <button type="button" class="btn btn-primary-light btn-sm btn-wave">1M</button>
                            <button type="button" class="btn btn-primary-light btn-sm btn-wave">3M</button>
                            <button type="button" class="btn btn-primary-light btn-sm btn-wave">6M</button>
                            <button type="button" class="btn btn-primary-light btn-sm btn-wave">1Y</button>
                        </div>
                    </div>
                    <div class="card-body p-xl-3">
                        <div class="row">
                            <div class="col-xl-8 pe-0 border-end border-inline-end-dashed">
                                <div
                                    class="d-flex flex-wrap align-items-center border-bottom border-block-end-dashed mb-3 p-3 gap-4 ps-5">
                                    <div>
                                        <span class="d-block fs-12">Total Buy</span>
                                        <span class="d-block fw-semibold fs-15 text-success">$324.25 USD</span>
                                    </div>
                                    <div>
                                        <span class="d-block fs-12">Total Sell</span>
                                        <span class="d-block fw-semibold fs-15 text-danger">$4,235.25 USD</span>
                                    </div>
                                    <div>
                                        <span class="d-block fs-12">Available Balance</span>
                                        <span class="d-block fw-semibold fs-15 text-primary">$22,803.92 USD</span>
                                    </div>
                                    <div>
                                        <span class="d-block fs-12">Total Crypto Asset Value</span>
                                        <span class="d-block fw-semibold fs-15 text-warning">$4,56,683.00 USD</span>
                                    </div>
                                    <div></div>
                                </div>
                                <apexchart class="mt-1 w-100" type="line" height="300px"
                                    :options="buySellData.buySellOPtions" :series="buySellData.buySellseries">
                                </apexchart>
                            </div>
                            <div class="col-xl-4 ps-xl-0">
                                <div class="p-3">
                                    <div class="card custom-card bg-light shadow-none" v-for="card in cryptocurrencies"
                                        :key="card.id">
                                        <div class="card-body">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <span class="d-block text-muted fs-12 mb-2">{{ card.symbol }}</span>
                                                    <span class="fw-semibold h6 mb-0">{{ card.price }}</span>
                                                    <span :class="`${card.changeClass} d-block fs-12 mt-1`">{{
                                                        card.change }}</span>
                                                </div>
                                                <div>
                                                    <span class="avatar avatar-xl avatar-rounded">
                                                        <img :src="card.imgSrc" alt="">
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End:: row-2 -->
    </div>
</template>

<style scoped></style>
