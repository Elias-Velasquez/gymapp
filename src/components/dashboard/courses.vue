<script lang="ts">
import PageHeader from '../../shared/components/pageheader/pageheader.vue';
import * as coursesData from '../../data/dashboards/courses';
import CrmdealCardComponent from "../../shared/components/@spk/dashboard/crm-deal-cards.vue";
import ChartCardComponent from "../../shared/components/@spk/dashboard/chart-cards.vue";
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
                current: "Courses",
                list: ['Dashboards', 'Courses']
            },
            coursesData: coursesData,
        };
    },
    methods: {
        deleteInvoice(invoiceId: number) {
            const index = this.courses.findIndex(invoice => invoice.id === invoiceId);

            if (index !== -1) {
                this.courses.splice(index, 1);
            }
        }
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-7 col-xl-7 col-lg-12">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Top Categories" cardHeaderClass="justify-content-between">
                        <template v-slot:showheader>
                            <div>
                                <button type="button" class="btn btn-light btn-wave btn-sm">View All</button>
                            </div>
                        </template>
                        <div class="row gy-xxl-0 gy-3">
                            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12"
                                v-for="card in coursesData.TopCategories" :key="card.id">
                                <div>
                                    <a href="javascript:void(0);" :class="`category-link ${card.color} text-center`">
                                        <span v-html="card.icon"></span>
                                        <p class="fs-14 mb-1 text-default fw-semibold">{{ card.title }}</p>
                                        <span class="fs-11 text-muted">{{ card.courses }}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <ChartCardComponent :card="card" title="Earnings Report"
                        v-for="(card, index) in coursesData.EarningsReport" :key="index">
                        <template v-slot:cardHeader>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button"
                                    class="btn btn-primary btn-sm btn-wave waves-effect waves-light">1M</button>
                                <button type="button"
                                    class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">6M</button>
                                <button type="button"
                                    class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1Y</button>
                                <button type="button"
                                    class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">All</button>
                            </div>
                        </template>
                    </ChartCardComponent>
                </div>
            </div>
        </div>
        <div class="col-xxl-5 col-xl-5 col-lg-12">
            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12" v-for="card in coursesData.course"
                    :key="card.id">
                    <SimpleCardComponent :showCardHeader=false>
                        <div class="d-flex flex-wrap align-items-top gap-2">
                            <div class="me-1">
                                <span :class="`avatar avatar-lg bg-${card.color}`">
                                    <i :class="`ti ti-${card.icon} fs-20`"></i>
                                </span>
                            </div>
                            <div class="flex-fill">
                                <h5 class="d-block fw-semibold fs-18 mb-1">{{ card.count }}</h5>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="text-muted fs-12">{{ card.name }}</div>
                                    <div :class="`text-${card.percentageColor}`">
                                        <i
                                            :class="`ti ti-trending-${card.percentageIcon} fs-16 me-1 align-middle d-inline-flex`"></i>{{
                                                card.percentage }}
                                    </div>
                                </div>
                                <a href="javascript:void(0);" :class="`text-${card.color} fs-12`">View All<i
                                        class="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block"></i></a>
                            </div>
                        </div>
                    </SimpleCardComponent>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="My Courses" cardHeaderClass="justify-content-between"
                        customCardClass="overflow-hidden" cardClassBody="p-0">
                        <template v-slot:showheader>
                            <div>
                                <button type="button" class="btn btn-light btn-sm">View All</button>
                            </div>
                        </template>
                        <TableComponent :headers="['Course Title', 'Status', 'Duration', 'Type', 'Instructor']"
                            :rows="coursesData.myCourses" tableClass="table text-nowrap" v-slot:cell="{ row }">
                            <td>
                                <div>
                                    <div>
                                        {{ row.course }}
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="progress progress-xs course-status-progress progress-animate me-2"
                                        role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                        <div :class="`progress-bar progress-bar-striped bg-${row.color}`"
                                            :style="`width: ${row.progress}%`"></div>
                                    </div>
                                    <div>{{ row.progress }}%</div>
                                </div>
                            </td>
                            <td>{{ row.duration }}</td>
                            <td><span :class="`badge bg-outline-${row.color} `">{{ row.status }}</span></td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <span class="avatar avatar-sm avatar-rounded">
                                            <img :src="(row.avatar)" alt="">
                                        </span>
                                    </div>
                                    <div class="fw-semibold">{{ row.name }}</div>
                                </div>
                            </td>
                        </TableComponent>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xl-3">
            <SimpleCardComponent title="Top Instructors" cardHeaderClass="justify-content-between">
                <CrmdealCardComponent :card="coursesData.TopInstructors"
                    ulClass="list-unstyled courses-instructors mb-0" dflexClass="align-items-center" />
            </SimpleCardComponent>
        </div>
        <div class="col-xl-5">
            <SimpleCardComponent title="New Students" cardHeaderClass="justify-content-between"
                customCardClass="overflow-hidden" cardClassBody="p-0">
                <template v-slot:showheader>
                    <div> <button type="button" class="btn btn-sm btn-light">View All</button> </div>
                </template>
                <TableComponent :headers="['Name', 'Courses', 'Completed', 'Action']" :rows="coursesData.newStudents"
                    tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <th scope="row">
                        <div class="d-flex align-items-center">
                            <div class="me-2">
                                <span class="avatar avatar-rounded">
                                    <img :src="(row.avatar)" alt="">
                                </span>
                            </div>
                            <div>
                                <span class="d-blockfw-semibold">{{ row.name }}</span>
                                <span class="d-block fs-12 text-muted">{{ row.email }}</span>
                            </div>
                        </div>
                    </th>
                    <td class="">{{ row.items }}</td>
                    <td class="">{{ row.orders }}</td>
                    <td>
                        <div class="hstack gap-2 fs-15">
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-info-transparent rounded-pill">
                                <i class="ri-edit-line"></i>
                            </a>
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-danger-transparent rounded-pill">
                                <i class="ri-delete-bin-line"></i>
                            </a>
                        </div>
                    </td>
                </TableComponent>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <ChartCardComponent :card="card" title="Payouts" v-for="(card, index) in coursesData.payouts" :key="index">
                <template v-slot:cardHeader>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button"
                            class="btn btn-primary btn-sm btn-wave waves-effect waves-light">1M</button>
                        <button type="button"
                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">6M</button>
                        <button type="button"
                            class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1Y</button>
                    </div>
                </template>
            </ChartCardComponent>
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xl-12">
            <SimpleCardComponent title=" Course List " cardHeaderClass="justify-content-between" :showCardFooter="true">
                <template v-slot:showheader>
                    <div class="d-flex flex-wrap">
                        <div class="me-3 my-1">
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown m-1">
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
                <TableComponent
                    :headers="['S.No', 'Course', 'Category', 'Classes', 'Last Updated', 'Instructor', 'Students', 'Actions']"
                    :rows="coursesData.courses" tableClass="table text-nowrap table-bordered" v-slot:cell="{ row }">
                    <td>
                        {{ row.id }}
                    </td>
                    <td>
                        <div class="d-flex align-items-center lh-1">
                            <div class="me-2">
                                <span class="avatar avatar-xs">
                                    <img :src="(row.image)" alt="">
                                </span>
                            </div>
                            <div>{{ row.name }}</div>
                        </div>
                    </td>
                    <td>
                        {{ row.category }}
                    </td>
                    <td>
                        {{ row.students }}
                    </td>
                    <td>
                        {{ row.date }}
                    </td>
                    <td>
                        {{ row.instructor }}
                    </td>
                    <td>
                        {{ row.revenue }}
                    </td>
                    <td>
                        <div class="hstack gap-2 fs-1">
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light">
                                <i class="ri-edit-line"></i>
                            </a>
                            <a aria-label="anchor" href="javascript:void(0);"
                                class="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                <i class="ri-delete-bin-line"></i>
                            </a>
                        </div>
                    </td>

                </TableComponent>
                <template v-slot:cardFooter>
                    <div class="d-flex flex-wrap align-items-center">
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
