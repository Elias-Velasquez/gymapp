<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import Datepicker from 'vue3-datepicker';
import { ref } from "vue";

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
                current: "Edit Product",
                list: ['Pages', 'Ecommerce', 'Edit Product']
            },
            content: '<ul><li>Care Instructions: Machine Wash</li><li>Neckline: The pullover is framed with a Crew Neck</li><li>Fit Type: Regular Fit</li><li>Long Sleeves: The pullover is designed with Long Sleeves.</li><li>Soft Hand feel: The fabric is extremely soft and comfortable, keeping you at ease for hours.</li><li>Solid: The pullover is available in solid pattern.</li></ul>',
            availabilitySelect: null,
            availabilityOptions: ['In Stock', 'Out Of Stock'],
            productSelect: null,
            productOptions: [{ name: 'Solid', }, { name: 'Washed' }, { name: 'Plain' }],
            publishedSelect: null,
            publishedOptions: ['Published', 'Scheduled'],
            colorSelect: null,
            colorOptions: ['White', 'Black', 'Red', 'Yellow', 'Green', 'Blue', 'Pink', 'Purple'],
            brandSelect: { name: 'Mufti', language: 'Mufti' },
            brandOptions: [
                { name: 'Armani', language: 'Armani' },
                { name: 'Lacoste', language: 'Lacoste' },
                { name: 'Puma', language: 'Puma' },
                { name: 'Spykar', language: 'Spykar' },
                { name: 'Mufti', language: 'Mufti' },
                { name: 'Home Town', language: 'Home Town' },
                { name: 'Arrabi', language: 'Arrabi' },
            ],
            sizeSelect: { name: 'Medium', language: 'Medium' },
            sizeOptions: [
                { name: 'Small', language: 'Small' },
                { name: 'Medium', language: 'Male' },
                { name: 'Large', language: 'Large' },
                { name: 'Extra Large', language: 'Extra Large' },
            ],
            genderSelect: { name: 'All', language: 'All' },
            genderOptions: [
                { name: 'All', language: 'All' },
                { name: 'Male', language: 'Male' },
                { name: 'Female', language: 'Female' },
                { name: 'Others', language: 'Others' },
            ],
            categorySelect: { name: 'Clothing', language: 'Clothing' },
            categoryOptions: [
                { name: 'Clothing', language: 'Clothing' },
                { name: 'Footwear', language: 'Footwear' },
                { name: 'Accesories', language: 'Accesories' },
                { name: 'Grooming', language: 'Grooming' },
                { name: 'Ethnic & Festive', language: 'Ethnic & Festive' },
                { name: 'Jewellery', language: 'Jewellery' },
                { name: 'Toys & Babycare', language: 'Toys & Babycare' },
                { name: 'Accesories', language: 'Accesories' },
                { name: 'Festive Gifts', language: 'Festive Gifts' },
                { name: 'Kitchen', language: 'Kitchen' },
                { name: 'Dining', language: 'Dining' },
                { name: 'Stationery', language: 'Stationery' },
            ],
            tagOptions: [
                { name: 'White', code: 'White' },
                { name: 'Black', code: 'Black' },
                { name: 'Yellow', code: 'Yellow' },
                { name: 'Red', code: 'Red' },
                { name: 'Green', code: 'Green' },
                { name: 'Blue', code: 'Blue' }
            ],
            tagValue: [
                { name: 'Blue', code: 'Blue' }
            ],
            productOption: [
                { name: 'Solid', code: 'Solid' }
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
                                <div class="card custom-card shadow-none mb-0">
                                    <div class="card-body p-0">
                                        <div class="row gy-3">
                                            <div class="col-xl-12">
                                                <label for="product-name-add" class="form-label">Product Name</label>
                                                <input type="text" class="form-control" id="product-name-add"
                                                    placeholder="Name" value="Light Blue Sweat Shirt">
                                                <label for="product-name-add"
                                                    class="form-label mt-1 fs-12 op-5 text-muted mb-0">*Product Name
                                                    should
                                                    not exceed 30 characters</label>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-category-add" class="form-label">Category</label>
                                                <multiselect1 :searchable="true" :show-labels="false"
                                                    v-model="categorySelect" :options="categoryOptions"
                                                    placeholder="Select one" label="name" track-by="name">
                                                </multiselect1>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-gender-add" class="form-label">Gender</label>
                                                <multiselect1 :searchable="true" :show-labels="false"
                                                    v-model="genderSelect" :options="genderOptions"
                                                    placeholder="Select one" label="name" track-by="name">
                                                </multiselect1>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-size-add" class="form-label">Size</label>
                                                <multiselect1 :searchable="true" :show-labels="false"
                                                    v-model="sizeSelect" :options="sizeOptions" placeholder="Select one"
                                                    label="name" track-by="name">
                                                </multiselect1>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-brand-add" class="form-label">Brand</label>
                                                <multiselect1 :searchable="true" :show-labels="false"
                                                    v-model="brandSelect" :options="brandOptions"
                                                    placeholder="Select one" label="name" track-by="name">
                                                </multiselect1>
                                            </div>
                                            <div class="col-xl-6 color-selection">
                                                <label for="product-color-add" class="form-label">Colors</label>
                                                <multiselect1 :show-labels="false" v-model="tagValue"
                                                    tag-placeholder="Add this as new tag"
                                                    placeholder="Search or add a tag" label="name" track-by="code"
                                                    :options="tagOptions" :multiple="true" :taggable="true"
                                                    @tag="addTag"></multiselect1>
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-cost-add" class="form-label">Enter Cost</label>
                                                <input type="text" class="form-control" id="product-cost-add"
                                                    placeholder="Cost" value="$1299.99">
                                                <label for="product-cost-add"
                                                    class="form-label mt-1 fs-12 op-5 text-muted mb-0">*Mention final
                                                    price
                                                    of the product</label>
                                            </div>
                                            <div class="col-xl-12">
                                                <label for="product-description-add" class="form-label">Product
                                                    Description</label>
                                                <textarea class="form-control" id="product-description-add"
                                                    rows="2">Ultra Soft: The fabric is extremely soft and comfortable, keeping you at ease for hours</textarea>
                                                <label for="product-description-add"
                                                    class="form-label mt-1 fs-12 op-5 text-muted mb-0">*Description
                                                    should
                                                    not exceed 500 letters</label>
                                            </div>
                                            <div class="col-xl-12">
                                                <label class="form-label">Product Features</label>
                                                <vue-editor v-model="content"></vue-editor>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xxl-6 col-xl-12 col-lg-12 col-md-6">
                                <div class="card custom-card shadow-none mb-0">
                                    <div class="card-body p-0">
                                        <div class="row gy-4">
                                            <div class="col-xl-4">
                                                <label for="product-actual-price" class="form-label">Actual
                                                    Price</label>
                                                <input type="text" class="form-control" id="product-actual-price"
                                                    placeholder="Actual Price" value="$1,499.90">
                                            </div>
                                            <div class="col-xl-4">
                                                <label for="product-dealer-price" class="form-label">Dealer
                                                    Price</label>
                                                <input type="text" class="form-control" id="product-dealer-price"
                                                    placeholder="Dealer Price" value="$1,299.99">
                                            </div>
                                            <div class="col-xl-4">
                                                <label for="product-discount" class="form-label">Discount</label>
                                                <input type="text" class="form-control" id="product-discount"
                                                    placeholder="Discount in %" value="0.75%">
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-type" class="form-label">Product Type</label>
                                                <input type="text" class="form-control" id="product-type"
                                                    placeholder="Type" value="Watch">
                                            </div>
                                            <div class="col-xl-6">
                                                <label for="product-weight" class="form-label">Item Weight</label>
                                                <input type="text" class="form-control" id="product-weight"
                                                    placeholder="Weight in gms" value="180gms">
                                            </div>
                                            <div class="col-xl-12 product-documents-container">
                                                <p class="fw-semibold mb-2 fs-14">Product Images :</p>

                                                <DropZone :maxFiles="4" :uploadOnDrop="true" :multipleUpload="true"
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
                                                <multiselect1 :show-labels="false" v-model="productOption"
                                                    tag-placeholder="Add this as new tag"
                                                    placeholder="Search or add a tag" label="name" track-by="code"
                                                    :options="productOptions" :multiple="true" :taggable="true"
                                                    @tag="addTag"></multiselect1>
                                            </div>
                                            <div class="col-xl-12">
                                                <label for="product-availability"
                                                    class="form-label">Availability</label>
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
