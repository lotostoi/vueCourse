<template>
  <div>
    <app-header @showCart="on=false" @showCotalog="on=true"></app-header>
    <app-content v-if="on"></app-content>
    <app-cart v-else  @back="on=!on"></app-cart>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppContent from "./components/Content";
import AppCart from "./components/Cart";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppHeader,
    AppContent,
    AppCart
  },
  data() {
    return {
      on: true
    };
  },

  computed: {
    ...mapGetters({ orderStatus: "status" })
  },
  methods: {
    ...mapActions({ makeOrder: "send" })
  }
};
</script>