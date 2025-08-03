<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as exchangeData from '../../../data/apps/currencyExchange';
import ExchangeCardComponent from "../../../shared/components/@spk/apps/exchange-cards.vue"
export default {
    components: {
        PageHeader,
        ExchangeCardComponent,
    },
    data() {
        return {
            dataToPass: {
                current: "Currency-exchange",
                list: ['Apps', 'Crypto', 'Currency-exchange']
            },
            exchangeData: exchangeData,

            digitalSelecteValue: ['Bitcoin'],
            digitalSelecteOptions: ['Bitcoin', 'Etherium', 'Litecoin', 'Ripple', 'Cardano', 'Neo', 'Stellar', 'EOS', 'NEM'],

            currencySelecteValue: ['USD'],
            currencySelecteOptions: ['USD', 'Pound', 'Rupee', 'Euro', 'Won', 'Dinar', 'Rial'],
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card currency-exchange-card">
                <div class="card-body p-5 d-flex align-items-center justify-content-center">
                    <div class="container">
                        <h3 class="text-fixed-white text-center">Buy and Sell Coins without additional fees</h3>
                        <span class="d-block fs-16 text-fixed-white text-center op-8 mb-4">
                            Buy now and get +50% extra bonus Minimum pre-sale amount 100 Crypto Coin. We accept BTC
                            crypto-currency..
                        </span>
                        <div class="p-3 mb-4 rounded currency-exchange-area">
                            <div class="row gy-3">
                                <div class="col-xxl-3 col-12">
                                    <input type="text" class="form-control" value="0.0453" placeholder="Enter Amount">
                                </div>
                                <div class="col-xxl-2 col-12">
                                    <div>
                                        <multiselect1 :show-labels="false" v-model="digitalSelecteValue"
                                            :multiple="false" :options="digitalSelecteOptions">
                                        </multiselect1>
                                    </div>
                                </div>
                                <div class="col-xxl-2 col-12">
                                    <div class="fs-2 text-fixed-white text-center op-8 lh-1">
                                        =
                                    </div>
                                </div>
                                <div class="col-xxl-3 col-12">
                                    <input type="text" class="form-control" value="1350.93"
                                        placeholder="Exchange Amount">
                                </div>
                                <div class="col-xxl-2 col-12">
                                    <multiselect1 :show-labels="false" v-model="currencySelecteValue" :multiple="false"
                                        :options="currencySelecteOptions">
                                    </multiselect1>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <button class="btn btn-success btn-wave">Exchange Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: row-2 -->
    <div class="row justify-content-center">
        <div class="col-xl-3" v-for="card in exchangeData.exchange" :key="card.id">
            <ExchangeCardComponent :card="card" :showBadge="card.showBadge" />
        </div>
        <div class="col-xl-12">
            <div class="text-center my-4">
                <button class="btn btn-primary-light" type="button" disabled>
                    <span class="spinner-border spinner-border-sm align-middle" role="status" aria-hidden="true"></span>
                    Loading...
                </button>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped></style>
