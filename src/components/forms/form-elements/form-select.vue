<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Form Select",
                list: ['Forms', 'Form Elements', 'Form Select']
            },
            multiSelecteValue: ['Choice 1', 'Choice 2', 'Choice 3'],
            singleSelecteValue: null,
            singleSelecteOptions: ['Choice 1', 'Choice 2', 'Choice 3', "Choice 4", 'Choice 5', 'Choice 6'],

            multiSelecteValues: ['Choice 1'],
            singleSelecteValues: null,
            singleSelecteOption: ['Choice 1', 'Choice 2', 'Choice 3'],
            groupvalue: [],
            multigroupvalue: [],
            groupOptions: [
                {
                    language: 'UK',
                    libs: [
                        { name: 'London', category: 'city' },
                        { name: 'Manchester', category: 'city' },
                        { name: 'Liverpool', category: 'city' }
                    ]
                },
                {
                    language: 'FR',
                    libs: [
                        { name: 'Paris', category: 'city' },
                        { name: 'Lyon', category: 'city' },
                        { name: 'Marseille', category: 'city' }
                    ]
                },
                {
                    language: 'DE',
                    libs: [
                        { name: 'Hamburg', category: 'city' },
                        { name: 'Munich', category: 'city' },
                        { name: 'Berlin', category: 'city' }
                    ]
                },
                {
                    language: 'US',
                    libs: [
                        { name: 'York', category: 'city' },
                        { name: 'Washington', category: 'city' },
                        { name: 'Michigan', category: 'city' }
                    ]
                },
                {
                    language: 'SP',
                    libs: [
                        { name: 'Madrid', category: 'city' },
                        { name: 'Barcelona', category: 'city' },
                        { name: 'Malaga', category: 'city' }
                    ]
                },
                {
                    language: 'CA',
                    libs: [
                        { name: 'Montreal', category: 'city' },
                        { name: 'Toronto', category: 'city' },
                        { name: 'Vancouver', category: 'city' }
                    ]
                }
            ],
            searchSelectedValue: { name: 'Vue.js', language: 'JavaScript' },
            searchSelectedOptions: [
                { name: 'Vue.js', language: 'JavaScript' },
                { name: 'Rails', language: 'Ruby' },
                { name: 'Sinatra', language: 'Ruby' },
                { name: 'Laravel', language: 'PHP' },
                { name: 'Phoenix', language: 'Elixir' }
            ],

            tagValue: [
                { name: 'Javascript', code: 'js' }
            ],
            tagOptions: [
                { name: 'Vue.js', code: 'vu' },
                { name: 'Javascript', code: 'js' },
                { name: 'Open Source', code: 'os' }
            ],
            customValue: { title: 'Explorer', desc: 'Discovering new species!', img: `${import.meta.env.BASE_URL}/images/flags/canada_flag.jpg` },
            customOptions: [
                { title: 'Space Pirate', desc: 'More space battles!', img: `${import.meta.env.BASE_URL}/images/flags/germany_flag.jpg` },
                { title: 'Merchant', desc: 'PROFIT!', img: `${import.meta.env.BASE_URL}/images/flags/us_flag.jpg` },
                { title: 'Explorer', desc: 'Discovering new species!', img: `${import.meta.env.BASE_URL}/images/flags/canada_flag.jpg` },
                { title: 'Miner', desc: 'We need to go deeper!', img: `${import.meta.env.BASE_URL}/images/flags/spain_flag.jpg` }
            ],
            edvalue: null,
            disabled: true,
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
    <!-- Start:: row-4 -->
    <h6 class="fw-semibold mb-2">Choices:</h6>
    <div class="row">
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Multiple Select"
                        cardHeaderClass="d-flex align-items-center justify-content-between">
                        <p class="fw-semibold mb-2">Default</p>
                        <multiselect1 :show-labels="false" v-model="multiSelecteValue" :multiple="true"
                            :options="singleSelecteOptions">
                        </multiselect1>
                        <p class="fw-semibold mb-2 mt-3">With Remove Button</p>
                        <multiselect1 :show-labels="false" v-model="multiSelecteValues" :multiple="true"
                            :options="singleSelecteOption">
                        </multiselect1>
                        <p class="fw-semibold mb-2 mt-3">Option groups</p>
                        <div class="tags-multiselect">
                            <multiselect1 :show-labels="false" v-model="multigroupvalue" :options="groupOptions"
                                :multiple="true" group-values="libs" group-label="language" :group-select="true"
                                placeholder="Choose a city" track-by="name" label="name"><span slot="noResult">Oops! No
                                    elements found. Consider
                                    changing the search query.</span></multiselect1>
                        </div>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Passing Through Options" cardClassBody="tags-multiselect">
                        <multiselect1 :show-labels="false" v-model="tagValue" tag-placeholder="Add this as new tag"
                            placeholder="Search or add a tag" label="name" track-by="code" :options="tagOptions"
                            :multiple="true" :taggable="true" @tag="addTag"></multiselect1>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Select with search">
                        <p class="fw-semibold mb-2">Custom Label</p>
                        <multiselect1 :show-labels="false" v-model="searchSelectedValue"
                            :options="searchSelectedOptions" :custom-label="nameWithLang" placeholder="Select one"
                            label="name" track-by="name">
                        </multiselect1>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Single Select"
                        cardHeaderClass="d-flex align-items-center justify-content-between">
                        <p class="fw-semibold mb-2">Default</p>
                        <multiselect1 :show-labels="false" v-model="singleSelecteValue" :options="singleSelecteOptions">
                        </multiselect1>

                        <p class="fw-semibold mb-2  mt-3">Option groups</p>
                        <multiselect1 :show-labels="false" v-model="groupvalue" :options="groupOptions"
                            :multiple="false" group-values="libs" group-label="language" :group-select="true"
                            placeholder="Choose a city" track-by="name" label="name"><span slot="noResult">Oops! No
                                elements found. Consider
                                changing the search query.</span></multiselect1>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title=" Custom option template">
                        <multiselect1 :show-labels="false" v-model="customValue" placeholder="Fav No Man’s Sky path"
                            label="title" track-by="title" :options="customOptions" :option-height="104"
                            :custom-label="customLabel">
                            <template slot="singleLabel" slot-scope="props"><img class="option__image"
                                    :src="props.option.img" alt="No Man’s Sky"><span class="option__desc"><span
                                        class="option__title">{{ props.option.title }}</span></span></template>
                            <template slot="option" slot-scope="props"><img class="option__image"
                                    :src="props.option.img" alt="No Man’s Sky">
                                <div class="option__desc"><span class="option__title">{{ props.option.title
                                }}</span><span class="option__small">{{ props.option.desc }}</span></div>
                            </template>
                        </multiselect1>
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Enable-Disable">
                        <multiselect1 :show-labels="false" v-model="edvalue" :options="singleSelecteOptions"
                            :searchable="false" :group-select="true" :close-on-select="false" :disabled="disabled"
                            placeholder="Pick a value">
                        </multiselect1>
                        <div class="text-end mt-2">
                            <button @click="disabled = false" class="btn btn-primary">Enable</button>
                            <button @click="disabled = true" class="btn btn-danger ms-1">Disable</button>
                        </div>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-4">
            <SimpleCardComponent title="Default Select" cardHeaderClass="justify-content-between">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Open this select menu
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title=" Disabled Select" cardHeaderClass="justify-content-between">
                <select class="form-select" aria-label="Disabled select example" disabled>
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-4">
            <SimpleCardComponent title="Rounded Select" cardHeaderClass="justify-content-between">
                <select class="form-select rounded-pill" aria-label="Default select example">
                    <option selected>Open this select menu
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </SimpleCardComponent>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-6">
            <SimpleCardComponent title=" Multiple Attribute Select" cardHeaderClass="justify-content-between">
                <select class="form-select" multiple aria-label="multiple select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
            <SimpleCardComponent title="Select Size" cardHeaderClass="justify-content-between">
                <select class="form-select" size="4" aria-label="size 3 select example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    <option value="4">Four</option>
                    <option value="5">Five</option>
                </select>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-12">
            <SimpleCardComponent title="Using Size Attribute" cardHeaderClass="justify-content-between">
                <select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select><select class="form-select mb-3" aria-label="Default select">
                    <option selected>Open this select menu
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select class="form-select form-select-lg" aria-label=".form-select-lg example">
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </SimpleCardComponent>
        </div>
    </div>
    <!-- End:: row-3 -->
</template>

<style scoped></style>
