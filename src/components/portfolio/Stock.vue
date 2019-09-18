q<template>
  <div class="col-sm-6 col-md-4">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">
          {{ stock.name }}
          <small
            >(Price : {{ stock.price }} | Quantity: {{ stock.quantity }})</small
          >
        </h5>
        <hr />
        <input
          type="number"
          class="form-control"
          placeholder="Quantity"
          v-model="quantity"
          :class="{ danger: insufficientQuantity }"
        />
        <hr />
        <button
          class="btn btn-success"
          @click="sellStock"
          :disabled="
            insufficientQuantity || quantity <= 0 || Number.isInteger(quantity)
          "
        >
          {{ insufficientQuantity ? "Not enough Stocks" : "Sell" }}
        </button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.danger {
  border: 1px solid red;
}
</style>


<script>
import { mapActions } from "vuex";
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock"
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.placeSellOrder(order);
      this.quantity = 0;
    }
  }
};
</script>