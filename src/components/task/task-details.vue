<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import Activities from "../../shared/components/@spk/activities.vue";
import media39 from "/images/media/media-39.jpg";
import media17 from "/images/media/media-17.jpg";
import media18 from "/images/media/media-18.jpg";
import media75 from "/images/media/media-75.jpg";
import media59 from "/images/media/media-59.jpg";
import media61 from "/images/media/media-61.jpg";
import face2 from "/images/faces/2.jpg";
import face3 from "/images/faces/3.jpg";
import face8 from "/images/faces/8.jpg";
import face10 from "/images/faces/10.jpg";
import face4 from "/images/faces/4.jpg";
import face11 from "/images/faces/11.jpg";
import filemanager1 from '/images/media/file-manager/1.png';
import filemanager3 from '/images/media/file-manager/3.png';
import media26 from '/images/media/media-26.jpg';
import media29 from '/images/media/media-29.jpg';

export default {
    components: {
        PageHeader, Activities
    },
    data() {
        return {
            dataToPass: {
                current: "Task Details",
                list: [
                    'Task', 'Task Details'
                ]
            },
            activitys: [
                { id: 1, avatar: "E", img: "", avatarColor: 'primary', description: "<p class='mb-2'> <b>You</b> Commented on <b>Work Process</b> in this task <a class='text-secondary' href='javascript:void(0);'><u>#New Task</u></a>.<span class='float-end fs-11 text-muted'>24,Dec 2023 - 14:34</span> </p> <p class='text-muted mb-0'> Task is important and need to be completed on time to meet company work flow. </p>", media: [], avatarList: [] },
                { id: 2, avatar: "", img: face11, description: "<p class='text-muted mb-2'><span class='text-default'><b>Json Smith</b> reacted to the task &#128077;</span>.<span class='float-end fs-11 text-muted'>18,Dec 2022 - 12:16</span></p><p class='text-muted mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!</p>", media: [], avatarList: [] },
                { id: 3, avatar: "", img: face4, description: "<p class='text-muted mb-2'><span class='text-default'><b>Alicia Keys</b> shared a document with <b>you</b></span>.<span class='float-end fs-11 text-muted'>21,Dec 2022 - 15:32</span></p>", media: [{ img: filemanager3, name: filemanager3 }], avatarList: [] },
                { id: 4, avatar: "P", avatarColor: 'success', img: "", description: "<p class='text-muted mb-2'><span class='text-default'><b>You</b> shared a post with 4 people <b>Simon,Sasha,Anagha,Hishen</b></span>.<span class='float-end fs-11 text-muted'>28,Dec 2022 - 18:46</span></p>", media: [{ img: media18, name: media18 }], avatarList: [{ img: face2, name: face2 }, { img: face8, name: face8 }, { img: face3, name: face3 }, { img: face10, name: face10 }] },
                { id: 5, avatar: "", img: media39, description: "<p class='mb-1'> <b>Json</b> Commented on Task post <a class='text-secondary' href='javascript:void(0);''><u>#UI Technologies</u></a>.<span class='float-end fs-11 text-muted'>24,Dec 2023 - 14:34</span> </p><p class='text-muted'>Technology id developing rapidly keep up your work 👌</p>", media: [{ img: media26, name: media26 }, { img: media29, name: media29 },], classimg: "me-2", avatarList: [] },

            ],
            subTasks: [
                { id: 1, name: "successChecked1", title: "Conduct Website Design Analysis", checked: true },
                { id: 2, name: "successChecked2", title: "Collaborate with UI/UX Team", checked: false },
                { id: 3, name: "successChecked3", title: "Refine Design Iteratively", checked: false },
                { id: 4, name: "successChecked4", title: "Implement Design Changes", checked: false },
                { id: 5, name: "successChecked5", title: "Test Responsive and Cross-Browser Compatibility", checked: true },
                { id: 6, name: "successChecked6", title: "Review and Polish Design Elements", checked: true },
                { id: 7, name: "successChecked77", title: "Incorporate Branding Elements", checked: true },
                { id: 8, name: "successChecked7", title: "Documentation and Handover", checked: false },
            ],
            attachments: [
                { id: 1, img: filemanager1, title: "Full Project", size: "0.45MB", imgClass: "p-2" },
                { id: 2, img: filemanager3, title: "assets.zip", size: "0.99MB", imgClass: "" },
                { id: 3, img: filemanager1, title: "image-1.png", size: "245KB", imgClass: "p-2" },
                { id: 4, img: filemanager3, title: "documentation.zip", size: "2MB", imgClass: "" },
                { id: 5, img: filemanager3, title: "landing.zip", size: "3.46MB", imgClass: "" },
            ]
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-9">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">Task Summary</div>
                    <div class="btn-list">
                        <button class="btn btn-success btn-sm btn-wave me-0"><i
                                class="ri-edit-line me-1 align-middle"></i>Edit Task</button>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="fw-semibold mb-4 task-title">
                        Update ynex new project design.
                    </h5>
                    <div class="fs-15 fw-semibold mb-2">Task Description :</div>
                    <p class="text-muted task-description">The current website design needs a refresh to improve user
                        experience and enhance visual appeal. The goal is to create a modern and responsive design that
                        aligns with the latest web design trends. The updated design should ensure seamless navigation,
                        easy
                        readability, and a cohesive visual identity.</p>
                    <div class="fs-15 fw-semibold mb-2">Key tasks :</div>
                    <div>
                        <ul class="task-details-key-tasks mb-0">
                            <li>Conducting a comprehensive analysis of the existing website design.</li>
                            <li>Collaborating with the UI/UX team to develop wireframes and mockups.</li>
                            <li>Iteratively refining the design based on feedback.</li>
                            <li>Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
                            <li>Testing the website across different devices and browsers.</li>
                            <li>Conducting a final review to ensure all design elements are consistent and visually
                                appealing.</li>
                        </ul>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div>
                            <span class="d-block text-muted fs-12">Assigned By</span>
                            <div class="d-flex align-items-center">
                                <div class="me-2 lh-1">
                                    <span class="avatar avatar-xs avatar-rounded">
                                        <img src="/images/faces/15.jpg" alt="">
                                    </span>
                                </div>
                                <span class="d-block fs-14 fw-semibold">H.J.Taylor</span>
                            </div>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Assigned Date</span>
                            <span class="d-block fs-14 fw-semibold">24,June 2023</span>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Due Date</span>
                            <span class="d-block fs-14 fw-semibold">05,July 2023</span>
                        </div>
                        <div class="task-details-progress">
                            <span class="d-block text-muted fs-12 mb-1">Progress</span>
                            <div class="d-flex align-items-center">
                                <div class="progress progress-xs progress-animate flex-fill me-2" role="progressbar"
                                    aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                    <div class="progress-bar bg-primary" style="width: 70%"></div>
                                </div>
                                <div class="text-muted fs-11">70%</div>
                            </div>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Efforts</span>
                            <span class="d-block fs-14 fw-semibold">45H : 35M : 45S</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Task Discussions</div>
                </div>
                <div class="card-body">
                    <ul class="list-unstyled profile-timeline">
                        <li v-for="(activity, key) of activitys" :key="key">
                            <Activities :activity="activity" />
                        </li>
                    </ul>
                </div>
                <div class="card-footer">
                    <div class="d-sm-flex align-items-center lh-1">
                        <div class="me-sm-3 mb-2 mb-sm-0">
                            <span class="avatar avatar-md avatar-rounded">
                                <img src="/images/faces/9.jpg" alt="">
                            </span>
                        </div>
                        <div class="flex-fill me-sm-2">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Post Anything"
                                    aria-label="Recipient's username with two button addons">
                                <button class="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i
                                        class="bi bi-emoji-smile"></i></button>
                                <button class="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i
                                        class="bi bi-paperclip"></i></button>
                                <button class="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i
                                        class="bi bi-camera"></i></button>
                                <button class="btn btn-primary btn-wave waves-effect waves-light"
                                    type="button">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Additional Details
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table text-nowrap">
                            <tbody>
                                <tr>
                                    <td><span class="fw-semibold">Task ID :</span></td>
                                    <td>SPK - 123</td>
                                </tr>
                                <tr>
                                    <td><span class="fw-semibold">Task Tags :</span></td>
                                    <td>
                                        <span class="badge bg-primary-transparent me-1">UI/Ux</span>
                                        <span class="badge bg-primary-transparent  me-1">Designing</span>
                                        <span class="badge bg-primary-transparent">Development</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="fw-semibold">Project Name :</span></td>
                                    <td>
                                        Ynex admin & dashboard template
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="fw-semibold">Project Status :</span></td>
                                    <td>
                                        <span class="fw-semibold text-secondary">Inprogress</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="fw-semibold">Project Priority :</span></td>
                                    <td>
                                        <span class="badge bg-danger-transparent">High</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span class="fw-semibold">Assigned To :</span></td>
                                    <td>
                                        <div class="avatar-list-stacked">
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <v-tooltip activator="parent" content-class="tooltip-primary"
                                                    location="top">Simon</v-tooltip>
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <v-tooltip activator="parent" content-class="tooltip-primary"
                                                    location="top">Sasha</v-tooltip>
                                                <img src="/images/faces/8.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <v-tooltip activator="parent" content-class="tooltip-primary"
                                                    location="top">Anagha</v-tooltip>
                                                <img src="/images/faces/2.jpg" alt="img">
                                            </span>
                                            <span class="avatar avatar-sm avatar-rounded">
                                                <v-tooltip activator="parent" content-class="tooltip-primary"
                                                    location="top">Hishen</v-tooltip>
                                                <img src="/images/faces/10.jpg" alt="img">
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="card custom-card overflow-hidden">
                <div class="card-header justify-content-between">
                    <div class="card-title">Sub Tasks</div>
                    <div>
                        <button class="btn btn-secondary-light btn-sm btn-wave"><i
                                class="ri-add-line me-1 align-middle"></i>Sub Task</button>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(subTask, key) of subTasks" :key="key">
                            <div class="d-flex align-items-center">
                                <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                        value="" :id="subTask.name" :checked="subTask.checked"></div>
                                <div class="fw-semibold">{{ subTask.title }}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card custom-card overflow-hidden">
                <div class="card-header">
                    <div class="card-title">
                        Attachments
                    </div>
                </div>
                <div class="card-body p-0">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item" v-for="(attachment, index) of attachments" :key="index">
                            <div class="d-flex align-items-center flex-wrap gap-2">
                                <div class="lh-1">
                                    <span :class="`avatar avatar-rounded ${attachment.imgClass} bg-light`">
                                        <img :src="attachment.img" alt="">
                                    </span>
                                </div>
                                <div class="flex-fill">
                                    <a href="javascript:void(0);"><span
                                            class="d-block fw-semibold">{{ attachment.title }}</span></a>
                                    <span class="d-block text-muted fs-12 fw-normal">{{ attachment.size }}</span>
                                </div>
                                <div class="btn-list">
                                    <button class="btn btn-sm btn-icon btn-info-light btn-wave me-2"><i
                                            class="ri-edit-line"></i></button>
                                    <button class="btn btn-sm btn-icon btn-danger-light btn-wave"><i
                                            class="ri-delete-bin-line"></i></button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
