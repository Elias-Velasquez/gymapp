<script lang="ts">
import PageHeader from "../../../shared/components/pageheader/pageheader.vue";
import Swal from 'sweetalert2';
import BasicCardComponent from "../../../shared/UI/basic-cards.vue";
import png1 from "/images/ecommerce/png/1.png";
import png3 from "/images/ecommerce/png/3.png";
import png7 from "/images/ecommerce/png/7.png";
import png12 from "/images/ecommerce/png/12.png";
import png15 from "/images/ecommerce/png/15.png";
import SimpleCardComponent from "../../../shared/UI/simple-cards.vue";

export default {
  components: {
    PageHeader,
    BasicCardComponent,
    SimpleCardComponent
  },
  data() {
    return {
      dataToPass: {
        current: "Cart",
        list: ['Pages', 'Ecommerce', 'Cart'],
      },
      cartProducts: [
        { id: 1, name: 'Hiroma grey Hoodie (Unisex wear)', size: 'Large', color: 'Grey', price: 459, quantity: 2, image: png1, offer: 'In Offer', badgeColor: "success-transparent" },
        { id: 2, name: 'Blue Denim Jacket for Women', size: 'Medium', color: 'Blue', price: 129, quantity: 1, image: png7, offer: '25% discount', badgeColor: "info" },
        { id: 3, name: 'Orange smart watch(44mm dial)', size: '44mm dial', color: 'Bronze', price: 249, quantity: 2, image: png15, offer: 'On Offer', badgeColor: "success-transparent" },
        { id: 4, name: 'Sweater for winter', size: 'Medium', color: 'Light Pink', price: 249, quantity: 2, image: png12, offer: 'On Offer', badgeColor: "success-transparent" },
        { id: 5, name: 'Snow coat from denim Corporation', size: 'Large', color: 'Green', price: 1299, quantity: 1, image: png3, offer: null, badgeColor: null }
      ]
    };
  },
  methods: {
    increaseQuantity(index: number) {
      this.cartProducts[index].quantity++;
    },
    decreaseQuantity(index: number) {
      if (this.cartProducts[index].quantity > 0) {
        this.cartProducts[index].quantity--;
      }
    },
    confirmAlert(index: number) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.removeFromCart(index);
          Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
        }
      });
    },
    removeFromCart(index: number) {
      this.cartProducts.splice(index, 1);
    },
  },
};
</script>



<template>
  <PageHeader :propData="dataToPass" />

  <!-- Start::row-1 -->
  <div class="row">
    <div class="col-xxl-9">
      <SimpleCardComponent title="Cart Items">
        <TableComponent :headers="['Product Name', 'Price', 'Quantity', 'Total', 'Action']" :rows="cartProducts"
          tableClass="table table-bordered text-nowrap" v-slot:cell="{ row, index }">
          <td>
            <div class="d-flex align-items-center">
              <div class="me-3">
                <span class="avatar avatar-xxl bg-light">
                  <img :src="row.image" alt="">
                </span>
              </div>
              <div>
                <div class="mb-1 fs-14 fw-semibold">
                  <a href="javascript:void(0);">{{ row.name }}</a>
                </div>
                <div class="mb-1">
                  <span class="me-1">Size:</span>
                  <span class="fw-semibold text-muted">{{ row.size }}</span>
                </div>
                <div class="mb-1">
                  <span class="me-1">Color:</span>
                  <span class="fw-semibold text-muted">
                    {{ row.color }}
                    <span v-if="row.offer" :class="`badge bg-${row.badgeColor} ms-3`">{{ row.offer }}</span>
                  </span>
                </div>
              </div>
            </div>
          </td>
          <td>
            <div class="fw-semibold fs-14">${{ row.price.toFixed(2) }}</div>
          </td>
          <td class="product-quantity-container">
            <div class="input-group rounded flex-nowrap">
              <button class="btn btn-icon btn-light input-group-text flex-fill product-quantity-minus border-end-0"
                @click="decreaseQuantity(index)">
                <i class="ri-subtract-line"></i>
              </button>
              <input type="text" class="form-control form-control-sm text-center w-100" aria-label="quantity"
                :value="row.quantity" readonly>
              <button class="btn btn-icon btn-light input-group-text flex-fill product-quantity-plus border-start-0"
                @click="increaseQuantity(index)">
                <i class="ri-add-line"></i>
              </button>
            </div>
          </td>
          <td>
            <div class="fs-14 fw-semibold">
              ${{ (row.price * row.quantity).toFixed(2) }}
            </div>
          </td>
          <td>
            <router-link to="/pages/ecommerce/wishlist" class="btn btn-icon btn-success me-2"><v-tooltip
                activator="parent" location="top">Add To Wishlist</v-tooltip>
              <i class="ri-heart-line"></i>
            </router-link>
            <button class="btn btn-icon btn-danger btn-delete" @click="confirmAlert(index)"><v-tooltip
                activator="parent" location="top">Remove From cart</v-tooltip>
              <i class="ri-delete-bin-line"></i>
            </button>
          </td>
        </TableComponent>
      </SimpleCardComponent>
    </div>

    <div class="col-xxl-3">
      <BasicCardComponent :showCardBody="true" cardBodyClass="p-0">
        <template v-slot:card>
          <div class="p-3 border-bottom d-block">
            <div class="alert alert-primary text-center" role="alert">
              <span class="text-default">Sale Ends in</span>
              <vue-countdown :time="2 * 12 * 60 * 60 * 1000" v-slot="{ days, hours, minutes, seconds }">
                <span class="fw-semibold fs-14 text-primary ms-1">{{ hours }}
                  Hours : {{ minutes }} Minutes: {{ seconds }} seconds</span>
              </vue-countdown>
            </div>
          </div>
        </template>
        <template v-slot:cardBody>
          <div class="p-3 border-bottom border-block-end-dashed">
            <p class="mb-2 fw-semibold text-default">Delivery:</p>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" class="btn-check" name="btnradio" id="btnradio1">
              <label class="btn btn-outline-light text-default" for="btnradio1">Free Delivery</label>
              <input type="radio" class="btn-check" name="btnradio" id="btnradio2" checked>
              <label class="btn btn-outline-light text-default" for="btnradio2">Express Delivery</label>
            </div>
            <p class="mb-0 mt-2 fs-12 text-muted">Delivered by 24, Nov 2022</p>
          </div>
          <div class="p-3 border-bottom border-block-end-dashed">
            <div class="input-group mb-1">
              <input type="text" class="form-control form-control-sm" placeholder="Coupon Code" aria-label="coupon-code"
                aria-describedby="coupons">
              <button class="btn btn-primary input-group-text" id="coupons">Apply</button>
            </div>
            <a href="javascript:void(0);" class="fs-12 text-success">10% off on first purchase</a>
          </div>
          <div class="p-3 border-bottom border-block-end-dashed">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="text-muted op-7">Sub Total</div>
              <div class="fw-semibold fs-14 text-default">$1,299</div>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="text-muted op-7">Discount</div>
              <div class="fw-semibold fs-14 text-success">10% - $129</div>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="text-muted op-7">Delivery Charges</div>
              <div class="fw-semibold fs-14 text-danger">- $49</div>
            </div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <div class="text-muted op-7">Service Tax (18%)</div>
              <div class="fw-semibold fs-14 text-default">- $169</div>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <div class="text-muted op-7">Total :</div>
              <div class="fw-semibold fs-14 text-primary">$1,387</div>
            </div>
          </div>
          <div class="p-3 d-grid">
            <router-link to="/pages/ecommerce/checkout" class="btn btn-primary btn-wave mb-2">Proceed To
              Checkout</router-link>
            <router-link to="/pages/ecommerce/products" class="btn btn-light btn-wave">Continue Shopping</router-link>
          </div>
        </template>
      </BasicCardComponent>
    </div>
  </div>
  <!-- End::row-1 -->
</template>

<style scoped>
/* Add any specific styles here */
</style>
