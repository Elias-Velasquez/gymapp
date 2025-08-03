<script lang="ts">
import PageHeader from '../../shared/components/pageheader/pageheader.vue';
import * as hrmData from '../../data/dashboards/hrm';
import ChartCardComponent from "../../shared/components/@spk/dashboard/chart-cards.vue";
import ActivityCardComponent from "../../shared/components/@spk/dashboard/activity-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        ChartCardComponent,
        ActivityCardComponent,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "HRM",
                list: ['Dashboards', 'HRM']
            },
            hrmData,
        };
    },
    methods: {
        deleteInvoice(invoiceId: number) {
            const index = this.hrmData.hrminvoices.findIndex(invoice => invoice.id === invoiceId);
            if (index !== -1) {
                this.hrmData.hrminvoices.splice(index, 1);
            }
        }
    }
};
</script>



<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-5 col-xl-12">
            <div class="row">
                <!-- Simple Cards Section -->
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12" v-for="card in hrmData.hrmCard"
                    :key="card.id">
                    <SimpleCardComponent :customCardClass="`hrm-main-card ${card.iconBg}`" :showCardHeader="false">
                        <div class="d-flex align-items-top">
                            <div class="me-3">
                                <span :class="`avatar bg-${card.iconBg}`">
                                    <i :class="`ri-${card.icon} fs-18`"></i>
                                </span>
                            </div>
                            <div class="flex-fill">
                                <span class="fw-semibold text-muted d-block mb-2">{{ card.name }}</span>
                                <h5 class="fw-semibold mb-2">{{ card.count }}</h5>
                                <p class="mb-0">
                                    <span :class="`badge bg-${card.iconBg}-transparent`">This Month</span>
                                </p>
                            </div>
                            <div>
                                <span :class="`fs-14 fw-semibold text-${card.percentageColor}`">{{ card.percentage
                                }}</span>
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>

                <!-- Applicants Summary Section -->
                <div class="col-xl-12">
                    <SimpleCardComponent title="Applicants Summary">
                        <div class="row gy-md-0 gy-3">
                            <div v-for="(item, index) in hrmData.ApplicantsSummary" :key="index"
                                class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                <div class="d-flex align-items-top">
                                    <div class="me-3">
                                        <span :class="`avatar avatar-rounded bg-light text-${item.iconClass}`">
                                            <i :class="item.icon"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="d-block mb-1 text-muted">{{ item.title }}</span>
                                        <h6 class="fw-semibold mb-0">{{ item.count }}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>

        <!-- Performance By Category -->
        <div class="col-xxl-7 col-xl-12">
            <ChartCardComponent :card="card" title="Performance By Category" v-for="(card, index) in hrmData.Category"
                :key="index">
                <template v-slot:cardHeader>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button"
                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1W</button>
                        <button type="button"
                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1M</button>
                        <button type="button"
                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">6M</button>
                        <button type="button"
                            class="btn btn-primary btn-sm btn-wave waves-effect waves-light">1Y</button>
                    </div>
                </template>
            </ChartCardComponent>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-12">
            <ChartCardComponent :card="card" title="Jobs Summary" :showCardFooter="true" cardFooterClass="p-2 my-2"
                chartId="hrm-jobs-summary" v-for="(card, index) in hrmData.SessionsByDevice" :key="index">
                <template v-slot:cardFooter>
                    <div class="row row-cols-sm-12 row-cols-sm-4 flex-wrap row-cols-2 gy-2 gx-0">
                        <div class="col p-0">
                            <div class="text-center">
                                <span
                                    class="text-muted fs-12 mb-1 hrm-jobs-legend published d-inline-block ms-2">Published</span>
                                <div><span class="fs-16 fw-semibold">1,754</span></div>
                            </div>
                        </div>
                        <div class="col p-0">
                            <div class="text-center">
                                <span
                                    class="text-muted fs-12 mb-1 hrm-jobs-legend private d-inline-block ms-2">Private</span>
                                <div><span class="fs-16 fw-semibold">544</span></div>
                            </div>
                        </div>
                        <div class="col p-0">
                            <div class="text-center">
                                <span
                                    class="text-muted fs-12 mb-1 hrm-jobs-legend closed d-inline-block ms-2">Closed</span>
                                <div><span class="fs-16 fw-semibold">682</span></div>
                            </div>
                        </div>
                        <div class="col p-0">
                            <div class="text-center">
                                <span class="text-muted fs-12 mb-1 hrm-jobs-legend onhold d-inline-block ms-2">On
                                    Hold</span>
                                <div><span class="fs-16 fw-semibold">263</span></div>
                            </div>
                        </div>
                    </div>
                </template>
            </ChartCardComponent>
        </div>
        <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-12">
            <ActivityCardComponent title="Upcoming Events" :card="hrmData.activities"
                ulClass="list-unstyled timeline-widget mb-0 my-3" liClass="timeline-widget-list" :showDropdown="true" />
        </div>
        <div class="col-xxl-5 col-xl-12">
            <SimpleCardComponent title="Clients" cardClassBody="p-0">
                <TableComponent :headers="['Client', 'Mail', 'Status', 'Action']" :rows="hrmData.Clients"
                    tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <td>
                        <div class="d-flex align-items-center lh-1">
                            <div class="me-3">
                                <span class="avatar avatar-rounded">
                                    <img :src="(row.avatar)" alt="">
                                </span>
                            </div>
                            <div>
                                <span class="d-block fw-semibold mb-1">{{ row.name }}</span>
                                <span class="d-block text-muted fs-12">{{ row.role }}</span>
                            </div>
                        </div>
                    </td>
                    <td>{{ row.email }}</td>
                    <td>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-outline-light btn-sm" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Active<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Active</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Inactive</a></li>
                            </ul>
                        </div>
                    </td>
                    <td>
                        <div class="btn-list">
                            <button aria-label="button" type="button"
                                class="btn btn-sm btn-primary-light me-2 btn-icon"><i
                                    class="ri-pencil-line"></i></button>
                            <button aria-label="button" type="button" class="btn btn-sm btn-success-light btn-icon"><i
                                    class="ri-delete-bin-line"></i></button>
                        </div>
                    </td>
                </TableComponent>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xl-12">
            <SimpleCardComponent title="Bills Summary" cardHeaderClass="justify-content-between" :showCardFooter="true">
                <template v-slot:showheader>
                    <div class="d-flex flex-wrap gap-2">
                        <div class="me-3">
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);"
                                class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false"> Sort By<i
                                    class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
                            </ul>
                        </div>
                    </div>
                </template>
                <TableComponent :headers="['S.No', 'Invoice ID', 'Client', 'Due Date', 'Status', 'Amount', 'Actions']"
                    :rows="hrmData.hrminvoices" tableClass="table table-hover text-nowrap table-bordered"
                    v-slot:cell="{ row }">
                    <td>{{ row.id }}</td>
                    <td>{{ row.invoiceNumber }}</td>
                    <td>
                        <div class="d-flex align-items-center lh-1">
                            <div class="me-2">
                                <span class="avatar avatar-md avatar-rounded">
                                    <img :src="(row.avatar)" alt="">
                                </span>
                            </div>
                            <div>
                                <span class="d-block fw-semibold mb-1">{{ row.name }}</span>
                                <span class="text-muted fs-12">{{ row.email }}</span>
                            </div>
                        </div>
                    </td>
                    <td>{{ row.date }}</td>
                    <td>
                        <span :class="`badge bg-${row.statusClass}`">{{ row.status }}</span>
                    </td>
                    <td>${{ row.amount }}</td>
                    <td>
                        <div class="btn-list">
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="btn btn-sm btn-icon btn-info-light me-2">
                                <i class="ri-pencil-line"></i>
                            </a>
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-danger-light" @click="deleteInvoice(row.id)">
                                <i class="ri-delete-bin-line"></i>
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
