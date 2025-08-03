<script lang="ts">
import PageHeader from '../../shared/components/pageheader/pageheader.vue';
import * as cryptoData from '../../data/dashboards/crypto';
import CrmdealCardComponent from "../../shared/components/@spk/dashboard/crm-deal-cards.vue";
import CryptoCardComponent from "../../shared/components/@spk/dashboard/crypto-cards.vue";
import ChartCardComponent from "../../shared/components/@spk/dashboard/chart-cards.vue";
import CardComponent from "../../shared/components/@spk/tablewith-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
  components: {
    PageHeader,
    CrmdealCardComponent,
    CryptoCardComponent,
    ChartCardComponent,
    CardComponent,
    SimpleCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Crypto",
        list: ['Dashboards', 'Crypto']
      },
      cryptoData: cryptoData,
      singleSelecteValue: { name: 'BTC', language: 'BTC' },
      singleSelecteValue2: { name: 'BTC', language: 'BTC' },
      multiSelecteValue1: null,
      singleSelecteValue1: { name: 'USD', language: 'USD' },
      singleSelecteValue3: { name: 'USD', language: 'USD' },
      multiSelecteValue: null,
      singleSelecteOptions: [
        { name: 'USD', language: 'USD' },
        { name: 'AED', language: 'AED' },
        { name: 'AUD', language: 'AUD' },
        { name: 'ARS', language: 'ARS' },
        { name: 'AZN', language: 'AZN' },
        { name: 'BGN', language: 'BGN' },
        { name: 'BRL', language: 'BRL' },
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-9">
      <div class="row">
        <div class="col-xxl-4 col-xl-4 col-lg-12" v-for="card in cryptoData.crypto" :key="card.id">
          <CryptoCardComponent :card="card" customCardClass="btc-chart" />
        </div>
        <div class="col-xxl-8 col-xl-7">
          <ChartCardComponent :card="card" title="Crypto Statistics"
            v-for="(card, index) in cryptoData.cryptoStatistics" :key="index">
            <template v-slot:cardHeader>
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-primary btn-sm btn-wave waves-effect waves-light">1D</button>
                <button type="button" class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1W</button>
                <button type="button" class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1M</button>
                <button type="button" class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">3M</button>
                <button type="button" class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">6M</button>
                <button type="button" class="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1Y</button>
              </div>
            </template>
            <template v-slot:showData>
              <div class="d-flex flex-wrap  border-bottom border-block-end-dashed pb-3">
                <div class="me-3">
                  <span class="avatar avatar-md avatar-rounded p-2 bg-light">
                    <img src="/images/crypto-currencies/regular/Bitcoin.svg" alt="">
                  </span>
                </div>
                <div class="d-flex flex-wrap justify-content-sm-evenly flex-fill">
                  <div class="m-sm-0 m-2" v-for="(card, index) in cryptoData.statistics" :key="index">
                    <span>{{ card.label }}</span>
                    <p :class="`text-${card.class} fw-semibold mb-0`">{{ card.value }}</p>
                  </div>
                </div>
              </div>
            </template>
          </ChartCardComponent>
        </div>
        <div class="col-xxl-4 col-xl-5">
          <SimpleCardComponent title="Recent Transactions" cardHeaderClass="justify-content-between">
            <template v-slot:showheader>
              <div class="dropdown">
                <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fe fe-more-vertical"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
                </ul>
              </div>
            </template>
            <CrmdealCardComponent :card="cryptoData.recentTransactions" ulClass="list-unstyled crm-top-deals mb-0" />
          </SimpleCardComponent>
        </div>
      </div>
    </div>
    <div class="col-xxl-3">
      <div class="row">
        <div class="col-xl-12">
          <div class="card custom-card">
            <div class="card-header">
              <div>
                <div class="mb-1">Wallet Value<span class="fs-10 badge bg-success-transparent text-success p-1 ms-2"><i
                      class="ri-arrow-up-s-line align-middle me-1"></i>12.2%</span></div>
                <div class="fs-20 fw-semibold">$132,12933.000</div>
                <small class="text-muted fw-semibold">12 BTC</small>
              </div>
              <div class="ms-auto">
                <span class="avatar avatar-xxl">
                  <img class="buy-sell-image" src="/images/media/media-82.png" alt="">
                </span>
              </div>
            </div>
            <div class="card-body">
              <ul class="nav nav-tabs tab-style-1 d-sm-flex d-block nav-justified" role="tablist">
                <li class="nav-item me-sm-2 me-0">
                  <a class="nav-link active" data-bs-toggle="tab" data-bs-target="#buy-crypto" aria-current="page"
                    href="#buy-crypto">Buy</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="tab" data-bs-target="#sell-crypto" href="#sell-crypto">Sell</a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane border-0 active p-0 pt-1" id="buy-crypto" role="tabpanel"
                  aria-labelledby="buy-crypto">
                  <div class="input-group mb-3 d-flex flex-nowrap">
                    <input type="text" class="form-control form-control-sm crypto-buy-sell-input"
                      aria-label="crypto buy select" placeholder="Select Currency">
                    <multiselect1 :show-labels="false" v-model="singleSelecteValue" :options="singleSelecteOptions"
                      placeholder="Select one" label="name" track-by="name">
                    </multiselect1>
                  </div>
                  <div class="input-group mb-3 d-flex flex-nowrap">
                    <input type="text" class="form-control form-control-sm crypto-buy-sell-input"
                      aria-label="crypto buy select" placeholder="36,335.00">
                    <multiselect1 :show-labels="false" v-model="singleSelecteValue1" :options="singleSelecteOptions"
                      placeholder="Select one" label="name" track-by="name">
                    </multiselect1>
                  </div>
                  <div>
                    <div class="fs-14 py-2"><span class="fw-semibold text-dark">Price:</span><span
                        class="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span
                        class="text-dark fw-semibold float-end">BTC</span></div>
                    <div class="fs-14 py-2"><span class="fw-semibold text-dark">Amount:</span><span
                        class="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span
                        class="text-dark fw-semibold float-end">LTC</span></div>
                    <div class="fw-semibold fs-14 py-2">Total: <span class="fs-14 d-inline-block">22.00 BTC</span></div>
                    <div class="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                    <label class="fw-semibold fs-12 mt-4 mb-3">SELECT PAYMENT METHOD :</label>
                    <div class="row g-2">
                      <div class="col-xl-6">
                        <div class="p-2 border rounded">
                          <div class="form-check mb-0">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                              checked>
                            <label class="form-check-label fs-12" for="flexRadioDefault1">
                              Credit / Debit Cards
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="p-2 border rounded">
                          <div class="form-check mb-0">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                            <label class="form-check-label fs-12" for="flexRadioDefault2">
                              Paypal
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-grid mt-4 pt-1">
                    <button type="button" class="btn btn-primary btn-wave">BUY</button>
                  </div>
                </div>
                <div class="tab-pane border-0 p-0 pt-1" id="sell-crypto" role="tabpanel" aria-labelledby="sell-crypto">
                  <div class="input-group mb-3 d-flex flex-nowrap">
                    <input type="text" class="form-control form-control-sm crypto-buy-sell-input"
                      aria-label="crypto buy select" placeholder="Select Currency">
                    <multiselect1 :show-labels="false" v-model="singleSelecteValue2" :options="singleSelecteOptions"
                      placeholder="Select one" label="name" track-by="name">
                    </multiselect1>
                  </div>
                  <div class="input-group mb-3 d-flex flex-nowrap">
                    <input type="text" class="form-control form-control-sm crypto-buy-sell-input"
                      aria-label="crypto buy select" placeholder="36,335.00">
                    <multiselect1 :show-labels="false" v-model="singleSelecteValue3" :options="singleSelecteOptions"
                      placeholder="Select one" label="name" track-by="name">
                    </multiselect1>
                  </div>
                  <div>
                    <div class="fs-14 py-2"><span class="fw-semibold text-dark">Price:</span><span
                        class="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span
                        class="text-dark fw-semibold float-end">BTC</span></div>
                    <div class="fs-14 py-2"><span class="fw-semibold text-dark">Amount:</span><span
                        class="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span
                        class="text-dark fw-semibold float-end">LTC</span></div>
                    <div class="fw-semibold fs-14 py-2">Total: <span class="fs-14 d-inline-block">22.00 BTC</span></div>
                    <div class="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                    <label class="fw-semibold fs-12 mt-4 mb-3">SELECT PAYMENT METHOD :</label>
                    <div class="row g-2">
                      <div class="col-xl-6">
                        <div class="p-2 border rounded">
                          <div class="form-check mb-0">
                            <input class="form-check-input" type="radio" name="sellcrypto" id="sellcrypto1">
                            <label class="form-check-label fs-12" for="sellcrypto1">
                              Credit / Debit Cards
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6">
                        <div class="p-2 border rounded">
                          <div class="form-check mb-0">
                            <input class="form-check-input" type="radio" name="sellcrypto" id="sellcrypto2" checked>
                            <label class="form-check-label fs-12" for="sellcrypto2">
                              Paypal
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-grid mt-4 pt-1">
                    <button type="button" class="btn btn-danger btn-wave">SELL</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xxl-5 col-xl-12">
      <SimpleCardComponent title="Recent Activity" cardHeaderClass="justify-content-between"
        customCardClass="overflow-hidden" cardClassBody="p-0">
        <template v-slot:showheader>
          <div class="dropdown">
            <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
              data-bs-toggle="dropdown">
              <i class="fe fe-more-vertical"></i>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
            </ul>
          </div>
        </template>
        <TableComponent :headers="['Date', 'Currency', 'From / To', 'Time &amp; Status']"
          :rows="cryptoData.recentActivity" tableClass="table card-table table-vcenter text-nowrap mb-0"
          tbodyClass="active-tab" v-slot:cell="{ row }">
          <td>
            <div class="text-center">
              <p class="text-muted mb-0 fw-semibold">{{ row.month }}</p>
              <span class="fs-12 text-muted">{{ row.date }}</span>
            </div>
          </td>
          <td>
            <div class="d-flex align-items-center">
              <div class="lh-1">
                <span class="avatar avatar-md avatar-rounded me-2 p-2 bg-light">
                  <img :src="(row.icon)" alt="">
                </span>
              </div>
              <div class="align-items-center">
                <span class="fs-12 text-muted">Currency</span>
                <p class="mb-0">{{ row.name }} - <span class="text-muted">({{ row.amount }})</span></p>
              </div>
            </div>
          </td>
          <td>
            <div class="align-items-center text-center">
              <div class="d-flex align-items-center fw-semibold">
                <span class="avatar avatar-sm avatar-rounded">
                  <img :src="(row.avatar)" alt="">
                </span>
                <span class="ms-2">{{ row.userName }}</span>
              </div>
            </div>
          </td>
          <td>
            <div class="align-items-center">
              <span class="fs-12 text-muted mb-1">{{ row.message }} Time</span>
              <p class="mb-0 fw-medium">{{ row.time }} -
                <span :class="`fs-11 text-${row.statusType} fw-semibold`">{{ row.message }}</span>
              </p>
            </div>
          </td>
        </TableComponent>
      </SimpleCardComponent>
    </div>
    <div class="col-xxl-3 col-xl-6">
      <SimpleCardComponent title="Bitcoin Price Statistics" cardHeaderClass="justify-content-between flex-wrap"
        cardClassBody="p-0">
        <template v-slot:showheader>
          <div class="d-flex">
            <button type="button" class="btn btn-success btn-wave btn-sm me-2">Buy Now</button>
            <div class="dropdown">
              <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                data-bs-toggle="dropdown">
                <i class="fe fe-more-vertical"></i>
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="javascript:void(0);">Week</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Month</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Year</a></li>
              </ul>
            </div>
          </div>
        </template>
        <div class="list-group border-0 crypto-list">
          <a href="javascript:void(0);"
            class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom"
            v-for="(card, index) in cryptoData.PriceStatistics" :key="index">
            <div class="d-flex w-100 justify-content-between align-items-center">
              <p class="tx-14 mb-0 font-weight-semibold text-dark">{{ card.content }}
                <span :class="`badge bg-${card.badgeColor}-transparent ms-3 text-${card.text}`">{{ card.badgeText
                }}</span>
              </p>
              <p :class="`text-${card.color} mb-0 font-weight-normal tx-13`">
                <span class="numberfont">{{ card.price }}</span>
              </p>
            </div>
          </a>
        </div>
      </SimpleCardComponent>
    </div>
    <div class="col-xxl-4 col-xl-6">
      <SimpleCardComponent title="Top Traders" cardHeaderClass="justify-content-between">
        <template v-slot:showheader>
          <div class="dropdown">
            <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown" aria-expanded="false">
              View All<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
            </a>
            <ul class="dropdown-menu" role="menu" style="">
              <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
            </ul>
          </div>
        </template>
        <CrmdealCardComponent :card="cryptoData.topTraders" ulClass="list-unstyled my-1" dflexClass="flex-xl-nowrap" />
      </SimpleCardComponent>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start:: row-3 -->
  <div class="row">
    <div class="col-xl-12">
      <CardComponent title="Crypto currencies Market Value" :showButtonGroup="true"
        v-for="(card, index) in cryptoData.bottonGroup" :key="index" :buttonGroup="card.buttonGroup" :showFooter="true"
        customCardHeaderClass="flex-wrap">
        <TableComponent
          :headers="['S.No', 'Name', 'Symbol', 'Price', 'Market Cap', 'Price Graph', 'Volume', 'Price Change']"
          :rows="cryptoData.currenciesMarketValue" tableClass="table table-hover text-nowrap table-bordered"
          v-slot:cell="{ row }">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>
            <div class="lh-1 d-flex align-items-center">
              <span class="avatar avatar-xs avatar-rounded">
                <img :src="(row.image)" alt="">
              </span> - {{ row.symbol }}
            </div>
          </td>
          <td>
            {{ row.price }}
          </td>
          <td>
            {{ row.marketCap }}
          </td>
          <td>
            <div :id="`${row.graphId}`" class="overflow-hidden">
              <apexchart width="120px" height="20px" type="line" :options="row.chart.option" :series="row.chart.series">
              </apexchart>
            </div>
          </td>
          <td>
            {{ row.volume }}
          </td>
          <td>
            <span :class="`text-${row.color}`">{{ row.change }}% <i
                :class="`ti ti-arrow-big-${row.dir}-lines ms-1`"></i></span>
          </td>
        </TableComponent>
      </CardComponent>
    </div>
  </div>
  <!-- End:: row-3 -->
</template>

<style scoped></style>
