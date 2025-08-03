<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import { VueDraggableNext } from 'vue-draggable-next';
import profileImg from "/images/faces/9.jpg";
import DealDraggableCardComponent from "../../../shared/components/@spk/apps/deals-draggable-cards.vue";
import DealCardComponent from "../../../shared/components/@spk/apps/deals-cards.vue"
import { dealData, dealDraggable, dealDraggable1, dealDraggable2, dealDraggable3, dealDraggable4, dealDraggable5 } from "../../../data/apps/deals";
import { ref } from "vue";
import Datepicker from 'vue3-datepicker';

export default {
    setup() {
        const picked = ref(new Date());
        const time = ref({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        })
        return { picked, time }
    },
    components: {
        PageHeader,
        draggable: VueDraggableNext,
        DealDraggableCardComponent,
        DealCardComponent,
        Datepicker,
    },
    data() {
        return {
            profileImg,
            dataToPass: {
                current: "Deals",
                list: ['Apps', 'CRM', 'Deals']
            },
            dealData,
            dealDraggable,
            dealDraggable1,
            dealDraggable2,
            dealDraggable3,
            dealDraggable4,
            dealDraggable5,
        };
    },
    methods: {
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
                <div class="card-body">
                    <div class="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <div class="d-flex align-items-center">
                            <span class="fw-semibold fs-16 me-1">Deals</span><span
                                class="badge bg-light text-default align-middle">16</span>
                        </div>
                        <div class="d-flex flex-wrap gap-2">
                            <button class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                data-bs-target="#create-contact"><i
                                    class="ri-add-line me-1 fw-semibold align-middle"></i>New Deal</button>
                            <button class="btn btn-success-light btn-sm">Export As CSV</button>
                            <div class="dropdown">
                                <a href="javascript:void(0);"
                                    class="btn btn-light btn-sm btn-wave waves-effect waves-light"
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
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start::row-2 -->
    <div class="row">
        <div class="col-xxl-2 col-md-4" v-for="card in dealData" :key="card.id">
            <DealCardComponent :card="card" />
        </div>
    </div>
    <!-- End::row-2 -->

    <!-- Start::row-3 -->
    <div class="row">
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="leads-discovered">
            <div class="card custom-card" v-for="card in dealDraggable" :key="card.id">
                <DealDraggableCardComponent :card="card" />
            </div>
        </draggable>
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="leads-qualified">
            <div class="card custom-card" v-for="card in dealDraggable1" :key="card.id">
                <DealDraggableCardComponent :card="card" />
            </div>
        </draggable>
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="contact-initiated">
            <div class="card custom-card" v-for="card in dealDraggable2" :key="card.id">
                <DealDraggableCardComponent :card="card" />
            </div>
        </draggable>
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="needs-identified">
            <div class="card custom-card" v-for="card in dealDraggable3" :key="card.id">
                <DealDraggableCardComponent :card="card" />
            </div>
        </draggable>
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="negotiation">
            <div class="card custom-card" v-for="card in dealDraggable4" :key="card.id">
                <DealDraggableCardComponent :card="card" />
            </div>
        </draggable>
        <draggable group="deals" itemKey="name" class="col-xxl-2" id="deal-finalized">
            <div class="card custom-card" v-for="card in dealDraggable5" :key="card.id">
                <DealDraggableCardComponent :card="card" />
            </div>
        </draggable>
    </div>
    <!-- End::row-3 -->

    <!-- Start:: New Deal -->
    <div class="modal fade" id="create-contact" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title">New Deal</h6>
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
                            <label for="deal-name" class="form-label">Contact Name</label>
                            <input type="text" class="form-control" id="deal-name" placeholder="Contact Name">
                        </div>
                        <div class="col-xl-6">
                            <label for="deal-lead-score" class="form-label">Deal Value</label>
                            <input type="number" class="form-control" id="deal-lead-score" placeholder="Deal Value">
                        </div>
                        <div class="col-xl-12">
                            <label for="company-name" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="company-name" placeholder="Company Name">
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Last Contacted</label>
                            <div class="form-group">
                                <div class="input-group">
                                    <div class="input-group-text text-muted"> <i class="ri-calendar-line"></i> </div>
                                    <Datepicker class="form-control" placeholder="Choose date" v-model="picked"
                                        inputFormat="dd-MM-yyyy" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-primary">Create Deal</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: New Deal -->
</template>

<style scoped></style>
