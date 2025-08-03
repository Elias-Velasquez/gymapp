<script lang="ts">
import PageHeader from "../../shared/components/pageheader/pageheader.vue";
import PriceingComponent from '../../shared/components/@spk/pages/pricing-cards.vue';
import LandingPriceComponent from '../../shared/components/@spk/pages/landing-pricing-cards.vue';
import { pricing, simplePrice } from '../../data/pricing';


export default {
  components: {
    PageHeader, LandingPriceComponent, PriceingComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Pricing",
        list: ['Pages', 'Pricing']
      },
      simplePrice, pricing
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start:: row-1 -->
  <div class="row mb-5">
    <div class="col-xl-12">
      <h5 class="fw-semibold text-center"> Simple Pricing For Everyone </h5>
      <p class="text-muted text-center">Choose plan that suits best for your business needs, Our plans scales with you
        based on your needs</p>
      <div class="d-flex justify-content-center mb-4">
        <ul class="nav nav-tabs mb-3 tab-style-6 bg-primary-transparent" id="myTab1" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pricing-monthly1" data-bs-toggle="tab"
              data-bs-target="#pricing-monthly1-pane" type="button" role="tab" aria-controls="pricing-monthly1-pane"
              aria-selected="true">Monthly</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pricing-yearly1" data-bs-toggle="tab" data-bs-target="#pricing-yearly1-pane"
              type="button" role="tab" aria-controls="pricing-yearly1-pane" aria-selected="false">Yearly</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-xl-12">
      <div class="tab-content" id="myTabContent1">
        <div class="tab-pane show active p-0 border-0" id="pricing-monthly1-pane" role="tabpanel"
          aria-labelledby="pricing-monthly1" tabindex="0">
          <div class="row">
            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12" v-for="card in simplePrice" :key="card.id">
              <PriceingComponent planType="monthly" :customCardClass="`overflow-hidden ${card.bodyClass} `"
                cardBodyClass="p-0" :cardHeadClass="`px-1 py-2 bg-${card.color} ${card.cardopacity}`" :card="card" />
            </div>
          </div>
        </div>
        <div class="tab-pane p-0 border-0" id="pricing-yearly1-pane" role="tabpanel" aria-labelledby="pricing-yearly1"
          tabindex="0">
          <div class="row">
            <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12" v-for="card in simplePrice" :key="card.id">
              <PriceingComponent planType="yearly" :customCardClass="`overflow-hidden ${card.bodyClass} `"
                cardBodyClass="p-0" :cardHeadClass="`px-1 py-2 bg-${card.color} ${card.cardopacity}`" :card="card" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-1 -->

  <!-- Start:: row-2 -->
  <div class="row justify-content-center mb-5">
    <div class="col-xxl-8 col-xl-12 col-lg-12 col-md-12 col-sm-12">
      <div class="container-lg">
        <div class="row justify-content-center">
          <div class="col-xl-9">
            <h5 class="fw-semibold text-center"> Simple Pricing For Everyone </h5>
            <p class="text-muted text-center">Choose plan that suits best for your business needs, Our plans scales with
              you based on your needs</p>
          </div>
        </div>
        <div class="d-flex justify-content-center mb-4">
          <ul class="nav nav-tabs mb-3 tab-style-6 bg-primary-transparent" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pricing-monthly" data-bs-toggle="tab"
                data-bs-target="#pricing-monthly-pane" type="button" role="tab" aria-controls="pricing-monthly-pane"
                aria-selected="true">Monthly</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pricing-yearly" data-bs-toggle="tab" data-bs-target="#pricing-yearly-pane"
                type="button" role="tab" aria-controls="pricing-yearly-pane" aria-selected="false">Yearly</button>
            </li>
          </ul>
        </div>
        <div class="card custom-card overflow-hidden">
          <div class="card-body p-0">
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane show active p-0 border-bottom-0" id="pricing-monthly-pane" role="tabpanel"
                aria-labelledby="pricing-monthly" tabindex="0">
                <div class="row">
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 border-end border-inline-end-dashed pe-0"
                    v-for="card in pricing" :key="card.id">
                    <LandingPriceComponent planType="monthly" :card="card">
                    </LandingPriceComponent>
                  </div>
                </div>
              </div>
              <div class="tab-pane p-0 border-bottom-0" id="pricing-yearly-pane" role="tabpanel"
                aria-labelledby="pricing-yearly" tabindex="0">
                <div class="row">
                  <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12 border-end border-inline-end-dashed pe-0"
                    v-for="card in pricing" :key="card.id">
                    <LandingPriceComponent planType="yearly" :card="card">
                    </LandingPriceComponent>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End:: row-2 -->

  <!-- Start::row-3 -->
  <div class="row justify-content-center">
    <div class="col-xxl-8 col-xl-12 col-md-12 col-lg-12 col-sm-12">
      <div class="container-lg">
        <div class="row justify-content-center">
          <div class="col-xl-9">
            <h5 class="fw-semibold text-center"> Pricing Plans </h5>
            <p class="text-muted text-center mb-4">Select best plans that fits your needs for your business growth,plans
              are flexible with the enterprise.Familiarize with the payment plans below</p>
          </div>
        </div>
        <div class="card custom-card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered text-nowrap">
                <thead>
                  <tr>
                    <th scope="col">
                      <span class="fs-15 fw-semibold">Chek Our Plans</span>
                    </th>
                    <th scope="col" class="pricing-basic">
                      <span class="fs-15 fw-semibold">Basic</span>
                    </th>
                    <th scope="col" class="pricing-pro">
                      <span class="fs-15 fw-semibold">Pro</span>
                    </th>
                    <th scope="col" class="pricing-premium">
                      <span class="fs-15 fw-semibold">Premium</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="text-center bg-light">
                    <td colspan="4">
                      <span class="fs-14 fw-semibold">Main Features</span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <span>
                        24/7 support <span class="badge bg-primary ms-2">1
                          Year</span>
                      </span>
                    </td>
                    <td>
                      <span>
                        24/7 support <span class="badge bg-primary ms-2">5
                          Year</span>
                      </span>
                    </td>
                    <td>
                      <span>
                        24/7 support <span class="badge bg-primary ms-2">Life
                          Long</span>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>
                      <span>
                        Storage Capacity <span class="badge bg-success ms-2">1
                          TB</span>
                      </span>
                    </td>
                    <td>
                      <span>
                        Storage Capacity <span class="badge bg-success ms-2">5
                          TB</span>
                      </span>
                    </td>
                    <td>
                      <span>
                        Storage Capacity <span class="badge bg-success ms-2">10
                          TB</span>
                      </span>
                    </td>
                  </tr>
                  <tr class="text-center bg-light">
                    <td colspan="4">
                      <span class="fs-14 fw-semibold">Complete Features</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="fw-bold fs-14">
                        Domains
                      </span>
                    </td>
                    <td>
                      <span class="fw-semibold">2 Free</span> Domain names
                    </td>
                    <td>
                      <span class="fw-semibold">5 Free</span> Domain names
                    </td>
                    <td>
                      <span class="fw-semibold">10 Free</span> Domain names
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="fw-bold fs-14">
                        Money Back Guarentee
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-success-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-check-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-success-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-check-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-success-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-check-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="fw-bold fs-14">
                        App Integrations
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-danger-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-close-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-success-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-check-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-success-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-check-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="fw-bold fs-14">
                        Future Updates
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-danger-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-close-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-success-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-check-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-success-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-check-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="fw-bold fs-14">
                        Team Management
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-danger-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-close-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-success-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-check-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-success-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-check-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="fw-bold fs-14">
                        Customer Support
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-danger-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-close-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-danger-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-close-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                    <td>
                      <span class="badge bg-success-transparent p-1 lh-1 rounded-circle">
                        <i class="ri-check-line align-middle fw-semibold"></i>
                      </span>
                    </td>
                  </tr>
                  <tr class="text-center bg-light">
                    <td colspan="4">
                      <span class="fs-14 fw-semibold">Pricing</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span class="fw-bold fs-14">Net Price</span>
                    </th>
                    <td>
                      <span class="fs-18 fw-semibold text-dark">$99</span>
                    </td>
                    <td>
                      <span class="fs-18 fw-semibold text-dark">$299</span>
                    </td>
                    <td>
                      <span class="fs-18 fw-semibold text-dark">$499</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span class="fw-bold fs-14">Annual
                        Subscription</span>
                    </th>
                    <td>
                      <span class="fs-18 fw-semibold text-dark">$1,199</span>
                    </td>
                    <td>
                      <span class="fs-18 fw-semibold text-dark">$3,499</span>
                    </td>
                    <td>
                      <span class="fs-18 fw-semibold text-dark">$5,499</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <span class="fw-bold fs-14">Activation
                        Charges</span>
                    </th>
                    <td>
                      <span class="fw-semibold">0% + $99</span>
                    </td>
                    <td>
                      <span class="fw-semibold">5% + $149</span>
                    </td>
                    <td>
                      <span class="fw-semibold">10% + $259</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="border-bottom-0"></td>
                    <td class="border-bottom-0">
                      <button class="btn btn-primary btn-wave">Choose
                        Plan</button>
                    </td>
                    <td class="border-bottom-0">
                      <button class="btn btn-primary btn-wave">Choose
                        Plan</button>
                    </td>
                    <td class="border-bottom-0">
                      <button class="btn btn-primary btn-wave">Choose
                        Plan</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-3 -->
</template>

<style scoped></style>
