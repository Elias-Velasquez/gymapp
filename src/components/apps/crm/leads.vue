<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import profileImg from "/images/faces/9.jpg";
import { crmLeadData } from "../../../data/apps/companies";

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      profileImg,
      crmLeadData,
      dataToPass: {
        current: "Leads",
        list: ['Apps', 'CRM', 'Leads'],
      },
      tableHeaders: [
        '<input class="form-check-input" type="checkbox" id="checkboxNoLabel1" aria-label="...">',
        'Contact Name', 'Email', 'Phone',
        'Lead Status', 'Company', 'Lead Source', 'Tags', 'Actions',
      ],
      multiSelecteValue: null,
      multiSelecteValue1: null,
      multiSelecteValue2: null,
      singleSelecteOptions: ['Qualified', 'Disqualified', 'Contacted', 'Follow-up', 'Select Status'],
      leadOptions: ['Social Media', 'Direct mail', 'Blog Articles', 'Affiliates', 'Organic search'],
      productOptions: [
        { name: 'Solid' },
        { name: 'Washed' },
        { name: 'Plain' }
      ],
    };
  },
  methods: {
    deleteLead(index: number) {
      this.crmLeadData.splice(index, 1);
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
    },
    addTag(newTag: string) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      };
      this.productOptions.push(tag);  // Add the new tag to productOptions
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
            Leads<span class="badge bg-light text-default rounded ms-1 fs-12 align-middle">30</span>
          </div>
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#create-contact"><i
                class="ri-add-line me-1 fw-semibold align-middle"></i>Create Lead</button>
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
          <TableComponent :headers="tableHeaders" :rows="crmLeadData" tableClass="table text-nowrap"
            v-slot:cell="{ row, key }">
            <td>
              <input class="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="...">
            </td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-rounded avatar-sm">
                    <img :src="row.contactSrc" alt="">
                  </span>
                </div>
                <div>
                  <span class="d-block fw-semibold">{{ row.contactName }}</span>
                </div>
              </div>
            </td>
            <td>
              <span class="d-block mb-1"><i
                  class="ri-mail-line me-2 align-middle fs-14 text-muted d-inline-block"></i>{{ row.email }}</span>
            </td>
            <td>
              <span class="d-block"><i class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{{ row.phoneNumber
              }}</span>
            </td>
            <td>
              <span class="badge bg-light text-default">{{ row.leadStatus }}</span>
            </td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <div class="lh-1">
                  <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                    <img :src="row.companyLogo" alt="">
                  </span>
                </div>
                <div>{{ row.compenyName }}</div>
              </div>
            </td>
            <td>
              {{ row.leadSource }}
            </td>
            <td>
              <div class="d-flex align-items-center flex-wrap gap-1">
                <span :class="`badge bg-${row.tagBadgeColor1}`">{{ row.tagBadgesText1 }}</span>
                <span :class="`badge bg-${row.tagBadgeColor2}`">{{ row.tagBadgesText2 }}</span>
              </div>
            </td>
            <td>
              <div class="btn-list">
                <a class="btn btn-sm btn-warning-light btn-icon me-2"><i class="ri-eye-line"></i></a>
                <button class="btn btn-sm btn-info-light btn-icon me-2"><i class="ri-pencil-line"></i></button>
                <button class="btn btn-sm btn-danger-light btn-icon" @click="deleteLead(key)">
                  <i class="ri-delete-bin-line"></i>
                </button>
              </div>
            </td>
          </TableComponent>
        </div>
        <div class="card-footer border-top-0">
          <div class="d-flex align-items-center">
            <div>
              Showing 10 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i>
            </div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-4">
                <ul class="pagination mb-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);">Prev</a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                  <li class="page-item">
                    <a class="page-link text-primary" href="javascript:void(0);">Next</a>
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

  <!-- Start:: Create Contact -->
  <div class="modal fade" id="create-contact" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Create Lead</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body px-4">
          <div class="row gy-3">
            <div class="col-xl-12">
              <div class="mb-0 text-center">
                <span class="avatar avatar-xxl avatar-rounded">
                  <img :src="profileImg" alt="" id="profile-img">
                  <span class="badge rounded-pill bg-primary avatar-badge">
                    <input type="file" @change="onFileChange" class="position-absolute w-100 h-100 op-0"
                      id="profile-change">
                    <i class="fe fe-camera"></i>
                  </span>
                </span>
              </div>
            </div>
            <div class="col-xl-12">
              <label for="contact-name" class="form-label">Contact Name</label>
              <input type="text" class="form-control" id="contact-name" placeholder="Contact Name">
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
              <label class="form-label">Lead Status</label>
              <multiselect1 :show-labels="false" v-model="multiSelecteValue" :multiple="true"
                :options="singleSelecteOptions" />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Lead Source</label>
              <multiselect1 :show-labels="false" v-model="multiSelecteValue1" :multiple="true" :options="leadOptions" />
            </div>
            <div class="col-xl-12">
              <label class="form-label">Tags</label>
              <multiselect1 :show-labels="false" v-model="multiSelecteValue2" tag-placeholder="Add this as new tag"
                placeholder="Search or add a tag" label="name" track-by="code" :options="productOptions"
                :multiple="true" :taggable="true" @tag="addTag" />
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
