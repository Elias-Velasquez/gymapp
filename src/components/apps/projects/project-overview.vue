<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import face5 from "/images/faces/5.jpg";
import face10 from "/images/faces/10.jpg";
import face2 from "/images/faces/2.jpg";
import face8 from "/images/faces/8.jpg";
import filemanager1 from "/images/media/file-manager/1.png";
import filemanager3 from "/images/media/file-manager/3.png";
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Project Overview",
                list: ['Apps', 'Projects', 'Project Overview']
            },
            projectTeam: [
                { id: 1, name: "Simon Conway", image: face2, role: "UI Developer", badgeClass: "bg-primary-transparent", },
                { id: 2, name: "Sasha Banks", image: face8, role: "UI Designer", badgeClass: "bg-pink-transparent", },
                { id: 3, name: "Anagha May", image: face5, role: "UI Tester", badgeClass: "bg-warning-transparent", },
                { id: 4, name: "Hishen Stuart", image: face10, role: "Angular Developer", badgeClass: "bg-success-transparent", },
            ],
            ProjectGoals: [
                { name: "Increase Efficiency", cheacked: true },
                { name: "Enhance Customer Satisfaction", cheacked: false },
                { name: "Expand Market Reach", cheacked: false },
                { name: "Improve Profitability", cheacked: false },
                { name: "Enhance Product/Service Quality", cheacked: true },
                { name: "Develop Innovative Solutions", cheacked: true },
                { name: "Increase Employee Engagement", cheacked: true },
                { name: "Enhance Brand Reputation", cheacked: false },
            ],
            ProjectDocuments: [
                { name: "Full Project", size: "0.45MB", avatar: filemanager1, imgClass: "p-2" },
                { name: "assets.zip", size: "0.99MB", avatar: filemanager3 },
                { name: "image-1.png", size: "245KB", avatar: filemanager1, imgClass: "p-2" },
                { name: "documentation.zip", size: "2MB", avatar: filemanager3 },
                { name: "landing.zip", size: "3.46MB", avatar: filemanager3 },
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
            <SimpleCardComponent title="Project Details" cardHeaderClass="justify-content-between"
                :showCardFooter="true">
                <template v-slot:showheader>
                    <div>
                        <router-link to="/apps/projects/create-project" class="btn btn-sm btn-secondary btn-wave"><i
                                class="ri-add-line align-middle me-1 fw-semibold"></i>Create Project</router-link>
                    </div>
                </template>
                <h5 class="fw-semibold mb-4 task-title">
                    Ynex new angular project.
                </h5>
                <div class="fs-15 fw-semibold mb-2">Project Description :</div>
                <p class="text-muted task-description">The current website design needs a refresh to improve user
                    experience and enhance visual appeal. The goal is to create a modern and responsive design that
                    aligns with the latest web design trends. The updated design should ensure seamless navigation, easy
                    readability, and a cohesive visual identity.</p>
                <div class="fs-15 fw-semibold mb-2">Key tasks :</div>
                <div class="mb-3">
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
                <div class="fs-15 fw-semibold mb-2">Skills :</div>
                <div>
                    <span class="badge bg-light text-default me-1">UI/Ux</span>
                    <span class="badge bg-light text-default me-1">JavaScript</span>
                    <span class="badge bg-light text-default me-1">Responsive Design</span>
                    <span class="badge bg-light text-default me-1">Web Accessibility</span>
                    <span class="badge bg-light text-default me-1">Front-End Build Tools</span>
                    <span class="badge bg-light text-default me-1">RESTful APIs</span>
                    <span class="badge bg-light text-default me-1">Performance Testing</span>
                    <span class="badge bg-light text-default me-1">Angular</span>
                    <span class="badge bg-light text-default">Vue.js</span>
                </div>
                <template v-slot:cardFooter>
                    <div class="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                        <div>
                            <span class="d-block text-muted fs-12">Project Manager</span>
                            <div class="d-flex align-items-center">
                                <div class="me-2 lh-1">
                                    <span class="avatar avatar-xs avatar-rounded">
                                        <img src="/images/faces/13.jpg" alt="">
                                    </span>
                                </div>
                                <span class="d-block fs-14 fw-semibold">S.K.Jacob</span>
                            </div>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Start Date</span>
                            <span class="d-block fs-14 fw-semibold">22,June 2023</span>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">End Date</span>
                            <span class="d-block fs-14 fw-semibold">10,July 2023</span>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Assigned To</span>
                            <div class="avatar-list-stacked">
                                <span class="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip"
                                    data-bs-custom-class="tooltip-primary" data-bs-original-title="Simon">
                                    <img src="/images/faces/2.jpg" alt="img">
                                </span>
                                <span class="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip"
                                    data-bs-custom-class="tooltip-primary" data-bs-original-title="Sasha">
                                    <img src="/images/faces/8.jpg" alt="img">
                                </span>
                                <span class="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip"
                                    data-bs-custom-class="tooltip-primary" data-bs-original-title="Anagha">
                                    <img src="/images/faces/5.jpg" alt="img">
                                </span>
                                <span class="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip"
                                    data-bs-custom-class="tooltip-primary" data-bs-original-title="Hishen">
                                    <img src="/images/faces/10.jpg" alt="img">
                                </span>
                            </div>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Status</span>
                            <span class="d-block"><span class="badge bg-primary-transparent">In Progress</span></span>
                        </div>
                        <div>
                            <span class="d-block text-muted fs-12">Priority</span>
                            <span class="d-block fs-14 fw-semibold"><span
                                    class="badge bg-success-transparent">Low</span></span>
                        </div>
                    </div>
                </template>
            </SimpleCardComponent>
            <SimpleCardComponent title="Project Discussions" cardHeaderClass="justify-content-between"
                :showCardFooter="true">
                <ul class="list-unstyled profile-timeline">
                    <li>
                        <div>
                            <span
                                class="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                E
                            </span>
                            <p class="mb-2">
                                <b>You</b> Commented on <b>Work Process</b> in this project <a class="text-secondary"
                                    href="javascript:void(0);"><u>#New Project</u></a>.<span
                                    class="float-end fs-11 text-muted">24,Dec 2023 - 14:34</span>
                            </p>
                            <p class="text-muted mb-0">
                                Project is important and need to be completed on time to meet company work flow.
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                <img src="/images/faces/11.jpg" alt="">
                            </span>
                            <p class="text-muted mb-2">
                                <span class="text-default"><b>Json Smith</b> reacted to the project
                                    &#128077;</span>.<span class="float-end fs-11 text-muted">18,Dec 2023 - 12:16</span>
                            </p>
                            <p class="text-muted mb-0">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem
                                rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi
                                dignissimos cumque, et a sint tenetur consequatur omnis!
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                <img src="/images/faces/4.jpg" alt="">
                            </span>
                            <p class="text-muted mb-2">
                                <span class="text-default"><b>Alicia Keys</b> shared a document with
                                    <b>you</b></span>.<span class="float-end fs-11 text-muted">21,Dec 2023 -
                                    15:32</span>
                            </p>
                            <p class="profile-activity-media mb-0">
                                <a href="javascript:void(0);">
                                    <img src="/images/media/file-manager/3.png" alt="">
                                </a>
                                <span class="fs-11 text-muted">432.87KB</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span
                                class="avatar avatar-sm bg-success-transparent avatar-rounded profile-timeline-avatar">
                                P
                            </span>
                            <p class="text-muted mb-2">
                                <span class="text-default"><b>You</b> shared a post with 4 people
                                    <b>Simon,Sasha,Anagha,Hishen</b></span>.<span
                                    class="float-end fs-11 text-muted">28,Dec 2023 -
                                    18:46</span>
                            </p>
                            <p class="profile-activity-media mb-2">
                                <a href="javascript:void(0);">
                                    <img src="/images/media/media-18.jpg" alt="">
                                </a>
                            </p>
                            <div>
                                <div class="avatar-list-stacked">
                                    <span class="avatar avatar-sm avatar-rounded">
                                        <img src="/images/faces/2.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-sm avatar-rounded">
                                        <img src="/images/faces/8.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-sm avatar-rounded">
                                        <img src="/images/faces/5.jpg" alt="img">
                                    </span>
                                    <span class="avatar avatar-sm avatar-rounded">
                                        <img src="/images/faces/10.jpg" alt="img">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                <img src="/images/media/media-39.jpg" alt="">
                            </span>
                            <p class="mb-1">
                                <b>Json</b> Commented on Project <a class="text-secondary"
                                    href="javascript:void(0);"><u>#UI
                                        Technologies</u></a>.<span class="float-end fs-11 text-muted">24,Dec 2023 -
                                    14:34</span>
                            </p>
                            <p class="text-muted">Technology id developing rapidly keep up your work &#128076;</p>
                            <p class="profile-activity-media mb-0">
                                <a href="javascript:void(0);">
                                    <img src="/images/media/media-26.jpg" alt="" class="me-2">
                                </a>
                                <a href="javascript:void(0);">
                                    <img src="/images/media/media-29.jpg" alt="">
                                </a>
                            </p>
                        </div>
                    </li>
                </ul>
                <template v-slot:cardFooter>
                    <div class="d-sm-flex align-items-center lh-1">
                        <div class="me-sm-3 mb-2 mb-sm-0">
                            <img src="/images/faces/9.jpg" alt="" class="avatar avatar-md avatar-rounded">
                        </div>
                        <div class="flex-fill me-sm-2">
                            <div class="input-group">
                                <input type="text" class="form-control w-sm-50" placeholder="Post Anything"
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
                </template>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-3">
            <SimpleCardComponent title="Project Team" cardHeaderClass="justify-content-between" cardClassBody="p-0">
                <template v-slot:showheader>
                    <div>
                        <button class="btn btn-light btn-sm btn-wave"><i
                                class="ri-add-line align-middle me-1 fw-semibold"></i>Add Member</button>
                    </div>
                </template>
                <TableComponent :headers="['Name', 'Designation', 'Actions']" :rows="projectTeam"
                    tableClass="table text-nowrap" v-slot:cell="{ row }">
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="me-2 lh-1">
                                <span class="avatar avatar-sm avatar-rounded">
                                    <img :src="(row.image)" alt="">
                                </span>
                            </div>
                            <div class="fw-semibold">{{ row.name }}</div>
                        </div>
                    </td>
                    <td>
                        <span :class="`badge ${row.badgeClass}`">{{ row.role }}</span>
                    </td>
                    <td>
                        <div class="btn-list">
                            <button class="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light me-2"><i
                                    class="ri-edit-line"></i></button>
                            <button class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light"><i
                                    class="ri-delete-bin-line"></i></button>
                        </div>
                    </td>
                </TableComponent>
            </SimpleCardComponent>
            <SimpleCardComponent title="Project Goals" cardHeaderClass="justify-content-between">
                <template v-slot:showheader>
                    <div class="btn btn-sm btn-light btn-wave"><i
                            class="ri-add-line align-middle me-1 fw-semibold"></i>Add
                        Goal</div>
                </template>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(card, index) in ProjectGoals" :key="index">
                        <div class="d-flex align-items-center">
                            <div class="me-2"><input class="form-check-input form-checked-success" type="checkbox"
                                    value="" id="successChecked1" :checked="card.cheacked"></div>
                            <div class="fw-semibold">{{ card.name }}</div>
                        </div>
                    </li>
                </ul>
                <div class="mt-3 text-center">
                    <button class="btn btn-success btn-wave">View All</button>
                </div>
            </SimpleCardComponent>
            <SimpleCardComponent title="Project Documents" cardHeaderClass="justify-content-between" cardClassBody="p-0"
                customCardClass="overflow-hidden">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" v-for="(card, index) in ProjectDocuments" :key="index">
                        <div class="d-flex align-items-center flex-wrap gap-2">
                            <div class="lh-1">
                                <span :class="`avatar avatar-rounded ${card.imgClass} bg-light`">
                                    <img :src="card.avatar" alt="">
                                </span>
                            </div>
                            <div class="flex-fill">
                                <a href="javascript:void(0);"><span class="d-block fw-semibold">{{ card.name
                                        }}</span></a>
                                <span class="d-block text-muted fs-12 fw-normal">{{ card.size }}</span>
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
            </SimpleCardComponent>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
