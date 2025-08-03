<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import { joblist } from "../../../data/apps/jobs-list";
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        SimpleCardComponent
    },
    data() {
        return {
            joblist,
            dataToPass: {
                current: "Job List",
                list: [
                    'Apps', 'Jobs', 'Job List'
                ]
            },
            tableHeaders: ['<input class="form-check-input ms-4" type="checkbox" id="checkboxNoLabel1" aria-label="...">', 'Job Title', 'Company', 'Department', 'Applications', 'Vacancies', 'Status', 'Job Type', 'Posted Date', 'Expires on', 'Action']
        };
    },
    methods: {
        deleteLead(id) {
            const index = this.joblist.findIndex(job => job.id === id);

            if (index !== -1) {
                this.joblist.splice(index, 1);
            }
        }
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <SimpleCardComponent cardClassBody="p-0" title="All Jobs List" :showCardFooter="true"
                cardFooterClass="border-top-0" cardHeaderClass="justify-content-between"
                customCardClass="overflow-hidden">
                <template v-slot:showheader>
                    <div class="d-flex flex-wrap gap-2">
                        <router-link to="/apps/jobs/job-post" class="btn btn-primary btn-wave btn-sm">
                            <i class="ri-add-line me-1 align-middle"></i>Post Job
                        </router-link>
                        <div>
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-primary btn-sm btn-wave"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Posted Date</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Status</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Department</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Job Type</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Oldest</a></li>
                            </ul>
                        </div>
                    </div>
                </template>
                <TableComponent :headers="tableHeaders" :rows="joblist" tableClass="table table-hover text-nowrap"
                    v-slot:cell="{ row }">
                    <td><input class="form-check-input ms-4" type="checkbox" id="checkboxNoLabeljob22"
                            :checked="row.cheacked" value="" aria-label="..."></td>
                    <td>
                        <div class="d-flex">
                            <span v-html="row.svgIcon"
                                class="avatar avatar-md avatar-rounded bg-primary bg-opacity-10"></span>
                            <div class="ms-2">
                                <p class="fw-semibold mb-0 d-flex align-items-center"><router-link
                                        to="/apps/jobs/job-details"> {{
                                        row.title }}</router-link></p>
                                <p class="fs-12 text-muted mb-0">Remote/Onsite</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <span class="avatar avatar-sm p-1 me-1 bg-light avatar-rounded">
                                <img :src="(row.logo)" alt="">
                            </span>
                            <a href="javascript:void(0);" class="fw-semibold mb-0">{{ row.company }}</a>
                        </div>
                    </td>
                    <td>
                        {{ row.type }}
                    </td>
                    <td>{{ row.positions }}</td>
                    <td>{{ row.maxPositions }}</td>
                    <td><span :class="`badge rounded-pill bg-${row.badgeclass1}-transparent`">{{ row.status }}</span>
                    </td>
                    <td>{{ row.workType }}</td>
                    <td>
                        {{ row.posted }}
                    </td>
                    <td><span :class="`badge bg-${row.badgeclass2}-transparent`"><i class="bi bi-clock me-1"></i>{{
                            row.deadline
                            }}</span></td>
                    <td>
                        <router-link to="/apps/jobs/job-details"
                            class="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                            <i class="ri-eye-line"></i>
                        </router-link>
                        <a href="javascript:void(0);"
                            class="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                            <i class="ri-edit-line"></i>
                        </a>
                        <a href="javascript:void(0);"
                            class="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"
                            @click="deleteLead(row.id)">
                            <i class="ri-delete-bin-line"></i>
                        </a>
                    </td>
                </TableComponent>
                <template v-slot:cardFooter>
                    <div class="d-flex align-items-center flex-wrap overflow-auto">
                        <div class="mb-2 mb-sm-0">
                            Showing <b>1</b> to <b>10</b> of <b>10</b> entries <i
                                class="bi bi-arrow-right ms-2 fw-semibold"></i>
                        </div>
                        <div class="ms-auto">
                            <ul class="pagination mb-0 overflow-auto">
                                <li class="page-item disabled">
                                    <a class="page-link">Previous</a>
                                </li>
                                <li class="page-item active" aria-current="page"><a class="page-link"
                                        href="javascript:void(0);">1</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="javascript:void(0);">2</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0);">4</a></li>
                                <li class="page-item"><a class="page-link" href="javascript:void(0);">5</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="javascript:void(0);">Next</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
            </SimpleCardComponent>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
