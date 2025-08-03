<script lang="js">
import PageHeader from "../shared/components/pageheader/pageheader.vue";
import * as widgetsData from '../data/widgets';
import CountrymapCardComponent from "../shared/components/@spk/dashboard/country-map-cards.vue";
import ActivityCardComponent from "../shared/components/@spk/dashboard/activity-cards.vue";
import StocksCardComponent from "../shared/components/@spk/dashboard/stocks-cards.vue";
import TrendingStocksCardComponent from "../shared/components/@spk/dashboard/trendingStocks-cards.vue";
import CandidateCardComponent from "../shared/components/@spk/trending-cards.vue";
import ChartCardComponent from "../shared/components/@spk/dashboard/chart-cards.vue";
import CardComponent from "../shared/components/@spk/tablewith-cards.vue";
import RevenueCardComponent from "../shared/components/@spk/revenue-cards.vue";
import SimpleCardComponent from "../shared/UI/simple-cards.vue";

export default {
  components: {
    PageHeader,
    CountrymapCardComponent,
    ActivityCardComponent,
    StocksCardComponent,
    TrendingStocksCardComponent,
    CandidateCardComponent,
    ChartCardComponent,
    CardComponent,
    RevenueCardComponent,
    SimpleCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Widgets",
        list: ['Widgets', 'Widgets']
      },
      widgetsData: widgetsData,
      selectedDay: "Mon",
    };
  },
  mounted() {

    // Users by country map
    var markers = [{
      name: 'Russia',
      coords: [61, 105],
      style: {
        fill: '#28d193'
      }
    },
    {
      name: 'Geenland',
      coords: [72, -42],
      style: {
        fill: '#ff8c33'
      }
    },
    {
      name: 'Canada',
      coords: [56, -106],
      style: {
        fill: '#ff534d'
      }
    },
    {
      name: 'Palestine',
      coords: [31.5, 34.8],
      style: {
        fill: '#ffbe14'
      }
    },
    {
      name: 'Brazil',
      coords: [-14.2350, -51.9253],
      style: {
        fill: '#4b9bfa'
      }
    },
    ];
    var map = new jsVectorMap({
      map: 'world_merc',
      selector: '#users-map',
      markersSelectable: true,

      onMarkerSelected(index, isSelected, selectedMarkers) {
        console.log(index, isSelected, selectedMarkers);
      },

      // -------- Labels --------
      labels: {
        markers: {
          render: function (marker) {
            return marker.name
          },
        },
      },

      // -------- Marker and label style --------
      markers: markers,
      markerStyle: {
        hover: {
          stroke: "#DDD",
          strokeWidth: 3,
          fill: '#FFF'
        },
        selected: {
          fill: '#ff525d'
        }
      },
      markerLabelStyle: {
        initial: {
          fontFamily: 'Poppins',
          fontSize: 13,
          fontWeight: 500,
          fill: '#35373e',
        },
      },
    })
  }
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-3 col-xl-3 col-lg-6 col-md-6" v-for="card in widgetsData.coins" :key="card.id">
      <SimpleCardComponent :showCardHeader="false">
        <div class="d-flex align-items-top">
          <div class="me-3">
            <span class="avatar avatar-sm shadow-sm avatar-rounded" v-html="card.icon"></span>
          </div>
          <div class="flex-fill">
            <div class="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
              <span class="flex-fill">{{ card.title }}</span>
              <span class="ms-1 text-muted">{{ card.iconShorcut }}</span>
            </div>
            <div class="d-flex flex-wrap align-items-center justify-content-between">
              <h5 class="fw-semibold mb-0">{{ card.price }}</h5>
              <div class="flex-fill">
                <span class="ms-2 badge bg-success-transparent rounded-pill">{{ card.badgeText }}</span>
              </div>
              <div style="min-height:20px;width:100px" :id="card.chartId">
                <apexchart type="line" :options="card.chart.options" height="20px" width="100px"
                  :series="card.chart.series"></apexchart>
              </div>
            </div>
          </div>
        </div>
      </SimpleCardComponent>
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start::row-2 -->
  <div class="row">
    <div class="col-xxl-2 col-xl-4 col-lg-12">
      <div class="row">
        <div class="col-xl-12" v-for="card in widgetsData.stats" :key="card.id">
          <CandidateCardComponent :card="card" />
        </div>
      </div>
    </div>
    <div class="col-xxl-5 col-xl-8 col-lg-12">
      <div class="row">
        <div class="col-xl-6" v-for="card in widgetsData.TotalRecruiters" :key="card.id">
          <CandidateCardComponent :card="card" :customCardClass="card.cardBgColor" />
        </div>

        <div class="col-xl-6" v-for="(card, index) in widgetsData.cards" :key="index">
          <RevenueCardComponent :card="card" />
        </div>
      </div>
    </div>
    <div class="col-xxl-3 col-xl-7 col-lg-7">
      <div class="row">
        <div class="col-xl-12" v-for="card in widgetsData.PremiumRecruiters" :key="card.id">
          <CandidateCardComponent :card="card"></CandidateCardComponent>
        </div>
        <div class="col-xl-12" v-for="card in widgetsData.ActiveMember" :key="card.id">
          <CandidateCardComponent :card="card"></CandidateCardComponent>
        </div>
      </div>
    </div>
    <div class="col-xxl-2 col-xl-5 col-lg-5">
      <div class="row">
        <div class="col-xl-12">
          <SimpleCardComponent title=" Premium Recruiters " customCardClass="card-bg-primary"
            cardHeaderClass="justify-content-between border-bottom-0">
            <template v-slot:showheader>
              <div>
                <button class="btn btn-sm btn-icon text-bg-primary transform-arrow border-0"><i
                    class="ti ti-chevron-right"></i></button>
              </div>
            </template>
            <div class="d-flex flex-wrap align-items-top">
              <div class="flex-fill overflow-hidden">
                <p class="mb-2 lh-1 fs-5 fw-semibold">9,231</p>
                <p class="mb-0 fs-12 text-fixed-white op-7">
                  <span><i class="bi bi-caret-up-fill"></i> 2.3%</span>
                  <span class="op-7 ms-1">From Last Month</span>
                </p>
              </div>
              <div>
                <span class="avatar avatar-sm bg-success avatar-rounded"><i class="bi bi-people-fill"></i></span>
              </div>
            </div>
          </SimpleCardComponent>
        </div>
        <div class="col-xl-12" v-for="card in widgetsData.trendingStocks1" :key="card.id">
          <TrendingStocksCardComponent :card="card" customCardClass="p-3  border bg-white rounded" />
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-2 -->

  <!-- Start::row-3 -->
  <div class="row">
    <div class="col-xxl-3 col-sm-6" v-for="card in widgetsData.status" :key="card.id">
      <SimpleCardComponent :showCardHeader="false">
        <div class="d-flex align-items-top justify-content-between mb-4">
          <div class="flex-fill d-flex align-items-top">
            <div class="me-2">
              <span :class="`avatar avatar-md text-${card.color} border bg-light`"><i
                  :class="`ti ti-${card.iconClass} fs-18`"></i></span>
            </div>
            <div class="flex-fill">
              <p class="fw-semibold fs-14 mb-0">{{ card.title }}</p>
              <p class="mb-0 text-muted fs-12 op-7">{{ card.description }}</p>
            </div>
          </div>
          <div>
            <a href="javascript:void(0);" data-bs-toggle="dropdown" class="btn btn-icon btn-sm btn-light"><i
                class="ti ti-dots"></i></a>
            <ul class="dropdown-menu">
              <li v-for="(dropdown, index) in card.dropdowns" :key="index"><a href="javascript:void(0);"
                  class="dropdown-item">{{ dropdown.name }}</a></li>
            </ul>
          </div>
        </div>
        <div class="d-flex align-items-center mb-0">
          <p class="mb-0 fs-20 fw-semibold">{{ card.count }}</p>
          <span class="text-muted ms-2"><i
              class="ti ti-trending-up align-middle text-success me-1 d-inline-block"></i>{{
                card.trend }}</span>
        </div>
        <div class="d-flex align-items-center">
          <div class="flex-fill">
            <div class="progress progress-xs">
              <div :class="`progress-bar bg-${card.progressColor}`" role="progressbar" :style="{ width: card.progress }"
                aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
          <div class="ms-3">
            <span class="fs-12 text-muted">{{ card.progress }} Target</span>
          </div>
        </div>
      </SimpleCardComponent>
    </div>
  </div>
  <!-- End::row-3 -->

  <!-- Start::row-4 -->
  <div class="row">
    <div class="col-xl-9">
      <SimpleCardComponent :showCardHeader="false" cardClassBody="p-0">
        <div class="row g-0">
          <div v-for="(stat, index) in widgetsData.TotalProducts" :key="index" class="col-xl-3"
            :class="{ 'border-end': index < widgetsData.stats.length - 1 }">
            <div class="d-flex flex-wrap align-items-top p-4">
              <div class="me-3 lh-1">
                <span :class="['avatar', 'avatar-md', 'avatar-rounded', stat.bgColor, 'shadow-sm']">
                  <i :class="['ti', stat.icon, 'fs-18']"></i>
                </span>
              </div>
              <div class="flex-fill">
                <h5 class="fw-semibold mb-1">{{ stat.value }}</h5>
                <p class="text-muted mb-0 fs-12">{{ stat.label }}</p>
              </div>
              <div>
                <span :class="['badge', stat.change > 0 ? 'bg-success-transparent' : 'bg-danger-transparent']">
                  <i
                    :class="['ri', stat.change > 0 ? 'arrow-up-s-line' : 'arrow-down-s-line', 'align-middle', 'me-1']"></i>{{
                      stat.change }}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-3">
      <SimpleCardComponent :showCardHeader="false" cardClassBody="p-0"
        customCardClass="card-bg-primary text-fixed-white">
        <div class="d-flex align-items-top p-4 flex-wrap">
          <div class="me-3 lh-1">
            <span class="avatar avatar-md avatar-rounded bg-white text-primary shadow-sm">
              <i class="ti ti-coin fs-18"></i>
            </span>
          </div>
          <div class="flex-fill">
            <h5 class="fw-semibold mb-1 text-fixed-white">$21,520</h5>
            <p class="op-7 mb-0 fs-12">Expenses</p>
          </div>
          <div>
            <span class="badge bg-success"><i
                class="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>14.69%</span>
          </div>
        </div>
      </SimpleCardComponent>
    </div>
  </div>
  <!-- End::row-4 -->

  <!-- Start::row-5 -->
  <div class="row">
    <div class="col-xl-2" v-for="card in widgetsData.data" :key="card.id">
      <SimpleCardComponent :customCardClass="`border-top-card border-top-${card.color} rounded-0`"
        :showCardHeader="false">
        <div class="text-center">
          <span :class="`avatar avatar-md bg-${card.color} shadow-sm avatar-rounded mb-2`">
            <i :class="`ri-${card.icon} fs-16`"></i>
          </span>
          <p class="fs-14 fw-semibold mb-2">{{ card.title }}</p>
          <div class="d-flex align-items-center justify-content-center flex-wrap">
            <h5 class="mb-0 fw-semibold">{{ card.value }}</h5>
            <span :class="`badge bg-${card.badgeColor}-transparent rounded-pill ms-1`">{{ card.change }}</span>
          </div>
        </div>
      </SimpleCardComponent>
    </div>
  </div>
  <!-- End::row-5 -->

  <!-- Start::row-6 -->
  <div class="row">
    <div class="col-xl-4">
      <SimpleCardComponent title="Upcoming Events" cardHeaderClass="justify-content-between">
        <template v-slot:showheader>
          <div>
            <button class="btn btn-sm btn-primary-light">View All</button>
          </div>
        </template>
        <nav class="nav nav-style-1 nav-pills mb-4 nav-justified" role="tablist">
          <a v-for="(day, index) in widgetsData.days" :key="day.name" class="nav-link px-2"
            :class="{ active: selectedDay === day.name }" @click="selectedDay = day.name" role="tab"
            aria-selected="false" tabindex="-1">
            <span class="d-block mb-1">{{ day.date }}</span>
            <span class="d-block mb-0 op-7 fs-12">{{ day.name }}</span>
          </a>
        </nav>

        <div class="tab-content pt-3 mt-3 mb-1">
          <div v-for="(day, index) in widgetsData.days" :key="index"
            :class="['tab-pane', { active: selectedDay === day.name }]" class="border-0 p-0"
            :id="day.name.toLowerCase()" role="tabpanel">
            <ul class="list-unstyled mb-0 upcoming-events-list">
              <li v-for="(event, index) in day.events" :key="index"
                class="d-flex align-items-top justify-conent-between">
                <div class="flex-fill">
                  <p class="mb-0 fs-14">{{ event.title }}</p>
                  <p class="mb-0 text-muted">{{ event.location }}</p>
                </div>
                <div>
                  <span class="text-muted">
                    <i class="ri-time-line align-middle me-1 d-inline-block"></i>
                    {{ event.time }}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </SimpleCardComponent>
    </div>
    <div class="col-xl-4">
      <ActivityCardComponent title="Timeline" :card="widgetsData.Timeline"
        ulClass="list-unstyled timeline-widget mb-0 my-3" liClass="timeline-widget-list" :showDropdown="true">
        <template v-slot:cardHeader>
          <div> <button class="btn btn-sm btn-primary-light btn-wave waves-effect waves-light">View All</button> </div>
        </template>
      </ActivityCardComponent>
    </div>
    <div class="col-xl-4">
      <CardComponent title="Traffic Sources" :showDropdown=true :showFooter=false>
        <TableComponent :headers="['Browser', 'Sessions', 'Views', 'Traffic']" :rows="widgetsData.trafficSources"
          tableClass="table table-bordered table-hover text-nowrap" v-slot:cell="{ row }">
          <td>
            <div class="d-flex align-items-center">
              <span class="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                <i :class="`${row.icon} fs-18 text-fixed-white`"></i>
              </span>
              <div class="fw-semibold">{{ row.name }}</div>
            </div>
          </td>
          <td>
            <span><i class="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>{{ row.growth }}</span>
          </td>
          <td>
            <span>{{ row.current }}</span>
          </td>
          <td>
            <div class="progress progress-xs">
              <div class="progress-bar bg-primary" role="progressbar" :style="`width:${row.progress}%`"
                aria-valuenow="34" aria-valuemin="0" aria-valuemax="100">
              </div>
            </div>
          </td>
        </TableComponent>
      </CardComponent>
    </div>
  </div>
  <!-- End::row-6 -->

  <!-- Start:: row-7 -->
  <div class="row">
    <div class="col-xl-6">
      <CountrymapCardComponent :card="widgetsData.countries" mapId="users-map" title="Users By Country"
        :showWidgetsMap="true">
        <template v-slot:mapContent>
          <div class="d-flex flex-wrap justify-content-between mb-5 gap-2">
            <div class="d-flex align-items-center custom-map-class" v-for="card, index in widgetsData.state"
              :key="index">
              <div class="me-2">
                <span :class="`avatar avatar-rounded bg-${card.bgClass} text-${card.textClass}`"><i
                    class="ri-user-3-line fs-16"></i></span>
              </div>
              <div class="flex-fill">
                <p :class="`fs-18 mb-0 text-${card.textClass} fw-semibold`">{{ card.value }}</p>
                <span class="text-muted fs-12">{{ card.timePeriod }}</span>
              </div>
            </div>
          </div>
        </template>
      </CountrymapCardComponent>
    </div>
    <div class="col-xl-6">
      <SimpleCardComponent title="Recent Tasks" cardHeaderClass="justify-content-between">
        <template v-slot:showheader>
          <div class="dropdown">
            <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"> View All
              <i class="ri-arrow-down-s-line align-middle ms-1"></i>
            </a>
            <ul class="dropdown-menu" role="menu">
              <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
              <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
            </ul>
          </div>
        </template>

        <TableComponent :headers="['S.No', 'Title', 'Assigned To', 'Progress', 'Status', 'Due Date']"
          :rows="widgetsData.recentTasks" tableClass="table text-nowrap table-bordered" v-slot:cell="{ row }">
          <td>{{ row.id }}</td>
          <td>{{ row.title }}</td>
          <td>
            <div class="avatar-list-stacked">
              <span v-for="(avatar, index) in row.avatars" :key="index" class="avatar avatar-xs">
                <img :src="avatar" alt="img">
              </span>
              <a v-if="row.avatars.length > 2" class="avatar avatar-xs bg-primary avatar-rounded text-fixed-white"
                href="javascript:void(0);">
                +{{ row.value }}
              </a>
            </div>
          </td>
          <td>
            <div class="progress progress-xs">
              <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                :aria-valuenow="row.progress" aria-valuemin="0" aria-valuemax="100"
                :style="{ width: row.progress + '%' }"></div>
            </div>
          </td>
          <td>
            <span :class="`badge ${row.color}`">{{ row.status }}</span>
          </td>
          <td>
            17-04-2023
          </td>
        </TableComponent>
      </SimpleCardComponent>
    </div>
  </div>
  <!-- End:: row-7 -->

  <!-- Start::row-8 -->
  <div class="row">
    <div class="col-xl-4">
      <ChartCardComponent :card="card" title="Recent Applicants" cardClassBody="recent-applicants"
        v-for="(card, index) in widgetsData.charts1" :key="index" />
    </div>
    <div class="col-xl-4">
      <ChartCardComponent :card="card" title="Sessions By Device" v-for="(card, index) in widgetsData.charts2"
        :key="index" />
    </div>
    <div class="col-xl-4">
      <ChartCardComponent :card="card" title="Target Report" v-for="(card, index) in widgetsData.charts3" :key="index">
        <template v-slot:cardHeader>
          <div class="ms-auto" data-v-inspector="pages/widgets.vue:2048:11">
            <a href="javascript:void(0);" class="btn btn-sm btn-primary-light dropdown-toggle" data-bs-toggle="dropdown"
              aria-expanded="false"> Details
            </a>
            <ul class="dropdown-menu" data-v-inspector="pages/widgets.vue:2053:13">
              <li data-v-inspector="pages/widgets.vue:2054:15"><a class="dropdown-item"
                  href="javascript:void(0);">Action</a></li>
              <li data-v-inspector="pages/widgets.vue:2055:15"><a class="dropdown-item"
                  href="javascript:void(0);">Another action</a></li>
              <li data-v-inspector="pages/widgets.vue:2056:15"><a class="dropdown-item"
                  href="javascript:void(0);">Something else here</a></li>
            </ul>
          </div>
        </template>
        <template v-slot:showData>
          <div class="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="float-end text-primary" fill="currentColor" width="36px"
              height="36px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M11,9h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,
               0,0,0-6H11a1,1,0,0,1,0-2Zm1-8A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z">
              </path>
            </svg>
            <p class="text-primary fw-500 mb-2">Revenue by week</p>
            <h4 class="mb-2 fw-semibold">$54,125.03</h4>
            <span class="text-danger me-1 fs-14"> - 1.3%<i class="ri-arrow-down-s-fill align-middle ms-1"></i> </span>
            <span class="text-muted fs-12">33% of target reached</span>
          </div>
        </template>
      </ChartCardComponent>
    </div>
  </div>
  <!-- End::row-8 -->
</template>

<style scoped></style>
