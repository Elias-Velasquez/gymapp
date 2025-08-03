<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
export default {
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Job Post",
                list: [
                    'Apps', 'Jobs', 'Job Post'
                ]
            },
            categorySelecteValue: ['Development'],
            categorySelecteOptions: ['Development', 'Marketing', 'IT Software'],
            workingExperienceValue: ['0 - 1 Years'],
            workingExperienceOptions: ['0 - 1 Years', '1 - 3 Years', '3 - 5 Years'],
            jobTypeValue: ['Contract'],
            jobTypeOptions: ['Contract', 'Freelance', 'Full Time', 'Part Time', 'Internship'],
            priorityValue: null,
            priorityOptions: ['Normal', 'Urgent'],
            vacanciesValue: null,
            vacanciesOptions: ['10', '20', '30', '40'],
            salaryValue: null,
            salaryOptions: ['0 - $1,00,000 / Year', '$1,00,000 - $3,00,000 / Year', '$3,00,000 - $5,00,000 / Year'],
            genderRequirementValue: null,
            genderRequirementOptions: ['No Preferences', 'Male Only', 'Female Only'],
            employerNameValue: null,
            employerNameOptions: ['Obligation Pvt.Ltd', 'Voluptatem Pvt.Ltd', 'BloomTech.Inc', 'Spotech Technical Solutions'],
            countryValue: null,
            countryOptions: ['India', 'USA', 'Germany', 'Spain', 'Urgentina'],
            skillsSelecteValue: null,
            skillsSelecteOptions: [{ name: 'React', code: 'React' }, { name: 'JavaScript', code: 'JavaScript' }, { name: 'CSS', code: 'CSS' }, { name: 'HTML', code: 'HTML' }],
            languagesSelecteValue: null,
            languagesSelecteOptions: [{ name: 'English', code: 'English' }, { name: 'French', code: 'French' }, { name: 'Arabic', code: 'Arabic' }, { name: 'Hindi', code: 'Hindi' }],
            qualificationSelecteValue: null,
            qualificationSelecteOptions: [{ name: 'Diploma', code: 'Diploma' }, { name: 'MBA', code: 'MBA' }, { name: 'MCA', code: 'MCA' }, { name: 'Graduate', code: 'Graduate' }],
            tagValue: [{ name: "English", code: 'English' }, { name: "Hindi", code: 'Hindi' },],
            skills: [{ name: 'React', code: 'React' }, { name: 'JavaScript', code: 'JavaScript' }, { name: 'CSS', code: 'CSS' },],
            qualificationSelecteOption: [{ name: 'Diploma', code: 'Diploma' }, { name: 'MBA', code: 'MBA' }, { name: 'MCA', code: 'MCA' },]
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
        <div class="col-xxl-9 col-xl-8">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                        Post New Job
                    </div>
                </div>
                <div class="card-body">
                    <div class="row gy-4 mb-4">
                        <div class="col-xl-6">
                            <label for="job-title" class="form-label">Job Title</label>
                            <input type="text" class="form-control" id="job-title" placeholder="Job Title"
                                value="Web Developer">
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Job Category</label>
                            <multiselect1 :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="categorySelecteValue" :multiple="false" :options="categorySelecteOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Working Experience</label>
                            <multiselect1 :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="workingExperienceValue" :multiple="false" :options="workingExperienceOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Job Type</label>
                            <multiselect1 :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="jobTypeValue" :multiple="false" :options="jobTypeOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Priority</label>
                            <multiselect1 :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="priorityValue" :multiple="false" :options="priorityOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Vacancies</label>
                            <multiselect1 :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="vacanciesValue" :multiple="false" :options="vacanciesOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label">Salary</label>
                            <multiselect1 :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="salaryValue" :multiple="false" :options="salaryOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label for="skills" class="form-label">Skills :</label>
                            <multiselect1 :show-labels="false" v-model="skills" tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag" label="name" track-by="code"
                                :options="skillsSelecteOptions" :multiple="true" :taggable="true" @tag="addTag">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label for="job-deadline" class="form-label">Job Deadline</label>
                            <input type="text" class="form-control" id="job-deadline" placeholder="Job Deadline">
                        </div>
                        <div class="col-xl-6">
                            <label class="form-label"></label>
                            <multiselect1 :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="genderRequirementValue" :multiple="false" :options="genderRequirementOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label for="language" class="form-label">Languages :</label>
                            <multiselect1 :show-labels="false" v-model="tagValue" tag-placeholder="Add this as new tag"
                                placeholder="Search or add a tag" label="name" track-by="code"
                                :options="languagesSelecteOptions" :multiple="true" :taggable="true" @tag="addTag">
                            </multiselect1>
                        </div>
                        <div class="col-xl-6">
                            <label for="qualification" class="form-label">Qualification :</label>
                            <multiselect1 :show-labels="false" v-model="qualificationSelecteOption"
                                tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name"
                                track-by="code" :options="qualificationSelecteOptions" :multiple="true" :taggable="true"
                                @tag="addTag"></multiselect1>
                        </div>
                        <div class="col-xl-12">
                            <label for="job-description" class="form-label">Job Description :</label>
                            <textarea class="form-control" id="job-description"
                                rows="4">Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!</textarea>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-end">
                    <a href="javascript:void(0);" class="btn btn-primary btn-wave waves-effect waves-light">
                        <i class="bi bi-plus-circle"></i> Post Job
                    </a>
                </div>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Assign To Employer</div>
                </div>
                <div class="card-body">
                    <div class="col-xl-12">
                        <label class="form-label">Employer Name</label>
                        <multiselect1 :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                            v-model="employerNameValue" :multiple="false" :options="employerNameOptions">
                        </multiselect1>
                    </div>
                </div>
            </div>
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">Company Details</div>
                </div>
                <div class="card-body">
                    <div class="row gy-3">
                        <div class="col-xl-12">
                            <label for="Company-Name" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="Company-Name" placeholder="Company Name"
                                value="Obligation Pvt.Ltd">
                        </div>
                        <div class="col-xl-12">
                            <label for="Company-Website" class="form-label">Company Website</label>
                            <input type="text" class="form-control" id="Company-Website" placeholder="Company Website"
                                value="http//www.obligationpvtltd.com">
                        </div>
                        <div class="col-xl-12">
                            <label class="form-label">Country</label>
                            <multiselect1 :show-labels="false" name="assigned-team-members" id="assigned-team-members"
                                v-model="countryValue" :multiple="false" :options="countryOptions">
                            </multiselect1>
                        </div>
                        <div class="col-xl-12">
                            <label for="Company-Address" class="form-label">Address</label>
                            <input type="text" class="form-control" id="Company-Address" placeholder="Company Address"
                                value="USA">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
