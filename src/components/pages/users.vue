<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import ContactCardComponent from '../../shared/components/@spk/contacts-cards.vue';
import * as prism from "../../data/prismCode/table/tables.js";
import DatatableVue from '../tables/datatable/datatable.vue';
import { useUserStore } from '../../stores/users.js';



export default {
    components: {
        PageHeader,
        ContactCardComponent,
        DatatableVue
    },
    setup() {

    },
    computed: {
            user() {
                return useUserStore();
            },
        },
    async mounted() {
        console.log('demo')
        await this.user.getUsers()

        this.items = this.user.user
    },
    data() {
        return {
            dataToPass: {
                current: "Users",
                list: ['Pages', 'Users']
            },
            prism,
            headers: [
                { text: "Nombre", value: "nombre", sortable: true },
                { text: "Correo", value: "username", sortable: true },
                { text: "DNI", value: "dni" },
                { text: "Acciones", value: "actions", width: 50 }
            ],
            items: []
            
        };
    },
};
</script>

<template>
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card mt-4">
                <div class="card-body">
                    <div class="contact-header">
                        <div class="d-sm-flex d-block align-items-center justify-content-between">
                            <div class="h5 fw-semibold mb-0">Panel de Usuarios</div>
                            <div class="d-flex mt-sm-0 mt-2 align-items-center">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light border-0"
                                        placeholder="Search Contact" aria-describedby="search-contact-member">
                                    <button class="btn btn-light" type="button" id="search-contact-member"><i
                                            class="ri-search-line text-muted"></i></button>
                                </div>
                                <div class="dropdown ms-2">
                                    <button class="btn btn-icon btn-primary-light btn-wave" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="ti ti-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Delete All</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Copy All</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Move To</a></li>
                                    </ul>
                                </div>
                                <button class="btn btn-icon btn-secondary-light ms-2"><v-tooltip activator="parent"
                                        location="top">Agregar Usuario</v-tooltip><i class="ri-add-line"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="col-xl-12">
                <DatatableVue
                :headers="headers"
                :items="items"
                title="Usuarios"
                @edit="handleEdit"
                @view="handleView"
                @delete="handleDelete"
                />
            </div>

        </div>
        <!-- <nav aria-label="Page navigation">
            <ul class="pagination justify-content-end">
                <li class="page-item disabled"><a class="page-link" href="javascript:void(0);">Previous</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>
            </ul>
        </nav> -->
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
