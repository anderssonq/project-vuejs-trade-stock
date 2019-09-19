<template>
  <div>
    <div v-if="stocks.length!=0">
      <appStock v-for="stock in stocks" :key="stock.id" :stock="stock"></appStock>
    </div>
    <div v-if="stocks.length==0">
      <p class="text-center">There's nothing yet, go to buy stocks!, Good Luck!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock";
export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appStock: Stock
  }
};
</script>