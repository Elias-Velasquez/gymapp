<script lang="ts">
import PageHeader from '../../shared/components/pageheader/pageheader.vue';
import * as jobsData from '../../data/dashboards/jobs';
import ChartCardComponent from "../../shared/components/@spk/dashboard/chart-cards.vue";
import CrmdealCardComponent from "../../shared/components/@spk/dashboard/crm-deal-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        ChartCardComponent,
        CrmdealCardComponent,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Jobs",
                list: ['Dashboards', 'Jobs']
            },
            tableHeaders: [
                '<input class="form-check-input ms-4" type="checkbox" id="checkboxNoLabel1" aria-label="...">',
                '	Employer',
                ' Category',
                ' Role',
                ' Mail',
                ' Location',
                '	Date',
                ' Action'
            ],
            jobsData: jobsData,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-6 col-xl-12">
            <div class="row row-cols-12">
                <div class="col" v-for="card in jobsData.jobs" :key="card.id">
                    <SimpleCardComponent :showCardHeader="false">
                        <div class="d-flex align-items-top">
                            <div class="me-3">
                                <span :class="`avatar avatar-md p-2 bg-${card.iconBg}`" v-html="card.icon"></span>
                            </div>
                            <div class="flex-fill">
                                <div class="d-flex mb-1 align-items-top justify-content-between">
                                    <h5 class="fw-semibold mb-0 lh-1">{{ card.count }}</h5>
                                    <div :class="`text-${card.color} fw-semibold`">
                                        <i :class="`ri-arrow-${card.dir}-s-fill me-1 align-middle`"></i>{{
                                            card.percentage }}
                                    </div>
                                </div>
                                <p class="mb-0 fs-10 op-7 text-muted fw-semibold">{{ card.text }}</p>
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <ChartCardComponent :card="card" title="Subscriptions Overview"
                        v-for="(card, index) in jobsData.subscriptions" :key="index" cardBodyClass="p-0"
                        chartId="subscriptionOverview">
                        <template v-slot:cardHeader>
                            <div class="dropdown"> <a href="javascript:void(0);" class="p-2 fs-12 text-muted show"
                                    data-bs-toggle="dropdown" aria-expanded="true"> View All
                                    <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                                </ul>
                            </div>
                        </template>
                        <template v-slot:showData>
                            <div class="row border-bottom border-block-end-dashed">
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div class="p-3 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                        <p class="fs-20 fw-semibold mb-0">1,117</p>
                                        <p class="mb-0 text-muted">Total Subscriptions</p>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div class="p-3 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                        <p class="fs-20 fw-semibold mb-0"><span class="basic-subscription">742</span>
                                        </p>
                                        <p class="mb-0 text-muted">Basic Subscriptions</p>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                    <div class="p-3 text-sm-start text-center">
                                        <p class="fs-20 fw-semibold mb-0"><span class="pro-subscription">259</span></p>
                                        <p class="mb-0 text-muted">Pro Subscriptions</p>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </ChartCardComponent>
                </div>
            </div>
        </div>
        <div class="col-xxl-6 col-xl-12">
            <div class="row">
                <div class="col-xxl-6 col-xl-6">
                    <SimpleCardComponent title="Recent Jobs" cardHeaderClass="justify-content-between"
                        customCardClass="overflow-hidden" cardClassBody="p-0">
                        <template v-slot:showheader>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted show"
                                    data-bs-toggle="dropdown" aria-expanded="true"> View All
                                    <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu" data-popper-placement="bottom-end">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">This Week</a> </li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a> </li>
                                </ul>
                            </div>
                        </template>
                        <PerfectScrollbar>
                            <CrmdealCardComponent :card="jobsData.recentJobs" ulClass="list-group list-group-flush"
                                liClass="list-group-item border-top-0 border-start-0 border-end-0" ulId="recent-jobs" />
                        </PerfectScrollbar>
                    </SimpleCardComponent>
                </div>
                <div class="col-xxl-6 col-xl-6">
                    <ChartCardComponent :card="card" title="Candidates" cardBodyClass="p-0 pt-3"
                        v-for="(card, index) in jobsData.candidates" :key="index" customCardClass="overflow-hidden">
                        <template v-slot:cardHeader>
                            <div class="dropdown"> <a href="javascript:void(0);" class="p-2 fs-12 text-muted show"
                                    data-bs-toggle="dropdown" aria-expanded="true"> View All
                                    <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                                </ul>
                            </div>
                        </template>
                        <template v-slot:ChartCardComponent>
                            <div class="row row-cols-12 border-top border-block-start-dashed mt-3">
                                <div class="col" v-for="card, index in jobsData.Candidates" :key="index">
                                    <div class="p-3 border-end border-inline-end-dashed">
                                        <div class="text-muted fs-12 text-center mb-1">{{ card.gender }} Candidates
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center">
                                            <span class="me-3 fs-26 fw-semibold">{{ card.count }}</span>
                                            <span :class="`text-${card.textColor} fw-semibold`"><i
                                                    class="ri-arrow-up-s-fill align-middle me-1"></i>{{
                                                        card.percentageChange }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </ChartCardComponent>
                </div>
                <div class="col-xxl-12 col-xl-12">
                    <SimpleCardComponent title="Recent Recruiter Registrations" cardClassBody="p-0 recruiter"
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
                        <div class="row row-cols-12">
                            <div class="col" v-for="card in jobsData.registrations" :key="card.id">
                                <div class="p-3 border-md-end border-inline-end-dashed">
                                    <div class="d-flex align-items-top mb-4">
                                        <div class="me-2 lh-1">
                                            <span class="avatar avatar-md avatar-rounded">
                                                <img :src="card.avatar" alt="">
                                            </span>
                                        </div>
                                        <div class="flex-fill">
                                            <div class="recent-recruiter">
                                                <a href="javascript:void(0);" class="fw-semibold mb-0 text-truncate">{{
                                                    card.name }}</a>
                                                <p class="mb-0 fs-12 text-muted text-truncate">{{ card.email }}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <button aria-label="button" type="button"
                                                class="btn btn-icon btn-sm btn-light btn-wave">
                                                <i class="ri-arrow-right-s-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-top justify-content-between mb-2">
                                        <div class="text-muted fs-12">
                                            Vacancies
                                        </div>
                                        <div class="fw-semibold">
                                            {{ card.vacancies }}
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-top justify-content-between mb-0">
                                        <div class="text-muted fs-12">
                                            Position
                                        </div>
                                        <div>
                                            <span :class="`badge bg-${card.badgeColor}-transparent`">{{ card.badgeText
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-4">
            <SimpleCardComponent title="Registers By Country" customCardClass="overflow-hidden"
                cardHeaderClass="justify-content-between" cardClassBody="p-0">
                <TableComponent :headers="['Country', 'Date', 'Total Registers', 'Action']"
                    :rows="jobsData.registersByCountry" tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="me-2 lh-1">
                                <span class="avatar avatar-xs avatar-rounded">
                                    <img :src="(row.flag)" alt="">
                                </span>
                            </div>
                            <div>
                                <span class="fw-semibold">
                                    {{ row.name }}
                                </span>
                            </div>
                        </div>
                    </td>
                    <td>{{ row.date }}</td>
                    <td>{{ row.count }}</td>
                    <td>
                        <button type="button" class="btn btn-success-light btn-wave btn-sm">View</button>
                    </td>
                </TableComponent>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-5">
            <SimpleCardComponent title="Top Companies" customCardClass="overflow-hidden"
                cardHeaderClass="justify-content-between" cardClassBody="p-0">
                <template v-slot:showheader>
                    <div class="dropdown">
                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                            aria-expanded="false"> View All
                            <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                        </ul>
                    </div>
                </template>
                <TableComponent :headers="['Name', 'Subscription', 'Total Employees', 'Recruiter Since']"
                    :rows="jobsData.topCompanies" tableClass="table text-nowrap table-hover" v-slot:cell="{ row }">
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <span class="avatar avatar-md p-1 bg-light avatar-rounded">
                                    <img :src="(row.logo)" alt="">
                                </span>
                            </div>
                            <div>
                                <p class="fw-semibold mb-0">{{ row.name }}</p>
                                <p class="fs-12 text-muted mb-0">{{ row.type }}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span :class="`badge ${row.color}`">{{ row.plan }}</span>
                    </td>
                    <td>{{ row.employees }}</td>
                    <td>{{ row.dateJoined }}</td>
                </TableComponent>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-3">
            <SimpleCardComponent title="Acquisitions">
                <div class="progress progress-lg mb-4">
                    <div v-for="card in jobsData.acquisitions" :key="card.id" :class="`progress-bar bg-${card.color}`"
                        role="progressbar" :style="{ width: card.progressBar }" :aria-valuenow="card.progressValue"
                        aria-valuemin="0" aria-valuemax="100">{{ card.progressBar }}</div>
                </div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="card in jobsData.acquisitionsBadge" :key="card.id">
                        {{ card.title }}
                        <span :class="`badge float-end bg-${card.color}-transparent`">{{ card.badgeText }}</span>
                    </li>
                </ul>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xl-12">
            <SimpleCardComponent title="Recent Employers" customCardClass="overflow-hidden"
                cardHeaderClass="justify-content-between" :showCardFooter="true">
                <template v-slot:showheader>
                    <div class="d-flex">
                        <div class="me-3">
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);"
                                class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
                            </ul>
                        </div>
                    </div>
                </template>
                <TableComponent :headers="tableHeaders" :rows="jobsData.recentEmployers"
                    tableClass="table text-nowrap table-hover border table-bordered" v-slot:cell="{ row }">
                    <td> <input class="form-check-input ms-4" type="checkbox" :id="`checkboxNoLabel${row}`"
                            v-model="row.checked" /></td>
                    <td>
                        <div class="d-flex align-items-center fw-semibold">
                            <span class="avatar avatar-sm me-2 avatar-rounded">
                                <img :src="(row.avatar)" alt="img">
                            </span>{{ row.name }}
                        </div>
                    </td>
                    <td>{{ row.department }}</td>
                    <td><span :class="`badge ${row.positionClass}`">{{ row.position }}</span></td>
                    <td>{{ row.email }}</td>
                    <td>
                        <div class="d-inline-flex align-items-center">
                            <i class="ri-map-pin-fill text-muted fs-10"></i>
                            <span class="ms-1">{{ row.location }}</span>
                        </div>
                    </td>
                    <td>{{ row.duration }}</td>
                    <td>
                        <div class="hstack gap-2 fs-15">
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-success-light">
                                <i class="ri-download-2-line"></i>
                            </a>
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-primary-light">
                                <i class="ri-edit-line"></i>
                            </a>
                        </div>
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
    </div>
    <!-- End::row-3 -->
</template>

<style scoped></style>
