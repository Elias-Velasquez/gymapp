<script lang="ts">
import PageHeader from '../../shared/components/pageheader/pageheader.vue';
import * as projectsData from '../../data/dashboards/projects';
import CrmdealCardComponent from "../../shared/components/@spk/dashboard/crm-deal-cards.vue";
import ChartCardComponent from "../../shared/components/@spk/dashboard/chart-cards.vue";
import BasicCardComponent from "../../shared/UI/basic-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        CrmdealCardComponent,
        ChartCardComponent,
        BasicCardComponent,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Projects",
                list: ['Dashboards', 'Projects']
            },
            projectsData: projectsData,
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-9">
            <div class="row">
                <div class="col-xxl-5">
                    <div class="row">
                        <div class="col-sm-6" v-for="card in projectsData.projects" :key="card.id">
                            <SimpleCardComponent cardClassBody="d-flex justify-content-between align-items-center"
                                :showCardHeader="false">
                                <div>
                                    <p class="mb-2">{{ card.text }}</p>
                                    <h4 class="mb-0 fw-semibold mb-2">{{ card.count }}</h4>
                                    <span :class="`badge bg-${card.color}-transparent`">{{ card.percentage }} <i
                                            :class="`ti ti-trending-${card.dir}`"></i></span><span
                                        class="text-muted fs-11 ms-1">this month</span>
                                </div>
                                <div>
                                    <span :class="`avatar avatar-md bg-${card.iconBg} p-2`">
                                        <i :class="`ti ti-${card.icon} fs-20 op-7`"></i>
                                    </span>
                                </div>
                            </SimpleCardComponent>
                        </div>
                        <div class="col-xl-12">
                            <ChartCardComponent :card="card" title="Project Analysis"
                                v-for="(card, index) in projectsData.ProjectAnalysis" :key="index"
                                customCardClass="overflow-hidden">
                                <template v-slot:cardHeader>
                                    <div class="dropdown"> <a href="javascript:void(0);"
                                            class="p-2 fs-12 text-muted show" data-bs-toggle="dropdown"
                                            aria-expanded="true"> View All
                                            <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </a>
                                        <ul class="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                                        </ul>
                                    </div>
                                </template>
                            </ChartCardComponent>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4">
                    <div class="row">
                        <div class="col-xl-12">
                            <SimpleCardComponent title="Team Members" cardHeaderClass="justify-content-between">
                                <template v-slot:showheader>
                                    <div class="dropdown">
                                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted show"
                                            data-bs-toggle="dropdown" aria-expanded="true"> View All
                                            <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </a>
                                        <ul class="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                                        </ul>
                                    </div>
                                </template>
                                <CrmdealCardComponent :card="projectsData.MainTasks"
                                    ulClass="list-unstyled team-members-card mb-0"
                                    dflexClass="align-items-center projects-teamcard justify-content-between" />
                            </SimpleCardComponent>
                        </div>
                        <div class="col-xl-12">
                            <SimpleCardComponent title="Main Tasks" cardHeaderClass="justify-content-between">
                                <template v-slot:showheader>
                                    <div class="dropdown">
                                        <a href="javascript:void(0);" class="p-2 fs-12 text-muted"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Today<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </a>
                                        <ul class="dropdown-menu" role="menu">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                                        </ul>
                                    </div>
                                </template>
                                <ul class="list-unstyled projects-maintask-card">
                                    <li v-for="(task, index) in projectsData.tasks" :key="index" :class="task.liclass">
                                        <div class="d-flex align-items-top">
                                            <div class="d-flex align-items-top flex-fill">
                                                <span class="me-3">
                                                    <input class="form-check-input" type="checkbox"
                                                        v-model="task.completed" :id="'checkboxNoLabel' + index"
                                                        value="" aria-label="...">
                                                </span>
                                                <div class="flex-fill">
                                                    <span>{{ task.name }}</span>
                                                    <span class="d-block mt-1">
                                                        <span :class="` ${task.avatarclass}`">
                                                            <span v-for="(avatar, idx) in task.avatars" :key="idx"
                                                                class="avatar avatar-xs avatar-rounded">
                                                                <img :src="avatar" alt="img">
                                                            </span>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <span :class="['badge', task.statusClass]">{{ task.status }}</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </SimpleCardComponent>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3">
                    <SimpleCardComponent title="Daily Tasks" cardHeaderClass="justify-content-between">
                        <template v-slot:showheader>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    View All<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                                </ul>
                            </div>
                        </template>
                        <ul class="list-unstyled daily-task-card">
                            <li v-for="(project, index) in projectsData.ColoredBorderCards" :key="index">
                                <BasicCardComponent
                                    :cardClass="`border  border-opacity-25 shadow-none custom-card mb-0  ${project.borderClass}`"
                                    v-slot:card>
                                    <div class="card-body">
                                        <p
                                            class="fs-14 fw-semibold mb-2 lh-1 d-flex align-items-center gap-2 justify-content-between">
                                            {{ project.title }}
                                            <a href="javascript:void(0);">
                                                <i
                                                    :class="['bi', 'bi-plus-square', 'float-end', project.iconColor, 'fs-18']"></i>
                                            </a>
                                        </p>
                                        <div class="d-flex flex-wrap gap-2 mb-4">
                                            <span v-for="(badge, i) in project.badges" :key="i"
                                                :class="['badge', badge.class]">
                                                {{ badge.text }}
                                            </span>
                                        </div>
                                        <div class="avatar-list-stacked">
                                            <span v-for="(avatar, i) in project.avatars" :key="i"
                                                class="avatar avatar-sm avatar-rounded">
                                                <img :src="avatar.img" :alt="'avatar-' + i">
                                            </span>
                                        </div>
                                    </div>
                                </BasicCardComponent>
                            </li>
                        </ul>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
        <div class="col-xxl-3">
            <div class="row">
                <div class="col-xxl-12">
                    <SimpleCardComponent :showCardHeader="false"
                        customCardClass="shadow-none projects-tracking-card overflow-hidden text-center">
                        <img src="/images/media/media-86.svg" alt="" class="mb-1">
                        <div>
                            <span class="fs-15 fw-semibold d-block mt-4 mb-3">Track your work progress here</span>
                            <button type="button" class="btn btn-primary btn-sm btn-wave">Track Here</button>
                        </div>
                        <span class="shape-1 text-primary"><i class="ti ti-circle fs-20 fw-bold"></i></span>
                        <span class="shape-2 text-secondary"><i class="ti ti-triangle fs-20 fw-bold"></i></span>
                        <span class="shape-3 text-warning"><i class="ti ti-square fs-20 fw-bold"></i></span>
                        <span class="shape-4 text-info"><i class="ti ti-square-rotated fs-20 fw-bold"></i></span>
                        <span class="shape-5 text-success"><i class="ti ti-pentagon fs-20 fw-bold"></i></span>
                        <span class="shape-6 text-danger"><i class="ti ti-star fs-20 fw-bold"></i></span>
                        <span class="shape-7 text-pink"><i class="ti ti-hexagon fs-20 fw-bold"></i></span>
                        <span class="shape-8 text-teal"><i class="ti ti-octagon fs-20 fw-bold"></i></span>
                        <span class="shape-9 text-primary"><i class="ti ti-circle fs-20 fw-bold"></i></span>
                        <span class="shape-10 text-secondary"><i class="ti ti-triangle fs-20 fw-bold"></i></span>
                        <span class="shape-11 text-warning"><i class="ti ti-square fs-20 fw-bold"></i></span>
                        <span class="shape-12 text-info"><i class="ti ti-square-rotated fs-20 fw-bold"></i></span>
                        <span class="shape-13 text-success"><i class="ti ti-pentagon fs-20 fw-bold"></i></span>
                        <span class="shape-14 text-danger"><i class="ti ti-star fs-20 fw-bold"></i></span>
                        <span class="shape-15 text-pink"><i class="ti ti-hexagon fs-20 fw-bold"></i></span>
                        <span class="shape-16 text-teal"><i class="ti ti-octagon fs-20 fw-bold"></i></span>
                    </SimpleCardComponent>
                </div>
                <div class="col-xxl-12">
                    <SimpleCardComponent title="Recent Transactions" cardHeaderClass="justify-content-between">
                        <template v-slot:showheader>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted show"
                                    data-bs-toggle="dropdown" aria-expanded="true"> View All
                                    <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu"
                                    style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 27px);"
                                    data-popper-placement="bottom-start">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                                </ul>
                            </div>
                        </template>
                        <CrmdealCardComponent :card="projectsData.RecentTransactions"
                            ulClass="list-unstyled project-transactions-card" />
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-3 -->
    <div class="row">
        <div class="col-xxl-12">
            <SimpleCardComponent title="Projects Summary" cardHeaderClass="justify-content-between"
                :showCardFooter="true">
                <template v-slot:showheader>
                    <div class="d-flex flex-wrap">
                        <div class="me-3 my-1">
                            <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                                aria-label=".form-control-sm example">
                        </div>
                        <div class="dropdown my-1">
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
                <TableComponent :headers="['S.No', 'Title', 'Assigned To', 'Tasks', 'Progress', 'Status', 'Due Date']"
                    :rows="projectsData.projectsSummary" tableClass="table table-hover text-nowrap table-bordered"
                    v-slot:cell="{ row }">
                    <th>
                        {{ row.id }}
                    </th>
                    <td>
                        {{ row.name }}
                    </td>
                    <td>
                        <div class="avatar-list-stacked">
                            <span v-for="(avatar, idx) in row.assignees" :key="idx"
                                class="avatar avatar-xs avatar-rounded">
                                <img :src="avatar.img" alt="img">
                            </span>
                            <a v-if="row.extraAssignees > 0"
                                class="avatar avatar-xs bg-primary avatar-rounded text-fixed-white"
                                href="javascript:void(0);">
                                +{{ row.extraAssignees }}
                            </a>
                        </div>
                    </td>
                    <td>{{ row.task }}</td>
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="progress progress-animate progress-xs w-100" role="progressbar"
                                :aria-valuenow="row.progress" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                    :style="{ width: row.progress + '%' }"></div>
                            </div>
                            <div class="ms-2">{{ row.progress }}%</div>
                        </div>
                    </td>
                    <td>
                        <span class="badge" :class="row.statusClass">{{ row.status }}</span>
                    </td>
                    <td>
                        {{ row.lastUpdated }}
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
