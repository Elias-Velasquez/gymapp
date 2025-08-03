<script lang="ts">
import TableComponent from '../../../shared/components/@spk/tables/basic-table.vue';
import { fileManager, Folders, recents } from '../../../data/file-manager';
import FolderCardComponent from '../../../shared/components/@spk/file-manager/folder-cards.vue';
import FileManagerCardComponent from '../../../shared/components/@spk/file-manager/file-manager-cards.vue';

export default {
    data() {
        return {
            WindowPreSize: [window.innerWidth],
            fileManager, Folders, recents
        };
    },
    components: {
        TableComponent,
        FolderCardComponent,
        FileManagerCardComponent
    },
    methods: {
        showPreview() {
            if (window.innerWidth < 576) {
                this.$refs['file-manager-folders'].classList.add('open');
                this.$refs['file-manager-navigation'].classList.add('close');
            }
        },
        hidePreview() {
            if (window.innerWidth < 576) {
                this.$refs['file-manager-folders'].classList.remove('open');
                this.$refs['file-manager-navigation'].classList.remove('close');
            }
        },
        showDetails() {
            if (window.innerWidth < 1201) {
                this.$refs['selected-file-details'].classList.add('open');
                this.$refs['selected-file-details'].classList.remove('d-none');
            }
        },
        hideDetails() {
            if (window.innerWidth < 1201) {
                this.$refs['selected-file-details'].classList.add('d-none');
                this.$refs['selected-file-details'].classList.remove('open');
            }
        },
        fileDetailsView() {
            this.WindowPreSize.push(window.innerWidth);
            if (this.WindowPreSize.length > 2) { this.WindowPreSize.shift() }
            if (this.WindowPreSize.length > 1) {
                if ((this.WindowPreSize[this.WindowPreSize.length - 1] < 992) && (this.WindowPreSize[this.WindowPreSize.length - 2] >= 992)) {
                    // less than 992;
                    this.$refs['selected-file-details'].classList.add('d-none');
                }
                if ((this.WindowPreSize[this.WindowPreSize.length - 1] >= 992) && (this.WindowPreSize[this.WindowPreSize.length - 2] < 992)) {
                    // greater than 992
                    this.$refs['selected-file-details'].classList.remove('d-none');
                    this.$refs['selected-file-details'].classList.remove('d-none');
                    this.$refs['file-manager-folders'].classList.remove('open');
                    this.$refs['file-manager-navigation'].classList.remove('close');
                }
            }
        },
    },
    mounted() {
        window.addEventListener('resize', this.fileDetailsView);

        if (window.innerWidth >= 992) {
            this.$refs['selected-file-details'].classList.remove('d-none');
        }
        else {
            this.$refs['selected-file-details'].classList.add('d-none');
        }
    },
    beforeUnmount() {
        window.removeEventListener('resize', this.fileDetailsView);
    },
};
</script>

<template>
    <div class="file-manager-container p-2 gap-2 d-sm-flex">
        <div class="file-manager-navigation" ref="file-manager-navigation">
            <div class="d-flex align-items-center justify-content-between w-100 p-3 border-bottom">
                <div>
                    <h6 class="fw-semibold mb-0">File Manager</h6>
                </div>
                <div class="dropdown">
                    <button class="btn btn-sm btn-icon btn-primary-light btn-wave waves-light" type="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-settings-3-line"></i>
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="javascript:void(0);">Hidden Files</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                        <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                    </ul>
                </div>
            </div>
            <div class="p-3 border-bottom">
                <div class="input-group">
                    <input type="text" class="form-control bg-light border-0" placeholder="Search Files"
                        aria-describedby="button-addon2">
                    <button class="btn btn-light" type="button" id="button-addon2"><i
                            class="ri-search-line text-muted"></i></button>
                </div>
            </div>
            <div>
                <PerfectScrollbar>
                    <ul class="list-unstyled files-main-nav" id="files-main-nav">
                        <li class="active files-type">
                            <a @click="showPreview" href="javascript:void(0)">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <i class="ri-folder-2-line fs-16"></i>
                                    </div>
                                    <span class="flex-fill text-nowrap">
                                        My Files
                                    </span>
                                    <span class="badge bg-primary">322</span>
                                </div>
                            </a>
                        </li>
                        <li class="files-type">
                            <a @click="showPreview" href="javascript:void(0)">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <i class="ri-star-s-line fs-16"></i>
                                    </div>
                                    <span class="flex-fill text-nowrap">
                                        favourites
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="files-type">
                            <a @click="showPreview" href="javascript:void(0)">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <i class="ri-share-forward-line fs-16"></i>
                                    </div>
                                    <span class="flex-fill text-nowrap">
                                        Shared Files
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="files-type">
                            <a @click="showPreview" href="javascript:void(0)">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <i class="ri-delete-bin-line fs-16"></i>
                                    </div>
                                    <span class="flex-fill text-nowrap">
                                        Recycle Bin
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="files-type">
                            <a @click="showPreview" href="javascript:void(0)">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <i class="ri-history-fill fs-16"></i>
                                    </div>
                                    <span class="flex-fill text-nowrap">
                                        Recent Files
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a @click="showPreview" href="javascript:void(0)">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <i class="ri-settings-3-line fs-16"></i>
                                    </div>
                                    <span class="flex-fill text-nowrap">
                                        Settings
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a @click="showPreview" href="javascript:void(0)">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <i class="ri-questionnaire-line fs-16"></i>
                                    </div>
                                    <span class="flex-fill text-nowrap">
                                        Help Center
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a @click="showPreview" href="javascript:void(0)">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <i class="ri-folder-line fs-16"></i>
                                    </div>
                                    <span class="flex-fill text-nowrap">
                                        Version
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="mb-4">
                            <a @click="showPreview" href="javascript:void(0)">
                                <div class="d-flex align-items-center">
                                    <div class="me-2">
                                        <i class="ri-logout-box-line fs-16"></i>
                                    </div>
                                    <span class="flex-fill text-nowrap">
                                        Log out
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li class="mb-4">
                            <div class="text-muted mb-2">
                                <p class="mb-1"><span class="fw-bold fs-14">69.42GB</span> Used</p>
                                <p class="fs-12 mb-0">58% Used - 51.04Gb free</p>
                            </div>
                            <div class="progress progress-xs">
                                <div class="progress-bar bg-info" role="progressbar" style="width: 58%"
                                    aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                </div>
                            </div>
                        </li>
                        <li class="d-flex align-items-center justify-content-center">
                            <div class="filemanager-upgrade-storage">
                                <span>
                                    <img src="/images/media/file-manager/2.png" alt="">
                                </span>
                                <div class="text-default">
                                    <span class="fs-15 fw-semibold">Want to <span
                                            class="fw-bold text-success"><u>Buy</u></span>
                                        Storage?</span>
                                </div>
                                <div class="mt-3 d-grid">
                                    <button class="btn btn-primary-gradient">Upgrade</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </PerfectScrollbar>
            </div>
        </div>
        <div class="file-manager-folders" ref="file-manager-folders">
            <div class="d-flex p-3 flex-wrap gap-2 align-items-center justify-content-between border-bottom">
                <div>
                    <h6 class="fw-semibold mb-0">Folders</h6>
                </div>
                <div class="d-flex gap-2">
                    <button @click="hidePreview" id="folders-close-btn"
                        class="d-sm-none d-block btn btn-icon btn-sm btn-danger-light">
                        <i class="ri-close-fill"></i>
                    </button>
                    <button
                        class="btn btn-sm btn-primary d-flex align-items-center justify-content-center btn-wave waves-light"
                        data-bs-toggle="modal" data-bs-target="#create-folder">
                        <i class="ri-add-circle-line align-middle me-1"></i>Create Folder
                    </button>
                    <div class="modal fade" id="create-folder" tabindex="-1" aria-labelledby="create-folder"
                        data-bs-keyboard="false" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h6 class="modal-title" id="staticBackdropLabel">Create Folder
                                    </h6>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <label for="create-folder1" class="form-label">Folder Name</label>
                                    <input type="text" class="form-control" id="create-folder1"
                                        placeholder="Folder Name">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-sm btn-icon btn-light"
                                        data-bs-dismiss="modal"><i class="ri-close-fill"></i></button>
                                    <button type="button" class="btn btn-sm btn-success">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        class="btn btn-sm btn-outline-secondary d-flex align-items-center justify-content-center btn-wave waves-light"
                        data-bs-toggle="modal" data-bs-target="#create-file">
                        <i class="ri-add-circle-line align-middle me-1"></i>Create File
                    </button>
                    <div class="modal fade" id="create-file" tabindex="-1" aria-labelledby="create-file"
                        data-bs-keyboard="false" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h6 class="modal-title" id="staticBackdropLabel1">Create File
                                    </h6>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <label for="create-file1" class="form-label">File Name</label>
                                    <input type="text" class="form-control" id="create-file1" placeholder="File Name">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-sm btn-icon btn-light"
                                        data-bs-dismiss="modal"><i class="ri-close-fill"></i></button>
                                    <button type="button" class="btn btn-sm btn-success">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PerfectScrollbar class="p-3 file-folders-container" id="file-folders-container">
                <div class="d-flex mb-3 align-items-center justify-content-between">
                    <p class="mb-0 fw-semibold fs-14">My Files</p>
                    <button class="btn btn-sm btn-primary-light">View All</button>
                </div>
                <div class="row mb-3">
                    <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6" v-for="card in fileManager" :key="card.id">
                        <FileManagerCardComponent customCardClass="shadow-none bg-light" cardBodyClass="p-3"
                            :card="card" />
                    </div>
                </div>
                <div class="d-flex mb-3 align-items-center justify-content-between">
                    <p class="mb-0 fw-semibold fs-14">Folders</p>
                    <button class="btn btn-sm btn-primary-light">View All</button>
                </div>
                <div class="row mb-3">
                    <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6" v-for="card in Folders">
                        <FolderCardComponent customCardClass=" border shadow-none" :cardBodyClass="card.color"
                            :card="card" :showDropdown="true" />
                    </div>
                </div>
                <div class="d-flex mb-3 align-items-center justify-content-between">
                    <p class="mb-0 fw-semibold fs-14">Recents</p>
                    <button class="btn btn-sm btn-primary-light">View All</button>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <div class="table-responsive border border-bottom-0">
                            <table class="table text-nowrap table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">File Name</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Date Modified</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="files-list">
                                    <tr v-for="(row, index) in recents" :key="index" :class="row.trClass"
                                        @click="showDetails">
                                        <td>
                                            <div class="d-flex align-items-center">
                                                <div class="me-2">
                                                    <span class="avatar avatar-xs">
                                                        <img :src="(row.fileSrc)" alt="">
                                                    </span>
                                                </div>
                                                <div>
                                                    {{ row.fileName }}
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ row.category }}</td>
                                        <td>{{ row.size }}</td>
                                        <td>{{ row.date }}</td>
                                        <td>
                                            <div class="hstack gap-2 fs-15">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                                        class="ri-eye-line"></i></a>
                                                <a href="javascript:void(0);"
                                                    class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                                        class="ri-delete-bin-line"></i></a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="5">
                                            <nav aria-label="Page navigation">
                                                <ul class="pagination justify-content-end mb-0">
                                                    <li class="page-item disabled"><a class="page-link"
                                                            href="javascript:void(0);">Previous</a></li>
                                                    <li class="page-item"><a class="page-link"
                                                            href="javascript:void(0);">1</a></li>
                                                    <li class="page-item"><a class="page-link"
                                                            href="javascript:void(0);">2</a></li>
                                                    <li class="page-item"><a class="page-link"
                                                            href="javascript:void(0);">Next</a></li>
                                                </ul>
                                            </nav>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </PerfectScrollbar>
        </div>
        <div ref="selected-file-details" class="selected-file-details">
            <div class="d-flex p-3 align-items-center justify-content-between border-bottom">
                <div>
                    <h6 class="fw-semibold mb-0">File Details</h6>
                </div>
                <div class="d-flex align-items-center">
                    <div class="dropdown me-1">
                        <button
                            class="btn btn-sm btn-icon btn-primary-light btn-wave waves-light waves-effect waves-light"
                            type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="ri-more-2-fill"></i>
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="javascript:void(0);">Share</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Copy</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Move</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Delete</a></li>
                            <li><a class="dropdown-item" href="javascript:void(0);">Raname</a></li>
                        </ul>
                    </div>
                    <button id="file-close-btn" @click="hideDetails"
                        class="btn btn-icon btn-sm btn-danger-light d-xl-none d-block">
                        <i class="ri-close-fill"></i>
                    </button>
                </div>
            </div>
            <PerfectScrollbar>
                <div class="filemanager-file-details" id="filemanager-file-details">
                    <div class="p-3 text-center border-bottom border-block-end-dashed">
                        <div class="file-details mb-3">
                            <img src="/images/media/file-manager/3.png" alt="">
                        </div>
                        <div>
                            <p class="mb-0 fw-semibold fs-16">AMB-2012.zip</p>
                            <p class="mb-0 text-muted fs-10">422KB | 23,Nov 2022</p>
                        </div>
                    </div>
                    <div class="p-3 border-bottom border-block-end-dashed">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <div>
                                    <span class="fw-semibold">File Format : </span><span
                                        class="fs-12 text-muted">zip</span>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div>
                                    <p class="fw-semibold mb-0">File Description : </p>
                                    <span class="fs-12 text-muted">This file contains 3 folder ynex.main & ynex.premium
                                        &
                                        ynex.featured and 42 images and layout styles are added in this update.</span>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <p class="fw-semibold mb-0">File Location : </p>
                                <span class="fs-12 text-muted">Device/Storage/Archives/AMB-2012.zip</span>
                            </li>
                        </ul>
                    </div>
                    <div class="p-3 border-bottom border-block-end-dashed">
                        <p class="mb-1 fw-semibold fs-14">Downloaded from :</p>
                        <a class="text-primary fw-semibold text-break"
                            href="https://themeforest.net/user/spruko/portfolio" target="_blank">
                            <u>https://themeforest.net/user/spruko/portfolio</u>
                        </a>
                    </div>
                    <div class="p-3">
                        <p class="mb-2 fw-semibold fs-14">Shared With :</p>
                        <div class="d-flex align-items-center p-2 mb-1">
                            <span class="avatar avatar-sm me-2">
                                <img src="/images/faces/1.jpg" alt="">
                            </span>
                            <span class="fw-semibold flex-fill">Akira Susan</span>
                            <span class="badge bg-success-transparent fw-normal">28,Nov 2022</span>
                        </div>
                        <div class="d-flex align-items-center p-2 mb-1">
                            <span class="avatar avatar-sm me-2">
                                <img src="/images/faces/15.jpg" alt="">
                            </span>
                            <span class="fw-semibold flex-fill">Khalid Ahmad</span>
                            <span class="badge bg-success-transparent fw-normal">16,Oct 2022</span>
                        </div>
                        <div class="d-flex align-items-center p-2 mb-1">
                            <span class="avatar avatar-sm me-2">
                                <img src="/images/faces/8.jpg" alt="">
                            </span>
                            <span class="fw-semibold flex-fill">Jeremiah Jackson</span>
                            <span class="badge bg-success-transparent fw-normal">05,Dec 2022</span>
                        </div>
                        <div class="d-flex align-items-center p-2">
                            <span class="avatar avatar-sm me-2">
                                <img src="/images/faces/13.jpg" alt="">
                            </span>
                            <span class="fw-semibold flex-fill">Brigo Jhonson</span>
                            <span class="badge bg-success-transparent fw-normal">13,Nov 2022</span>
                        </div>
                    </div>
                </div>
            </PerfectScrollbar>
        </div>
    </div>
</template>

<style scoped></style>
