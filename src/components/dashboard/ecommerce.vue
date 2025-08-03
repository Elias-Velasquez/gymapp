<script lang="ts">
import PageHeader from '../../shared/components/pageheader/pageheader.vue';
import * as ecommerceData from '../../data/dashboards/ecommerce';
import CrmdealCardComponent from "../../shared/components/@spk/dashboard/crm-deal-cards.vue";
import ChartCardComponent from "../../shared/components/@spk/dashboard/chart-cards.vue";
import CardComponent from "../../shared/components/@spk/tablewith-cards.vue";
import SimpleCardComponent from "../../shared/UI/simple-cards.vue";

export default {
  components: {
    PageHeader,
    CrmdealCardComponent,
    ChartCardComponent,
    CardComponent,
    SimpleCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Ecommerce",
        list: ['Dashboards', 'Ecommerce']
      },
      ecommerceData: ecommerceData,
      tableHeaders: [
        '<span class="text-center mx-2">S.no</span>',
        'Product Name',
        'Category',
        'Stock',
        'Total Sales',
      ],
    };
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />
  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-6 col-xl-12">
      <div class="row">
        <div class="col-lg-6 col-sm-6 col-md-6 col-xl-6" v-for="card in ecommerceData.ecommerce" :key="card.id">
          <SimpleCardComponent :showCardHeader=false>
            <div class="row">
              <div
                class="col-xxl-3 col-xl-2 col-lg-3 col-md-3 col-sm-4 col-4 d-flex align-items-center justify-content-center ecommerce-icon px-0">
                <span :class="`rounded p-3 bg-${card.bgColor}-transparent`" v-html="card.icon"> </span>
              </div>
              <div class="col-xxl-9 col-xl-10 col-lg-9 col-md-9 col-sm-8 col-8 px-0">
                <div class="mb-2">{{ card.name }}</div>
                <div class="text-muted mb-1 fs-12">
                  <span class="text-dark fw-semibold fs-20 lh-1 vertical-bottom">
                    {{ card.count }}
                  </span>
                </div>
                <div>
                  <span class="fs-12 mb-0">{{ card.increase }} by <span
                      :class="`badge bg-${card.color}-transparent text-${card.color} mx-1`">{{ card.percentage }}</span>
                    this month</span>
                </div>
              </div>
            </div>
          </SimpleCardComponent>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <div class="card custom-card overflow-hidden">
            <div class="ecommerce-sale-image">
              <img src="/images/ecommerce/png/35.png" class="card-img-top" alt="...">
              <div class="card-img-overlay d-flex flex-column p-4 text-fixed-white">
                <p class="mb-1 op-7 fs-12">Spruko Official.Inc</p>
                <h6 class="fw-semibold mb-4 text-fixed-white">BIG SAVING DAYS</h6>
                <p class="ecommerce-bankoffer-details">Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On
                  orders
                  of $500 and above <a href="javascript:void(0);"
                    class="text-decoration-underline text-fixed-white">T&amp;C</a></p>
                <p class="ecommerce-sale-days mb-0">15, Jan 2022 - 19, Jan 2022</p>
                <p class="ecommerce-sales-calendar text-center mb-0">
                  <span>15</span>
                  <span class="d-block fs-15 lh-1 fw-semibold">Jan</span>
                </p>
              </div>
            </div>
            <div class="card-body">
              <a href="javascript:void(0);" class="text-primary fs-15 fw-semibold">Biggest sale is back.</a>
              <p class="mb-4 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum accusamus eum
                dolorum sapiente. Saepe</p>
              <button type="button" class="btn btn-primary btn-wave me-2">Notify Me</button>
              <button type="button" class="btn btn-outline-primary btn-wave">Offers</button>
            </div>
          </div>
        </div>
        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
          <SimpleCardComponent title="Recent Orders" cardHeaderClass="justify-content-between" cardClassBody="p-3">
            <template v-slot:showheader>
              <div class="dropdown">
                <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fe fe-more-vertical"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                </ul>
              </div>
            </template>
            <CrmdealCardComponent :card="ecommerceData.recentOrders" ulClass="list-unstyled mb-0" />
          </SimpleCardComponent>
        </div>
        <div class="col-xl-12">
          <SimpleCardComponent cardHeaderClass="justify-content-between d-sm-flex d-block" title="Orders"
            cardClassBody="p-0">
            <template v-slot:showheader>
              <div>
                <ul class="nav nav-tabs justify-content-end nav-tabs-header mb-0 d-sm-flex d-block mt-sm-0 mt-2"
                  role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-bs-toggle="tab" role="tab" aria-current="page" href="#active-orders"
                      aria-selected="true">Active Orders</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#completed-orders"
                      aria-selected="true">Completed</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-bs-toggle="tab" role="tab" aria-current="page" href="#cancelled-orders"
                      aria-selected="true">Cancelled</a>
                  </li>
                </ul>
              </div>
            </template>
            <div class="tab-content">
              <div class="tab-pane show active text-muted border-0 p-0" id="active-orders" role="tabpanel">
                <TableComponent :headers="[]" :rows="ecommerceData.activeOrders"
                  tableClass="table card-table table-vcenter text-nowrap mb-0" tbodyClass="active-tab"
                  v-slot:cell="{ row }">
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="lh-1">
                        <span class="avatar avatar-md online avatar-rounded me-2">
                          <img :src="(row.customerImage)" alt="">
                        </span>
                      </div>
                      <div class="align-items-center">
                        <span class="fs-12 text-muted">Name</span>
                        <p class="mb-0 fw-medium">{{ row.customerName }}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center">
                      <span class="fs-12 text-muted">Price</span>
                      <p class="mb-0 fw-semibold">{{ row.price }}</p>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center">
                      <span class="fs-12 text-muted">Delivery Date</span>
                      <p class="mb-0 fw-medium">{{ row.deliveryDate }}</p>
                    </div>
                  </td>
                  <td>
                    <span class="avatar avatar-md">
                      <img :src="(row.productImage)" alt="">
                    </span>
                  </td>
                  <td>
                    <a aria-label="anchor" href="javascript:void(0);">
                      <span class="orders-arrow"><i class="ri-arrow-right-s-line fs-18"></i></span>
                    </a>
                  </td>
                </TableComponent>
              </div>
              <div class="tab-pane text-muted border-0 p-0" id="completed-orders" role="tabpanel">
                <TableComponent :headers="[]" :rows="ecommerceData.completed"
                  tableClass="table card-table table-vcenter text-nowrap mb-0" tbodyClass="active-tab"
                  v-slot:cell="{ row }">
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="lh-1">
                        <span class="avatar avatar-md online avatar-rounded me-2">
                          <img :src="(row.customerImage)" alt="">
                        </span>
                      </div>
                      <div class="align-items-center">
                        <span class="fs-12 text-muted">Name</span>
                        <p class="mb-0 fw-medium">{{ row.customerName }}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center">
                      <span class="fs-12 text-muted">Price</span>
                      <p class="mb-0 fw-semibold">{{ row.price }}</p>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center">
                      <span class="fs-12 text-success">Delivered On</span>
                      <p class="mb-0 fw-medium">{{ row.deliveryDate }}</p>
                    </div>
                  </td>
                  <td>
                    <span class="avatar avatar-md">
                      <img :src="(row.productImage)" alt="">
                    </span>
                  </td>
                  <td>
                    <a aria-label="anchor" href="javascript:void(0);">
                      <span class="orders-arrow"><i class="ri-arrow-right-s-line fs-18"></i></span>
                    </a>
                  </td>
                </TableComponent>
              </div>
              <div class="tab-pane text-muted border-0 p-0" id="cancelled-orders" role="tabpanel">
                <TableComponent :headers="[]" :rows="ecommerceData.cancelled"
                  tableClass="table card-table table-vcenter text-nowrap mb-0" tbodyClass="active-tab"
                  v-slot:cell="{ row }">
                  <td>
                    <div class="d-flex align-items-center">
                      <div class="lh-1">
                        <span class="avatar avatar-md online avatar-rounded me-2">
                          <img :src="(row.customerImage)" alt="">
                        </span>
                      </div>
                      <div class="align-items-center">
                        <span class="fs-12 text-muted">Name</span>
                        <p class="mb-0 fw-medium">{{ row.customerName }}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center">
                      <span class="fs-12 text-muted">Price</span>
                      <p class="mb-0 fw-semibold">{{ row.price }}</p>
                    </div>
                  </td>
                  <td>
                    <div class="align-items-center">
                      <span class="fs-12 text-danger">Cancelled Date</span>
                      <p class="mb-0 fw-medium">{{ row.cancelledDate }}</p>
                    </div>
                  </td>
                  <td>
                    <span class="avatar avatar-md">
                      <img :src="(row.productImage)" alt="">
                    </span>
                  </td>
                  <td>
                    <a aria-label="anchor" href="javascript:void(0);">
                      <span class="orders-arrow"><i class="ri-arrow-right-s-line fs-18"></i></span>
                    </a>
                  </td>
                </TableComponent>
              </div>
            </div>
          </SimpleCardComponent>
        </div>
      </div>
    </div>
    <div class="col-xxl-6 col-xl-12">
      <div class="row">
        <div class="col-xl-12">
          <ChartCardComponent :card="card" title="Earnings" :showData="true"
            v-for="(card, index) in ecommerceData.Earnings1" :key="index">
            <template v-slot:cardHeader>
              <div class="dropdown">
                <a href="javascript:void(0);" class="p-2 fs-12 text-muted" data-bs-toggle="dropdown"
                  aria-expanded="false"> View All
                  <i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                </a>
                <ul class="dropdown-menu" role="menu">
                  <li><a class="dropdown-item" href="javascript:void(0);">Download</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Import</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Export</a></li>
                </ul>
              </div>
            </template>
            <template v-slot:showData>
              <div class="row ps-lg-5 mb-0 pb-0 gy-sm-0 gy-3">
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-4" v-for="(item, index) in ecommerceData.Earning"
                  :key="index">
                  <div :class="['mb-1', 'earning', 'first-half', 'ms-3', item.title.toLowerCase().replace(' ', '-'),]">
                    {{
                      item.title }}</div>
                  <div class="mb-0">
                    <span class="mt-1 fs-16 fw-semibold">{{ item.amount }}</span>
                    <span :class="item.isPositive ? 'text-success' : 'text-danger'">
                      <i class="fa fa-caret-up mx-1"></i>
                      <span :class="[
                        item.isPositive ? 'badge bg-success-transparent text-success' : 'badge bg-danger-transparent text-danger',
                        'px-1 py-2 fs-10'
                      ]">
                        {{ item.percentage }}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </template>
          </ChartCardComponent>
        </div>
        <div class="col-xl-12">
          <SimpleCardComponent title="Top Selling Products" cardClassBody="p-0">
            <TableComponent :headers="tableHeaders" :rows="ecommerceData.topSelling" tableClass="table text-nowrap mb-0"
              tbodyClass="top-selling" v-slot:cell="{ row }" thClass="text-center">
              <td class="text-center lh-1">
                <span class="avatar avatar-md">
                  <img :src="(row.image)" class="p-2 rounded-pill bg-light" alt="">
                </span>
              </td>
              <td>{{ row.name }}</td>
              <td>{{ row.category }}</td>
              <td><span :class="`badge badge-sm bg-${row.color}-transparent text-${row.color}`">{{ row.stockStatus
              }}</span>
              </td>
              <td>
                <span class="fw-semibold">{{ row.quantity }}</span>
              </td>
            </TableComponent>
          </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
          <SimpleCardComponent title="Top Countries By Sales" cardHeaderClass="justify-content-between">
            <template v-slot:showheader>
              <div class="dropdown">
                <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                  data-bs-toggle="dropdown">
                  <i class="fe fe-more-vertical"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                </ul>
              </div>
            </template>
            <div class="d-flex align-items-center mb-4">
              <div>
                <h4 class="mb-0 lh-1">38,256</h4>
              </div>
              <div><span class="badge bg-primary-transparent mx-1">12.24%</span><span class="text-muted fs-11">Since
                  last week</span></div>
            </div>
            <ul class="mb-0 list-unstyled">
              <li :class="card.liClass" v-for="(card, index) in ecommerceData.countries" :key="index">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex align-items-center lh-1">
                    <span class="avatar avatar-xs me-2 avatar-rounded">
                      <img :src="card.flag" alt="">
                    </span>
                    <span class="top-country-name">{{ card.name }}</span>
                  </div>
                  <div>
                    <i :class="`ti ti-trending-${card.trending} fs-16 text-${card.color}`"></i>
                  </div>
                  <div class="fs-14">{{ card.value }}</div>
                </div>
              </li>
            </ul>
          </SimpleCardComponent>
        </div>
        <div class="col-xl-6">
          <SimpleCardComponent title="Top Customers " cardHeaderClass="justify-content-between">
            <template v-slot:showheader>
              <div class="dropdown">
                <a aria-label="anchor" href="javascript:void(0);" class="btn btn-icon btn-sm btn-light"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <i class="fe fe-more-vertical"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                  <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                </ul>
              </div>
            </template>
            <CrmdealCardComponent :card="ecommerceData.topCustomers" ulClass="list-unstyled mb-0" />
          </SimpleCardComponent>
        </div>
      </div>
    </div>
  </div>
  <!--End::row-1 -->

  <!-- Start:: row-2 -->
  <div class="row">
    <div class="col-xl-12">
      <SimpleCardComponent title="Products Overview" cardHeaderClass="justify-content-between" :showCardFooter="true">
        <template v-slot:showheader>
          <div class="d-sm-flex">
            <div class="me-3 mb-3 mb-sm-0">
              <input class="form-control form-control-sm" type="text" placeholder="Search"
                aria-label=".form-control-sm example">
            </div>
            <div class="dropdown">
              <a href="javascript:void(0);" class="btn btn-primary btn-sm btn-wave waves-effect waves-light"
                data-bs-toggle="dropdown" aria-expanded="false">
                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
              </a>
              <ul class="dropdown-menu" role="menu">
                <li><a class="dropdown-item" href="javascript:void(0);">New</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Popular</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Relevant</a></li>
              </ul>
            </div>
          </div>
        </template>
        <TableComponent :headers="['Name', 'Product Id', 'Price', 'Status', 'Sales', 'Revenue']"
          :rows="ecommerceData.productsOverview" tableClass="table text-nowrap table-bordered" v-slot:cell="{ row }">
          <td>
            <div class="d-flex align-items-center">
              <div class="me-2 lh-1">
                <span class="avatar avatar-sm">
                  <img :src="(row.image)" alt="">
                </span>
              </div>
              <div class="fs-14">{{ row.name }}</div>
            </div>
          </td>
          <td>
            <span class="fw-semibold">{{ row.sku }}</span>
          </td>
          <td>
            {{ row.price }}
          </td>
          <td>
            <span :class="`badge ${row.color}`">{{ row.stockStatus }}</span>
          </td>
          <td>
            <span class="">{{ row.quantity }}</span>
          </td>
          <td>
            <span class="">{{ row.totalValue }}</span>
          </td>
        </TableComponent>
        <template v-slot:cardFooter>
          <div class="d-flex align-items-center">
            <div>
              Showing 5 Entries <i class="bi bi-arrow-right ms-2 fw-semibold"></i>
            </div>
            <div class="ms-auto">
              <nav aria-label="Page navigation" class="pagination-style-4">
                <ul class="pagination mb-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="javascript:void(0);">
                      Prev
                    </a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                  <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                  <li class="page-item">
                    <a class="page-link text-primary" href="javascript:void(0);">
                      next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </template>
      </SimpleCardComponent>
    </div>
  </div>
  <!-- End:: row-2 -->
</template>

<style scoped></style>
