<script lang="js">
export default {
  props: {
    card: Object,
  }
}
</script>

<template>
  <div :class="['card custom-card', { 'overflow-hidden': card.type === 'revenue' }]">
    <div class="card-body" :class="{ 'p-0': card.type === 'revenue' }">
      <div :class="card.paddingClass">
        <div class="d-flex align-items-center mb-2">
          <span :class="['avatar avatar-md avatar-rounded', card.iconClass, 'me-2']">
            <i :class="card.icon"></i>
          </span>
          <p class="mb-0 flex-fill text-muted">{{ card.title }}</p>
        </div>
        <span class="fs-5 fw-semibold">{{ card.amount }}</span>
        <span class="fs-12 text-success ms-1">
          <i class="ti ti-trending-up me-1 d-inline-block"></i>{{ card.percentage }}
        </span>
      </div>
      <apexchart v-if="card.type === 'revenue'" type="area" height="180px" :options="card.chart.options"
        :series="card.chart.series"></apexchart>
      <div v-if="card.type === 'members'">
        <div class="fw-normal d-flex align-items-center mb-2 mt-3">
          <p class="mb-0 flex-fill">Active Candidates</p>
          <span>{{ card.activeCandidates }}</span>
        </div>
        <div class="progress progress-xs mb-4">
          <div class="progress-bar bg-success" :style="{ width: card.candidateProgress + '%' }" role="progressbar"
            :aria-valuenow="card.candidateProgress" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div class="fw-normal d-flex align-items-center mb-2">
          <p class="mb-0 flex-fill">Active Recruiters</p>
          <span>{{ card.activeRecruiters }}</span>
        </div>
        <div class="progress progress-xs mb-3">
          <div class="progress-bar bg-success" :style="{ width: card.recruiterProgress + '%' }" role="progressbar"
            :aria-valuenow="card.recruiterProgress" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
      <div v-if="card.type === 'members'" class="card-footer text-center">
        <div class="d-grid">
          <a href="javascript:void(0);" class="text-primary">View Details <i class="ti ti-external-link"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>