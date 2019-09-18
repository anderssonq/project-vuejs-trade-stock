<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/" class="navbar-brand">Stock Trader</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link
            to="/portfolio"
            class="nav-item"
            active-class="active"
            tag="li"
            ><a class="nav-link">Portfolio</a></router-link
          >
          <router-link
            to="/stocks"
            class="nav-item"
            active-class="active"
            tag="li"
            ><a class="nav-link">Buy Stocks</a></router-link
          >
        </ul>
      </div>

      <strong class="navbar-text"> Funds: {{ funds | currency }}</strong>

      <ul class="nav navbar-nav navbar-left mr-5">
        <li class="nav-item">
          <a href="#" class="nav-link" @click="endDay">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      isDropdownOpen: false
    };
  },
  computed: {
    ...mapGetters(["funds", "stocks", "stockPortfolio"])
  },
  methods: {
    ...mapActions({
      randomizeStocks:'randomizeStocks',
      fetchData: 'loadData'
    }),
    endDay() {
      this.randomizeStocks();
    },
    saveData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.stockPortfolio,
        stocks: this.stocks
      };
      this.$http.put("data.json", data);
    },
    loadData() {
      this.fetchData();
    }
  }
};
</script>

