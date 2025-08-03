<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import profileImg from "../../../../public/images/faces/9.jpg";
import { crmCompaniesData } from "../../../data/apps/companies";

export default {
  components: {
    PageHeader,
  },
  data() {
    return {
      profileImg,
      crmCompaniesData,
      dataToPass: {
        current: "Companies",
        list: ['Apps', 'CRM', 'Companies']
      },
      tableHeaders: ['<input class="form-check-input" type="checkbox" id="checkboxNoLabel1" aria-label="...">', 'Company Name', 'Email', 'Phone', 'Industry',
        'Company Size', 'Key Contact', 'Total Deals', 'Actions'],
      industryValue: null,
      industryOptions: ['Information Technology', 'Telecommunications', 'Logistics', 'Professional Services', 'Education', 'Manufacturing', 'Healthcare'],

      companySizeValue: null,
      companySizeOptions: ['Corporate', 'Small Business', 'Micro Business', 'Startup', 'Large Enterprise', 'Medium Size'],

    };
  },
  methods: {
    deleteCompany(index: number) {
      this.crmCompaniesData.splice(index, 1);
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

<style scoped></style>




<template>
  <PageHeader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-12">
      <div class="card custom-card">
        <div class="card-header d-flex justify-content-between">
          <div class="card-title">
            Companies <span class="badge bg-light text-default rounded ms-1 fs-12">14</span>
          </div>
          <div class="d-flex flex-wrap gap-2">
            <button class="btn btn-primary btn-sm btn-wave" data-bs-toggle="modal" data-bs-target="#create-contact">
              <i class="ri-add-line me-1 fw-semibold"></i>Add Company
            </button>
            <button class="btn btn-success-light btn-sm btn-wave">Export As CSV</button>
            <div class="dropdown">
              <button class="btn btn-light btn-sm btn-wave" data-bs-toggle="dropdown" aria-expanded="false">
                Sort By <i class="ri-arrow-down-s-line align-middle ms-1"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="javascript:void(0);">Newest</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Date Added</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">A - Z</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card-body p-0">
          <TableComponent :headers="tableHeaders" :rows="crmCompaniesData" tableClass="table text-nowrap"
            v-slot:cell="{ row }">
            <td>
              <input class="form-check-input" type="checkbox" aria-label="Select contact {{ row.companyName }}">
            </td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <span class="avatar avatar-sm p-1 bg-light avatar-rounded">
                  <img :src="(row.companyLogo)" alt="Logo of {{ row.companyName }}">
                </span>
                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                  {{ row.compenyName }}
                </a>
              </div>
            </td>
            <td>
              <span class="d-block mb-1"><i class="ri-mail-line me-2 align-middle fs-14 text-muted"></i>{{ row.email
              }}</span>
            </td>
            <td>
              <span><i class="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{{ row.phoneNumber }}</span>
            </td>
            <td>{{ row.Industry }}</td>
            <td>
              <span :class="`badge bg-${row.tagBadgeColor1} ${row.tagBadgetextColor}`">{{ row.tagBadgesText1 }}</span>
            </td>
            <td>
              <div class="d-flex align-items-center gap-2">
                <span class="avatar avatar-rounded avatar-sm">
                  <img :src="(row.contactSrc)" alt="Contact: {{ row.contactName }}">
                </span>
                <span class="fw-semibold">{{ row.contactName }}</span>
              </div>
            </td>
            <td>{{ row.leadScore }}</td>
            <td>
              <div class="btn-list">
                <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
                  class="btn btn-sm btn-warning-light btn-icon me-2">
                  <i class="ri-eye-line"></i>
                </a>
                <button class="btn btn-sm btn-info-light btn-icon me-2">
                  <i class="ri-pencil-line"></i>
                </button>
                <button class="btn btn-sm btn-danger-light btn-icon" @click="deleteCompany(row.index)">
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
              <nav aria-label="Page navigation">
                <ul class="pagination mb-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="#">Prev</a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item">
                    <a class="page-link text-primary" href="#">Next</a>
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
  <!-- Start:: Company Details Offcanvas -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExample">
    <div class="offcanvas-body p-0">
      <div class="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover">
        <div>
          <span class="avatar avatar-xxl avatar-rounded me-3 bg-light-transparent p-2">
            <img src="/images/company-logos/12.png" alt="">
          </span>
        </div>
        <div class="flex-fill main-profile-info">
          <div class="d-flex align-items-center justify-content-between">
            <h6 class="fw-semibold mb-1 text-fixed-white">Spruko Technologies</h6>
            <button type="button" class="btn-close crm-contact-close-btn" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <p class="mb-1 text-muted text-fixed-white op-7">Telecommunications</p>
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
              <p class="mb-0 fs-11 op-5 text-fixed-white">Committed</p>
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 border-bottom border-block-end-dashed">
        <div class="mb-0">
          <p class="fs-15 mb-2 fw-semibold">Professional Bio :</p>
          <p class="text-muted op-8 mb-0">
            <b class="text-default">Spruko</b> Technologies is a leading technology company specializing in innovative
            software solutions for businesses worldwide. With a strong focus on cutting-edge technologies and a team of
            skilled professionals.
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
              sprukotechnologies2981@gmail.com
            </div>
          </div>
          <div class="d-flex align-items-center mb-2">
            <div class="me-2">
              <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                <i class="ri-phone-line align-middle fs-14"></i>
              </span>
            </div>
            <div>
              1678-28993-223
            </div>
          </div>
          <div class="d-flex align-items-center mb-0">
            <div class="me-2">
              <span class="avatar avatar-sm avatar-rounded bg-light text-muted">
                <i class="ri-map-pin-line align-middle fs-14"></i>
              </span>
            </div>
            <div>
              MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA, 20071
            </div>
          </div>
        </div>
      </div>
      <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-center">
        <p class="fs-14 mb-0 me-4 fw-semibold">Social Networks :</p>
        <div class="btn-list mb-0 d-flex flex-wrap gap-1">
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
      <div class="p-4 border-bottom border-block-end-dashed d-flex align-items-center gap-3">
        <div class="fs-14 fw-semibold">Company Size:</div>
        <div>
          <span class="badge bg-primary-transparent m-1">Corporate</span> - 1001+ Employees
        </div>
      </div>
      <div class="p-4 d-flex align-items-center gap-3">
        <div class="fs-14 fw-semibold">Key Contact :</div>
        <div class="d-flex align-items-center gap-2">
          <div class="lh-1">
            <span class="avatar avatar-rounded avatar-sm">
              <img src="/images/faces/2.jpg" alt="img">
            </span>
          </div>
          <div class="fw-semibold">Lisa Convay</div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: Company Details Offcanvas -->

  <!-- Start:: Add Company -->
  <div class="modal fade" id="create-contact" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h6 class="modal-title">Add Company</h6>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body px-4">
          <div class="row gy-3">
            <div class="col-xl-12">
              <div class="mb-0 text-center">
                <span class="avatar avatar-xxl avatar-rounded p-2 bg-light">
                  <img :src="profileImg" alt="" id="profile-img">
                  <span class="badge rounded-pill bg-primary avatar-badge">
                    <input type="file" @change="onFileChange" class="position-absolute w-100 h-100 op-0"
                      id="profile-change">
                    <i class="fe fe-camera"></i>
                  </span>
                </span>
              </div>
            </div>
            <div class="col-xl-6">
              <label for="company-name" class="form-label">Company Name</label>
              <input type="text" class="form-control" id="company-name" placeholder="Contact Name">
            </div>
            <div class="col-xl-6">
              <label for="company-lead-score" class="form-label">Total Deals</label>
              <input type="number" class="form-control" id="company-lead-score" placeholder="Total Deals">
            </div>
            <div class="col-xl-12">
              <label for="company-mail" class="form-label">Email</label>
              <input type="email" class="form-control" id="company-mail" placeholder="Enter Email">
            </div>
            <div class="col-xl-12">
              <label for="company-phone" class="form-label">Phone No</label>
              <input type="tel" class="form-control" id="company-phone" placeholder="Enter Phone Number">
            </div>
            <div class="col-xl-12">
              <label for="key-contact" class="form-label">Key Contact</label>
              <input type="text" class="form-control" id="key-contact" placeholder="Contact Name">
            </div>
            <div class="col-xl-12">
              <label class="form-label">Industry</label>
              <multiselect1 :searchable="false" :show-labels="false" v-model="industryValue"
                placeholder="Select Insustry" :options="industryOptions"></multiselect1>
            </div>
            <div class="col-xl-12">
              <label class="form-label">Company Size</label>
              <multiselect1 :searchable="false" :show-labels="false" v-model="companySizeValue"
                placeholder="Company Size" :options="companySizeOptions"></multiselect1>
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
  <!-- End:: Add Company -->
</template>