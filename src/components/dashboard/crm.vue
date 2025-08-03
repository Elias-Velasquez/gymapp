<script lang="ts">

import * as crmData from '../../data/dashboards/crm';
import { targetSeries, targetOptions } from "../../data/dashboards/crm.js";
import BasicCardComponent from "../../shared/UI/basic-cards.vue";
import CrmdealCardComponent from '../../shared/components/@spk/dashboard/crm-deal-cards.vue';
import ActivityCardComponent from "../../shared/components/@spk/dashboard/activity-cards.vue";
import ChartCardComponent from "../../shared/components/@spk/dashboard/chart-cards.vue";
import CardComponent from "../../shared/components/@spk/tablewith-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
  components: {
    BasicCardComponent,
    CrmdealCardComponent,
    ActivityCardComponent,
    ChartCardComponent,
    CardComponent,
    SimpleCardComponent
  },
  data() {
    return {
      tableHeaders: [
        '<input class="form-check-input" type="checkbox" id="checkboxNoLabel1" aria-label="...">',
        'Sales Rep',
        'Category',
        'Mail',
        'Location',
        'Date',
        'Action'
      ],
      crmData: crmData,
      targetSeries: targetSeries,
      targetOptions: targetOptions,
    }
  }
}
</script>

<template>
  <div class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb">
    <div>
      <p class="fw-semibold fs-18 mb-0">Welcome back, Json Taylor !</p>
      <span class="fs-semibold text-muted">Track your sales activity, leads and deals here.</span>
    </div>
    <div class="btn-list mt-md-0 mt-2">
      <button type="button" class="btn btn-primary btn-wave">
        <i class="ri-filter-3-fill me-2 align-middle d-inline-block"></i>Filters
      </button>
      <button type="button" class="btn btn-outline-secondary btn-wave">
        <i class="ri-upload-cloud-line me-2 align-middle d-inline-block"></i>Export
      </button>
    </div>
  </div>
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-9 col-xl-12">
      <div class="row">
        <div class="col-xl-4">
          <div class="row">
            <div class="col-xl-12">
              <BasicCardComponent :showCardBody="true" cardClass="custom-card crm-highlight-card">
                <template v-slot:cardBody>
                  <div class="d-flex align-items-center justify-content-between">
                    <div>
                      <div class="fw-semibold fs-18 text-fixed-white mb-2">Your target is incomplete</div>
                      <span class="d-block fs-12 text-fixed-white">
                        <span class="op-7">You have completed</span>
                        <span class="fw-semibold text-warning mx-1">48%</span>
                        <span class="op-7">
                          of the given <br> target, you can also check your status
                        </span>
                      </span>
                      <span class="d-block fw-semibold mt-1"><a class="text-fixed-white"
                          href="javascript:void(0);"><u>Click here</u></a></span>
                    </div>
                    <div id="crm-main">
                      <apexchart height="160" width="100" :options="targetOptions" :series="targetSeries"></apexchart>
                    </div>
                  </div>
                </template>
              </BasicCardComponent>
            </div>
          </div>
          <div class="col-xl-12">
            <SimpleCardComponent title="Top Deals" cardHeaderClass="justify-content-between">
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
              <CrmdealCardComponent :card="crmData.deal" ulClass="list-unstyled crm-top-deals mb-0" />
            </SimpleCardComponent>
          </div>
          <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <ChartCardComponent :card="card" title="Profit Earned" v-for="(card, index) in crmData.Earned" :key="index"
              cardBodyClass="p-0">
              <template v-slot:cardHeader>
                <div class="dropdown"> <a href="javascript:void(0);" class="p-2 fs-12 text-muted show"
                    data-bs-toggle="dropdown" aria-expanded="true"> View All
                    <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </a>
                  <ul class="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                    <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                  </ul>
                </div>
              </template>
            </ChartCardComponent>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="row">
            <div class="col-xxl-6 col-lg-6 col-md-6" v-for="card in crmData.crmCard" :key="card.id">
              <SimpleCardComponent customCardClass="overflow-hidden" :showCardHeader="false">
                <div class="d-flex align-items-top justify-content-between">
                  <div>
                    <span :class="`avatar avatar-md avatar-rounded bg-${card.iconBg}`">
                      <i :class="`ti ${card.icon} fs-16`"></i>
                    </span>
                  </div>
                  <div class="flex-fill ms-3">
                    <div class="d-flex align-items-center justify-content-between flex-wrap">
                      <div>
                        <p class="text-muted mb-0">{{ card.name }}</p>
                        <h4 class="fw-semibold mt-1">{{ card.count }}</h4>
                      </div>
                      <div :id="card.chartId">
                        <apexchart width="100px" height="40px" type="line" :options="card.chart.options"
                          :series="card.chart.series"></apexchart>
                      </div>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mt-1">
                      <div>
                        <a :class="card.viewAllColor" href="javascript:void(0);">View All<i
                            class="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block"></i></a>
                      </div>
                      <div class="text-end">
                        <p :class="`mb-0 text-${card.percentageColor} fw-semibold`">{{ card.percentage }}</p>
                        <span class="text-muted op-7 fs-11">this month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SimpleCardComponent>
            </div>
            <div class="col-xl-12">
              <ChartCardComponent :card="card" title="Revenue Analytics"
                v-for="(card, index) in crmData.RevenueAnalytics" :key="index" chartId="crm-revenue-analytics">
                <template v-slot:cardHeader>
                  <div class="dropdown"> <a href="javascript:void(0);" class="p-2 fs-12 text-muted show"
                      data-bs-toggle="dropdown" aria-expanded="true"> View All
                      <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                    </a>
                    <ul class="dropdown-menu" role="menu" data-popper-placement="bottom-start">
                      <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                    </ul>
                  </div>
                </template>
              </ChartCardComponent>
            </div>
          </div>
        </div>
        <div class="col-xl-12">
          <SimpleCardComponent title="Deals Statistics" cardHeaderClass="justify-content-between"
            :showCardFooter="true">
            <template v-slot:showheader>
              <div class="d-flex flex-wrap gap-2">
                <div>
                  <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                    aria-label=".form-control-sm example">
                </div>
                <div class="dropdown">
                  <a href="javascript:void(0);" class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                    data-bs-toggle="dropdown" aria-expanded="false"> Sort By<i
                      class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                  </a>
                  <ul class="dropdown-menu" role="menu" style="">
                    <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
                  </ul>
                </div>
              </div>
            </template>
            <TableComponent :headers="tableHeaders" :rows="crmData.dealsStatistics"
              tableClass="table text-nowrap table-hover border table-bordered">
              <template v-slot:cell="{ row, index }">
                <td>
                  <input class="form-check-input" type="checkbox" :id="'checkbox-' + index" aria-label="..."
                    :checked="row.checked">
                </td>
                <td>
                  <div class="d-flex align-items-center fw-semibold">
                    <span class="avatar avatar-sm me-2 avatar-rounded">
                      <img :src="row.avatar" alt="img">
                    </span>
                    {{ row.name }}
                  </div>
                </td>
                <td>{{ row.role }}</td>
                <td>{{ row.email }}</td>
                <td>
                  <span :class="`badge ${row.countryBadge}`">{{ row.country }}</span>
                </td>
                <td>{{ row.dateRange }}</td>
                <td>
                  <div class="hstack gap-2 fs-15">
                    <a href="javascript:void(0);"
                      class="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-success-light">
                      <i class="ri-download-2-line"></i>
                    </a>
                    <a href="javascript:void(0);"
                      class="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-primary-light">
                      <i class="ri-edit-line"></i>
                    </a>
                  </div>
                </td>
              </template>
            </TableComponent>
            <template v-slot:cardFooter>
              <div class="d-flex align-items-center">
                <div> Showing 5 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i>
                </div>
                <div class="ms-auto">
                  <nav aria-label="Page navigation" class="pagination-style-4">
                    <ul class="pagination mb-0">
                      <li class="page-item disabled"> <a class="page-link" href="javascript:void(0);"> Prev </a> </li>
                      <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                      <li class="page-item"> <a class="page-link text-primary" href="javascript:void(0);"> next </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </template>
          </SimpleCardComponent>
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-12">
      <div class="row">
        <div class="col-xxl-12 col-xl-12">
          <div class="row">
            <div class="col-xl-12 col-xl-6">
              <SimpleCardComponent title="Leads By Source" cardHeaderClass="justify-content-between"
                cardClassBody="p-0 overflow-hidden">
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
                <div class="leads-source-chart d-flex align-items-center justify-content-center">
                  <apexchart class="chartjs-chart p-4" :width="240" :height="240" type="donut"
                    :options="crmData.SessionsOptions" :series="crmData.SessionsSeries"></apexchart>
                  <div class="lead-source-value">
                    <span class="d-block fs-14">Total</span>
                    <span class="d-block fs-25 fw-bold">4,145</span>
                  </div>
                </div>
                <div class="row row-cols-12 border-top border-block-start-dashed">
                  <div class="col p-0">
                    <div class="ps-4 py-3 pe-3 text-center border-end border-inline-end-dashed">
                      <span class="text-muted fs-12 mb-1 crm-lead-legend mobile d-inline-block">Mobile
                      </span>
                      <div><span class="fs-16 fw-semibold">1,624</span>
                      </div>
                    </div>
                  </div>
                  <div class="col p-0">
                    <div class="p-3 text-center border-end border-inline-end-dashed">
                      <span class="text-muted fs-12 mb-1 crm-lead-legend desktop d-inline-block">Desktop
                      </span>
                      <div><span class="fs-16 fw-semibold">1,267</span></div>
                    </div>
                  </div>
                  <div class="col p-0">
                    <div class="p-3 text-center border-end border-inline-end-dashed">
                      <span class="text-muted fs-12 mb-1 crm-lead-legend laptop d-inline-block">Laptop
                      </span>
                      <div><span class="fs-16 fw-semibold">1,153</span>
                      </div>
                    </div>
                  </div>
                  <div class="col p-0">
                    <div class="p-3 text-center">
                      <span class="text-muted fs-12 mb-1 crm-lead-legend tablet d-inline-block">Tablet
                      </span>
                      <div><span class="fs-16 fw-semibold">679</span></div>
                    </div>
                  </div>
                </div>
              </SimpleCardComponent>
            </div>
            <div class="col-xxl-12 col-xl-6">
              <SimpleCardComponent title="Deals Status" cardHeaderClass="justify-content-between">
                <template v-slot:showheader>
                  <div class="dropdown">
                    <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                      aria-expanded="false">
                      View All<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                    </ul>
                  </div>
                </template>
                <div class="d-flex align-items-center mb-3">
                  <h4 class="fw-bold mb-0">4,289</h4>
                  <div class="ms-2">
                    <span class="badge bg-success-transparent">1.02<i
                        class="ri-arrow-up-s-fill align-mmiddle ms-1"></i></span>
                    <span class="text-muted ms-1">compared to last week</span>
                  </div>
                </div>
                <div class="progress-stacked progress-animate progress-xs mb-4">
                  <div :class="`progress-bar ${card.color}`" v-for="(card, index) in crmData.dealsStatusProgress"
                    :key="index" role="progressbar" :style="{ width: card.width }" aria-valuenow="21" aria-valuemin="0"
                    aria-valuemax="100"></div>
                </div>
                <ul class="list-unstyled mb-0 pt-2 crm-deals-status">
                  <li :class="card.color" v-for="(card, index) in crmData.dealsStatus" :key="index">
                    <div class="d-flex align-items-center justify-content-between">
                      <div>{{ card.title }}</div>
                      <div class="fs-12 text-muted">{{ card.count }} deals</div>
                    </div>
                  </li>
                </ul>
              </SimpleCardComponent>
            </div>
            <div class="col-xxl-12 col-xl-6">
              <ActivityCardComponent title="Recent Activity" :card="crmData.activities"
                ulClass="list-unstyled mb-0 crm-recent-activity" liClass="crm-recent-activity-content">
                <template v-slot:cardHeader>
                  <div class="dropdown">
                    <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                      aria-expanded="false"> View All
                      <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                      <li><a class="dropdown-item" href="javascript:void(0);">Today</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">This Week</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);">Last Week</a></li>
                    </ul>
                  </div>
                </template>
              </ActivityCardComponent>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped></style>
