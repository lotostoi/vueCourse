<template>
  <div class="wrapper">
    <div class="sample">
      <form v-if="show">
        <b-progress :value="lengBar" :max="100" show-progress :animated="valid" class="app-progress"></b-progress>
        <div>
          <AppField
            v-for="(field,i) in info"
            :name="field.name"
            :value="field.value"
            :valid="field.valid"
            @valid="chengData(i, $event)"
            :key="i+1"
          ></AppField>
        </div>
        <button
          class="btn btn-primary"
          :disabled="valid"
          @click="show=!show"
          type="button"
        >Send Data</button>
      </form>
      <div v-else>
        <table class="table table-bordered">
          <tr v-for="(val,i) in  info" :key="1+i">
            <td>{{val.name}}</td>
            <td>{{val.value}}</td>
          </tr>
        </table>
        <button class="btn btn-primary" :disabled="valid" @click="show=!show">Back</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppField from "./components/field.vue";
import { BProgress } from "bootstrap-vue";

export default {
  name: "App",
  components: {
    AppField,
    BProgress
  },
  data() {
    return {
      info: [
        {
          name: "Name",
          value: "",
          pattern: /^[a-zA-Z ]{2,30}$/
        },
        {
          name: "Phone",
          value: "",
          pattern: /^[0-9]{7,14}$/
        },
        {
          name: "Email",
          value: "",
          pattern: /.+/
        },
        {
          name: "Some Field 1",
          value: "",
          pattern: /.+/
        },
        {
          name: "Some Field 2",
          value: "",
          pattern: /.+/
        }
      ],
      show: true
    };
  },
  beforeMount() {
    this.info.forEach((e,i) => {
      let res = e.value.search(this.info[i].pattern) != -1
      this.$set(e, "valid", res );
    });

  },

  methods: {
    chengData(i, e) {
      let res = e.value.search(this.info[i].pattern) != -1
      this.$set(this.info[i], "value", e.value);
      this.$set(this.info[i], "valid", res );
    }
  },
  computed: {
    lengBar() {
      let k = 0;
      this.info.forEach(el => {
        el.valid && k++;
      });
      return (100 / this.info.length) * k;
    },
    valid() {
      return this.info.some(e => !e.valid);
    }
  }
};

</script>

<style lang="scss">
.wrapper {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px;
}
.app-progress {
  margin: 20px 0;
}
</style>
