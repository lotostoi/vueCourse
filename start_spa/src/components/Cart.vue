<template>
  <div class="mt-1 ">
    <div class="container bg-secondary rounded p-3">
      <h1>Cart</h1>
      <div class="row">
        <div class="col col-sm-3" v-for="good in goodsInCart" :key="good.id">
          <b-card
            :title="good.name"
            :img-src="good.img"
            :img-alt="good.name"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="flex"
          >
            <p>Prise: ${{good.price}}</p>
            <p>TotalPrise: ${{good.price * good.cnt}}</p>
            <div class="spa-div">
              <button class="btn btn-warning" @click="chengCnt(good.id, $event)">-1</button>
              <input
                type="text"
                class="spa-input"
                :value="good.cnt"
                @change="chengCnt(good.id, $event)"
              />
              <button class="btn btn-success" @click="chengCnt(good.id, $event)">+1</button>
            </div>
          </b-card>
        </div>
      </div>
      <hr />
      <p>TotalQuantit: {{ inCart }}</p>
      <p>TotalPrice: {{ total }}</p>
      <hr />
      <button class="btn btn-success" @click="clearCart">Clear cart</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { BCard } from "bootstrap-vue";

export default {
  components: { BCard },
  computed: mapGetters(["inCart", "total", "goodsInCart", "inCart"]),
  methods: {
    ...mapActions(["getCnt", "clearCart"]),
    chengCnt(id, e) {
      this.getCnt({ id: id, e: e });
    }
  }
};
</script>
<style lang="scss" scoped>
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