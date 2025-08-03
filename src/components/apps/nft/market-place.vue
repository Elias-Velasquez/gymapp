<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import AuctionsCardComponent from "../../../shared/components/@spk/dashboard/nft-auctions-cards.vue";
import face1 from '/images/faces/1.jpg';
import face2 from '/images/faces/2.jpg';
import face3 from '/images/faces/3.jpg';
import face4 from '/images/faces/4.jpg';
import face5 from '/images/faces/5.jpg';
import face6 from '/images/faces/6.jpg';
import face7 from '/images/faces/7.jpg';
import face8 from '/images/faces/8.jpg';
import face9 from '/images/faces/9.jpg';
import face10 from '/images/faces/10.jpg';
import face11 from '/images/faces/11.jpg';
import face12 from '/images/faces/12.jpg';
import nft18 from '/images/nft-images/18.png';
import nft19 from '/images/nft-images/19.png';
import nft20 from '/images/nft-images/20.png';
import nft21 from '/images/nft-images/21.png';
import nft22 from '/images/nft-images/22.png';
import nft23 from '/images/nft-images/23.png';
import nft24 from '/images/nft-images/24.png';
import nft25 from '/images/nft-images/25.png';
import nft26 from '/images/nft-images/26.png';
import nft27 from '/images/nft-images/27.png';
import nft28 from '/images/nft-images/28.png';
import nft29 from '/images/nft-images/29.png';
import Ethereum from "/images/crypto-currencies/square-color/Ethereum.svg";



export default {
    components: {
        PageHeader,
        AuctionsCardComponent
    },
    data() {
        return {
            dataToPass: {
                current: "Market Place",
                list: [
                    'Apps', 'nft', 'Market Place'
                ]
            },
            marketPlaceData: [
                { id: 1, image: nft18, auctionTime: '04hrs : 24m : 38s', likes: '0.47k', creatorImage: face1, creatorName: 'NFTNinja', creatorUsername: '@nftninja', title: 'Digital Dreamscape', subtitle: 'Highest Bid', highestBid: '0.24ETH', coinImage: Ethereum, tab: "art" },
                { id: 2, image: nft19, auctionTime: '04hrs : 24m : 38s', likes: '1.19k', creatorImage: face2, creatorName: 'ArtTechie', creatorUsername: '@arttechie', title: 'Neo-Nebulae', subtitle: 'Highest Bid', highestBid: '0.32ETH', coinImage: Ethereum, tab: "art" },
                { id: 3, image: nft20, auctionTime: '04hrs : 24m : 38s', likes: '2.05k', creatorImage: face3, creatorName: 'BitMaster', creatorUsername: '@bit_master', title: 'Chromatic Chaos', subtitle: 'Highest Bid', highestBid: '0.19ETH', coinImage: Ethereum, tab: "art" },
                { id: 4, image: nft21, auctionTime: '04hrs : 24m : 38s', likes: '0.19k', creatorImage: face4, creatorName: 'CyberCanvas', creatorUsername: '@cybercanvas', title: 'Surreal Synthesis', subtitle: 'Highest Bid', highestBid: '0.11ETH', coinImage: Ethereum, tab: "gameing" },
                { id: 5, image: nft22, auctionTime: '04hrs : 24m : 38s', likes: '0.65k', creatorImage: face5, creatorName: 'DigitalDreamer', creatorUsername: '@d_dreamer', title: 'Virtual Visions', subtitle: 'Highest Bid', highestBid: '0.10ETH', coinImage: Ethereum, tab: "gameing", },
                { id: 6, image: nft23, auctionTime: '04hrs : 24m : 38s', likes: '0.52k', creatorImage: face6, creatorName: 'PixelProphet', creatorUsername: '@pixelprophet', title: 'Electric Euphoria', subtitle: 'Highest Bid', highestBid: '0.45ETH', coinImage: Ethereum, tab: "domain" },
                { id: 7, image: nft24, auctionTime: '04hrs : 24m : 38s', likes: '1.55k', creatorImage: face7, creatorName: 'TechnoTalent', creatorUsername: '@techno_t', title: 'Crypto Cosmos', subtitle: 'Highest Bid', highestBid: '0.38ETH', coinImage: Ethereum, tab: "music" },
                { id: 8, image: nft25, auctionTime: '04hrs : 24m : 38s', likes: '1.75k', creatorImage: face8, creatorName: 'PixelMaestro', creatorUsername: '@pixelmaestro', title: 'Pixel Prism', subtitle: 'Highest Bid', highestBid: '0.23ETH', coinImage: Ethereum, tab: "estate" },
                { id: 9, image: nft26, auctionTime: '04hrs : 24m : 38s', likes: '0.83k', creatorImage: face9, creatorName: 'BitBard', creatorUsername: '@bitbard', title: 'Meta-Morphosis', subtitle: 'Highest Bid', highestBid: '0.38ETH', coinImage: Ethereum, tab: "sports" },
                { id: 10, image: nft27, auctionTime: '04hrs : 24m : 38s', likes: '0.16k', creatorImage: face10, creatorName: 'CryptoCraft', creatorUsername: '@cryptocraft', title: 'Virtual Veracity', subtitle: 'Highest Bid', highestBid: '0.15ETH', coinImage: Ethereum, tab: "fashon" },
                { id: 11, image: nft28, auctionTime: '04hrs : 24m : 38s', likes: '1.38k', creatorImage: face11, creatorName: 'ArtWizard', creatorUsername: '@artwizard', title: 'Quantum Quirk', subtitle: 'Highest Bid', highestBid: '0.33ETH', coinImage: Ethereum, tab: "avatars" },
                { id: 12, image: nft29, auctionTime: '04hrs : 24m : 38s', likes: '1.32k', creatorImage: face12, creatorName: 'DigitalMuse', creatorUsername: '@digitalmuse', title: 'Cybernetic Collage', subtitle: 'Highest Bid', highestBid: '0.59ETH', coinImage: Ethereum, tab: "memes" },
            ],
        };
    },
    computed: {
        filteredArtData() {
            return this.marketPlaceData.filter(item => item.tab === "art");
        },
        filteredGameingData() {
            return this.marketPlaceData.filter(item => item.tab === "gameing");
        },
        filteredDomainData() {
            return this.marketPlaceData.filter(item => item.tab === "domain");
        },
        filteredMusicData() {
            return this.marketPlaceData.filter(item => item.tab === "music");
        },
        filteredEstateData() {
            return this.marketPlaceData.filter(item => item.tab === "estate");
        },
        filteredSportsData() {
            return this.marketPlaceData.filter(item => item.tab === "sports");
        },
        filteredFashonData() {
            return this.marketPlaceData.filter(item => item.tab === "fashon");
        },
        filteredAvatarsData() {
            return this.marketPlaceData.filter(item => item.tab === "avatars");
        },
        filteredMemesData() {
            return this.marketPlaceData.filter(item => item.tab === "memes");
        },
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start::row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-body">
                    <div class="d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div>
                            <ul class="nav nav-tabs nav-tabs-header mb-0" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-all" aria-selected="true">All</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-art" aria-selected="false" tabindex="-1">Art</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-gaming" aria-selected="false" tabindex="-1">Gaming</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-domain" aria-selected="false" tabindex="-1">Domain</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-music" aria-selected="false" tabindex="-1">Music</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-realestate" aria-selected="false" tabindex="-1">Real Estate</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-sports" aria-selected="false" tabindex="-1">Sports</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-fashion" aria-selected="false" tabindex="-1">Fashion</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-avatars" aria-selected="false" tabindex="-1">Avatars</a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page"
                                        href="#nft-memes" aria-selected="false" tabindex="-1">Memes</a>
                                </li>
                            </ul>
                        </div>
                        <div class="btn-list">
                            <button type="button" class="btn btn-sm btn-secondary btn-wave">Filters</button>
                            <a href="javascript:void(0);"
                                class="btn btn-sm btn-wave btn-primary waves-effect waves-light"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li><a class="dropdown-item" href="javascript:void(0);">New Collection</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">High - Low</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Low - High</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="tab-content">
                <div class="tab-pane show active p-0 border-0" id="nft-all" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                            v-for="card in marketPlaceData" :key="card.id">
                            <AuctionsCardComponent :card="card" />
                        </div>
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
                <div class="tab-pane p-0" id="nft-art" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                            v-for="card in filteredArtData" :key="card.id">
                            <AuctionsCardComponent :card="card" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-gaming" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                            v-for="card in filteredGameingData" :key="card.id">
                            <AuctionsCardComponent :card="card" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-domain" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                            v-for="card in filteredDomainData" :key="card.id">
                            <AuctionsCardComponent :card="card" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-music" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                            v-for="card in filteredMusicData" :key="card.id">
                            <AuctionsCardComponent :card="card" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-realestate" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                            v-for="card in filteredEstateData" :key="card.id">
                            <AuctionsCardComponent :card="card" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-sports" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                            v-for="card in filteredSportsData" :key="card.id">
                            <AuctionsCardComponent :card="card" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-fashion" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                            v-for="card in filteredFashonData" :key="card.id">
                            <AuctionsCardComponent :card="card" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-avatars" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                            v-for="card in filteredAvatarsData" :key="card.id">
                            <AuctionsCardComponent :card="card" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane p-0" id="nft-memes" role="tabpanel">
                    <div class="row">
                        <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12"
                            v-for="card in filteredMemesData" :key="card.id">
                            <AuctionsCardComponent :card="card" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->
</template>

<style scoped></style>
