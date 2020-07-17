<template>
  <div>
    <table class="table table-bordered">
      <tr v-for="(val,i) in  fields" :key="1+i">
        <td>{{val.name}}</td>
        <td>{{val.value}}</td>
      </tr>
    </table>
   <slot></slot>
  </div>
</template>

<script>
export default {
  name: "data-table",
  props: {
    fields: { type: Array, required: true },
    valid: { type: Boolean, default: false, required: true }
  }
};
</script>

<style>
</style>