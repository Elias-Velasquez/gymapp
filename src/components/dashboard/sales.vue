<script lang="ts">
import PageHeader from '../../shared/components/pageheader/pageheader.vue';
import * as salesData from '../../data/dashboards/sales';
import CrmdealCardComponent from "../../shared/components/@spk/dashboard/crm-deal-cards.vue";
import ChartCardComponent from "../../shared/components/@spk/dashboard/chart-cards.vue";
import ActivityCardComponent from "../../shared/components/@spk/dashboard/activity-cards.vue";
import CountrymapCardComponent from "../../shared/components/@spk/dashboard/country-map-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        CrmdealCardComponent,
        ChartCardComponent,
        ActivityCardComponent,
        CountrymapCardComponent,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Sales",
                list: ['Dashboards', 'Sales']
            },
            tableHeaders: ['<input class="form-check-input" type="checkbox" id="checkboxNoLabel1" aria-label="...">', 'Order Id', 'Customer', 'Quantity', 'Price', 'Status', 'Ordered Date', 'Action'],
            tableHeader: ['<input class="form-check-input" type="checkbox" id="checkboxNoLabel1" aria-label="...">', 'Task details', 'Assigned date', 'Target', 'Assigned to'],
            salesData: salesData,

        };
    }, mounted() {
        let markers = [
            {
                name: "Usa",
                coords: [40.3, -101.38],
            },
            {
                name: "India",
                coords: [20.5937, 78.9629],
            },
            {
                name: "Vatican City",
                coords: [41.9, 12.45],
            },
            {
                name: "Canada",
                coords: [56.1304, -106.3468],
            },
            {
                name: "Mauritius",
                coords: [-20.2, 57.5],
            },
            {
                name: "Singapore",
                coords: [1.3, 103.8],
            },
            {
                name: "Palau",
                coords: [7.35, 134.46],
            },
            {
                name: "Maldives",
                coords: [3.2, 73.22],
            },
            {
                name: "São Tomé and Príncipe",
                coords: [0.33, 6.73],
            },
        ];
        const map = new jsVectorMap({
            selector: '#visitors-countries',
            map: 'world_merc',
            markersSelectable: true,
            zoomOnScroll: false,
            zoomButtons: false,

            onMarkerSelected(index, isSelected, selectedMarkers) {
                console.log(index, isSelected, selectedMarkers);
            },

            // -------- Labels --------
            labels: {
                markers: {
                    render: function (marker) {
                        return marker.name;
                    },
                },
            },

            // -------- Marker and label style --------
            markers: markers,
            markerStyle: {
                hover: {
                    stroke: "#DDD",
                    strokeWidth: 3,
                    fill: "#FFF",
                },
                selected: {
                    fill: "#ff525d",
                },
            },
            markerLabelStyle: {
                initial: {
                    fontFamily: "Poppins",
                    fontSize: 13,
                    fontWeight: 500,
                    fill: "#35373e",
                },
            },
        })
    }
}
</script>

<template>
    <PageHeader :propData="dataToPass" />


    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6" v-for="card in salesData.sales" :key="card.id">
            <SimpleCardComponent :showCardHeader="false">
                <div class="row">
                    <div class="col-6 pe-0">
                        <p class="mb-2">
                            <span class="fs-16">{{ card.name }}</span>
                        </p>
                        <p class="mb-2 fs-12">
                            <span class="fs-25 fw-semibold lh-1 vertical-bottom mb-0">{{ card.count }}</span>
                            <span class="d-block fs-10 fw-semibold text-muted">{{ card.month }}</span>
                        </p>
                        <a href="javascript:void(0);" class="fs-12 mb-0 text-primary">{{ card.stats }}
                            <i class="ti ti-chevron-right ms-1"></i></a>
                    </div>
                    <div class="col-6">
                        <p :class="`badge bg-${card.badgeColor}-transparent float-end d-inline-flex`"><i
                                :class="`ti ti-caret-${card.dir} me-1`"></i>{{ card.badgeText }}</p>
                        <p class="main-card-icon mb-0" v-html="card.icon">

                        </p>
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-12">
            <SimpleCardComponent title="Recent Transactions" cardHeaderClass="justify-content-between"
                cardClassBody="p-0">
                <template v-slot:showheader>
                    <div class="dropdown">
                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                            data-bs-toggle="dropdown" aria-expanded="true">
                            <i class="fe fe-more-vertical"></i>
                        </a>
                        <ul class="dropdown-menu" data-popper-placement="bottom-end">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        </ul>
                    </div>
                </template>
                <CrmdealCardComponent :card="salesData.recentTransaction" ulClass="list-unstyled crm-top-deals mb-0" />
            </SimpleCardComponent>
        </div>
        <div class="col-lg-6 col-sm-12 col-md-6 col-xxl-6 col-xl-8">
            <ChartCardComponent :card="card" title="Sales Overview"
                v-for="(card, index) in salesData.recentTransactions" :key="index">
                <template v-slot:cardHeader>
                    <div class="dropdown">
                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                        </a>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                        </ul>
                    </div>
                </template>
            </ChartCardComponent>
        </div>
        <div class="col-lg-6 col-sm-12 col-md-6 col-xxl-3 col-xl-4">
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">Activities</div>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
                            View All<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body mt-0 latest-timeline" id="latest-timeline">
                    <ul class="timeline-main mb-0 list-unstyled">
                        <!-- <PerfectScrollbar> -->
                        <li>
                            <div class="featured_icon1 featured-danger"></div>
                        </li>
                        <li class="mt-0 activity">
                            <a href="javascript:void(0);" class="fs-12">
                                <p class="mb-0"><span class="fw-semibold">#Anita</span> <span class="ms-2 fs-12">Lorem
                                        ipsum
                                        dolor, sit amet consectetur adipisicing .</span></p>
                            </a>
                            <small class="text-muted mt-0 mb-0 fs-10">12 mins ago.</small>
                        </li>
                        <li>
                            <div class="featured_icon1 featured-success"> </div>
                        </li>
                        <li class="mt-0 activity">
                            <a href="javascript:void(0);" class="fs-12">
                                <p class="mb-0"><span class="me-2 fs-12">New Product reveived.</span><span
                                        class="fw-semibold">#FX-321</span> </p>
                            </a>
                            <small class="text-muted mt-0 mb-0 fs-10">28 mins ago.</small>
                        </li>
                        <li>
                            <div class="featured_icon1 featured-danger"></div>
                        </li>
                        <li class="mt-0 activity">
                            <div class="fs-12">
                                <p class="mb-0">
                                    <span class="fw-semibold text-primary">#Zlatan</span>
                                    <span class="ms-2 fs-12">shared a page.
                                        <a href="https://themeforest.net/user/spruko/portfolio" target="_blank"
                                            class="text-success underlined fs-11">https://themeforest.net/user/spruko/portfolio</a>
                                    </span>
                                </p>
                            </div>
                            <small class="text-muted mt-0 mb-0 fs-10">37 mins ago.</small>
                        </li>
                        <li>
                            <div class="featured_icon1 featured-success"></div>
                        </li>
                        <li class="mt-0 activity">
                            <div class="fs-12">
                                <p class="mb-0"><span class="fw-semibold text-primary">#Hussain</span> <span
                                        class="ms-2 fs-12">shared a file. </span></p>
                                <small class="text-muted mt-0 mb-0 fs-10">1 day ago.</small>
                                <p class="p-1 border border-dotted wp-50 br-5 mb-0">
                                    <a href="javascript:void(0);">
                                        <span class="badge bg-success text-fixed-white me-2">PPT</span> <span
                                            class="fs-11">Project_discussion</span>
                                    </a>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="featured_icon1 featured-danger"></div>
                        </li>
                        <li class="mt-0 activity">
                            <a href="javascript:void(0);" class="fs-12">
                                <p class="mb-0">
                                    <span class="fw-semibold">#Emiley</span>
                                    <span class="ms-2 fs-12">Lorem ipsum dolor, sit amet consectetur adipisicing ipsum
                                        dolor...</span>
                                    <span class="fw-semibold ms-2">More</span>
                                </p>
                            </a>
                            <small class="text-muted mt-0 mb-0 fs-10">14 Mar 2022.</small>
                        </li>
                        <!-- </PerfectScrollbar> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xxl-6 col-xl-12 col-md-12">
            <SimpleCardComponent title="Task List" cardHeaderClass="d-sm-flex d-block" cardClassBody="p-0"
                :showCardFooter="true" cardFooterClass="border-top-0">
                <template v-slot:showheader>
                    <div class="tab-menu-heading border-0 p-0 ms-auto mt-sm-0 mt-2">
                        <div class="tabs-menu-task me-3">
                            <ul class="nav nav-tabs panel-tabs-task border-0" role="tablist">
                                <li><a href="javascript:void(0);" class="me-1 active" data-bs-toggle="tab"
                                        data-bs-target="#Active" role="tab" aria-selected="true">Active Tasks</a></li>
                                <li><a href="javascript:void(0);" data-bs-toggle="tab" data-bs-target="#Complete"
                                        role="tab" aria-selected="false">Completed Tasks</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-sm-0 mt-2">
                        <button type="button" class="btn btn-sm btn-light align-items-center d-inline-flex">
                            <i class="ti ti-plus me-1 fw-semibold"></i>Add Task
                        </button>
                    </div>
                </template>
                <div class="tab-content p-0">
                    <div class="tab-pane active p-0 border-0" id="Active">
                        <TableComponent :headers="tableHeader" :rows="salesData.taskList" 
                            tableClass="table text-nowrap table-hover" v-slot:cell="{ row }">
                            <td class="text-center">
                                <span>
                                    <input class="form-check-input" type="checkbox" :id="`check${row.id}`"
                                        v-model="row.checked">
                                </span>
                            </td>
                            <td>{{ row.description }}</td>
                            <td class="text-muted">{{ row.time }}</td>
                            <td><span :class="`badge bg-${row.badgeColor}`">{{ row.badgeText }}</span></td>
                            <td>
                                <div class="avatar-list-stacked mb-0">
                                    <span v-for="(avatar, index) in row.avatars" :key="index" class="avatar avatar-xs">
                                        <img :src="avatar" alt="img">
                                    </span>
                                </div>
                            </td>
                        </TableComponent>
                    </div>
                    <div class="tab-pane p-0 border-0" id="Complete">
                        <TableComponent :headers="tableHeader" :rows="salesData.completedTasks"
                            tableClass="table text-nowrap table-hover" v-slot:cell="{ row }">
                            <td class="text-center">
                                <span>
                                    <input class="form-check-input" type="checkbox" :id="`check${row.id}`"
                                        v-model="row.checked">
                                </span>
                            </td>
                            <td>{{ row.description }}</td>
                            <td class="text-muted">{{ row.date }}</td>
                            <td><span :class="`badge bg-${row.badgeColor}`">{{ row.badgeText }}</span></td>
                            <td>
                                <div class="avatar-list-stacked mb-0">
                                    <span v-for="(avatar, index) in row.avatars" :key="index" class="avatar avatar-xs">
                                        <img :src="avatar" alt="img">
                                    </span>
                                </div>
                            </td>
                        </TableComponent>
                    </div>
                </div>
                <template v-slot:cardFooter>
                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                        <div>
                            <div class="d-flex align-items-center">
                                <div>
                                    Showing 6 Entries
                                </div>
                                <div class="transform-arrow ms-2">
                                    <i class="bi bi-arrow-right fw-semibold"></i>
                                </div>
                            </div>
                        </div>
                        <div>
                            <nav aria-label="Page navigation" class="pagination-style-4">
                                <ul class="pagination mb-0">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="javascript:void(0);">
                                            Prev
                                        </a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item">
                                        <a class="page-link text-primary" href="javascript:void(0);">
                                            next
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </template>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-6 col-xl-12 col-md-12">
            <CountrymapCardComponent :card="salesData.visitorsByCountries" mapId="visitors-countries"
                title="Visitors By Countries" :showCountriesData="true" cardBodyClass="p-0">
                <template v-slot:showHeader>
                    <div class="dropdown">
                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                            data-bs-toggle="dropdown">
                            <i class="fe fe-more-vertical"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        </ul>
                    </div>
                </template>
            </CountrymapCardComponent>
        </div>
    </div>
    <!-- End::row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-6">
            <SimpleCardComponent title="Customers" cardHeaderClass="justify-content-between"
                cardClassBody="p-0 customers">
                <template v-slot:showheader>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted show" data-bs-toggle="dropdown"
                            aria-expanded="true"> View All
                            <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                            <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                        </ul>
                    </div>
                </template>
                <CrmdealCardComponent :card="salesData.Customers" ulClass="list-group my-1 pb-1" />
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <SimpleCardComponent title="Billing" cardClassBody="p-0">
                <template v-slot:showheader>
                    <div class="tab-menu-heading border-0 p-0 ms-auto">
                        <div class="tabs-menu-billing my-1">
                            <ul class="nav panel-tabs-billing">
                                <li class=""><a href="#Invoice" data-bs-toggle="tab" class="active">Invoices</a></li>
                                <li><a href="#Revenue" data-bs-toggle="tab">Revenue</a></li>
                            </ul>
                        </div>
                    </div>
                </template>
                <div class="tab-content">
                    <div class="tab-pane active border-0 p-0" id="Invoice">
                        <ul class="list-group border-0 py-1 my-1">
                            <li v-for="invoice in salesData.invoices" :key="invoice.id"
                                class="list-group-item align-items-start border-0 mb-2">
                                <a href="javascript:void(0);">
                                    <div class="d-flex w-100 justify-content-between align-items-center">
                                        <div>
                                            <span :class="`badge ${invoice.statusClass} me-3`">{{ invoice.status
                                            }}</span>
                                        </div>
                                        <div class="billing-invoice-details">
                                            <span class="mb-0 fw-semibold me-2">
                                                Invoice #{{ invoice.id }} _ <span class="fs-12 ">${{ invoice.amount
                                                }}</span>
                                            </span>
                                            <span class="small text-muted fs-11 d-block">{{ invoice.date }}</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-pane border-0 p-0" id="Revenue">
                        <ul class="list-group border-0 py-2">
                            <li v-for="(item, index) in salesData.transactions" :key="index"
                                class="list-group-item align-items-start border-0 mb-1">
                                <a href="javascript:void(0);">
                                    <div class="d-flex w-100 justify-content-between">
                                        <p class="mb-0 fw-semibold">{{ item.name }}</p>
                                        <p
                                            :class="['mb-0 fw-semibold', item.isPositive ? 'text-success' : 'text-danger', 'fs-14']">
                                            {{ item.sign }}{{ item.amount }}
                                        </p>
                                    </div>
                                    <div class="d-flex w-100 justify-content-between">
                                        <span class="text-muted fs-12">
                                            <i
                                                :class="['ri-arrow-up-fill', item.isPositive ? 'text-success' : 'text-danger', 'align-middle', 'me-1']"></i>
                                            <span :class="item.isPositive ? 'text-success' : 'text-danger'">
                                                {{ item.percentage }}%
                                            </span>
                                        </span>
                                        <span class="text-muted fs-11">{{ item.timeAgo }}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </SimpleCardComponent>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <ChartCardComponent :card="card" title="Sale Value" v-for="(card, index) in salesData.SaleValue"
                :key="index" cardBodyClass="pb-0 px-2" customCardClass="overflow-hidden">
                <template v-slot:cardHeader>
                    <div class="dropdown">
                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fe fe-more-vertical"></i>
                        </a>
                        <ul class="dropdown-menu" style="">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        </ul>
                    </div>
                </template>
                <template v-slot:ChartCardComponent>
                    <div class="row pt-4">
                        <div class="col-xl-12 border-bottom pb-3 text-center d-flex flex-wrap">
                            <span class="fw-semibold ms-2 text-primary px-4">60% Increase in sale value since last
                                week</span>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 border-end p-3 text-center"
                            v-for="card, index in salesData.saleValue" :key="index">
                            <p class="mb-1">{{ card.gender }}</p>
                            <h5 class="mb-1 fw-semibold">{{ card.count }}</h5>
                            <p class="fs-11 text-muted mb-0">{{ card.profit }}
                                <span :class="`text-${card.Color} ms-2`">
                                    <i
                                        :class="`ri-arrow-${card.arrow}-s-line me-2 fw-bold align-middle d-inline-block`"></i>
                                    <span :class="`badge bg-${card.Color}-transparent text-${card.Color} fs-11`">{{
                                        card.percentageChange }}</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </template>
            </ChartCardComponent>
        </div>
        <div class="col-xxl-3 col-xl-6">
            <SimpleCardComponent title="Profitable Categories" cardHeaderClass="justify-content-between">
                <template v-slot:showheader>
                    <div class="dropdown">
                        <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                            data-bs-toggle="dropdown">
                            <i class="fe fe-more-vertical"></i>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                        </ul>
                    </div>
                </template>

                <ul class="list-group mb-0">
                    <li v-for="(item, index) in salesData.categories" :key="index" class="list-group-item">
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <span class="avatar avatar-sm bg-light text-default fw-semibold">{{ item.id }}</span>
                            </div>
                            <div class="flex-fill">
                                <p class="mb-0 fw-semibold">{{ item.name }}</p>
                            </div>
                            <div>
                                <span class="text-success">{{ item.amount }}</span>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item text-center">
                        <button type="button" class="btn btn-primary-light btn-wave">See All Activity</button>
                    </li>
                </ul>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-12">
            <SimpleCardComponent title="Orders" cardHeaderClass="justify-content-between" :showCardFooter="true">
                <template v-slot:showheader>
                    <div class="d-flex flex-wrap">
                        <div class="me-3 my-1">
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown m-1">
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
                <TableComponent :headers="tableHeaders" :rows="salesData.Orders"
                    tableClass="table text-nowrap table-bordered" v-slot:cell="{ row }">
                    <td>
                        <span>
                            <input class="form-check-input" type="checkbox" :id="`order_${row.id}`"
                                v-model="row.checked">
                        </span>
                    </td>
                    <td>
                        <span class="text-success fw-semibold">#{{ row.id }}</span>
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="me-2 lh-1">
                                <span class="avatar avatar-sm">
                                    <img :src="(row.avatar)" alt="">
                                </span>
                            </div>
                            <div class="fs-14">{{ row.customer }}</div>
                        </div>
                    </td>
                    <td>
                        {{ row.quantity }}
                    </td>
                    <td>
                        <span class="fw-semibold fs-14">${{ row.price }}</span>
                    </td>
                    <td>
                        <span :class="`badge bg-${row.statusClass}`">{{ row.status }}</span>
                    </td>
                    <td>
                        <span class="text-muted">{{ row.date }}</span>
                    </td>
                    <td>
                        <div class="hstack gap-2 fs-1">
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-success-light btn-wave">
                                <i class="ri-download-2-line"></i>
                            </a>
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-info-light btn-wave">
                                <i class="ri-edit-line"></i>
                            </a>
                        </div>
                    </td>
                </TableComponent>
                <template v-slot:cardFooter>
                    <div class="d-flex align-items-center">
                        <div> Showing 6 Entries
                            <i class="bi bi-arrow-right ms-2 fw-semibold"></i>
                        </div>
                        <div class="ms-auto">
                            <nav aria-label="Page navigation" class="pagination-style-4">
                                <ul class="pagination mb-0">
                                    <li class="page-item disabled"><a class="page-link" href="javascript:void(0);"> Prev
                                        </a></li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item"><a class="page-link text-primary" href="javascript:void(0);">
                                            next </a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </template>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-5 -->


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
