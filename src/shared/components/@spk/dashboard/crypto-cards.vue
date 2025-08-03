<script lang="js">
export default {
  props: {
    customCardClass: String,
    cardBodyClass: String,
    cardFooterClass: String,
    card: Object,
    showFooter: { type: Boolean, default: false }
  }
}
</script>

<template>
  <div :class="['card custom-card', customCardClass]">
    <div :class="['card-body', cardBodyClass]">
      <div class="d-flex align-items-center mb-4">
        <div class="d-flex align-items-center">
          <div class="me-2">
            <span class="avatar avatar-md avatar-rounded bg-light p-2">
              <img :src="card.coinSrc" alt="">
            </span>
          </div>
          <div class="mb-0 fw-semibold">
            {{ card.name }}
          </div>
        </div>
        <div class="ms-auto" :id="card.chartId">
          <apexchart :height="card.chart.height" :width="card.chart.width" :type="card.chart.type"
            :options="card.chart.options" :series="card.chart.series"></apexchart>
        </div>
      </div>
      <div class="d-flex align-items-end">
        <div>
          <p class="mb-1">{{ card.type }}</p>
          <p class="fs-20 mb-0 fw-semibold lh-1 text-primary">{{ card.count }}</p>
        </div>
        <div class="ms-auto text-end">
          <p class="mb-0">{{ card.value }}</p>
          <p class="mb-0 text-muted"><span class="text-muted">Vol:</span>({{ card.vol }})</p>
        </div>
      </div>
    </div>
    <div :class="['card-footer', cardFooterClass]" v-if="showFooter">
      <div class="list-group border-0"> <a href="javascript:void(0);"
          class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
          <div class="d-flex w-100 justify-content-between align-items-center">
            <p class="tx-14 mb-0 font-weight-semibold text-dark">Price Change
              <span class="badge bg-primary-transparent ms-3 text-primary">Increased</span>
            </p>
            <p class="text-success mb-0 font-weight-normal tx-13">
              <span class="numberfont">{{ card.footerCount }}</span>
              <i class="fa fa-arrow-up"></i> today
            </p>
          </div>
        </a>
        <a href="javascript:void(0);"
          class="list-group-item flex-column align-items-start border-top-0 border-start-0 border-end-0 border-bottom py-3">
          <div class="d-flex w-100 justify-content-between align-items-center">
            <p class="tx-14 mb-0 font-weight-semibold text-dark">Market Rank<span
                class="badge bg-secondary-transparent ms-3" v-if="card.yearsBadge">3 Years</span></p>
            <p class="text-dark mb-0 tx-15"> <span class="numberfont">{{ card.rank }}</span> </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
