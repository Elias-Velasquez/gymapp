<script lang="ts">
import PageHeader from '../../shared/components/pageheader/pageheader.vue';
import * as stocksData from '../../data/dashboards/stocks';
import StocksCardComponent from "../../shared/components/@spk/dashboard/stocks-cards.vue";
import ChartCardComponent from "../../shared/components/@spk/dashboard/chart-cards.vue";
import TrendingStocksCardComponent from "../../shared/components/@spk/dashboard/trendingStocks-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        StocksCardComponent,
        ChartCardComponent,
        TrendingStocksCardComponent,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Stocks",
                list: ['Dashboards', 'Stocks']
            },
            stocksData: stocksData
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-md-flex d-block flex-wrap align-items-center justify-content-between">
                        <div class="flex-fill">
                            <ul class="nav nav-pills nav-style-3" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#stocks-portfolio" aria-selected="true">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#stocks-market" aria-selected="true">Market</a>
                                </li>
                            </ul>
                        </div>
                        <div class="d-flex flex-wrap align-items-center mt-md-0 mt-3 justify-content-evenly gap-4">
                            <div class="text-md-end">
                                <span class="d-block fw-semibold">Total Value</span>
                                <span class="text-primary">$8.89k</span>
                            </div>
                            <div class="text-md-end">
                                <span class="d-block fw-semibold">Market Value</span>
                                <span class="text-warning">$15.9k</span>
                            </div>
                            <div class="text-md-end">
                                <span class="d-block fw-semibold">Yield</span>
                                <span class="text-danger">3.4%</span>
                            </div>
                            <div class="text-md-end">
                                <span class="d-block fw-semibold">Dividend</span>
                                <span class="text-info">$1.3k</span>
                            </div>
                            <div class="text-md-end">
                                <span class="d-block fw-semibold">Gain</span>
                                <span class="text-success">$116</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="tab-content">
                <div class="tab-pane show active p-0 border-0" id="stocks-portfolio" role="tabpanel">
                    <div class="row">
                        <div class="col-xl-3 col-sm-6" v-for="card in stocksData.stocks" :key="card.id">
                            <StocksCardComponent :card="card" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-8">
                            <ChartCardComponent :card="card" title="Total Investments "
                                v-for="(card, index) in stocksData.CryptoStatistics" :key="index">
                                <template v-slot:cardHeader>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button"
                                            class="btn btn-primary btn-sm btn-wave waves-effect waves-light">1D</button>
                                        <button type="button"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1W</button>
                                        <button type="button"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1M</button>
                                        <button type="button"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">3M</button>
                                        <button type="button"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">6M</button>
                                        <button type="button"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1Y</button>
                                    </div>
                                </template>
                                <template v-slot:showData>
                                    <div class="d-flex alilgn-items-center justify-content-between gap-3 flex-wrap">
                                        <div class="d-flex flex-wrap flex-fill gap-3 ms-sm-5 ms-0">
                                            <div>
                                                <span class="d-block text-muted mb-1">Invested Value</span>
                                                <span class="d-block fw-semibold">$1,290.94
                                                    <span class="text-success ms-1 fs-12"><i
                                                            class="ti ti-chevron-up"></i>1.22%</span>
                                                </span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted mb-1">Total Returns</span>
                                                <span class="d-block fw-semibold">$25,458.20
                                                    <span class="text-success ms-1 fs-12"><i
                                                            class="ti ti-chevron-up"></i>10.14%</span>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="d-flex flex-wrap gap-3 text-end">
                                            <div>
                                                <span class="d-block text-muted mb-1">Today Change</span>
                                                <span class="d-block fw-semibold">$112.09</span>
                                            </div>
                                            <div>
                                                <span class="d-block text-muted mb-1">Change In %</span>
                                                <span class="d-block fw-semibold">+0.01%
                                                    <span class="text-success ms-1 fs-12"><i
                                                            class="ti ti-chevron-up"></i>0.21%</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </ChartCardComponent>
                        </div>
                        <div class="col-xl-4">
                            <SimpleCardComponent title=" My Stocks " cardHeaderClass="justify-content-between"
                                cardClassBody="p-0">
                                <template v-slot:showheader>
                                    <div class="d-flex flex-wrap gap-2">
                                        <div class="mb-2 mb-sm-0">
                                            <input class="form-control form-control-sm" type="text"
                                                placeholder="Search Any Stock" aria-label=".form-control-sm example">
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);"
                                                class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Sort By<i
                                                    class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                            </a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </template>
                                <ul class="list-unstyled my-stocks-ul mb-0">
                                    <li v-for="(item, index) in stocksData.items" :key="index">
                                        <div class="d-flex align-items-center flex-fill lh-1">
                                            <div class="me-2">
                                                <span class="avatar avatar-rounded bg-light p-2">
                                                    <i :class="[item.iconClass, 'fs-18']"></i>
                                                </span>
                                            </div>
                                            <div class="lh-1 flex-fill">
                                                <span class="fw-semibold d-block mb-2">{{ item.name }}</span>
                                                <span class="d-block text-muted fs-12">{{ item.shares }} Shares</span>
                                            </div>
                                            <div class="text-end me-3">
                                                <span class="d-block fw-semibold mb-1">
                                                    ${{ item.price }}
                                                </span>
                                                <span
                                                    :class="['d-block', item.percentageChange < 0 ? 'text-danger' : 'text-success']">
                                                    <i
                                                        :class="['ti', item.percentageChange < 0 ? 'ti-arrow-narrow-down' : 'ti-arrow-narrow-up']"></i>
                                                    {{ item.percentageChange }}%
                                                </span>
                                            </div>
                                            <div>
                                                <span class="fs-14 text-muted op-5">
                                                    <i class="bi"
                                                        :class="item.isStarred ? 'bi-star-fill' : 'bi-star'"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </SimpleCardComponent>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <h6 class="fw-semibold mb-3">
                                Trending Stocks :
                            </h6>
                            <div class="row">
                                <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12"
                                    v-for="card in stocksData.trendingStocks" :key="card.id">
                                    <TrendingStocksCardComponent :card="card"
                                        customCardClass="p-3 border bg-white rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-5">
                            <SimpleCardComponent title="Transaction History" cardHeaderClass="justify-content-between">
                                <template v-slot:showheader>
                                    <div class="dropdown">
                                        <a href="javascript:void(0);"
                                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                                            data-bs-toggle="dropdown" aria-expanded="false"> All
                                            <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Buy</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Sell</a></li>
                                        </ul>
                                    </div>
                                </template>
                                <TableComponent :headers="['Symbol', 'Date', 'Type', 'Amount', 'Shares']"
                                    :rows="stocksData.history"
                                    tableClass="table text-nowrap table-bordered border-primary" v-slot:cell="{ row }">
                                    <td>
                                        {{ row.symbol }}
                                    </td>
                                    <td>
                                        {{ row.date }}
                                    </td>
                                    <td>
                                        <span :class="`badge bg-${row.badge}`">{{ row.action }}</span>
                                    </td>
                                    <td>
                                        <span :class="`text-${row.color}`">{{ row.profitLoss }}</span>
                                    </td>
                                    <td>
                                        <span :class="`text-${row.color1}`">{{ row.quantity }}</span>
                                    </td>
                                </TableComponent>
                            </SimpleCardComponent>
                        </div>
                        <div class="col-xl-7">
                            <SimpleCardComponent title="Market Movers" cardHeaderClass="justify-content-between">
                                <template v-slot:showheader>
                                    <div class="d-flex flex-wrap gap-2">
                                        <div class="me-2">
                                            <input class="form-control form-control-sm" type="text"
                                                placeholder="Search Any Stock" aria-label=".form-control-sm example">
                                        </div>
                                        <div class="dropdown">
                                            <a href="javascript:void(0);"
                                                class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light"
                                                data-bs-toggle="dropdown" aria-expanded="false"> Sort By
                                                <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                            </a>
                                            <ul class="dropdown-menu" role="menu">
                                                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                                                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </template>
                                <TableComponent
                                    :headers="['Symbol', 'Name', 'Price', '1D Change', '1D Return %', 'Volume']"
                                    :rows="stocksData.MmarketMovers"
                                    tableClass="table text-nowrap table-bordered border-primary" v-slot:cell="{ row }">
                                    <td>{{ row.symbol }}</td>
                                    <td> {{ row.company }} <span class="fw-normal text-primary fs-10 ms-1">{{
                                        row.exchange }}</span> </td>
                                    <td><span>{{ row.price }}</span> </td>
                                    <td><span :class="`text-${row.color}`">{{ row.change }}<i
                                                :class="`ti ${row.changeIcon}`"></i></span>
                                    </td>
                                    <td><span :class="`text-${row.color}`">{{ row.percentage }}</span> </td>
                                    <td> {{ row.marketCap }}</td>
                                </TableComponent>
                            </SimpleCardComponent>
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0 border-0" id="stocks-market" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-4 col-lg-6 col-md-6 col-sm-12" v-for="card in stocksData.market"
                            :key="card.id">
                            <SimpleCardComponent :showCardHeader="false">
                                <div class="d-flex flex-wrap align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <div class="me-2">
                                            <span :class="`avatar bg-${card.iconColor}-transparent`">
                                                <i :class="`ti ti-trending-${card.icon} fs-18`"></i>
                                            </span>
                                        </div>
                                        <div>
                                            <span class="d-block fw-semibold">{{ card.name }}</span>
                                            <span class="d-block">{{ card.money }}</span>
                                        </div>
                                    </div>
                                    <div class="text-end text-danger fs-12">
                                        <span class="d-block">{{ card.percentage }}</span>
                                        <span class="d-block">-$1,780.80</span>
                                    </div>
                                </div>
                            </SimpleCardComponent>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12">
                            <div class="card custom-card">
                                <div class="card-header justify-content-between">
                                    <div class="card-title">
                                        Market Cap
                                    </div>
                                    <div>
                                        <input class="form-control form-control-sm" type="text"
                                            placeholder="Search Any Stock Here" aria-label=".form-control-sm example">
                                    </div>
                                </div>
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-xl-7 border-end">
                                            <div class="p-3">
                                                <div
                                                    class="d-flex flex-wrap alilgn-items-center justify-content-between">
                                                    <div class="d-flex flex-fill gap-3 ms-5">
                                                        <div>
                                                            <h5 class="fw-semibold text-primary">$12,390.02<span
                                                                    class="fs-12 ms-1 text-danger">0.14%<i
                                                                        class="ti ti-trending-down ms-1"></i></span>
                                                            </h5>
                                                            <span class="d-block text-muted mb-1 fs-12"><span
                                                                    class="text-danger me-1">-89.75</span>. Today</span>
                                                            <span class="d-block text-muted fs-11">Jun 17, 2023 11:25 AM
                                                                UTC
                                                                +5:30</span>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex text-end">
                                                        <div>
                                                            <h6 class="fw-semibold">GITUHB</h6>
                                                            <span class="d-block text-muted fs-11 mb-1">GTHB
                                                                INDEXNSE</span>
                                                            <span class="d-block"><a href="javascript:void(0);"
                                                                    class="text-primary fw-semibold">+
                                                                    Compare</a></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <apexchart height="350px" type="candlestick"
                                                    :options="stocksData.marketCapOptions"
                                                    :series="stocksData.marketCapSeries"></apexchart>
                                            </div>
                                        </div>
                                        <div class="col-xl-5">
                                            <div class="p-3">
                                                <div class="table-responsive mb-5">
                                                    <TableComponent :headers="[]" :rows="stocksData.github"
                                                        tableClass="table text-nowrap table-borderless table-sm text-muted"
                                                        v-slot:cell="{ row }">
                                                        <td>{{ row.row1 }}</td>
                                                        <td>{{ row.row2 }}</td>
                                                        <td>{{ row.row3 }}</td>
                                                        <td>{{ row.row4 }}</td>
                                                    </TableComponent>
                                                </div>
                                                <div>
                                                    <h6 class="fw-semibold mb-2">
                                                        Market Depth:
                                                    </h6>
                                                    <div class="row">
                                                        <div class="col-xl-6">
                                                            <TableComponent :headers="['Qty', 'Orders', 'Bid']"
                                                                :rows="stocksData.marketDepth"
                                                                tableClass="table text-nowrap table-sm text-center table-borderless text-muted"
                                                                v-slot:cell="{ row }">
                                                                <td>
                                                                    <span class="text-success">{{ row.id }}</span>
                                                                </td>
                                                                <td>{{ row.quantity }}</td>
                                                                <td>${{ row.total }}</td>
                                                            </TableComponent>
                                                        </div>
                                                        <div class="col-xl-6">
                                                            <div class="table-responsive mb-3">
                                                                <TableComponent :headers="['Qty', 'Orders', 'Bid']"
                                                                    :rows="stocksData.marketDepth"
                                                                    tableClass="table text-nowrap table-sm text-center table-borderless text-muted"
                                                                    v-slot:cell="{ row }">
                                                                    <td>
                                                                        <span class="text-danger">{{ row.id }}</span>
                                                                    </td>
                                                                    <td>{{ row.quantity }}</td>
                                                                    <td>${{ row.total }}</td>
                                                                </TableComponent>
                                                            </div>
                                                            <div class="d-flex gap-3">
                                                                <button type="button"
                                                                    class="flex-fill btn btn-sm btn-primary btn-wave">Buy</button>
                                                                <button type="button"
                                                                    class="flex-fill btn btn-sm btn-secondary btn-wave">Sell</button>
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
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-2 -->
</template>

<style scoped></style>
