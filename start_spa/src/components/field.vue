<template>
  <div class="form-group">
    <label style="display: flex;">
      <span>{{name}}</span>
      <transition
      
        v-if="active"
        enter-active-class="animate__animated animate__slideInRight"
        leave-active-class="animate__animated animate__slideOutRight"
        v-on:after-enter="fl=true"
      >
        <div class="contIcons ml-2" :class="(valid && fl ? 'rotateFront' : 'rotateBack')">
          <BIconCheck class="check" />
          <BIconInfo class="info" />
        </div>
      </transition>
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
      fl: false,
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
    }
  }
};
</script>

<style scoped lang="scss" scoped>
$duration: 0.9s;

.contIcons {
  transition: transform $duration;
  animation-duration: 0.5s;
  position: relative;
  height: 20px;
  width: 20px;
  transform-style: preserve-3d;
}

.rotateFront {
  transform: rotateY(180deg);
}
.rotateBack {
  transform: rotateY(0deg);
}

.check {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: green;
  border-radius: 50%;
  color: white;
  font-size: 20px;
  backface-visibility: hidden;
  z-index: 5;
  transform: rotateY(180deg);
}
.info {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  color: red;
  font-size: 25px;
  backface-visibility: hidden;
  z-index: 4;
}
</style>
