<script lang="ts">
import { ref } from "vue";
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import TodolistCardComponent from "../../shared/components/@spk/pages/toDoList-cards.vue"
import face13 from "/images/faces/13.jpg";
import face6 from "/images/faces/6.jpg";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face3 from "/images/faces/3.jpg";
import face1 from "/images/faces/1.jpg";
import face10 from "/images/faces/10.jpg";
import face14 from "/images/faces/14.jpg";
import face12 from "/images/faces/12.jpg";
import face11 from "/images/faces/11.jpg";
import face2 from "/images/faces/2.jpg";
import face8 from "/images/faces/8.jpg";
import face16 from "/images/faces/16.jpg";
import face9 from "/images/faces/9.jpg";
import face21 from "/images/faces/21.jpg";

export default {
    components: {
        PageHeader,
        TodolistCardComponent,
    },
    data() {
        return {
            dataToPass: {
                current: "To Do List",
                list: ['Pages', 'To Do List']
            },
            priorityOptions: ['Low', 'Medium', 'High', 'Critical'],
            assignedToSelect: null,
            prioritySelect: null,
            toDoList: [
                { id: 1, color: "task-pending-card", iconColor: "muted", title: "New Project Blueprint", assignedDate: "13,Nov 2022", targetDate: "30,Nov 2022", priority: "High", priorityColor: "warning", status: "pending", assignedTo: [{ img: face2 }, { img: face8 }, { img: face2 }, { img: face10 }] },
                { id: 2, color: "task-inprogress-card", iconColor: "warning", title: "Design New Landing Pages", assignedDate: "21,Nov 2022", targetDate: "28,Nov 2022", priority: "Medium", priorityColor: "primary", status: "inprogress", assignedTo: [{ img: face1 }, { img: face5 }, { img: face12 }] },
                { id: 3, color: "task-pending-card", iconColor: "warning", title: "Updating Old Ui", assignedDate: "30,Nov 2022", targetDate: "05,Dec 2022", priority: "High", priorityColor: "warning", status: "pending", assignedTo: [{ img: face14 }, { img: face13 }, { img: face21 }, { img: face16 }] },
                { id: 4, color: "task-inprogress-card", iconColor: "warning", title: "Designing New Authentication Pages", assignedDate: " 26,Nov 2022", targetDate: "05,Dec 2022", priority: "Low", priorityColor: "success", status: "inprogress", assignedTo: [{ img: face6 }, { img: face15 }] },
                { id: 5, color: "task-completed-card", iconColor: "muted", title: "New Plugin Development", assignedDate: "28,Oct 2022", targetDate: " 12,Dec 2022", priority: "Low", priorityColor: "success", status: "completed", assignedTo: [{ img: face3 }, { img: face8 }, { img: face9 }] },
                { id: 8, color: "task-completed-card", iconColor: "muted", title: "Documentation For New Template", assignedDate: "25,Nov 2022", targetDate: "10,Dec 2022", priority: "Critical", priorityColor: "danger", status: "completed", assignedTo: [{ img: face8 }, { img: face10 }, { img: face11 }] },
                { id: 7, color: "task-completed-card", iconColor: "muted", title: "Developing New Events in Plugin", assignedDate: "5,Dec 2022", targetDate: "15,Dec 2022", priority: "Medium", priorityColor: "primary", status: "completed", assignedTo: [{ img: face5 }, { img: face8 }, { img: face11 }] },
                { id: 6, color: "task-completed-card", iconColor: "muted", title: "Designing Of New Ecommerce Pages", assignedDate: "1,Dec 2022", targetDate: "28,Nov 2022", priority: "Low", priorityColor: "success", status: "completed", assignedTo: [{ img: face1 }, { img: face3 }, { img: face6 }] },
                { id: 9, color: "task-inprogress-card", iconColor: "warning", title: "Improving Ui Of Updated Templates", assignedDate: "4,Dec 2022", targetDate: "20,Dec 2022", priority: "Medium", priorityColor: "primary", status: "inprogress", assignedTo: [{ img: face9 }, { img: face13 },] },
            ],
            tagValue: [
                { name: 'Angelina May', code: 'Angelina May' }
            ],
            tagOptions: [
                { name: 'Vue.js', code: 'vu' },
                { name: 'Kiara advain', code: 'Kiara advain' },
                { name: 'Hercules Jhon', code: 'Hercules Jhon' },
                { name: 'Mayor Kim', code: 'Mayor Kim' }
            ],
        };
    },
    setup() {
        const picked = ref(null);
        const picked1 = ref(null);
        return { picked, picked1 }
    },
    computed: {
        filteredPendingData() {
            return this.toDoList.filter(item => item.status === "pending");
        },
        filteredInProgressData() {
            return this.toDoList.filter(item => item.status === "inprogress");
        },
        filteredCompletedData() {
            return this.toDoList.filter(item => item.status === "completed");
        },
    },
    methods: {
        nameWithLang({ name, language }: any) {
            return `${name} — [${language}]`
        },
        addTag(newTag: string) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.tagOptions.push(tag)
            this.tagValue.push(tag)
        },
        customLabel({ title, desc }) {
            return `${title} – ${desc}`
        }
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-body p-0">
                    <div class="p-3 d-grid border-bottom border-block-end-dashed">
                        <button class="btn btn-primary d-flex align-items-center justify-content-center"
                            data-bs-toggle="modal" data-bs-target="#addtask">
                            <i class="ri-add-circle-line fs-16 align-middle me-1"></i>Create New Task
                        </button>
                        <div class="modal fade" id="addtask" tabindex="-1">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h6 class="modal-title" id="mail-ComposeLabel">Create Task</h6>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body px-4">
                                        <div class="row gy-2">
                                            <div class="col-xl-12">
                                                <label for="task-name" class="form-label">Task Name</label>
                                                <input type="text" class="form-control" id="task-name"
                                                    placeholder="Task Name">
                                            </div>
                                            <div class="col-xl-12">
                                                <label class="form-label">Assigned To</label>

                                                <multiselect1 :show-labels="false" v-model="tagValue"
                                                    tag-placeholder="Add this as new tag"
                                                    placeholder="Search or add a tag" label="name" track-by="code"
                                                    :options="tagOptions" :multiple="true" :taggable="true"
                                                    @tag="addTag"></multiselect1>
                                            </div>
                                            <div class="col-xl-6">
                                                <label class="form-label">Assigned Date</label>
                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <Datepicker1 placeholder="Choose date" v-model="picked" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-6">
                                                <label class="form-label">Target Date</label>
                                                <div class="form-group">
                                                    <div class="input-group">
                                                        <Datepicker1 placeholder="Choose date" v-model="picked1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-xl-12">
                                                <label class="form-label">Priority</label>
                                                <multiselect1 :show-labels="false" :options="priorityOptions"
                                                    :multiple="false" v-model="prioritySelect">
                                                </multiselect1>
                                                <!-- <multiselect1 :options="priorityOptions" :multiple="false"
                                                    v-model="prioritySelect">
                                                </multiselect1> -->
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-light"
                                            data-bs-dismiss="modal">Cancel</button>
                                        <button type="button" class="btn btn-primary">Create</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 border-bottom border-block-end-dashed">
                        <div class="input-group">
                            <input type="text" class="form-control bg-light border-0" placeholder="Search Task Here"
                                aria-describedby="button-addon2">
                            <button class="btn btn-light" type="button" id="button-addon2"><i
                                    class="ri-search-line text-muted"></i></button>
                        </div>
                    </div>
                    <div class="p-3 task-navigation border-bottom border-block-end-dashed">
                        <ul class="list-unstyled task-main-nav mb-0">
                            <li class="px-0 pt-0">
                                <span class="fs-11 text-muted op-7 fw-semibold">TASKS</span>
                            </li>
                            <li class="active">
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-task-line align-middle fs-14"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            All Tasks
                                        </span>
                                        <span class="badge bg-success-transparent rounded-pill">167</span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-star-line align-middle fs-14"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Starred
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-delete-bin-5-line align-middle fs-14"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Trash
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li class="px-0 pt-2">
                                <span class="fs-11 text-muted op-7 fw-semibold">CATEGORIES</span>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i
                                                class="ri-price-tag-line align-middle fs-14 fw-semibold text-primary"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Personal
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i
                                                class="ri-price-tag-line align-middle fs-14 fw-semibold text-secondary"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Work
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i
                                                class="ri-price-tag-line align-middle fs-14 fw-semibold text-warning"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Health & Fitness
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i
                                                class="ri-price-tag-line align-middle fs-14 fw-semibold text-success"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Daily Goals
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0);">
                                    <div class="d-flex align-items-center">
                                        <span class="me-2 lh-1">
                                            <i class="ri-price-tag-line align-middle fs-14 fw-semibold text-danger"></i>
                                        </span>
                                        <span class="flex-fill text-nowrap">
                                            Financial Management
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="p-3 text-center">
                        <img src="/images/media/media-66.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-9">
            <div class="row">
                <div class="col-xl-12">
                    <div class="card custom-card">
                        <div class="card-body p-0">
                            <div class="d-flex p-3 align-items-center justify-content-between">
                                <div>
                                    <h6 class="fw-semibold mb-0">Tasks</h6>
                                </div>
                                <div>
                                    <ul class="nav nav-tabs nav-tabs-header mb-0 d-sm-flex d-block" role="tablist">
                                        <li class="nav-item m-1">
                                            <a class="nav-link active" data-bs-toggle="tab" role="tab"
                                                aria-current="page" href="#all-tasks" aria-selected="true">All Tasks</a>
                                        </li>
                                        <li class="nav-item m-1">
                                            <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#pending" aria-selected="true">Pending</a>
                                        </li>
                                        <li class="nav-item m-1">
                                            <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#in-progress" aria-selected="true">In Progress</a>
                                        </li>
                                        <li class="nav-item m-1">
                                            <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                                href="#completed" aria-selected="true">Completed</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div class="dropdown">
                                        <button class="btn btn-icon btn-sm btn-light btn-wave waves-light waves-effect"
                                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="ti ti-dots-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Select All</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Share All</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Delete All</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-content task-tabs-container">
                    <div class="tab-pane show active p-0" id="all-tasks" role="tabpanel">
                        <div class="row" id="tasks-container">
                            <div class="col-xl-4 task-card" v-for="card in toDoList" :key="card.id">
                                <TodolistCardComponent :card="card" />
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane p-0" id="pending" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-4" v-for="card in filteredPendingData" :key="card.id">
                                <TodolistCardComponent :card="card"></TodolistCardComponent>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane p-0" id="in-progress" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-4" v-for="card in filteredInProgressData" :key="card.id">
                                <TodolistCardComponent :card="card"></TodolistCardComponent>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane p-0" id="completed" role="tabpanel">
                        <div class="row">
                            <div class="col-xl-4" v-for="card in filteredCompletedData" :key="card.id">
                                <TodolistCardComponent :card="card"></TodolistCardComponent>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                    <a class="page-link">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="javascript:void(0);">Next</a>
                </li>
            </ul>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
