<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import liveAuction from "../../../shared/UI/liveAuction.vue";
import CrmdealCardComponent from "../../../shared/components/@spk/dashboard/crm-deal-cards.vue";
import faces1 from '/images/faces/1.jpg';
import faces3 from '/images/faces/3.jpg';
import faces5 from '/images/faces/5.jpg';
import faces7 from '/images/faces/7.jpg';
import faces8 from '/images/faces/8.jpg';
import faces11 from '/images/faces/11.jpg';
import faces13 from '/images/faces/13.jpg';
import faces15 from '/images/faces/15.jpg';
import nftimages4 from '/images/nft-images/4.png';
import nftimages30 from '/images/nft-images/30.png';
import nftimages31 from '/images/nft-images/31.png';
import nftimages2 from '/images/nft-images/2.png';
import nftimages33 from '/images/nft-images/33.png';
import nftimages3 from '/images/nft-images/3.png';
import nftimages5 from '/images/nft-images/5.png';
import nftimages18 from '/images/nft-images/18.png';
import nftimages8 from '/images/nft-images/8.png';
import nftimages11 from '/images/nft-images/11.png';
import nftimages22 from '/images/nft-images/22.png';
import nftimages1 from '/images/nft-images/1.png';
import nftimages25 from '/images/nft-images/25.png';
import nftimages21 from '/images/nft-images/21.png';
import nftimages26 from '/images/nft-images/26.png';
import nftimages32 from '/images/nft-images/32.png';
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue";

export default {
    components: {
        PageHeader,
        liveAuction,
        CrmdealCardComponent,
        SimpleCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Live Auction",
                list: ['Apps', 'NFT', 'Live Auction']
            },
            liveAuctionData: [
                { bg: nftimages4, auctionTime: '04 Days 03 : 44 : 04', likes: '1.2', image: faces11, name: 'BitMaster', cId: '@bit_master', title: 'Chromatic Chaos', subtitle: 'Highest Bid', price: '1.19' },
                { bg: nftimages30, auctionTime: '04 Days 03 : 44 : 04', likes: '1.45', image: faces1, name: 'SpaceY NFT', cId: '@sp1116', title: 'NFT Lorem Shapes', subtitle: 'Highest Bid', price: '1.16' },
                { bg: nftimages31, auctionTime: '04 Days 03 : 44 : 04', likes: '0.37', image: faces5, name: 'NFTNinja', cId: '@nftninja', title: 'Chromatic Chaos', subtitle: 'Highest Bid', price: '1.164' },
                { bg: nftimages2, auctionTime: '04 Days 03 : 44 : 04', likes: '0.62', image: faces3, name: 'CryptoCraft', cId: '@cryptocraft', title: 'Virtual Veracity', subtitle: 'Highest Bid', price: '2.57' },
                { bg: nftimages33, auctionTime: '04 Days 03 : 44 : 04', likes: '1.2', image: faces13, name: 'DigitalDreamer', cId: '@d_dreamer', title: 'Crypto Cosmos', subtitle: 'Highest Bid', price: '0.45' },
                { bg: nftimages3, auctionTime: '04 Days 03 : 44 : 04', likes: '1.2', image: faces8, name: 'PixelProphet', cId: '@pixelprophet', title: 'Electric Euphoria', subtitle: 'Highest Bid', price: '0.45' },
                { bg: nftimages32, auctionTime: '04 Days 03 : 44 : 04', likes: '1.9', image: faces7, name: 'PixelMaestro', cId: '@pixelmaestro', title: 'Meta-Morphosis', subtitle: 'Highest Bid', price: '2.07' },
                { bg: nftimages5, auctionTime: '04 Days 03 : 44 : 04', likes: '1.3', image: faces15, name: 'ArtTechie', cId: '@arttechie', title: 'Digital Dreamscape', subtitle: 'Highest Bid', price: '0.24' },
            ],
            TopInstructors: [
                { name: `Joseph Smith<i class="bi bi-patch-check-fill text-success ms-2"></i>`, avatarRounded: "avatar-rounded", textColors: "muted", colors: "muted", text: "@josephsmith", balance: "+18.93ETH", avatar: nftimages2, downTextClass: "d-block text-muted fs-11", downText: "22 NFT's", textColor: "text-success", size: "avatar avatar-md", liClass: "list-group-item" },
                { name: `Mortal Yun<i class="bi bi-patch-check-fill text-success ms-2"></i>`, avatarRounded: "avatar-rounded", textColors: "muted", colors: "muted", text: "@elishasean", balance: "+12.45ETH", avatar: nftimages18, downTextClass: "d-block text-muted fs-11", downText: "17 NFT's", textColor: "text-success", size: "avatar avatar-md", liClass: "list-group-item" },
                { name: `Elisha Sean <i class="bi bi-patch-check-fill text-success ms-2"></i>`, avatarRounded: "avatar-rounded", textColors: "muted", colors: "muted", text: "@jsontaylor", balance: "+11.25ETH", avatar: nftimages8, downTextClass: "d-block text-muted fs-11", downText: "15 NFT's", textColor: "text-success", size: "avatar avatar-md", liClass: "list-group-item" },
                { name: `Saiu Sarah <i class="bi bi-patch-check-fill text-success ms-2"></i>`, avatarRounded: "avatar-rounded", textColors: "muted", colors: "muted", text: "@juliacamo", balance: "+10.48ETH", avatar: nftimages11, downTextClass: "d-block text-muted fs-11", downText: "14 NFT's", textColor: "text-success", size: "avatar avatar-md", liClass: "list-group-item" },
                { name: `Charles Achilles <i class="bi bi-patch-check-fill text-success ms-2"></i>`, avatarRounded: "avatar-rounded", textColors: "muted", colors: "muted", text: "@charlesachilles", balance: "+9.58ETH", avatar: nftimages22, downTextClass: "d-block text-muted fs-11", downText: "12 NFT's", textColor: "text-success", size: "avatar avatar-md", liClass: "list-group-item" },
                { name: `Amanda Nanes <i class="bi bi-patch-check-fill text-success ms-2"></i>`, avatarRounded: "avatar-rounded", textColors: "muted", colors: "muted", text: "amandananes@", balance: "+7.67ETH", avatar: nftimages1, downTextClass: "d-block text-muted fs-11", downText: "11 NFT's", textColor: "text-success", size: "avatar avatar-md", liClass: "list-group-item" },

            ],
            notifications: [
                { title: 'DreamSpace', image: nftimages31, timeAgo: '24 mins ago', type: 'purchase', buyer: 'Mitchell', amount: '0.57ETH', color: 'success' },
                { title: 'DreamSpace', image: nftimages25, timeAgo: '16 mins ago', type: 'follow', follower: 'mark zensberg', color: '' },
                { title: 'Neo Nebulae', image: nftimages21, timeAgo: '5 mins ago', type: 'interest', interestItem: 'NeoNebulae', color: '' },
                { title: 'Neo Nebulae', image: nftimages26, timeAgo: '16 mins ago', type: 'purchase', buyer: 'CyberCanvas', amount: '1.345ETH', color: 'pink' },
            ],
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />
    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xxl-9 col-xl-9 col-lg-8">
            <div class="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                <div class="nft-tag nft-tag-primary active">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-world fs-20"></i></span>
                    <span class="nft-tag-text">All</span>
                </div>
                <div class="nft-tag nft-tag-secondary">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-flame fs-20"></i></span>
                    <span class="nft-tag-text">New Trends</span>
                </div>
                <div class="nft-tag nft-tag-info">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-palette fs-20"></i></span>
                    <span class="nft-tag-text">Art Work</span>
                </div>
                <div class="nft-tag nft-tag-success">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-device-gamepad-2 fs-20"></i></span>
                    <span class="nft-tag-text">Games</span>
                </div>
                <div class="nft-tag nft-tag-danger">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-tie fs-20"></i></span>
                    <span class="nft-tag-text">Fashion</span>
                </div>
                <div class="nft-tag nft-tag-warning">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-music fs-20"></i></span>
                    <span class="nft-tag-text">Music</span>
                </div>
                <div class="nft-tag nft-tag-dark">
                    <a href="javascript:void(0);" class="stretched-link"></a>
                    <span class="nft-tag-icon"><i class="ti ti-gift fs-20"></i></span>
                    <span class="nft-tag-text">Others</span>
                </div>
            </div>
            <div class="row">
                <h6 class="fw-semibold mb-3">Live Auction:</h6>
                <liveAuction :liveAuctionData=liveAuctionData></liveAuction>
                <nav aria-label="Page navigation">
                    <ul class="pagination justify-content-end mb-4">
                        <li class="page-item disabled">
                            <a class="page-link">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-4">
            <div class="row">
                <div class="col-xl-12">
                    <SimpleCardComponent title="Featured Creators" cardHeaderClass="justify-content-between"
                        cardClassBody="p-0" customCardClass="overflow-hidden">
                        <template v-slot:showheader>
                            <div> <button class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">View
                                    All</button> </div>
                        </template>
                        <CrmdealCardComponent :card="TopInstructors" dflexClass="align-items-center" liClass="pb-2"
                            ulClass="list-group list-group-flush" />
                    </SimpleCardComponent>
                </div>
                <div class="col-xl-12">
                    <SimpleCardComponent title="Recent Activity" customCardClass="overflow-hidden"
                        cardHeaderClass="justify-content-between" cardClassBody="p-0">
                        <template v-slot:showheader>
                            <div class="dropdown">
                                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Today<i class="ri-arrow-down-s-line align-middle ms-1"></i>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                    <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                                    <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                                </ul>
                            </div>
                        </template>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" v-for="(notification, index) in notifications" :key="index">
                                <div class="d-flex gap-3 align-items-center flex-wrap">
                                    <div class="lh-1">
                                        <span class="avatar avatar-xl">
                                            <img :src="notification.image" :alt="notification.title">
                                        </span>
                                    </div>
                                    <div>
                                        <div class="mb-1">
                                            <a href="javascript:void(0);" class="fw-semibold">{{ notification.title
                                            }}</a>
                                            <span class="fs-12 text-muted ms-2 d-inline-block">{{ notification.timeAgo
                                            }}</span>
                                        </div>
                                        <div class="fs-13">
                                            <span v-if="notification.type === 'purchase'">Purchsed from you by
                                                <a class="text-decoration-underline" href="javascript:void(0);">{{
                                                    notification.buyer
                                                }}</a> for
                                                <span :class="`text-${notification.color} fw-semibold fs-12`">{{
                                                    notification.amount
                                                }}</span>.
                                            </span>
                                            <span v-else-if="notification.type === 'follow'">
                                                You started following <span class="fw-semibold">{{ notification.follower
                                                }}</span>.
                                            </span>
                                            <span v-else-if="notification.type === 'interest'">
                                                You showed interest in purchasing <a href="javascript:void(0);"
                                                    class="fs-12 text-warning fw-semibold">{{ notification.interestItem
                                                    }}</a>.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </SimpleCardComponent>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->
</template>

<style scoped></style>
