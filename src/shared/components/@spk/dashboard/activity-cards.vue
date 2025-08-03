<script lang="js">
export default {
  props: {
    customCardClass: String,
    cardHeaderClass: String,
    cardBodyClass: String,
    title: String,
    card: Object,
    ulClass: String,
    liClass: String,
    showDropdown: { type: Boolean, default: false }
  }
}
</script>
<template>
  <div :class="['card custom-card', customCardClass]">
    <div :class="['card-header justify-content-between', cardHeaderClass]">
      <div class="card-title">
        {{ title }}
      </div>
      <slot name="cardHeader"></slot>
    </div>
    <div class="card-body">
      <div>
        <ul :class="ulClass">
          <li v-for="(activity, index) in card" :key="index" :class="liClass">
            <div class="d-flex align-items-top">
              <div class="me-3" v-if="activity.avatarClass">
                <span :class="`avatar avatar-xs bg-${activity.avatarClass}-transparent avatar-rounded`">
                  <i :class="`bi ${activity.iconClass} fs-8`"></i>
                </span>
              </div>
              <div class="me-5 text-center" v-else>
                <span :class="`d-block fs-20 fw-semibold text-${activity.textColor}`">{{ activity.day }}</span>
                <span class="d-block fs-12 text-muted">{{ activity.week }}</span>
              </div>
              <div class="crm-timeline-content">
                <span v-html="activity.mainText" :class="activity.spanText"></span>
                <small class="text-muted mt-0 mb-0 fs-10" v-if="activity.timeing">{{ activity.timeing }}</small>
              </div>
              <div class="flex-fill text-end">
                <span class="d-block text-muted fs-11 op-7" v-if="activity.time">{{ activity.time }}</span>
                <div class="dropdown" v-if="showDropdown">
                  <a aria-label="anchor" href="javascript:void(0);" class="p-2 fs-16 text-muted"
                    data-bs-toggle="dropdown">
                    <i class="fe fe-more-vertical"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Another action</a></li>
                    <li><a class="dropdown-item" href="javascript:void(0);">Something else here</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
