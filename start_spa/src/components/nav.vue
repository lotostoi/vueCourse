<template>
  <nav class="col-2 mt-2">
    <ul class="list-group">
      <router-link
        class="list-group-item"
        v-for="rout in menu"
        :to="{name:rout.name}"
        :key="rout.path"
        teg="li"
      >
        <a>{{rout.name}}</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "Main"
        },
        {
          name: "Cotalog"
        }
      ]
    };
  }
};
</script>

<style>
</style>