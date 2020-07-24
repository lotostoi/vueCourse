<template>
  <section class="mt-1">
    <div class="container bg-secondary rounded p-3">
      <h1>Cotalog</h1>
      <div class="row">
        <div class="col col-sm-3" v-for="good in goods" :key="good.id">
          <b-card
            :title="good.name"
            :img-src="good.img"
            :img-alt="good.name"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
          >
            <p>${{good.price}}</p>
            <button
              v-if="checkInCart(good.id)"
              class="btn btn-danger"
              @click="actionsCart({id:good.id,action:'dec'})"
            >Remove</button>
            <button
              v-else
              class="btn btn-success"
              @click="actionsCart({id:good.id})"
            >Add to cart</button>
          </b-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppProduct from "../components/good";
import { mapGetters, mapActions } from "vuex";
import { BCard } from "bootstrap-vue";

export default {
  components: {
    AppProduct,
    BCard
  },
  computed: {
    ...mapGetters({ goods: "cotalog/goods", checkInCart: "cart/checkInCart" })
  },
  methods: {
    ...mapActions({ actionsCart: "cart/actionsCart" })
  }
};
</script>