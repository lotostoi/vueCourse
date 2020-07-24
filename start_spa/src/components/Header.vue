<template>
  <header>
    <div class="container bg-warning rounded">
      <div class="d-block">
        <div class="cont">
          <router-link :to="{name:'Main'}" class="hover">
            <h1>Site</h1>
          </router-link>
          <router-link :to="{name:'Cart'}">
            <p>{{inCart}}</p>
            <b-icon-cart icon="cart" class="b-icon hover ml-10"></b-icon-cart>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { BIconCart } from "bootstrap-vue";
import { mapGetters } from "vuex";

export default {
  components: {
    BIconCart
  },
  data() {
    return {};
  },
  mounted() {
    console.log(this.$router.routes + " dfgdfg");
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
  & > a {
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
  }
  & > a > .b-icon {
    font-size: 25px;
  }
  & > a > p {
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

