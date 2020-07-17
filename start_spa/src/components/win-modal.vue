<template>
  <b-modal hide-backdrop id="modal-1" title="Проверка" ref="modal">
    <template v-slot:modal-header>
      <div>
        <h4 class="my-4">Проверьте данные перед отправкой!</h4>
      </div>
    </template>
    <dat-table :fields="fields" :valid="valid"></dat-table>
    <template v-slot:modal-footer>
      <b-button class="mt-3" @click="$refs['modal'].hide()">Редактировать</b-button>
      <b-button class="mt-3" @click="sendData">Отправить</b-button>
    </template>
  </b-modal>
</template>

<script>
import { BModal } from "bootstrap-vue";
import { BButton } from "bootstrap-vue";
import { VBModal } from "bootstrap-vue";
import DatTable from "./table";
export default {
  name: "win-modal",
  components: { BModal, BButton, VBModal, DatTable },
  props: {
    fields: { type: Array, required: true },
    valid: { type: Boolean, default: false, required: true }
  },
  methods: {
    sendData() {
      this.$refs["modal"].hide();
      setTimeout(() => {
        this.$emit("switch");
      }, 200);
    }
  }
};
</script>

<style>
</style>