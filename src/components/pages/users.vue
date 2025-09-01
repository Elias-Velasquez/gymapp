<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import ContactCardComponent from '../../shared/components/@spk/contacts-cards.vue';
import * as prism from "../../data/prismCode/table/tables.js";
import DatatableVue from '../tables/datatable/datatable.vue';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { useUserStore } from '../../stores/users.js';
import { useAuthStore } from '../../stores/auth.js';
import { ref } from "vue";
import { Modal } from "bootstrap";
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
            authStore() {
                return useAuthStore();
            },
            filteredItems() {
            if (!this.search) return this.items;

                const searchLower = this.search.toLowerCase();

                return this.items.filter((item: any) =>
                    Object.values(item).some(value =>
                        String(value).toLowerCase().includes(searchLower)
                    )
                );
            }
        },
    async mounted() {

        await this.user.getUsers()

        this.items = this.user.user
        this.userProfile = this.authStore.userData;
    },
    data() {
        return {
            userProfile: null,
            dataToPass: {
                current: "Users",
                list: ['Pages', 'Users']
            },
            prism,
            headers: [
                { text: "Nombre", value: "nombre", sortable: true },
                { text: "Apellidos", value: "apellidos", sortable: true },
                { text: "Correo", value: "username", sortable: true },
                { text: "DNI", value: "dni", sortable: true  },
                { text: "Peso (KG)", value: "peso", sortable: true  },
                { text: "Altura (M)", value: "altura", sortable: true  },
                { text: "Estado", value: "status", sortable: true  },
                { text: "Acciones", value: "actions", width: 50 }
            ],
            items: [],
            search: "",
            showPassword: false,
            showConfirmPassword: false,
            createForm: {
            username: "",
            password: "",
            confirmPassword: "",
            nombre: "",
            apellidos: "",
            dni: "",
            peso: "",
            altura: "",
            direccion: "",
            enabled: true,
            observaciones: ""
            },
            imageFile: null,

            userToDelete:  {
            username: "",
            password: "",
            confirmPassword: "",
            nombre: "",
            apellidos: "",
            dni: "",
            peso: "",
            altura: "",
            direccion: "",
            enabled: true,
            observaciones: ""
            },
        };
    },
    methods: {
        handleView(user) {
        // Guardar temporalmente el usuario seleccionado en el store o en el router
            this.user.selectedUser = user; // usando Pinia store
            // Redirigir al profile
            this.$router.push({ path: '/pages/profile', query: { mode: 'admin' } });
        },
        handleEdit(user) {

            this.user.selectedUser = user;
            this.$router.push({ path: '/pages/edit-profile', query: { mode: 'admin' } });
        },
        handleDelete(user) {
            // lógica para eliminar usuario
                this.userToDelete = user;
                const modalEl = document.getElementById("deleteUserModal");
                const modal = Modal.getInstance(modalEl) || new Modal(modalEl);
                modal.show();
        },
        async confirmDelete() {
            if (!this.userToDelete) return;

            const success = await this.user.deleteUser(this.userToDelete.username);
            if (success) {
            // cerrar modal
            const modalEl = document.getElementById("deleteUserModal");
            const modal = Modal.getInstance(modalEl);
            modal.hide();
            this.userToDelete = null;
            await this.user.getUsers()
            this.items = this.user.user
            } else {
            alert("Error al eliminar usuario ❌");
            }
        },
         togglePassword(type: 'create-password' | 'create-confirmpassword') {
            if (type === 'create-password') this.showPassword = !this.showPassword;
            else this.showConfirmPassword = !this.showConfirmPassword;
        },
        async submit(){

            if (this.createForm.password !== this.createForm.confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
            }

            const userPayload = {
            ...this.createForm,
            peso: String(this.createForm.peso),
            };
            delete userPayload.confirmPassword;

            let file = this.imageFile;
            if (!file) {
            const response = await fetch("../../../../../assets/descarga.png");
            const blob = await response.blob();
            file = new File([blob], "descarga.png", { type: blob.type });
            }

            try {
                let response = await this.authStore.register(userPayload, file);

                await this.user.getUsers();
                this.items = this.user.user; // ✅ ya funciona porque estamos en methods

                const modalEl = document.getElementById("exampleModalScrollable2");
                if (modalEl) {
                    const modal = Modal.getInstance(modalEl) || new Modal(modalEl);
                    modal.hide();
                    const backdrop = document.querySelector(".modal-backdrop");
                    if (backdrop) backdrop.remove();
                    document.body.classList.remove("modal-open");
                    document.body.style.removeProperty("overflow");
                    document.body.style.removeProperty("padding-right");
                }
            } catch (err) {
                alert("Error en el registro ❌");
            }
        }
    }
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
                                     <input v-model="search" type="text" class="form-control bg-light border-0"
                                        placeholder="Buscar Usuario" aria-describedby="search-contact-member">
                                    <button class="btn btn-light" type="button" id="search-contact-member">
                                        <i class="ri-search-line text-muted"></i>
                                    </button>
                                </div>
                                <!-- <div class="dropdown ms-2">
                                    <button class="btn btn-icon btn-primary-light btn-wave" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <i class="ti ti-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Delete All</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Copy All</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Move To</a></li>
                                    </ul>
                                </div> -->
                                <button class="btn btn-icon btn-secondary-light ms-2" data-bs-toggle="modal"
                    data-bs-target="#exampleModalScrollable2"><v-tooltip activator="parent"
                                        location="top">Agregar Usuario</v-tooltip><i class="ri-add-line"></i></button>
                                        <div class="modal fade" id="exampleModalScrollable2" tabindex="-1"
                                            aria-labelledby="exampleModalScrollable2" data-bs-keyboard="false" aria-hidden="true">
                                            <!-- Scrollable modal -->
                                            <div class="modal-dialog modal-dialog-centered" >
                                                <div class="modal-content" style="width: 800px!important;">
                                                    <div class="modal-header">
                                                        <h6 class="modal-title" id="staticBackdropLabel2">Agregar Usuario
                                                        </h6>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <div class="p-5">
                                                            <p class="h5 fw-semibold mb-2">Registrarse</p>
                                                            <div class="row gy-3">
                                                            <div class="col-xl-12">
                                                                <label class="form-label">Email</label>
                                                                <input v-model="createForm.username" type="email" class="form-control form-control-lg" placeholder="email">
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">First Name</label>
                                                                <input v-model="createForm.nombre" type="text" class="form-control form-control-lg" placeholder="first name">
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Last Name</label>
                                                                <input v-model="createForm.apellidos" type="text" class="form-control form-control-lg" placeholder="last name">
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">DNI</label>
                                                                <input v-model="createForm.dni" type="text" class="form-control form-control-lg" placeholder="dni">
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Peso (kg)</label>
                                                                <input v-model="createForm.peso" type="number" class="form-control form-control-lg" placeholder="85">
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Altura (m)</label>
                                                                <input v-model="createForm.altura" type="text" class="form-control form-control-lg" placeholder="1.84">
                                                            </div>

                                                            <div class="col-xl-12">
                                                                <label class="form-label">Dirección</label>
                                                                <input v-model="createForm.direccion" type="text" class="form-control form-control-lg" placeholder="direccion">
                                                            </div>

                                                            <div class="col-xl-12">
                                                                <label class="form-label">Observaciones</label>
                                                                <textarea v-model="createForm.observaciones" class="form-control form-control-lg" rows="2"></textarea>
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Password</label>
                                                                <input v-model="createForm.password" :type="showPassword ? 'text' : 'password'" class="form-control form-control-lg">
                                                            </div>

                                                            <div class="col-xl-6">
                                                                <label class="form-label">Confirm Password</label>
                                                                <input v-model="createForm.confirmPassword" :type="showConfirmPassword ? 'text' : 'password'" class="form-control form-control-lg">
                                                            </div>

                                                            <div class="col-xl-12">
                                                                <label class="form-label">Imagen</label>
                                                                <input type="file" class="form-control" @change="e => imageFile = e.target.files[0]">
                                                            </div>

                                                            <!-- <div class="col-xl-12 d-grid mt-3">
                                                                <button class="btn btn-lg btn-primary" @click.prevent="submit">Agregar imagen</button>
                                                            </div> -->
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                                        <button type="button" class="btn btn-primary"  @click.prevent="submit">Crear Usuario
                                                            </button>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                :items="filteredItems"
                title="Usuarios"
                @edit="handleEdit"
                @view="handleView"
                @delete="handleDelete"
                />
            </div>

        </div>

        <div class="modal fade" id="deleteUserModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Confirmar Eliminación</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <p>¿Seguro que quieres eliminar al usuario <strong>{{ userToDelete?.nombre }}</strong> ({{ userToDelete?.username }})?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-danger" @click="confirmDelete">Eliminar</button>
                </div>
                </div>
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
