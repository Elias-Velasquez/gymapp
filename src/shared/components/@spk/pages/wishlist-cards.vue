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
      <router-link to="/pages/ecommerce/product-details" class="product-image">
        <img :src="card.image" class="card-img mb-3" alt="Product Image">
      </router-link>
      <div class="product-icons">
        <router-link :to="icon.link" v-for="(icon, index) in card.icons" :key="index" :class="icon.iconClass">
          <i :class="`ri-${icon.icon}-line`"></i>
        </router-link>
      </div>
      <p class="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">
        {{ card.title }}
        <span class="float-end text-warning fs-12">
          {{ card.rating }}
          <i class="ri-star-s-fill align-middle ms-1"></i>
        </span>
      </p>
      <p class="product-description fs-11 text-muted mb-2">{{ card.description }}</p>
      <p class="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between">
        <span>${{ card.price }}
          <span class="text-muted text-decoration-line-through ms-1 op-6 d-inline-block">
            ${{ card.actualPrice }}
          </span>
        </span>
        <span class="badge float-end fs-10" :class="card.badgeClass">{{ card.badge }}</span>
      </p>
      <p class="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
        <i class="ti ti-discount-2 fs-16 me-1"></i>Offer Price ${{ card.price }}
      </p>
    </div>
    <template v-if="showFooter">
      <div :class="['card-footer', cardFooterClass]">
        <router-link to="/pages/ecommerce/cart" class="btn btn-primary-light m-1">
          <i class="ri-shopping-cart-2-line me-2 align-middle"></i>Move To Cart
        </router-link>
        <router-link to="/pages/ecommerce/product-details" class="btn btn-success-light m-1">
          <i class="ri-eye-line me-2 align-middle"></i>View Product
        </router-link>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
