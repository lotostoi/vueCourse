<template>
  <div class="container">
    <app-header @showCart="on=false" @showCotalog="on=true"></app-header>
    <div class="row">
      <app-nav></app-nav>
      <div class="col-10 mt-5 contAnim">
        <transition enter-active-class="enter" leave-active-class="leave" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import AppContent from "./views/Cotalog";
import AppCart from "./views/Cart";
import AppNav from "./components/nav";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    AppHeader,
    AppContent,
    AppCart,
    AppNav
  },
  data() {
    return {};
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
body {
 // overflow: hidden;
}
@keyframes leave {
  from {
    perspective-origin: 50% 0%;
    transform: rotate3d(0, 1, 0, 0);
    opacity: 1;
  }
  to {
    transform: rotate3d(0, 1, 0, 90deg);
    opacity: 1;
  }
}
@keyframes enter {
  from {
    perspective-origin: 50% 0%;
    transform: rotate3d(0, 1, 0, -90deg);

    opacity: 1;
  }

  to {
    opacity: 1;
    transform: rotate3d(0, 1, 0, 0);
  }
}

.contAnim {
  perspective: 10000px;
  transform-style: preserve-3d;
}

.leave {
  animation: leave 0.3s linear forwards;
}
.enter {
  animation: enter 0.3s linear forwards;
}
</style>