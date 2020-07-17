<template>
  <div class="wrapper">
    <div class="sample">
      <win-modal @switch="show=!show" :fields="info" :valid="valid"></win-modal>

      <transition
        enter-active-class="animate__animated animate__fadeInUp animate__faster overFlof"
        leave-active-class="animate__animated animate__fadeOutUp animate__faster overFlof"
        mode="out-in"
      >
        <form v-if="show" class="animate__animated animate__fadeInUp">
          <b-progress
            :value="lengBar"
            :max="100"
            show-progress
            :animated="valid"
            class="app-progress"
          ></b-progress>
          <div>
            <AppField
              v-for="(field,i) in info"
              :name="field.name"
              :value="field.value"
              :valid="field.valid"
              @valid="chengData(i, $event)"
              :key="i"
            ></AppField>
          </div>

          <button
            class="btn btn-primary"
            type="button"
            :disabled="valid"
            v-b-modal.modal-1
          >Send Data</button>
        </form>

        <dat-table :fields="info" :valid="valid" v-else>
          <button class="btn btn-primary" :disabled="valid" @click="show = !show">Back</button>
        </dat-table>
      </transition>
    </div>
  </div>
</template>

<script>
import AppField from "./components/field.vue";
import { BProgress } from "bootstrap-vue";
import WinModal from "./components/win-modal";
import { VBModal } from "bootstrap-vue";
import DatTable from "./components/table";

export default {
  name: "App",
  components: {
    AppField,
    BProgress,
    WinModal,
    DatTable
  },
  directives: {
    "b-modal": VBModal
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
  created() {
    this.info.forEach((e, i) => {
      let res = e.value.search(this.info[i].pattern) != -1;
      this.$set(e, "valid", res);
    });
  },

  methods: {
    chengData(i, e) {
      let res = e.value.search(this.info[i].pattern) != -1;
      this.$set(this.info[i], "value", e.value);
      this.$set(this.info[i], "valid", res);
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
  overflow: hidden;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px;
}
.app-progress {
  margin: 20px 0;
}
</style>
