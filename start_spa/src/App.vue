<template>
  <div>
    <app-header @showCart="on=false" @showCotalog="on=true"></app-header>
    <transition enter-active-class="enter" leave-active-class="leave" mode="out-in">
      <app-content v-if="on"></app-content>
      <app-cart @back="on=!on" v-else></app-cart>
    </transition>
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

<style lang="scss">
@keyframes leave {
  from {
    opacity: 1;
    transform: translateX(0);
    
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
@keyframes enter {
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.enter {
  animation: enter 0.5s linear forwards;
}
.leave {
  animation: leave 0.5s linear forwards;
}
</style>