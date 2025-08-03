<script lang="ts">
import PageHeader from '../../shared/components/pageheader/pageheader.vue';
import * as nftData from '../../data/dashboards/nft';
import AuctionsCardComponent from "../../shared/components/@spk/dashboard/nft-auctions-cards.vue";
import ChartCardComponent from "../../shared/components/@spk/dashboard/chart-cards.vue";
import SwiperjsCardComponent from "../../shared/components/@spk/swiperjs-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        AuctionsCardComponent,
        ChartCardComponent,
        SwiperjsCardComponent,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "NFT",
                list: ['Dashboards', 'NFT']
            },
            nftData: nftData,
        };
    },
    setup() {
        return {};
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-6 col-xl-12 col-lg-12">
            <div class="card custom-card overflow-hidden">
                <div class="card-body">
                    <div class="row gap-3 gap-sm-0">
                        <div class="col-sm-8 col-12">
                            <div class="">
                                <h4 class="fw-semibold mb-2">Discover, collect and sell your <span
                                        class="text-primary">NFTs</span> at one place</h4>
                                <p class="mb-4 text-muted fs-14 op-7">
                                    NFT means non-fungible tokens (NFTs), which are generally created using the same
                                    type of
                                    programming used for cryptocurrencies.It is is a unique digital identifier that
                                    cannot
                                    be copied.
                                </p>
                                <div class="btn-list pt-1">
                                    <button class="btn btn-primary btn-wave m-1 waves-effect waves-light">Discover
                                        Now</button>
                                    <button class="btn btn-outline-primary btn-wave m-1 waves-effect waves-light">Create
                                        Yours</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-auto my-auto">
                            <div class="featured-nft">
                                <img src="/images/nft-images/1.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-6 col-lg-6">
            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12" v-for="card in nftData.nft"
                    :key="card.id">
                    <SimpleCardComponent :showCardHeader="false">
                        <div class="d-flex flex-wrap align-items-top">
                            <div class="me-3 lh-1">
                                <span :class="`avatar avatar-lg bg-${card.iconBg}`" v-html="card.icon"></span>
                            </div>
                            <div>
                                <p class="mb-1 text-muted">{{ card.text }}</p>
                                <h5 class="fw-semibold mb-2">{{ card.count }}</h5>
                                <p class="fs-11 text-muted mb-0">
                                    <span :class="`text-${card.color} fw-semibold`">{{ card.percentage }}
                                        <i :class="`ri-arrow-${card.dir}-s-line align-middle mx-1`"></i>
                                    </span> This month
                                </p>
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
        <div class="col-xxl-2 col-xl-6 col-lg-6">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex flex-wrap align-items-center justify-content-between mb-2">
                        <div>
                            <p class="mb-0 text-muted">Your Balance</p>
                            <h5 class="fw-semibold">$19,867.96</h5>
                        </div>
                        <div>
                            <span class="avatar avatar-md bg-primary-transparent">
                                <svg class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px"
                                    viewBox="0 0 24 24" width="24px" fill="#000000">
                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                    <path
                                        d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                                    <circle cx="16" cy="12" r="1.5" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <p class="mb-0 text-muted fs-11 op-7">Top offers on USD-27,981
                        <span class="text-success fw-semibold">(+29.09%)</span>
                    </p>
                    <div id="nft-balance-chart">
                        <apexchart height="80px" type="line" :options="nftData.balanceCardOptions"
                            :series="nftData.balanceCardSeries"></apexchart>
                    </div>
                    <div class="d-grid mt-3">
                        <button class="btn btn-success-light btn-wave">Top Up Wallet</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xxl-8 col-xl-12 col-lg-12">
            <div class="mb-4 d-flex align-items-center justify-content-between">
                <h6 class="fw-semibold mb-0">Trending Auctions :</h6>
                <div>
                    <button class="btn btn-sm btn-primary-light btn-wave">View All</button>
                </div>
            </div>
            <div class="row">
                <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12" v-for="card in nftData.Auctions"
                    :key="card.id">
                    <AuctionsCardComponent :card="card" />
                </div>
            </div>
        </div>
        <div class="col-xxl-4 col-xl-12 col-lg-12">
            <SimpleCardComponent title="Top Creators" cardHeaderClass="justify-content-between" cardClassBody="p-0">
                <template v-slot:showheader>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-light" data-bs-toggle="dropdown">
                            <i class="fe fe-more-vertical"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        </ul>
                    </div>
                </template>
                <TableComponent :headers="['Name', 'Items Sold', 'Total Value', 'Action']" :rows="nftData.topCreators"
                    tableClass="table text-nowrap nft-table2" v-slot:cell="{ row }">
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="lh-1">
                                <span class="avatar avatar-md avatar-rounded me-2">
                                    <img :src="(row.avatar)" alt="">
                                </span>
                            </div>
                            <div class="align-items-center">
                                <p class="mb-0 fw-semibold">{{ row.name }}
                                    <i class="bi bi-patch-check-fill text-success ms-2"></i>
                                </p>
                                <span class="fs-12 text-muted fw-medium">{{ row.username }}</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="align-items-center">
                            <span class="fs-12 text-muted">Total Sold</span>
                            <p class="mb-0 fw-semibold">{{ row.totalSold }}</p>
                        </div>
                    </td>
                    <td>
                        <div class="align-items-center">
                            <span class="fs-12 text-muted">Sale Value</span>
                            <p class="mb-0 fw-semibold">{{ row.saleValue }}</p>
                        </div>
                    </td>
                    <td>
                        <button :class="`btn btn-sm ${row.color} btn-wave`">{{ row.following }}</button>
                    </td>
                </TableComponent>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-12 col-lg-12">
            <SimpleCardComponent title="Top Collectors" customCardClass="overflow-hidden"
                cardHeaderClass="justify-content-between" cardClassBody="p-0" cardBodyId="top-collector">
                <template v-slot:showheader>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="py-2 fs-12 text-muted" data-bs-toggle="dropdown"> View All
                            <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                        </ul>
                    </div>
                </template>
                <TableComponent :headers="[]" :rows="nftData.topCollectors" tableClass="table table-hover text-nowrap"
                    v-slot:cell="{ row }">
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <span class="avatar avatar-md p-2 avatar-rounded bg-light">
                                    <img :src="(row.avatar)" alt="">
                                </span>
                            </div>
                            <div class="fw-semibold">{{ row.name }}</div>
                        </div>
                    </td>
                    <td>
                        <div class="progress progress-xs progress-animate nft-collector-progress">
                            <div class="progress-bar bg-primary-gradient" role="progressbar" aria-valuenow="100"
                                aria-valuemin="0" aria-valuemax="100" :style="`width: ${row.progress}%`">
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="text-muted fs-12 fw-medium">{{ row.progress }}%</span>
                    </td>
                    <td>
                        <p class="mb-0 fw-semibold">{{ row.value }}</p>
                        <span class="fs-11 fw-normal text-success">{{ row.eth }}</span>
                    </td>
                </TableComponent>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-6 col-xl-8 col-lg-7 col-md-12 col-sm-12">
            <ChartCardComponent :card="card" title="NFTs Statistics" v-for="(card, index) in nftData.nftStatistics"
                :key="index" cardBodyClass="p-0" chartId="nft-statistics">
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
                    <div class="d-flex flex-wrap p-3 border-bottom border-block-end-dashed">
                        <div class="me-3">
                            <span class="avatar avatar-md avatar-rounded p-2 bg-light">
                                <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                            </span>
                        </div>
                        <div class="d-flex flex-wrap justify-content-sm-evenly flex-fill">
                            <div class="m-sm-0 m-2" v-for="(card, index) in nftData.statistics2" :key="index">
                                <span>{{ card.label }}</span>
                                <p :class="`text-${card.class} fw-semibold mb-0 mt-1`">{{ card.value }}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </ChartCardComponent>
        </div>
        <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-12 col-sm-12">
            <div class="mb-3 d-flex align-items-center justify-content-between">
                <h6 class="fw-semibold mb-0">Featured Collections :</h6>
                <div>
                    <button class="btn btn-sm btn-primary-light btn-wave waves-effect waves-light">View All</button>
                </div>
            </div>
            <SwiperjsCardComponent :swiperItems="nftData.nftCollections" swiperClass="notification-slider"
                :pagination="false" :navigation="false" :autoplay="true">
                <template #default="{ card }">
                    <SimpleCardComponent :showCardFooter="true" :showCardHeader="false" :cardFooter2="true">
                        <div class="row g-2">
                            <div class="col-6" v-for="img, index in card.images" :key="index">
                                <img :src="img.src" alt="" class="nft-featuredcollect-image">
                            </div>
                        </div>
                        <template v-slot:cardFooter>
                            <div class="d-flex align-items-center justify-content-between">
                                <div>
                                    <div class="text-muted fs-12 d-flex align-items-center">Collection Rank :
                                        <span class="fw-semibold text-success fs-15 mb-0 ms-1">{{ card.rank }}</span>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="me-2 lh-1">
                                        <span class="avatar avatar-rounded bg-light p-1 avatar-xs">
                                            <img :src="card.coinSrc" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <span class="fw-semibold">1.0979ETH</span>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <template v-slot:cardFooter2>
                            <div class="d-flex align-items-center">
                                <div class="d-flex align-items-center flex-fill">
                                    <div class="me-2 lh-1">
                                        <span class="avatar avatar-md avatar-rounded">
                                            <img :src="card.avatar" alt="">
                                            <a href="javascript:void(0);"
                                                class="badge rounded-pill bg-primary avatar-badge"><i
                                                    class="ri-check-line align-mmiddle"></i></a>
                                        </span>
                                    </div>
                                    <div>
                                        <p class="mb-0 fw-semibold"><a href="javascript:void(0);">{{ card.username
                                        }}</a></p>
                                        <p class="text-muted fs-12 mb-0">{{ card.handle }}</p>
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-primary-light"
                                        data-bs-toggle="dropdown">
                                        <i class="fe fe-more-vertical"></i>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </template>
                    </SimpleCardComponent>
                </template>
            </SwiperjsCardComponent>
        </div>
    </div>
    <!-- End::row-3 -->

    <!-- Start::row-4 -->
    <div class="row">
        <div class="col-xl-9">
            <SimpleCardComponent title=" Trending NFTs " cardHeaderClass="justify-content-between" cardClassBody="P-0"
                :showCardFooter="true">
                <template v-slot:showheader>
                    <div class="d-flex">
                        <div class="me-3">
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);"
                                class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false"> Sort By
                                <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
                            </ul>
                        </div>
                    </div>
                </template>
                <TableComponent :headers="['Collection', 'Rank', 'Volume', '24h %', '7d %', 'Floor Price', 'Items']"
                    :rows="nftData.Trending" tableClass="table table-hover table-bordered text-nowrap nft-table"
                    v-slot:cell="{ row }">
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="me-2 lh-1">
                                <span class="avatar avatar-md avatar-rounded">
                                    <img :src="(row.image)" alt="">
                                </span>
                            </div>
                            <div>
                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);" title="nft_name">{{ row.name
                                }}</a></p>
                                <a href="javascript:void(0);" class="fs-12 text-muted fw-normal" title="creator_name">{{
                                    row.creator }}</a>
                            </div>
                        </div>
                    </td>
                    <td><span class="fw-semibold text-primary">{{ row.rank }}</span></td>
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="me-2 lh-1">
                                <span class="avatar avatar-xs avatar-rounded">
                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                </span>
                            </div>
                            <div>
                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);" title="nft_name">{{ row.price
                                }}</a></p>
                            </div>
                        </div>
                    </td>
                    <td><span :class="`text-${row.color}`"><i
                                :class="`ti ti-trending-${row.dir} me-1 align-middle d-inline-block`"></i>{{
                            row.change1h
                            }}%</span>
                    </td>
                    <td><span :class="`text-${row.color1}`"><i
                                :class="`ti ti-trending-${row.dir1} me-1 align-middle d-inline-block`"></i>{{
                            row.change24h
                            }}%</span>
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="me-2 lh-1">
                                <span class="avatar avatar-xs avatar-rounded">
                                    <img src="/images/crypto-currencies/regular/Ethereum.svg" alt="">
                                </span>
                            </div>
                            <div>
                                <p class="mb-0 fw-semibold"><a href="javascript:void(0);" title="nft_name">{{
                                    row.floorPrice
                                }}</a></p>
                            </div>
                        </div>
                    </td>
                    <td>{{ row.volume }}</td>
                </TableComponent>
                <template v-slot:cardFooter>
                    <div class="d-flex align-items-center">
                        <div> Showing 5 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
                        <div class="ms-auto">
                            <nav aria-label="Page navigation" class="pagination-style-4">
                                <ul class="pagination mb-0">
                                    <li class="page-item disabled"> <a class="page-link" href="javascript:void(0);">
                                            Prev </a> </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item"> <a class="page-link text-primary" href="javascript:void(0);">
                                            next </a> </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </template>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-3">
            <SimpleCardComponent title="Personal Listings" cardClassBody="p-0" customCardClass="overflow-hidden"
                cardHeaderClass="justify-content-between">
                <template v-slot:showheader>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            View All<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                        </ul>
                    </div>
                </template>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="(card, index) in nftData.nftItems" :key="index">
                        <a href="javascript:void(0);">
                            <div class="d-flex flex-wrap align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <div class="me-2 lh-1">
                                        <span class="avatar avatar-md">
                                            <img :src="card.avatar" alt="">
                                        </span>
                                    </div>
                                    <div>
                                        <p class="fw-semibold mb-0">{{ card.name }}</p>
                                        <span class="text-muted fs-12 d-inline-flex">{{ card.username }}<span
                                                :class="`ms-2 text-${card.textColor} fs-11`"><i
                                                    :class="`ri-arrow-${card.dir}-s-line align-middle me-1`"></i>{{
                                                card.percentageChange }}%</span></span>
                                    </div>
                                </div>
                                <div>
                                    <span class="fs-10 text-muted ps-4">PRICE</span>
                                    <p class="mb-0 fw-semibold d-flex align-items-center">
                                        <span class="avatar avatar-sm p-1">
                                            <img :src="card.currencyLogo" alt="">
                                        </span>{{ card.price }}ETH
                                    </p>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End::row-4 -->


    <div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModal" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="input-group">
                        <a href="javascript:void(0);" class="input-group-text" id="Search-Grid"><i
                                class="fe fe-search header-link-icon fs-18"></i></a>
                        <input type="search" class="form-control border-0 px-2" placeholder="Search"
                            aria-label="Username">
                        <a href="javascript:void(0);" class="input-group-text" id="voice-search"><i
                                class="fe fe-mic header-link-icon"></i></a>
                        <a href="javascript:void(0);" class="btn btn-light btn-icon" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Separated link</a></li>
                        </ul>
                    </div>
                    <div class="mt-4">
                        <p class="font-weight-semibold text-muted mb-2">Are You Looking For...</p>
                        <span class="search-tags"><i class="fe fe-user me-2"></i>People<a href="javascript:void(0)"
                                class="tag-addon"><i class="fe fe-x"></i></a></span>
                        <span class="search-tags"><i class="fe fe-file-text me-2"></i>Pages<a href="javascript:void(0)"
                                class="tag-addon"><i class="fe fe-x"></i></a></span>
                        <span class="search-tags"><i class="fe fe-align-left me-2"></i>Articles<a
                                href="javascript:void(0)" class="tag-addon"><i class="fe fe-x"></i></a></span>
                        <span class="search-tags"><i class="fe fe-server me-2"></i>Tags<a href="javascript:void(0)"
                                class="tag-addon"><i class="fe fe-x"></i></a></span>
                    </div>
                    <div class="my-4">
                        <p class="font-weight-semibold text-muted mb-2">Recent Search :</p>
                        <div class="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                            <a href="notifications.html"><span>Notifications</span></a>
                            <a class="ms-auto lh-1" href="javascript:void(0);" data-bs-dismiss="alert"
                                aria-label="Close"><i class="fe fe-x text-muted"></i></a>
                        </div>
                        <div class="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                            <a href="alerts.html"><span>Alerts</span></a>
                            <a class="ms-auto lh-1" href="javascript:void(0);" data-bs-dismiss="alert"
                                aria-label="Close"><i class="fe fe-x text-muted"></i></a>
                        </div>
                        <div class="p-2 border br-5 d-flex align-items-center text-muted mb-0 alert">
                            <a href="mail.html"><span>Mail</span></a>
                            <a class="ms-auto lh-1" href="javascript:void(0);" data-bs-dismiss="alert"
                                aria-label="Close"><i class="fe fe-x text-muted"></i></a>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <div class="btn-group ms-auto">
                        <button class="btn btn-sm btn-primary-light">Search</button>
                        <button class="btn btn-sm btn-primary">Clear Recents</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
