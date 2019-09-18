<template>
  <div class="col-sm-6 col-md-4">
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">
          {{ stock.name }} <small>(Price : {{ stock.price }})</small>
        </h5>
        <hr />
        <input
          type="number"
          class="form-control"
          placeholder="Quantity"
          v-model="quantity"
          :class="{ danger: insufficientFunds }"
        />
        <hr />
        <button
          class="btn btn-success"
          @click="buyStock"
          :disabled="
            insufficientFunds || quantity <= 0 || Number.isInteger(quantity)
          "
        >
          {{ insufficientFunds ? "Insufficient Funds" : "Buy" }}
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
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficientFunds() {
      return this.quantity * this.stock.price > this.funds;
    }
  },
  methods: {
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      };
      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  }
};
</script>