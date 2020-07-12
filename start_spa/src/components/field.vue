<template>
  <div class="form-group">
    <label style="display: flex;">
      <span>{{name}}</span>
      <div v-if="active" class="ml-2">
        <BIconCheck v-if="valid" class="check" />
        <BIconInfo v-else class="info" />
      </div>
    </label>
    <input type="text" class="form-control" :value="value" @input="makeEvent($event)" />
  </div>
</template>

<script>
import { BIconCheck, BIconInfo } from "bootstrap-vue";

export default {
  name: "AppField",
  components: { BIconCheck, BIconInfo },
  props: {
    name: {
      type: String,
      default: ""
    },
    valid: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      ch_value: ""
    };
  },
  methods: {
    makeEvent(e) {
      this.ch_value = e.target.value;
      this.$emit("valid", {
        value: this.ch_value,
        valid: this.valid
      });
    }
  },
  computed: {
    active() {
      return this.value != "";
    },
    getClass() {
      return this.valid ? "fa-check-circle green" : "fa-exclamation red";
    }
  }
};
</script>

<style scoped lang="scss" scoped>
.check {
  background-color: green;
  border-radius: 50%;
  color: white;
  font-size: 20px;
}
.info {
  color: red;
  font-size: 25px;
}
</style>
