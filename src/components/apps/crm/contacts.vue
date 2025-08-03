<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import { crmContactsData } from "../../../data/apps/companies";
import profileImg from "/images/faces/9.jpg";
import { ref } from "vue";

export default {
    setup() {


        const picked = ref(new Date());
        return { picked }
    },
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Contacts",
                list: [
                    'Apps', 'CRM', 'Contacts'
                ]
            },
            crmContactsData,
            profileImg,
            tableHeaders: ['<input class="form-check-input" type="checkbox" id="checkboxNoLabel1" aria-label="...">', 'Contact Name', 'Lead Score', 'Email', 'Phone',
                'Company', 'Lead Source', 'Tags', 'Actions'],
            multiSelecteValue: null,
            singleSelecteValue: ['Social Media'],
            singleSelecteValues: null,
            singleSelecteOptions: ['Organic search', 'Affiliates', 'Blog Articles', 'Direct mail', 'Social Media'],
            singleSelecteOption: ['Subscriber', 'Influencer', 'LostCustomer', 'Partner', 'Hot Lead', 'Customer',]
        };
    },
    methods: {
        deleteContact(contactID: number) {
            const index = this.crmContactsData.findIndex(contact => contact.ID === contactID);
            if (index !== -1) {
                this.crmContactsData.splice(index, 1);
            }
        },
        onFileChange(event: Event) {
            const input = event.target as HTMLInputElement;
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.profileImg = e.target?.result as string;
                };
                reader.readAsDataURL(input.files[0]);
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
            <div class="card custom-card">
                <div class="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
                    <div class="card-title">
                        Contacts<span class="badge bg-light text-default rounded ms-1 fs-12 align-middle">{{
                            crmContactsData.length }}</span>
                    </div>
                    <div class="d-flex flex-wrap gap-2">
                        <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#create-contact">
                            <i class="ri-add-line me-1 fw-semibold align-middle"></i>Create Contact
                        </button>
                        <button class="btn btn-success-light btn-sm">Export As CSV</button>
                        <div class="dropdown">
                            <a href="javascript:void(0);" class="btn btn-light btn-sm btn-wave waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Date Added</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">A - Z</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <TableComponent :headers="tableHeaders" :rows="crmContactsData" tableClass="table text-nowrap"
                        v-slot:cell="{ row }">
                        <td>
                            <input class="form-check-input" type="checkbox" id="checkboxNoLabel1" value=""
                                aria-label="...">
                        </td>
                        <td>
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span class="avatar avatar-rounded avatar-sm">
                                        <img :src="(row.contactSrc)" alt="">
                                    </span>
                                </div>
                                <div>
                                    <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                        aria-controls="offcanvasExample">
                                        <span class="d-block fw-semibold">{{ row.contactName }}</span>
                                    </a>
                                    <span class="d-block text-muted fs-11" data-bs-toggle="tooltip"
                                        data-bs-custom-class="tooltip-primary" title="Last Contacted">
                                        <i class="ri-account-circle-line me-1 fs-13 align-middle"></i>{{ row.contactTime
                                        }}
                                    </span>
                                </div>
                            </div>
                        </td>
                        <td>{{ row.leadScore }}</td>
                        <td>
                            <div>
                                <span class="d-block mb-1"><i
                                        class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>{{ row.email
                                        }}</span>
                            </div>
                        </td>
                        <td>
                            <div>
                                <span class="d-block"><i class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{{
                                    row.phoneNumber }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="d-flex align-items-center gap-2">
                                <div class="lh-1">
                                    <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                                        <img :src="(row.companyLogo)" alt="">
                                    </span>
                                </div>
                                <div>{{ row.compenyName }}</div>
                            </div>
                        </td>
                        <td>{{ row.leadSource }}</td>
                        <td>
                            <div class="d-flex align-items-center flex-wrap gap-1">
                                <span :class="`badge bg-${row.tagBadgeColor1}`">{{ row.tagBadgesText1 }}</span>
                                <span :class="`badge bg-${row.tagBadgeColor2}`">{{ row.tagBadgesText2 }}</span>
                            </div>
                        </td>
                        <td>
                            <div class="btn-list">
                                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                    aria-controls="offcanvasExample" class="btn btn-sm btn-warning-light btn-icon me-2">
                                    <i class="ri-eye-line"></i>
                                </a>
                                <button class="btn btn-sm btn-info-light btn-icon me-2">
                                    <i class="ri-pencil-line"></i>
                                </button>
                                <button class="btn btn-sm btn-danger-light btn-icon contact-delete"
                                    @click="deleteContact(row.ID)">
                                    <i class="ri-delete-bin-line"></i>
                                </button>
                            </div>
                        </td>
                    </TableComponent>
                </div>
                <div class="card-footer border-top-0">
                    <div class="d-flex align-items-center">
                        <div>
                            Showing {{ crmContactsData.length }} Entries <i
                                class="bi bi-arrow-right ms-2 fw-semibold"></i>
                        </div>
                        <div class="ms-auto">
                            <nav aria-label="Page navigation" class="pagination-style-4">
                                <ul class="pagination mb-0">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="javascript:void(0);">Prev</a>
                                    </li>
                                    <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                                    <li class="page-item">
                                        <a class="page-link text-primary" href="javascript:void(0);">next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: Contact Details Offcanvas -->
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExample">
        <div class="offcanvas-body p-0">
            <div class="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover">
                <div>
                    <span class="avatar avatar-xxl avatar-rounded online me-3">
                        <img src="/images/faces/4.jpg" alt="">
                    </span>
                </div>
                <div class="flex-fill main-profile-info">
                    <div class="d-flex align-items-center justify-content-between">
                        <h6 class="fw-semibold mb-1 text-fixed-white">Lisa Convay</h6>
                        <button type="button" class="btn-close crm-contact-close-btn" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <p class="mb-1 text-muted text-fixed-white op-7">Chief Executive Officer (C.E.O)</p>
                    <p class="fs-12 text-fixed-white mb-4 op-5">
                        <span class="me-3"><i class="ri-building-line me-1 align-middle"></i>Georgia</span>
                        <span><i class="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                    </p>
                    <div class="d-flex mb-0">
                        <div class="me-4">
                            <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">113</p>
                            <p class="mb-0 fs-11 op-5 text-fixed-white">Deals</p>
                        </div>
                        <div class="me-4">
                            <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">$12.2k</p>
                            <p class="mb-0 fs-11 op-5 text-fixed-white">Contributions</p>
                        </div>
                        <div class="me-4">
                            <p class="fw-bold fs-20 text-fixed-white text-shadow mb-0">$10.67k</p>
                            <p class="mb-0 fs-11 op-5 text-fixed-white">Comitted</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed">
                <div class="mb-0">
                    <p class="fs-15 mb-2 fw-semibold">Professional Bio :</p>
                    <p class="text-muted op-8 mb-0">
                        I am <b class="text-default">Lisa Convay,</b> here by conclude that,i am the founder and
                        managing director of the prestigeous company name laugh at all and acts as the cheif executieve
                        officer of the company.
                    </p>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed">
                <p class="fs-14 mb-2 me-4 fw-semibold">Contact Information :</p>
                <div class="">
                    <div class="d-flex align-items-center mb-2">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                                <i class="ri-mail-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            sonyataylor2531@gmail.com
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-2">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                                <i class="ri-phone-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            +(555) 555-1234
                        </div>
                    </div>
                    <div class="d-flex align-items-center mb-0">
                        <div class="me-2">
                            <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                                <i class="ri-map-pin-line align-middle fs-14"></i>
                            </span>
                        </div>
                        <div>
                            MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed d-flex gap-2 align-items-center flex-wrap">
                <p class="fs-14 mb-0 me-3 fw-semibold">Social Networks :</p>
                <div class="btn-list mb-0">
                    <button class="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-facebook-line fw-semibold"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-twitter-x-line fw-semibold"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-instagram-line fw-semibold"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-github-line fw-semibold"></i>
                    </button>
                    <button class="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-0">
                        <i class="ri-youtube-line fw-semibold"></i>
                    </button>
                </div>
            </div>
            <div class="p-4 border-bottom border-block-end-dashed">
                <p class="fs-14 mb-2 me-4 fw-semibold">Tags :</p>
                <div>
                    <span class="badge bg-light text-muted m-1">New Lead</span>
                    <span class="badge bg-light text-muted m-1">Others</span>
                </div>
            </div>
            <div class="p-4">
                <p class="fs-14 mb-2 fw-semibold">Relationship Manager :
                    <a class="fs-14 text-primary mb-0 float-end" href="javascript:void(0);"><i
                            class="ri-add-line me-1 align-middle"></i>Add Manager</a>
                </p>
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
                </div>
            </div>
        </div>
    </div>
    <!-- End:: Contact Details Offcanvas -->

    <!-- Start:: Create Contact -->
    <div class="modal fade" id="create-contact" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">Create Contact</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row gy-3">
                        <div class="col-xl-12">
                            <div class="mb-0 text-center">
                                <span class="avatar avatar-xxl avatar-rounded">
                                    <img :src="profileImg" alt="" id="profile-img">
                                    <span class="badge rounded-pill bg-primary avatar-badge">
                                        <input type="file" @change="onFileChange"
                                            class="position-absolute w-100 h-100 op-0" id="profile-change">
                                        <i class="fe fe-camera"></i>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div class="col-xl-6">
                            <label for="deal-title" class="form-label">Deal Title</label>
                            <input type="text" class="form-control" id="deal-title" placeholder="Deal Title">
                        </div>
                        <div class="col-xl-6">
                            <label for="contact-lead-score" class="form-label">Lead Score</label>
                            <input type="number" class="form-control" id="contact-lead-score" placeholder="Lead Score">
                        </div>
                        <div class="col-xl-12">
                            <label for="contact-mail" class="form-label">Email</label>
                            <input type="email" class="form-control" id="contact-mail" placeholder="Enter Email">
                        </div>
                        <div class="col-xl-12">
                            <label for="contact-phone" class="form-label">Phone No</label>
                            <input type="tel" class="form-control" id="contact-phone" placeholder="Enter Phone Number">
                        </div>
                        <div class="col-xl-12">
                            <label for="company-name" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="company-name" placeholder="Company Name">
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Lead Source</label>
                            <multiselect1 :show-labels="false" v-model="singleSelecteValue"
                                :options="singleSelecteOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Last Contacted</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <!-- <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div> -->
                                    <Datepicker1 placeholder="Date Time" class="datepicker-here" autoApply
                                        v-model="picked" time-picker-inline style="left: 12px;">
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
                            <multiselect1 :show-labels="false" v-model="singleSelecteValues" :multiple="true"
                                :options="singleSelecteOption">
                            </multiselect1>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Create Contact</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: Create Contact -->
</template>

<style scoped></style>
