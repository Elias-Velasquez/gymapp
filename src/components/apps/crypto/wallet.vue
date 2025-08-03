<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import WalletCardComponent from "../../../shared/components/@spk/apps/wallet-cards.vue";
import WalletaddressCardComponent from "../../../shared/components/@spk/apps/walletAddress-cards.vue";
import squareLitecoin from "/images/crypto-currencies/square-color/Litecoin.svg";
import squareEthereum from "/images/crypto-currencies/square-color/Ethereum.svg";
import squareBitcoin from "/images/crypto-currencies/square-color/Bitcoin.svg";
import squareRipple from "/images/crypto-currencies/square-color/Ripple.svg";
import media89 from "/images/media/media-89.png";

export default {
  components: {
    PageHeader,
    WalletCardComponent,
    WalletaddressCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Wallet",
        list: ['Apps', 'Crypto', 'Wallet']
      },
      wallets: [
        { id: 1, title: "BTC WALLET", available: "Available BTC", count: "0.05437 BTC", price: "$1646.94 USD", usd: "In USD", iconSrc: squareBitcoin },
        { id: 2, title: "ETH WALLET", available: "Available ETH", count: "2.3892 ETH", price: "$4581.24 USD", usd: "In USD", iconSrc: squareEthereum },
        { id: 3, title: "XRP WALLET", available: "Available XRP", count: "234.943 XRP", price: "$192.29 USD", usd: "In USD", iconSrc: squareRipple },
        { id: 4, title: "LTC WALLET", available: "Available LTC", count: "37.254 LTC", price: "$3519.01 USD", usd: "In USD", iconSrc: squareLitecoin },
      ],
      walletAddress: [
        { id: 1, title: "BTC Wallet Address", connectBtn: "Connect", walletAddress: "Wallet Address", code: "afb0dc8bc84625587b85415c86ef43ed8df", qrCodeSrc: media89, wallet: [{ color: "success", icon: "ti ti-arrow-narrow-down fs-20", share: "Received", count: "6.2834", coin: " BTC" }, { color: "danger", icon: "ti ti-arrow-narrow-up fs-20", share: "Sent", count: "2.7382", coin: "BTC" }, { color: "secondary", icon: "ti ti-wallet fs-20", share: "Wallet Balance", count: "12.5232 ", coin: "BTC" }] },
        { id: 2, title: "ETH Wallet Address", connectBtn: "Connect", walletAddress: "Wallet Address", code: "afb0dc8bc84625587b85415c86ef43ed8df", qrCodeSrc: media89, wallet: [{ color: "success", icon: "ti ti-arrow-narrow-down fs-20", share: "Received", count: "6.2834", coin: " ETH" }, { color: "danger", icon: "ti ti-arrow-narrow-up fs-20", share: "Sent", count: "2.7382", coin: "ETH" }, { color: "secondary", icon: "ti ti-wallet fs-20", share: "Wallet Balance", count: "12.5232 ", coin: "ETH" }] },
        { id: 3, title: "LTC Wallet Address", connectBtn: "Connect", walletAddress: "Wallet Address", code: "afb0dc8bc84625587b85415c86ef43ed8df", qrCodeSrc: media89, wallet: [{ color: "success", icon: "ti ti-arrow-narrow-down fs-20", share: "Received", count: "6.2834", coin: " LTC" }, { color: "danger", icon: "ti ti-arrow-narrow-up fs-20", share: "Sent", count: "2.7382", coin: "LTC" }, { color: "secondary", icon: "ti ti-wallet fs-20", share: "Wallet Balance", count: "12.5232 ", coin: "LTC" }] },
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
      <div class="col-xl-4">
        <div v-for="card in wallets" :key="card.id">
          <WalletCardComponent :card="card" />
        </div>
      </div>
      <div class="col-xl-8">
        <div class="row">
          <div class="col-xl-12">
            <div v-for="card in walletAddress" :key="card.id">
              <WalletaddressCardComponent :card="card" cardHeaderClass="justify-content-between" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End::row-1 -->
  </div>
</template>

<style scoped></style>
