<script lang="ts">
import { ref } from "vue";
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
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
        Datepicker,
    },
    data() {
        return {
            dataToPass: {
                current: "Add Products",
                list: ['Pages', 'Ecommerce', 'Add Products']
            },
            content: '',
            availabilitySelect: null,
            availabilityOptions: ['In Stock', 'Out Of Stock'],
            productSelect: null,
            productOptions: ['Solid', 'Washed', 'Plain'],
            publishedSelect: null,
            publishedOptions: ['Published', 'Scheduled'],
            colorSelect: null,
            colorOptions: ['White', 'Black', 'Red', 'Yellow', 'Green', 'Blue', 'Pink', 'Purple'],
            brandSelect: null,
            brandOptions: ['Armani', 'Lacoste', 'Puma', 'Spykar', 'Mufti', 'Home Town', 'Arrabi'],
            sizeSelect: null,
            sizeOptions: ['Small', 'Medium', 'Large', 'Extra Large'],
            genderSelect: null,
            genderOptions: ['All', 'Male', 'Female', 'Others'],
            categorySelect: null,
            categoryOptions: ['Clothing', 'Footwear', 'Accesories', 'Grooming', 'Ethnic & Festive', 'Jewellery', 'Toys & Babycare', 'Festive Gifts', 'Kitchen', 'Dining', 'Home Decors', 'Stationery'],
            tagValue: [
                { name: 'Solid', code: 'Solid' }
            ],
            tagOptions: [
                { name: 'Solid', code: 'Solid' },
                { name: 'Washed', code: 'Washed' },
                { name: 'Plain', code: 'Plain' }
            ],

        };
    },
    methods: {
        nameWithLang({ name, language }: any) {
            return `${name} — [${language}]`
        },
        addTag(newTag: string) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.tagOptions.push(tag)
            this.tagValue.push(tag)
        },
        customLabel({ title, desc }) {
            return `${title} – ${desc}`
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
                <div class="card-body add-products p-0">
                    <div class="p-4">
                        <div class="row gx-5">
                            <div class="col-xxl-6 col-xl-12 col-lg-12 col-md-6">
                                <div class="card custom-card shadow-none mb-0 border-0">
                                    <div class="card-body p-0">
                                        <div class="row gy-3">
                                            <div class="col-xl-12">
                                                <label for="product-name-add" class="form-label">Product Name</label>
                                                <input type="text" class="form-control" id="product-name-add"
                                                    placeholder="Name">
                                                <label for="product-name-add"
                                                    class="form-label mt-1 fs-12 op-5 text-muted mb-0">*Product Name
                                                    should
                                                    not exceed 30 characters</label>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-category-add" class="form-label">Category</label>
                                                <multiselect1 :show-labels="false" :options="categoryOptions"
                                                    :multiple="false" v-model="categorySelect">
                                                </multiselect1>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-gender-add" class="form-label">Gender</label>
                                                <multiselect1 :show-labels="false" :options="genderOptions"
                                                    :multiple="false" v-model="genderSelect">
                                                </multiselect1>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-size-add" class="form-label">Size</label>

                                                <multiselect1 :show-labels="false" :options="sizeOptions"
                                                    :multiple="false" v-model="sizeSelect">
                                                </multiselect1>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-brand-add" class="form-label">Brand</label>
                                                <multiselect1 :show-labels="false" :options="brandOptions"
                                                    :multiple="false" v-model="brandSelect">
                                                </multiselect1>
                                            </div>
                                            <div class="col-xl-6 color-selection">
                                                <label for="product-color-add" class="form-label">Colors</label>
                                                <multiselect1 :show-labels="false" :options="colorOptions"
                                                    :multiple="true" v-model="colorSelect">
                                                </multiselect1>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-cost-add" class="form-label">Enter Cost</label>
                                                <input type="text" class="form-control" id="product-cost-add"
                                                    placeholder="Cost">
                                                <label for="product-cost-add"
                                                    class="form-label mt-1 fs-12 op-5 text-muted mb-0">*Mention final
                                                    price
                                                    of the product</label>
                                            </div>
                                            <div class="col-xl-12">
                                                <label for="product-description-add" class="form-label">Product
                                                    Description</label>
                                                <textarea class="form-control" id="product-description-add"
                                                    rows="2"></textarea>
                                                <label for="product-description-add"
                                                    class="form-label mt-1 fs-12 op-5 text-muted mb-0">*Description
                                                    should
                                                    not exceed 500 letters</label>
                                            </div>
                                            <div class="col-xl-12">
                                                <label class="form-label">Product Features</label>
                                                <div id="product-features">
                                                    <vue-editor v-model="content"></vue-editor>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-12 col-lg-12 col-md-6">
                                <div class="card custom-card shadow-none mb-0 border-0">
                                    <div class="card-body p-0">
                                        <div class="row gy-4">
                                            <div class="col-xl-4">
                                                <label for="product-actual-price" class="form-label">Actual
                                                    Price</label>
                                                <input type="text" class="form-control" id="product-actual-price"
                                                    placeholder="Actual Price">
                                            </div>
                                            <div class="col-xl-4">
                                                <label for="product-dealer-price" class="form-label">Dealer
                                                    Price</label>
                                                <input type="text" class="form-control" id="product-dealer-price"
                                                    placeholder="Dealer Price">
                                            </div>
                                            <div class="col-xl-4">
                                                <label for="product-discount" class="form-label">Discount</label>
                                                <input type="text" class="form-control" id="product-discount"
                                                    placeholder="Discount in %">
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-type" class="form-label">Product Type</label>
                                                <input type="text" class="form-control" id="product-type"
                                                    placeholder="Type">
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-discount" class="form-label">Item Weight</label>
                                                <input type="text" class="form-control" id="product-discount1"
                                                    placeholder="Weight in gms">
                                            </div>
                                            <div class="col-xl-12 product-documents-container">
                                                <p class="fw-semibold mb-2 fs-14">Product Images :</p>

                                                <DropZone :maxFiles="4" :uploadOnDrop="true" :multipleUpload="true" l
                                                    :parallelUpload="3" />
                                            </div>
                                            <label class="form-label op-5 mt-3">Minimum 0f 6 images are need to be
                                                uploaded,make sure the image size match the proper background size and
                                                all
                                                images should be uniformly maintained with width and height to the image
                                                container,image size should not exceed 2MB,once uploaded to change the
                                                image
                                                you need to wait minimum of 24hrs. </label>
                                            <div class="col-xl-12 product-documents-container">
                                                <p class="fw-semibold mb-2 fs-14">Warrenty Documents :</p>

                                                <DropZone :maxFiles="4" :uploadOnDrop="true" :multipleUpload="true"
                                                    :parallelUpload="3" />
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="publish-date" class="form-label">Publish Date</label>
                                                <Datepicker class="form-control" placeholder="Choose date"
                                                    v-model="picked" />
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="publish-time" class="form-label">Publish Time</label>
                                                <Datepicker1 placeholder="Date Time" class="datepicker-here" time-picker
                                                    v-model="time">
                                                </Datepicker1>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-status-add" class="form-label">Published
                                                    Status</label>
                                                <multiselect1 :show-labels="false" :options="publishedOptions"
                                                    :multiple="false" v-model="publishedSelect">
                                                </multiselect1>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-tags" class="form-label">Product Tags</label>
                                                <multiselect1 :show-labels="false" v-model="tagValue"
                                                    tag-placeholder="Add this as new tag"
                                                    placeholder="Search or add a tag" label="name" track-by="code"
                                                    :options="tagOptions" :multiple="true" :taggable="true"
                                                    @tag="addTag"></multiselect1>
                                            </div>
                                            <div class="col-xl-12">
                                                <label for="product-status-add1" class="form-label">Availability</label>
                                                <multiselect1 :show-labels="false" :options="availabilityOptions"
                                                    :multiple="false" v-model="availabilitySelect">
                                                </multiselect1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                        <button class="btn btn-primary-light m-1">Add Product<i class="bi bi-plus-lg ms-2"></i></button>
                        <button class="btn btn-success-light m-1">Save Product<i
                                class="bi bi-download ms-2"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
