<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import TeamsCardComponent from '../../shared/components/@spk/teams-cards.vue';
import cover1 from "/images/media/team-covers/1.jpg";
import cover2 from "/images/media/team-covers/2.jpg";
import cover3 from "/images/media/team-covers/3.jpg";
import cover4 from "/images/media/team-covers/4.jpg";
import cover5 from "/images/media/team-covers/5.jpg";
import cover6 from "/images/media/team-covers/6.jpg";
import cover7 from "/images/media/team-covers/7.jpg";
import cover8 from "/images/media/team-covers/8.jpg";
import cover9 from "/images/media/team-covers/9.jpg";
import face15 from "/images/faces/15.jpg";
import face5 from "/images/faces/5.jpg";
import face10 from "/images/faces/10.jpg";
import face13 from "/images/faces/13.jpg";
import face11 from "/images/faces/11.jpg";
import face14 from "/images/faces/14.jpg";
import face12 from "/images/faces/12.jpg";
import face2 from "/images/faces/2.jpg";
import face3 from "/images/faces/3.jpg";
import face8 from "/images/faces/8.jpg";
import face9 from "/images/faces/9.jpg";
import face6 from "/images/faces/6.jpg";
import face4 from "/images/faces/4.jpg";
import face1 from "/images/faces/1.jpg";
import face16 from "/images/faces/10.jpg";
import face7 from "/images/faces/7.jpg";

export default {
    components: {
        PageHeader, TeamsCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Team",
                list: ['Pages', 'Team']
            },
            teamLimitValue: ['10'],
            teamLimitOptions: [10, 20, 30],
            teams: [
                {
                    id: 1, color: "warning", name: "Alexander Smith", email: "alexandersmith2135@gmail.com", since: "16 Months", projects: "45", position: "Member", coverImg: cover1, src: face11, socialMedia: [
                        { name: "facebook", links: "", icon: "facebook", iconColor: "primary" },
                        { name: "twitter", links: "", icon: "twitter-x", iconColor: "secondary" },
                        { name: "instagram", links: "", icon: "instagram", iconColor: "warning" },
                        { name: "github", links: "", icon: "github", iconColor: "success" },
                        { name: "youtube", links: "", icon: "youtube", iconColor: "danger" },
                    ],
                },
                {
                    id: 2, color: "fixed-white", name: "Alicia Sierra", email: "aliciasierra1645@gmail.com", since: "2 Years", projects: "78", position: "Associate", coverImg: cover2, src: face2, socialMedia: [
                        { name: "facebook", links: "", icon: "facebook", iconColor: "primary" },
                        { name: "twitter", links: "", icon: "twitter-x", iconColor: "secondary" },
                        { name: "instagram", links: "", icon: "instagram", iconColor: "warning" },
                        { name: "github", links: "", icon: "github", iconColor: "success" },
                        { name: "youtube", links: "", icon: "youtube", iconColor: "danger" },
                    ],
                },
                {
                    id: 3, color: "fixed-white", name: "Angelica Hose", email: "angelica143@gmail.com", since: "12 Months", projects: "35", position: "Member", coverImg: cover3, src: face4, socialMedia: [
                        { name: "facebook", links: "", icon: "facebook", iconColor: "primary" },
                        { name: "twitter", links: "", icon: "twitter-x", iconColor: "secondary" },
                        { name: "instagram", links: "", icon: "instagram", iconColor: "warning" },
                        { name: "github", links: "", icon: "github", iconColor: "success" },
                        { name: "youtube", links: "", icon: "youtube", iconColor: "danger" },
                    ],
                },
                {
                    id: 4, color: "fixed-white", name: "Jhope Joseph", email: "jhope.joseph@gmail.com", since: "3 Years", projects: "126", position: "Team Lead", coverImg: cover4, src: face10, socialMedia: [
                        { name: "facebook", links: "", icon: "facebook", iconColor: "primary" },
                        { name: "twitter", links: "", icon: "twitter-x", iconColor: "secondary" },
                        { name: "instagram", links: "", icon: "instagram", iconColor: "warning" },
                        { name: "github", links: "", icon: "github", iconColor: "success" },
                        { name: "youtube", links: "", icon: "youtube", iconColor: "danger" },
                    ],
                },
                {
                    id: 5, color: "warning", name: "King Martin", email: "martinking1998@gmail.com", since: "28 Months", projects: "114", position: "Member", coverImg: cover5, src: face13, socialMedia: [
                        { name: "facebook", links: "", icon: "facebook", iconColor: "primary" },
                        { name: "twitter", links: "", icon: "twitter-x", iconColor: "secondary" },
                        { name: "instagram", links: "", icon: "instagram", iconColor: "warning" },
                        { name: "github", links: "", icon: "github", iconColor: "success" },
                        { name: "youtube", links: "", icon: "youtube", iconColor: "danger" },
                    ],
                },
                {
                    id: 6, color: "fixed-white", name: "Susan Sane", email: "susanasane@gmail.com", since: "18 Months", projects: "74", position: "Member", coverImg: cover6, src: face5, socialMedia: [
                        { name: "facebook", links: "", icon: "facebook", iconColor: "primary" },
                        { name: "twitter", links: "", icon: "twitter-x", iconColor: "secondary" },
                        { name: "instagram", links: "", icon: "instagram", iconColor: "warning" },
                        { name: "github", links: "", icon: "github", iconColor: "success" },
                        { name: "youtube", links: "", icon: "youtube", iconColor: "danger" },
                    ],
                },
                {
                    id: 7, color: "fixed-white", name: "Brenda Hops", email: "brrendahops245@gmail.com", since: "16 Months", projects: "64", position: "Member", coverImg: cover7, src: face8, socialMedia: [
                        { name: "facebook", links: "", icon: "facebook", iconColor: "primary" },
                        { name: "twitter", links: "", icon: "twitter-x", iconColor: "secondary" },
                        { name: "instagram", links: "", icon: "instagram", iconColor: "warning" },
                        { name: "github", links: "", icon: "github", iconColor: "success" },
                        { name: "youtube", links: "", icon: "youtube", iconColor: "danger" },
                    ],
                },
                {
                    id: 8, color: "fixed-white", name: "Paul Rudd", email: "paulrudd143@gmail.com", since: "7 Months", projects: "17", position: "Member", coverImg: cover8, src: face14, socialMedia: [
                        { name: "facebook", links: "", icon: "facebook", iconColor: "primary" },
                        { name: "twitter", links: "", icon: "twitter-x", iconColor: "secondary" },
                        { name: "instagram", links: "", icon: "instagram", iconColor: "warning" },
                        { name: "github", links: "", icon: "github", iconColor: "success" },
                        { name: "youtube", links: "", icon: "youtube", iconColor: "danger" },
                    ],
                },
                {
                    id: 9, color: "fixed-white", name: "Elisha Jin", email: "elishajin@gmail.com", since: "4 Years", projects: "321", position: "Manager", coverImg: cover9, src: face15, socialMedia: [
                        { name: "facebook", links: "", icon: "facebook", iconColor: "primary" },
                        { name: "twitter", links: "", icon: "twitter-x", iconColor: "secondary" },
                        { name: "instagram", links: "", icon: "instagram", iconColor: "warning" },
                        { name: "github", links: "", icon: "github", iconColor: "success" },
                        { name: "youtube", links: "", icon: "youtube", iconColor: "danger" },
                    ],
                },
            ],
            teamMembers: [
                {
                    menuTitle: "TEAM UI"
                },
                {
                    name: "Angelica Hale", img: face3, status: ""
                },
                {
                    name: "Mona Magore", img: face5, status: "8 mins"
                },
                {
                    name: "Mark Wains", img: face15, status: ""
                },
                {
                    name: "Alex Carey", img: face12, status: ""
                },
                {
                    name: "Monika Karen", img: face7, status: "24 mins"
                },
                {
                    menuTitle: "TEAM REACT"
                },
                {
                    name: "Matthew Ray", img: face10, status: ""
                },
                {
                    name: "Melissa Blue", img: face8, status: ""
                },
                {
                    name: "Brenda Sams", img: face2, status: ""
                },
                {
                    name: "Muhammed Kher", img: face14, status: "13 mins"
                },
                {
                    name: "Dorga Boavan", img: face4, status: ""
                },
                {
                    name: "Yashna Polana", img: face13, status: "19 mins"
                },
                {
                    menuTitle: "TEAM TESTING"
                },
                {
                    name: "Jason Smith", img: face11, status: ""
                },
                {
                    name: "Sasha Hops", img: face6, status: "21 mins"
                },
                {
                    name: "Mark Zaker", img: face9, status: "38 mins"
                },
                {
                    name: "Suarez Adam", img: face16, status: ""
                },
                {
                    name: "Kiara Advensh", img: face1, status: "1 hr"
                }
            ]
        };
    },
};
</script>

<template>

    <div class="row mt-4">
        <div class="col-xl-9">
            <div class="team-members" id="team-members">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="card custom-card">
                            <div class="card-body">
                                <div class="team-header">
                                    <div class="d-flex flex-wrap align-items-center justify-content-between">
                                        <div class="h5 fw-semibold mb-0">Team</div>
                                        <div class="d-flex align-items-center">
                                            <div class="input-group">
                                                <input type="text" class="form-control bg-light border-0"
                                                    placeholder="Search Person Name"
                                                    aria-describedby="search-team-member">
                                                <button class="btn btn-light" type="button" id="search-team-member"><i
                                                        class="ri-search-line text-muted"></i></button>
                                            </div>
                                            <div class="dropdown ms-2">
                                                <button class="btn btn-light btn-wave waves-effect waves-light px-2"
                                                    type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ti ti-dots-vertical fs-18"></i>
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="javascript:void(0);">Delete
                                                            Team</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="javascript:void(0);">Edit</a>
                                                    </li>
                                                    <li><a class="dropdown-item" href="javascript:void(0);">Add
                                                            Member</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-12" v-for="card in teams" :key="card.id">
                        <TeamsCardComponent customCardClass="team-member-card" coverSrcClass="card-img-top" :card="card"
                            starIcon="ri-star-fill fs-16" cardBodyClass="p-0" :showDropdown=true
                            cardFooterClass="border-block-start-dashed text-center"></TeamsCardComponent>
                    </div>


                    <nav aria-label="...">
                        <ul class="pagination justify-content-end">
                            <li class="page-item disabled">
                                <span class="page-link">Previous</span>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                            <li class="page-item active" aria-current="page">
                                <span class="page-link">2</span>
                            </li>
                            <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="javascript:void(0);">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <div class="col-xl-3">
            <div class="team-groups">
                <div class="card custom-card">
                    <div class="card-header d-flex align-items-center justify-content-between">
                        <h6 class="fw-semibold mb-0">All Teams</h6>
                        <div>
                            <button class="btn btn-sm btn-primary-light" data-bs-toggle="modal"
                                data-bs-target="#create-team">Create Team<i
                                    class="ri-add-line ms-1 align-middle"></i></button>
                            <div class="modal fade" id="create-team" tabindex="-1" aria-labelledby="create-teamLabel"
                                aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h6 class="modal-title" id="create-teamLabel">Create Team</h6>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body px-4">
                                            <div class="row gy-3">
                                                <div class="col-xl-12">
                                                    <label for="team-name" class="form-label">Team Name</label>
                                                    <input type="text" class="form-control" id="team-name"
                                                        placeholder="Enter Name">
                                                </div>
                                                <div class="col-xl-12">
                                                    <label class="form-label">Maximum Team Limit</label>
                                                    <multiselect1 :searchable="false" :show-labels="false"
                                                        v-model="teamLimitValue" :options="teamLimitOptions"
                                                        :multiple="false" placeholder="Choose Limit">
                                                    </multiselect1>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-sm btn-light"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" class="btn btn-sm btn-primary">Create</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <PerfectScrollbar>
                            <div class="teams-nav" id="teams-nav">
                                <ul class="list-unstyled mb-0 mt-2">
                                    <li v-for="(member, key) of teamMembers" :key="key">
                                        <div v-if="member.menuTitle"
                                            class="d-flex justify-content-between align-items-center">
                                            <div class="fs-10 fw-semibold mb-2 text-muted">{{ member.menuTitle }}</div>
                                            <div>
                                                <v-tooltip activator="parent" location="top">Add Member</v-tooltip>
                                                <button class="btn btn-icon btn-sm btn-success-light btn-wave"
                                                    data-bs-toggle="modal" data-bs-target="#create-teamui-mem"><i
                                                        class="ri-add-line"></i></button>
                                            </div>
                                        </div>
                                        <a v-if="!member.menuTitle" href="javascript:void(0);">
                                            <div class="d-flex align-items-center">
                                                <div class="me-2 d-flex align-items-center">
                                                    <span class="avatar avatar-sm avatar-rounded online">
                                                        <img :src="member.img" alt="">
                                                    </span>
                                                </div>
                                                <div class="flex-fill">
                                                    <span>{{ member.name }}</span>
                                                </div>
                                                <div>
                                                    <span class="fs-10 fw-semibold text-muted">
                                                        {{ member.status }}
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </PerfectScrollbar>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Start:: add-members modals -->

    <!-- Start:: team ui modal -->
    <div class="modal fade" id="create-teamui-mem" tabindex="-1" aria-labelledby="create-teamuiLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="create-teamuiLabel">Add Member</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row">
                        <div class="col-xl-12">
                            <label for="team-name3" class="form-label">Name</label>
                            <input type="text" class="form-control" id="team-name3" placeholder="Enter Name">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-sm btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: team ui modal -->

    <!-- Start:: team react modal -->
    <div class="modal fade" id="create-teamreact-mem" tabindex="-1" aria-labelledby="create-teamreactLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="create-teamreactLabel">Add Member</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row">
                        <div class="col-xl-12">
                            <label for="team-name1" class="form-label">Name</label>
                            <input type="text" class="form-control" id="team-name1" placeholder="Enter Name">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-sm btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: team react modal -->

    <!-- Start:: team testing modal -->
    <div class="modal fade" id="create-teamtesting-mem" tabindex="-1" aria-labelledby="create-teamtestingLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h6 class="modal-title" id="create-teamtestingLabel">Add Member</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body px-4">
                    <div class="row">
                        <div class="col-xl-12">
                            <label for="team-name2" class="form-label">Name</label>
                            <input type="text" class="form-control" id="team-name2" placeholder="Enter Name">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-sm btn-primary">Add</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: team testing modal -->

    <!-- End:: add-members modals -->
</template>

<style scoped></style>
