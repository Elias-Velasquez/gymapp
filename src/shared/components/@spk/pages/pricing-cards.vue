<template>
  <div class="card custom-card" :class="customCardClass">
    <div class="card-body" :class="cardBodyClass">
      <div class="px-1 py-2  op-3" :class="cardHeadClass">
      </div>
      <div class="p-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="fs-18 fw-semibold">{{ card.type }}</div>
          <div>
            <span :class="`badge bg-${card.color}-transparent`">{{ card.badge }}</span>
          </div>
        </div>
        <div v-if="planType" class="fs-25 fw-bold mb-1">
          {{ planType == "monthly" ? card.price : card.yearPrice }}<sub class="text-muted fw-semibold fs-11 ms-1">/
            &nbsp;{{ planType == "monthly" ? "Per Month" : "Per Year" }}</sub>
        </div>
        <div class="mb-1 text-muted">
          {{ card.description }}
        </div>
        <div v-if="planType" class="fs-12 mb-3"><u>{{ planType == "monthly" ? "Billed Monthly" : "Billed Yearly" }}</u>
        </div>
        <ul class="list-unstyled mb-0">
          <li class="d-flex align-items-center mb-3" v-for="(plan, key) of card.providerList" :key="key">
            <span class="me-2">
              <i :class="`ri-checkbox-circle-line fs-15 text-${plan.status} ${plan.opacity}`"></i>
            </span>
            <span v-html="plan.title">
            </span>
          </li>
          <li class="d-grid" v-if="card.lable"> <button
              :class="`btn btn-${card.lableColor} btn-wave waves-effect waves-light`">{{ card.lable }}</button> </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  props: {
    customCardClass: String,
    cardBodyClass: String,
    cardHeadClass: String,
    planType: String,
    card: Object,
  },
}
</script>

<style scoped></style>
