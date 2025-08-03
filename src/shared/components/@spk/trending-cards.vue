<script lang="js">
export default {
  props: {
    customCardClass: String,
    cardBodyClas: String,
    card: Object,
  }
}
</script>

<template>
  <div :class="['card custom-card', customCardClass]">
    <div :class="['card-body', cardBodyClas]">
      <div class="d-flex flex-wrap align-items-top justify-content-between">
        <div class="me-2" v-if="card.firstIcon">
          <span
            :class="`avatar rounded-2 avatra-rounded text-bg-${card.firstIconColor} fs-20 text-${card.firstIconTextColor}`"><i
              :class="`bi bi-${card.firstIcon}`"></i></span>
        </div>
        <div class="flex-fill text">
          <p :class="`mb-0 text-${card.textColor} ${card.mbClass} ${card.fsClass}`">{{ card.label }}</p>
          <div class="d-flex align-items-center">
            <span :class="card.count ? `${card.countColor}` : `fs-12 text-${card.countColor}`">{{ card.count }}</span>
            <span v-if="card.trend" :class="`fs-12 text-${card.tredIconColor} ms-2`"><i
                class="ti ti-trending-up me-1 d-inline-block"></i>{{ card.trend }}</span>
          </div>
          <p class="mb-0 fs-11" v-if="card.viewAll"><a href="javascript:void(0);"
              class="text-success text-decoration-underline">View All</a></p>
        </div>
        <div>
          <span :class="`avatar avatar-md ${card.avatarRounded} bg-${card.bgColor} text-${card.iconColor} fs-18`"
            v-if="card.iconClass">
            <i :class="`bi bi-${card.iconClass}`"></i>
          </span>
          <span class="badge bg-success" v-else><i
              class="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>14.69%</span>
        </div>
      </div>
      <template v-if="card.someCount">
        <p class="mb-3 fs-5 fw-semibold mt-3">{{ card.someCount }}</p>
        <p class="mb-2 text-muted fw-normal">{{ card.someConetent }}</p>
        <div class="d-flex align-items-center justify-content-between">
          <div class="avatar-list-stacked">
            <a href="javascript:void(0);" class="avatar avatar-sm rounded-circle overflow-hidden"
              data-bs-toggle="tooltip" aria-label="Mis x matched" v-for="(img, index) in card.img" :key="index">
              <img :src="img.src" alt="img" class="w-100">
            </a>
            <a href="javascript:void(0);"
              class="avatar avatar-sm rounded-circle overflow-hidden bg-primary text-fixed-white"
              data-bs-toggle="tooltip">+4
            </a>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped></style>