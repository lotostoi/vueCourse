<template>
  <header>
    <div class="container bg-warning rounded">
      <div class="d-block">
        <div class="cont">
          <h1 @click="$emit('showCotalog')" class="hover">Site</h1>
          <div @click="$emit('showCart')">
            <p>{{inCart}}</p>
            <b-icon-cart icon="cart" class="b-icon hover ml-10"></b-icon-cart>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import AppCart from "./Cart";
import { BIconCart } from "bootstrap-vue";
import { mapGetters } from "vuex";

export default {
  components: {
    AppCart,
    BIconCart
  },
  computed: {
    ...mapGetters(["inCart"])
  }
};
</script>
<style lang="scss" scoped>
.cont {
  padding: 10px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  & > div > .b-icon {
    font-size: 25px;
  }
  & > div > p {
    margin: 0;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(250, 197, 22);
    border: 1px solid rgb(133, 120, 2);
    border-radius: 50%;
  }
}
.hover {
  &:hover {
    color: rgb(182, 89, 89);
    cursor: pointer;
  }
}
</style>

