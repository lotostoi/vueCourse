<template>
  <div class="mt-1">
    <div class="container bg-secondary rounded p-3">
      <h1>Cart</h1>

      <transition-group leave-active-class="prod-leave" teg="div" class="row">
        <div class="col col-sm-3" v-for="good in goodsInCart" :key="good.id">
          <b-card
            :title="prod(good.id)['name']"
            :img-src="prod(good.id)['img']"
            :img-alt="good.name"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="flex"
          >
            <p>Prise: ${{prod(good.id)['price']}}</p>
            <p>TotalPrise: ${{prod(good.id)['price'] * good.cnt}}</p>
            <div class="spa-div">
              <button class="btn btn-warning" @click="actionsCart({id:good.id,action:'dec'})">-1</button>
              <input
                type="text"
                class="spa-input"
                :value="good.cnt"
                @change="good.cnt"
              />
              <button class="btn btn-success" @click="actionsCart({id:good.id,action:'inc'})">+1</button>
            </div>
          </b-card>
        </div>
      </transition-group>

      <!--     <hr />
      <p>TotalQuantit: {{ inCart }}</p>
      <p>TotalPrice: {{ total }}</p>
      <hr />-->
      <!--   <button class="btn btn-success" @click="clearCart">Clear cart</button> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { BCard } from "bootstrap-vue";

export default {
  components: { BCard },
  computed: mapGetters({
    goodsInCart: "cart/goodsInCart",
    prod: "cotalog/getGood"
  }),
  methods: {
    ...mapActions({ actionsCart: "cart/actionsCart" })
  }
};
</script>
<style lang="scss" scoped>
@keyframes prod-leave {
  from {
    transform: translate(0, 0);
    opacity: 1;
  }
  25% {
    transform: translate(50px, -50px);
    opacity: 0.75;
  }
  50% {
    transform: translate(100px, 20px);
    opacity: 0.5;
  }
  75% {
    transform: translate(150px, 70px);
    opacity: 0.25;
  }
  to {
    transform: translate(250px, 50px);
    opacity: 0;
  }
}
.prod-leave {
  animation: prod-leave 0.5s linear forwards;
}
.spa-div {
  display: flex;
  align-items: center;
  justify-content: start;
}
.spa-input {
  width: 60px;
  height: 37px;
  margin: 0 10px;
}
</style>