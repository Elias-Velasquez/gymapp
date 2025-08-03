<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import { VueDraggableNext } from 'vue-draggable-next';
import { KanbanBoard, KanbanBoard1, KanbanBoard2, KanbanBoard3, KanbanBoard4 } from "../../data/kanban";
import kanbanCardComponent from "../../shared/components/@spk/task/kanban-board-cards.vue";
import { ref } from "vue";

export default {
    setup() {
        const picked = ref(new Date()); return { picked }
    },
    components: {
        PageHeader,
        draggable: VueDraggableNext,
        kanbanCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Kanban Board",
                list: [
                    'Task', 'Kanban Board'
                ]
            },
            sortByValue: null,
            sortByOptions: ['Newest', 'Date Added', 'Type', 'A - Z'],

            assignToValue: null,
            assignToOptions: ['Angelina May', 'Kiara advain', 'Hercules Jhon', 'Mayor Kim'],

            tagsValue: null,
            tagsOptions: ['Admin', 'Authentication', 'Designing', 'Development', 'Finance', 'Marketing', 'Product', 'UI/UX'],
            KanbanBoard,
            KanbanBoard1,
            KanbanBoard2,
            KanbanBoard3,
            KanbanBoard4,
        };
    },
    methods: {
        onDragStart(event) { },
        onDragEnd(event) { }
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body p-3">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div class="row kanban-board">
                            <div class="col-xl-5">
                                <button class="btn btn-primary me-2" data-bs-toggle="modal"
                                    data-bs-target="#add-board"><i
                                        class="ri-add-line me-1 fw-semibold align-middle"></i>New Board</button>
                            </div>
                            <div class="col-xl-7 mt-2 my-xxl-0">
                                <multiselect1 :show-labels="false" v-model="sortByValue" :options="sortByOptions"
                                    name="choices-single-default" placeholder="Sort By" :multiple="false">
                                </multiselect1>
                            </div>
                        </div>
                        <div class="avatar-list-stacked">
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/2.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/8.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/2.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/10.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/4.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-rounded">
                                <img src="/images/faces/13.jpg" alt="img">
                            </span>
                            <a class="avatar bg-primary avatar-rounded text-fixed-white" href="javascript:void(0);">
                                +8
                            </a>
                        </div>
                        <div class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-light" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start::row-2 -->
    <div class="ynex-kanban-board">
        <div class="kanban-tasks-type new">
            <div class="pe-3 mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="d-block fw-semibold fs-15">NEW - 04</span>
                    <div>
                        <a aria-label="anchor" href="javascript:void(0)"
                            class="btn btn-sm bg-white text-default border-0 btn-wave" data-bs-toggle="modal"
                            data-bs-target="#add-task">
                            <i class="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                        </a>
                    </div>
                </div>
            </div>
            <PerfectScrollbar class="kanban-tasks" id="new-tasks">
                <div id="new-tasks-draggable" data-view-btn="new-tasks" class="task-Null"
                    v-if="KanbanBoard.length === 0"></div>
                <draggable group="people" itemKey="name" id="new-tasks-draggable" data-view-btn="new-tasks"
                    v-model="KanbanBoard" @start="onDragStart" @end="onDragEnd">
                    <kanbanCardComponent v-for="(card, index) in KanbanBoard" :key="index" cardBodyClass="p-0"
                        kanbanHeadClass="p-3 kanban-board-head" :showIcon="false" :card="card" />
                </draggable>
            </PerfectScrollbar>
            <div class="d-grid view-more-button mt-3" v-if="KanbanBoard.length">
                <button class="btn btn-primary-light btn-wave">View More</button>
            </div>
        </div>
        <div class="kanban-tasks-type todo">
            <div class="pe-3 mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="d-block fw-semibold fs-15">TODO - 36</span>
                    <div>
                        <a aria-label="anchor" href="javascript:void(0)"
                            class="btn btn-sm bg-white text-default border-0 btn-wave" data-bs-toggle="modal"
                            data-bs-target="#add-task">
                            <i class="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                        </a>
                    </div>
                </div>
            </div>
            <PerfectScrollbar class="kanban-tasks" id="todo-tasks">
                <div id="todo-tasks-draggable" data-view-btn="todo-tasks" class="task-Null"
                    v-if="KanbanBoard1.length === 0"></div>
                <draggable group="people" itemKey="name" id="todo-tasks-draggable" data-view-btn="todo-tasks"
                    v-model="KanbanBoard1" @start="onDragStart" @end="onDragEnd">
                    <kanbanCardComponent v-for="(card, index) in KanbanBoard1" :key="index" cardBodyClass="p-0"
                        kanbanHeadClass="p-3 kanban-board-head" :showIcon="false" :card="card" />
                </draggable>
            </PerfectScrollbar>
            <div class="d-grid view-more-button mt-3" v-if="KanbanBoard1.length">
                <button class="btn btn-primary-light btn-wave">View More</button>
            </div>
        </div>
        <div class="kanban-tasks-type in-progress">
            <div class="pe-3 mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="d-block fw-semibold fs-15">ON GOING - 25</span>
                    <div>
                        <a aria-label="anchor" href="javascript:void(0)"
                            class="btn btn-sm bg-white text-default border-0 btn-wave" data-bs-toggle="modal"
                            data-bs-target="#add-task">
                            <i class="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                        </a>
                    </div>
                </div>
            </div>
            <PerfectScrollbar class="kanban-tasks" id="inprogress-tasks">
                <div id="inprogress-tasks-draggable" data-view-btn="inprogress-tasks" class="task-Null"
                    v-if="KanbanBoard2.length === 0"></div>
                <draggable group="people" itemKey="name" id="inprogress-tasks-draggable"
                    data-view-btn="inprogress-tasks" v-model="KanbanBoard2" @start="onDragStart" @end="onDragEnd">
                    <kanbanCardComponent v-for="(card, index) in KanbanBoard2" :key="index" cardBodyClass="p-0"
                        kanbanHeadClass="p-3 kanban-board-head" :showIcon="false" :card="card" />
                </draggable>
            </PerfectScrollbar>
            <div class="d-grid view-more-button mt-3" v-if="KanbanBoard2.length">
                <button class="btn btn-primary-light btn-wave">View More</button>
            </div>
        </div>
        <div class="kanban-tasks-type inreview">
            <div class="pe-3 mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="d-block fw-semibold fs-15">IN REVIEW - 02</span>
                    <div>
                        <a aria-label="anchor" href="javascript:void(0)"
                            class="btn btn-sm bg-white text-default border-0 btn-wave" data-bs-toggle="modal"
                            data-bs-target="#add-task">
                            <i class="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                        </a>
                    </div>
                </div>
            </div>
            <PerfectScrollbar class="kanban-tasks" id="inreview-tasks">
                <div id="inreview-tasks-draggable" data-view-btn="inreview-tasks" class="task-Null"
                    v-if="KanbanBoard3.length === 0"></div>
                <draggable group="people" itemKey="name" id="inreview-tasks-draggable" data-view-btn="inreview-tasks"
                    v-model="KanbanBoard3" @start="onDragStart" @end="onDragEnd">
                    <kanbanCardComponent v-for="(card, index) in KanbanBoard3" :key="index" cardBodyClass="p-0"
                        kanbanHeadClass="p-3 kanban-board-head" :showIcon="false" :card="card" />
                </draggable>
            </PerfectScrollbar>
            <div class="d-grid view-more-button mt-3" v-if="KanbanBoard3.length">
                <button class="btn btn-primary-light btn-wave">View More</button>
            </div>
        </div>
        <div class="kanban-tasks-type completed">
            <div class="pe-3 mb-3">
                <div class="d-flex justify-content-between align-items-center">
                    <span class="d-block fw-semibold fs-15">COMPLETED - 36</span>
                    <div>
                        <a aria-label="anchor" href="javascript:void(0)"
                            class="btn btn-sm bg-white text-default border-0 btn-wave" data-bs-toggle="modal"
                            data-bs-target="#add-task">
                            <i class="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                        </a>
                    </div>
                </div>
            </div>
            <PerfectScrollbar class="kanban-tasks" id="completed-tasks">
                <div id="completed-tasks-draggable" data-view-btn="completed-tasks" class="task-Null"
                    v-if="KanbanBoard4.length === 0"></div>
                <draggable group="people" itemKey="name" id="completed-tasks-draggable" data-view-btn="completed-tasks"
                    v-model="KanbanBoard4" @start="onDragStart" @end="onDragEnd">
                    <kanbanCardComponent v-for="(card, index) in KanbanBoard4" :key="index" cardBodyClass="p-0"
                        kanbanHeadClass="p-3 kanban-board-head" :showIcon="false" :card="card" />
                </draggable>
            </PerfectScrollbar>
            <div class="d-grid view-more-button mt-3" v-if="KanbanBoard4.length">
                <button class="btn btn-primary-light btn-wave">View More</button>
            </div>
        </div>
    </div>
    <!--End::row-2 -->

    <!-- Start::add board modal -->
    <div class="modal fade" id="add-board" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">Add Board</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row">
                        <div class="col-xl-12">
                            <label for="board-title" class="form-label">Task Board Title</label>
                            <input type="text" class="form-control" id="board-title" placeholder="Board Title">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Add Board</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End::add board modal -->

    <!-- Start::add task modal -->
    <div class="modal fade" id="add-task" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">Add Task</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row gy-2">
                        <div class="col-xl-6">
                            <label for="task-name" class="form-label">Task Name</label>
                            <input type="text" class="form-control" id="task-name" placeholder="Task Name">
                        </div>
                        <div class="col-xl-6">
                            <label for="task-id" class="form-label">Task ID</label>
                            <input type="text" class="form-control" id="task-id" placeholder="Task ID">
                        </div>
                        <div class="col-xl-12">
                            <label for="text-area" class="form-label">Task Description</label>
                            <textarea class="form-control" id="text-area" rows="2"
                                placeholder="Write Description"></textarea>
                        </div>
                        <div class="col-xl-12">
                            <label for="text-area" class="form-label">Task Images</label>
                            <DropZone :maxFiles="4" class="multiple-filepond" :uploadOnDrop="true"
                                :multipleUpload="true" :parallelUpload="3" />
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Assigned To</label>
                            <multiselect1 :show-labels="false" v-model="assignToValue" :multiple="true"
                                :options="assignToOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Target Date</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <Datepicker1 placeholder="Date Time" class="datepicker-here" autoApply
                                        v-model="picked" time-picker-inline>
                                        <template #input-icon>
                                            <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i>
                                            </div>
                                        </template>
                                    </Datepicker1>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Tags</label>
                            <multiselect1 :show-labels="false" v-model="tagsValue" :multiple="true"
                                :options="tagsOptions">
                            </multiselect1>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Add Task</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End::add task modal -->
</template>

<style scoped></style>
