<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import nft34 from "/images/nft-images/34.png";
import nft35 from "/images/nft-images/35.png";
import nft36 from "/images/nft-images/36.png";
import nft39 from "/images/nft-images/39.png";
import nft37 from "/images/nft-images/37.png";
import nft38 from "/images/nft-images/38.png";
import nft40 from "/images/nft-images/40.png";
import nft41 from "/images/nft-images/41.png";
import nft42 from "/images/nft-images/42.png";
import nft43 from "/images/nft-images/43.png";
import nft44 from "/images/nft-images/44.png";
import nft45 from "/images/nft-images/45.png";
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue";

export default {
  components: {
    PageHeader,
    SimpleCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Wallet Integration",
        list: ['Apps', 'nft', 'Wallet Integration']
      },
      nftList: [
        { name: 'Etherium', image: nft34 },
        { name: 'Binance', image: nft35 },
        { name: 'Solana', image: nft36 },
        { name: 'Tezos', image: nft39 },
        { name: 'Avalanche', image: nft37 },
        { name: 'Cardano', image: nft38 },
      ],
      wallets: [
        { name: 'MetaMask', image: nft42, active: true, paddingClass: "p-2" },
        { name: 'Enjin Wallet', image: nft41, paddingClass: "p-2" },
        { name: 'Trust Wallet', image: nft43, paddingClass: "" },
        { name: 'Coinbase Wallet', image: nft40, paddingClass: "p-2" },
        { name: 'Lido', image: nft44, paddingClass: "p-2" },
        { name: 'Huobi Wallet', image: nft45 },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <div class="container">
    <!-- Start::row-1 -->
    <div class="row">
      <div class="col-xl-3">
        <SimpleCardComponent title="Choose Network" customCardClass="overflow-hidden" cardClassBody="p-0">
          <ul class="list-group list-group-flush nft-list">
            <li class="list-group-item" v-for="(item, index) in nftList" :key="index">
              <a href="javascript:void(0);" class="stretched-link"></a>
              <div class="d-flex align-items-center gap-2">
                <div>
                  <span class="avatar avatar-rounded avatar-sm bg-light p-1">
                    <img :src="item.image" :alt="item.name">
                  </span>
                </div>
                <div class="fs-14 fw-semibold">{{ item.name }}</div>
              </div>
            </li>
          </ul>
        </SimpleCardComponent>
      </div>
      <div class="col-xl-9">
        <SimpleCardComponent title="Choose Wallet" customCardClass="overflow-hidden" cardClassBody="p-4"
          cardHeaderClass="justify-content-between" :showCardFooter="true">
          <template v-slot:showheader>
            <div>
              <button class="btn btn-secondary btn-wave">Add New Wallet</button>
            </div>
          </template>
          <div class="row justify-content-center">
            <div class="col-xxl-3" v-for="(wallet, index) in wallets" :key="index">
              <div class="card custom-card nft-wallet" :class="{ active: wallet.active }">
                <div class="card-body p-3">
                  <a href="javascript:void(0);" class="stretched-link"></a>
                  <div class="d-flex align-items-center justify-content-center gap-3">
                    <div class="lh-1">
                      <span :class="`avatar avatar-rounded bg-light ${wallet.paddingClass}`">
                        <img :src="wallet.image" :alt="wallet.name">
                      </span>
                    </div>
                    <div>
                      <h6 class="fw-semibold mb-0">{{ wallet.name }}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <template v-slot:cardFooter>
            <div>
              <button class="btn btn-success float-end btn-wave">Connect</button>
            </div>
          </template>
        </SimpleCardComponent>
      </div>
    </div>
    <!--End::row-1 -->
  </div>
</template>

<style scoped></style>
