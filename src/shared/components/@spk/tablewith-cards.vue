<script>
export default {
  props: {
    title: String,
    code: String,
    customCardClass: String,
    customCardHeaderClass: String,
    customCardBodyClass: String,
    customCardFooterClass: String,
    showDropdown: { type: Boolean, default: false },
    showFooter: { type: Boolean, default: false },
    showInput: { type: Boolean, default: false },
    dropdownToggleClass: String,
    showSortByDropdown: { type: Boolean, default: false },
    showVerticalIconDropdown: { type: Boolean, default: false },
    dropdownMenu: String,
    dropdown: { type: Array, default: () => { } },
    cardBodyIdClass: String,
    showViewAllDropdown: { type: Boolean, default: false },
    showAllDropdown: { type: Boolean, default: false },
    showButtonGroup: { type: Boolean, default: false },
    buttonGroup: { type: Array, default: () => { } },
    showBtn: { type: Boolean, default: false },
    btnLable: String,
    btnClass: String,
  },
  computed: {
    randomValue() {
      return `random-ref-${Math.random().toString(36).substr(2, 9)}`;
    }
  }
};
</script>

<template>
  <div class="card custom-card" :class="customCardClass">
    <div class="card-header justify-content-between" :class="customCardHeaderClass">
      <div class="card-title" v-html="title"></div>
      <div class="d-flex">
        <template v-if="showDropdown">
          <template v-if="showInput">
            <div class="me-3">
              <input class="form-control form-control-sm" type="text" placeholder="Search Here"
                aria-label=".form-control-sm example">
            </div>
          </template>
          <div class="dropdown">
            <a href="javascript:void(0);" :class="dropdownToggleClass" data-bs-toggle="dropdown" aria-expanded="false">
              <template v-if="showSortByDropdown">
                Sort By<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
              </template>
              <template v-if="showVerticalIconDropdown">
                <i class="fe fe-more-vertical"></i>
              </template>
              <template v-if="showViewAllDropdown">
                View All<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
              </template>
              <template v-if="showAllDropdown">
                All<i class="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
              </template>
            </a>
            <ul :class="dropdownMenu" role="menu">
              <li v-for="(card, index) in dropdown" :key="index"><a class="dropdown-item" href="javascript:void(0);">{{
                  card.name
                  }}</a></li>
            </ul>
          </div>
        </template>
        <template v-if="showButtonGroup">
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" v-for="(card, index) in buttonGroup" ::key="index" :class="card.btnClass">{{
              card.btnLable }}</button>
          </div>
        </template>
        <template v-if="showBtn">
          <div>
            <button type="button" :class="btnClass">{{ btnLable }}</button>
          </div>
        </template>
      </div>
    </div>
    <div :ref="randomValue" class="card-body" :class="customCardBodyClass" :id="cardBodyIdClass">
      <slot></slot>
    </div>
    <template v-if="showFooter">
      <div class="card-footer" :class="customCardFooterClass">
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
      </div>
    </template>
  </div>
</template>

<style scoped></style>