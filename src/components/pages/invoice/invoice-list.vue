<script lang="ts">
import { defineComponent, reactive } from "vue";
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import { invoiceStatusOptions, invoiceStatusSeries, manageInvoices, invoices } from "../../../data/invoice-list.js";


export default defineComponent({
  setup() {
    const dataToPass = reactive({
      current: "Invoice List",
      list: ['Pages', 'Invoice', 'Invoice List']
    });

    const invoicesData = reactive({
      manageInvoices,
      invoices
    });

    // Deleting an invoice
    const deleteInvoice = (invoiceId: string) => {
      invoicesData.manageInvoices = invoicesData.manageInvoices.filter(e => e.id !== invoiceId);
    };

    return {
      dataToPass,
      invoicesData,
      invoiceStatusOptions,
      invoiceStatusSeries,
      deleteInvoice
    };
  },
  components: {
    PageHeader,
  },
});
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xl-9">
      <div class="card custom-card">
        <div class="card-header justify-content-between">
          <div class="card-title">
            Manage Invoices
          </div>
          <div class="d-flex">
            <button class="btn btn-sm btn-primary btn-wave waves-light">
              <i class="ri-add-line fw-semibold align-middle me-1"></i> Create Invoice
            </button>
            <div class="dropdown ms-2">
              <button class="btn btn-icon btn-secondary-light btn-sm btn-wave waves-light" type="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <i class="ti ti-dots-vertical"></i>
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="javascript:void(0);">All Invoices</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Paid Invoices</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Pending Invoices</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);">Overdue Invoices</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card-body">
          <TableComponent :headers="['Client', 'Invoice ID', 'Issued Date', 'Amount', 'Status', 'Due Date', 'Action']"
            :rows="invoicesData.manageInvoices" tableClass="table text-nowrap table-bordered" v-slot:cell="{ row }">
            <td>
              <div class="d-flex align-items-center">
                <div class="me-2 lh-1">
                  <span class="avatar avatar-sm avatar-rounded">
                    <img :src="row.avatar" alt="">
                  </span>
                </div>
                <div>
                  <p class="mb-0 fw-semibold">{{ row.name }}</p>
                  <p class="mb-0 fs-11 text-muted">{{ row.email }}</p>
                </div>
              </div>
            </td>
            <td>
              <a href="javascript:void(0);" class="fw-semibold text-primary">{{ row.invoiceId }}</a>
            </td>
            <td>{{ row.date }}</td>
            <td>{{ row.amount }}</td>
            <td>
              <span :class="['badge', row.statusClass]">{{ row.status }}</span>
            </td>
            <td>{{ row.dueDate }}</td>
            <td>
              <button class="btn btn-primary-light btn-icon btn-sm me-2">
                <i class="ri-printer-line"></i>
              </button>
              <button class="btn btn-danger-light btn-icon ms-1 btn-sm" @click="deleteInvoice(row.id)">
                <i class="ri-delete-bin-5-line"></i>
              </button>
            </td>
          </TableComponent>
        </div>
        <div class="card-footer">
          <nav aria-label="Page navigation">
            <ul class="pagination mb-0 float-end">
              <li class="page-item disabled">
                <a class="page-link">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
              <li class="page-item active" aria-current="page">
                <a class="page-link" href="javascript:void(0);">2</a>
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
      <div class="card custom-card">
        <div class="card-body p-0">
          <div v-for="(invoice, index) in invoicesData.invoices" :key="index"
            class="d-flex align-items-top p-4 border-bottom border-block-end-dashed">
            <div :class="['svg-icon-background', invoice.bgClass, 'me-4']">
              <svg xmlns="http://www.w3.org/2000/svg" :viewBox="invoice.viewBox" :class="invoice.svgClass">
                <path :d="invoice.svgPath" />
              </svg>
            </div>
            <div class="flex-fill">
              <h6 class="mb-2 fs-12">{{ invoice.title }}
                <span :class="['badge', invoice.badgeClass, 'fw-semibold', 'float-end']">
                  {{ invoice.badge }}
                </span>
              </h6>
              <div>
                <h4 class="fs-18 fw-semibold mb-2">
                  $<span class="count-up" :data-count="invoice.amount">{{ invoice.amount }}</span>K
                </h4>
                <p class="text-muted fs-11 mb-0 lh-1">
                  <span :class="['text-' + invoice.percentageClass, 'me-1', 'd-inline-block', 'fw-semibold']">
                    <i :class="invoice.arrowIconClass" class="me-1 align-middle"></i>{{ invoice.percentage }}
                  </span>
                  <span>{{ invoice.timePeriod }}</span>
                </p>
              </div>
            </div>
          </div>
          <div class="p-4">
            <p class="fs-15 fw-semibold">Invoice Status <span class="text-muted fw-normal">(Last 6 months) :</span></p>
            <apexchart height="210" type="bar" :options="invoiceStatusOptions" :series="invoiceStatusSeries">
            </apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped></style>
