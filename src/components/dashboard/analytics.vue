<script lang="ts">
import PageHeader from '../../shared/components/pageheader/pageheader.vue';
import * as analyticsData from '../../data/dashboards/analytics';
import CrmdealCardComponent from "../../shared/components/@spk/dashboard/crm-deal-cards.vue";
import ChartCardComponent from "../../shared/components/@spk/dashboard/chart-cards.vue"
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        CrmdealCardComponent,
        ChartCardComponent,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Analytics",
                list: ['Dashboards', 'Analytics']
            },
            analyticsData: analyticsData,
        };
    },
};
</script>


<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-7">
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                    <SimpleCardComponent :showCardHeader="false">
                        <div class="d-flex flex-wrap align-items-center justify-content-between">
                            <div>
                                <h6 class="fw-semibold mb-3">Total Users</h6>
                                <span class="fs-25 fw-semibold">9,789</span>
                                <span class="d-block text-success fs-12">+0.892 <i
                                        class="ti ti-trending-up ms-1"></i></span>
                            </div>
                            <div id="analytics-users">
                                <apexchart height="55px" type="line" width="120"
                                    :options="analyticsData.totalUsersOptions" :series="analyticsData.totalUsersSeries">
                                </apexchart>
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <SimpleCardComponent :showCardHeader="false">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <h6 class="fw-semibold mb-3">Live Visitors</h6>
                                <span class="fs-25 fw-semibold">12,240</span>
                                <span class="d-block text-danger fs-12">+0.59<i
                                        class="ti ti-trending-down ms-1 d-inline-flex"></i></span>
                            </div>
                            <div>
                                <span class="avatar avatar-md bg-secondary">
                                    <i class="ri-user-3-line"></i>
                                </span>
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                    <SimpleCardComponent :showCardHeader="false" customCardClass="overflow-hidden" cardClassBody="mb-3">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <h6 class="fw-semibold text-primary mb-3">Bounce Rate</h6>
                                <span class="fs-25 d-flex align-items-center">77.3% <span
                                        class="fs-12 text-warning op-7 ms-2">+0.59<i
                                            class="ti ti-arrow-big-up-line ms-1 d-inline-flex"></i></span></span>
                            </div>
                        </div>
                        <template v-slot:cardBodyDown>
                            <div id="analytics-bouncerate">
                                <apexchart height="40px" width="300" type="line"
                                    :options="analyticsData.bouncerateOptions" :series="analyticsData.bouncerateSeries">
                                </apexchart>
                            </div>
                        </template>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <ChartCardComponent :card="card" title="Audience Report"
                        v-for="(card, index) in analyticsData.AudienceReport" :key="index">
                        <template v-slot:cardHeader>
                            <div>
                                <button type="button" class="btn btn-primary-light btn-wave waves-effect waves-light">
                                    <i class="ri-share-forward-line me-1 align-middle d-inline-block"></i>Export
                                </button>
                            </div>
                        </template>
                    </ChartCardComponent>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <ChartCardComponent :card="card" title="Top Countries Sessions vs Bounce Rate"
                        v-for="(card, index) in analyticsData.BounceRate" :key="index">
                        <template v-slot:cardHeader>
                            <div class="dropdown ms-auto">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
                                    View All
                                    <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Day</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                                </ul>
                            </div>
                        </template>
                    </ChartCardComponent>
                </div>
                <div class="col-xxl-6 col-xl-12">
                    <SimpleCardComponent title="Traffic Sources" cardHeaderClass="justify-content-between"
                        customCardClass="overflow-hidden" cardClassBody="p-0">
                        <template v-slot:showheader>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
                                    View All
                                    <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                                </ul>
                            </div>
                        </template>
                        <TableComponent :headers="['Browser', 'Sessions', 'Traffic']" :rows="analyticsData.Traffic"
                            tableClass="table table-hover text-nowrap" v-slot:cell="{ row }">
                            <td>
                                <div class="d-flex align-items-center">
                                    <span class="avatar avatar-rounded avatar-sm p-2 bg-light me-2">
                                        <i :class="`${row.iconClass}`"></i>
                                    </span>
                                    <div class="fw-semibold">{{ row.name }}</div>
                                </div>
                            </td>
                            <td> <span><i :class="`${row.trendIconClass} align-middle fs-18`"></i>{{ row.visits
                            }}</span> </td>
                            <td>
                                <div class="progress progress-xs">
                                    <div class="progress-bar bg-primary" role="progressbar"
                                        :style="`width: ${row.progress}`" aria-valuenow="78" aria-valuemin="0"
                                        aria-valuemax="100"> </div>
                                </div>
                            </td>
                        </TableComponent>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
        <div class="col-xl-5">
            <div class="row">
                <div class="col-xxl-5 col-xl-12">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12">
                            <SimpleCardComponent customCardClass="upgrade-card text-fixed-white"
                                cardClassBody="text-fixed-white" :showCardHeader="false">
                                <span class="avatar avatar-xxl">
                                    <img src="/images/media/media-84.png" alt="">
                                </span>
                                <div class="upgrade-card-content">
                                    <span class="op-7 fw-normal mb-1">Plan is expiring !</span>
                                    <span class="fs-15 fw-semibold d-block mb-5 upgrade-text">Upgrade to premium</span>
                                    <button type="button" class="btn btn-sm btn-light btn-wave">Upgrade Now</button>
                                </div>
                            </SimpleCardComponent>
                        </div>

                        <div class="col-xl-12 col-lg-6 col-md-6 col-sm-6"
                            v-for="(card, index) in analyticsData.simpleCount" :key="index">
                            <SimpleCardComponent cardClassBody="p-0" :showCardHeader="false">
                                <div class="d-flex align-items-center flex-wrap">
                                    <div :id="card.cahartId">
                                        <apexchart :width="card.width" :height="card.height" :type="card.type"
                                            :options="card.chart.options" :series="card.chart.series"></apexchart>
                                    </div>
                                    <div class="p-2">
                                        <p class="mb-1 text-muted">{{ card.name }}</p>
                                        <h5 class="fw-semibold mb-0">{{ card.count }}</h5>
                                    </div>
                                </div>
                            </SimpleCardComponent>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-7 col-xl-12">
                    <ChartCardComponent :card="card" title="Sessions By Device" :showCardFooter="true"
                        cardFooterClass="p-0" v-for="(card, index) in analyticsData.SessionsByDevice" :key="index"
                        chartId="analytics-sessions">
                        <template v-slot:cardHeader>
                            <div> <button type="button" class="btn btn-primary-light">View All</button> </div>
                        </template>
                        <template v-slot:cardFooter>
                            <div class="row row-cols-12 justify-content-center">
                                <div class="col pe-0 text-center" v-for="(card, index) in analyticsData.myLeadSources"
                                    :key="index">
                                    <div class="p-sm-3 p-2 ">
                                        <span class="text-muted fs-11">{{ card.device }}</span>
                                        <span class="d-block fs-16 fw-semibold">{{ card.percentage }}</span>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </ChartCardComponent>
                </div>
                <div class="col-xl-12">
                    <ChartCardComponent :card="card" title="Sessions Duration By New Users"
                        v-for="(card, index) in analyticsData.ByNewUsers" :key="index">
                        <template v-slot:cardHeader>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
                                    View All
                                    <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Day</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                                </ul>
                            </div>
                        </template>
                    </ChartCardComponent>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-9">
            <SimpleCardComponent title=" Visitors By Channel Report " cardHeaderClass="justify-content-between"
                customCardClass="overflow-hidden" :showCardFooter="true">
                <template v-slot:showheader>
                    <div class="d-flex flex-wrap">
                        <div class="me-3 my-1">
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown my-1">
                            <a href="javascript:void(0);"
                                class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false"> Sort By
                                <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
                            </ul>
                        </div>
                    </div>
                </template>
                <TableComponent
                    :headers="['S.No', 'Channel', 'Sessions', 'Bounce Rate', 'Avg Session Duration', 'Goal Completed', 'Pages Per Session']"
                    :rows="analyticsData.Visitors" tableClass="table table-hover text-nowrap table-bordered"
                    v-slot:cell="{ row }">
                    <td>
                        {{ row.id }}
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span :class="`avatar avatar-sm bg-${row.bgColor}-transparent avatar-rounded`">
                                <i :class="`${row.iconClass}`"></i>
                            </span>
                            <span class="ms-2">
                                {{ row.name }}
                            </span>
                        </div>
                    </td>
                    <td>{{ row.visits }}</td>
                    <td>{{ row.percentage }}</td>
                    <td>
                        {{ row.timeSpent }}
                    </td>
                    <td>
                        <span :class="`badge ${row.badgeClass}`">{{ row.conversions }}</span>
                    </td>
                    <td>
                        {{ row.averageTime }}
                    </td>
                </TableComponent>
                <template v-slot:cardFooter>
                    <div class="d-flex align-items-center">
                        <div> Showing 6 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i> </div>
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
            <SimpleCardComponent title="Visitors By Countries" cardHeaderClass="justify-content-between">
                <template v-slot:showheader>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                            aria-expanded="false"> View All
                            <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu" style="">
                            <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                        </ul>
                    </div>
                </template>
                <CrmdealCardComponent :card="analyticsData.VisitorsByCountries" cardClass="me-0"
                    ulClass="list-unstyled mb-0 analytics-visitors-countries" dflexClass="align-items-center" />
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End::row-2 -->
</template>

<style scoped></style>
