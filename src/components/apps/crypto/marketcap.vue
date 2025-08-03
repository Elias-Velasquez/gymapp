<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import * as marketcapData from '../../../data/apps/marketcap'
import CryptoCardComponent from "../../../shared/components/@spk/dashboard/crypto-cards.vue";
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue";


export default {
    components: {
        PageHeader,
        CryptoCardComponent,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Marketcap",
                list: ['Apps', 'Crypto', 'Marketcap']
            },
            marketcapData: marketcapData,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-6 col-lg-12" v-for="card in marketcapData.marketcap" :key="card.id">
            <CryptoCardComponent :card="card" cardFooterClass="p-0" :showFooter="true" />
        </div>
        <div class="col-xxl-3 col-xl-6 col-lg-12">
            <SimpleCardComponent title="My Top Currencies" customCardClass="overflow-hidden"
                cardHeaderClass="justify-content-between" cardClassBody="p-0">
                <template v-slot:showheader>
                    <div>
                        <button class="btn btn-info-light btn-sm btn-wave">View All</button>
                    </div>
                </template>
                <ul class="list-group list-group-flush">
                    <li v-for="crypto in marketcapData.topCurrencies" :key="crypto.symbol" class="list-group-item">
                        <div class="d-flex align-items-center justify-content-between flex-wrap">
                            <div class="d-flex align-items-center gap-2">
                                <div>
                                    <span class="avatar avatar-sm p-1 bg-light">
                                        <img :src="crypto.imgSrc" :alt="crypto.name" />
                                    </span>
                                </div>
                                <div>
                                    <span class="d-block fw-semibold">{{ crypto.name }}</span>
                                    <span class="d-block text-muted fs-12 fw-normal">{{ crypto.price }}</span>
                                </div>
                            </div>
                            <div>
                                <span class="fs-12 text-muted">Max Limit</span>
                                <span class="fw-semibold d-block">{{ crypto.maxLimit }}</span>
                            </div>
                            <div>
                                <span class="fs-12 text-muted">My Volume</span>
                                <span class="fw-semibold d-block">{{ crypto.volume }}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </SimpleCardComponent>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2  -->
    <div class="row">
        <div class="col-xl-12">
            <SimpleCardComponent title="Crypto MarketCap" cardHeaderClass="justify-content-between" cardClassBody="p-0"
                :showCardFooter="true" cardFooterClass="border-top-0">
                <template v-slot:showheader>
                    <div class="d-flex flex-wrap gap-2">
                        <div>
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);"
                                class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu" style="">
                                <li><a class="dropdown-item" href="javascript:void(0);">Market Cap</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Price</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Trading Volume</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Price Change (24h)</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Rank</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">A - Z</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">All-Time High (ATH)</a></li>
                            </ul>
                        </div>
                        <div>
                            <button class="btn btn-secondary btn-sm btn-wave waves-effect waves-light">View All</button>
                        </div>
                    </div>
                </template>
                <TableComponent
                    :headers="['', '#', 'Crypto Name', 'MarketCap', 'Price (USD)', '1h Change', '24h Change', 'Volume (24h)', 'Circulating Supply', 'last 1Week', 'Trade']"
                    :rows="marketcapData.cryptoMarketCap" tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <td class="text-center">
                        <a href="javascript:void(0);"><i class="ri-star-line fs-16 text-muted"></i></a>
                    </td>
                    <td>{{ row.id }}</td>
                    <td>
                        <div class="d-flex align-items-center gap-2">
                            <div class="lh-1">
                                <span class="avatar avatar-xs avatar-rounded">
                                    <img :src="(row.coinSrc)" alt="">
                                </span>
                            </div>
                            <div class="fw-semibold"><a href="javascript:void(0);">{{ row.coinName }}</a></div>
                        </div>
                    </td>
                    <td> <span class="fw-semibold">{{ row.marketCap }}</span></td>
                    <td><span class="fw-semibold"> <a href="javascript:void(0);">{{ row.price }}</a></span></td>
                    <td><span :class="`text-${row.color} fw-semibold`"><i
                                :class="`ti ti-arrow-narrow-${row.change1Icon} fs-15 fw-semibold`"></i>{{ row.change1
                                }}</span></td>
                    <td><span :class="`text-${row.change24Color} fw-semibold`"><i
                                :class="`ti ti-arrow-narrow-${row.change24Icon} fs-15 fw-semibold`"></i>{{ row.change24
                                }}</span></td>
                    <td><a href="javascript:void(0)"><span class="d-block fw-semibold">{{ row.volume }}</span></a></td>
                    <td>
                        <a href="javascript:void(0);">
                            <span class="fw-semibold d-block mb-2">
                                {{ row.supply }}
                            </span>
                            <div class="progress-stacked progress-xs w-75">
                                <div class="progress-bar bg-success op-5" role="progressbar"
                                    :style="`width: ${row.supplyProgress}`" aria-valuenow="10" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                                <div class="progress-bar bg-danger op-5" role="progressbar"
                                    :style="`width: ${row.supplyProgress2}`" aria-valuenow="15" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                            </div>
                        </a>
                    </td>
                    <td class="overflow-hidden">
                        <div id="btc-chart">
                            <apexchart type="line" height="30px" width="120" :options="row.chart.options"
                                :series="row.chart.series"></apexchart>
                        </div>
                    </td>
                    <td>
                        <button class="btn btn-success-light btn-sm">Trade</button>
                    </td>
                </TableComponent>
                <template v-slot:cardFooter>
                    <nav aria-label="Page navigation">
                        <ul class="pagination mb-0 float-end">
                            <li class="page-item disabled">
                                <a class="page-link">Previous</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                            <li class="page-item active" aria-current="page">
                                <a class="page-link" href="javascript:void(0);">2</a>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0);">Next</a>
                            </li>
                        </ul>
                    </nav>
                </template>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End::row-2  -->
</template>

<style scoped></style>
