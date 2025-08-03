<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import { projectListData } from "../../../data/apps/projets/projectslist";
import projectslist from "../../../shared/UI/projectslist.vue"


export default {
    components: {
        PageHeader,
        projectslist
    },
    data() {
        return {
            dataToPass: {
                current: "Projects List",
                list: ['Apps', 'Projects', 'Projects List']
            },
            projectListData,
            sortBySelecteValue: null,
            sortBySelecteOptions: ['A - Z', 'Date Added', 'Newest', 'Type',],
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body p-3">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-3">
                        <div class="d-flex flex-wrap gap-1 project-list-main">
                            <router-link to="/apps/projects/create-project" class="btn btn-primary me-2"><i
                                    class="ri-add-line me-1 fw-semibold align-middle"></i>New Project</router-link>
                            <multiselect1 class="w-150p" :show-labels="false" name="sortBy" id="sortBy"
                                placeholder="Sort By" v-model="sortBySelecteValue" :multiple="false"
                                :options="sortBySelecteOptions">
                            </multiselect1>
                        </div>
                        <div class="avatar-list-stacked">
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/1.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/2.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/8.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/12.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/10.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/4.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/5.jpg" alt="img">
                            </span>
                            <span class="avatar avatar-sm avatar-rounded">
                                <img src="/images/faces/13.jpg" alt="img">
                            </span>
                            <a class="avatar avatar-sm bg-primary avatar-rounded text-fixed-white"
                                href="javascript:void(0);">
                                +8
                            </a>
                        </div>
                        <div class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search Project"
                                aria-label="Search">
                            <button class="btn btn-light" type="submit">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <projectslist :projectListData=projectListData />
    </div>
    <!--End::row-2 -->
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
</template>

<style scoped></style>
