<template>
  <div class="form-group">
    <label style="display: flex;">
      <span>{{name}}</span>
      <!-- Не использовал <transition>  потому, что не получалось повторить алогоритм работы анимаций,
         который реализован сейчас. В принцепе все работало хорошо,но один или несколько шагов пропускались. 
         Например контенер с иконками при активации или появляся с анимацией и пропадал без нее или наоборот.
         Дима если ты покажешь как реализовать этот алоритм с использованием обертки <transition>, было бы здорово!
      -->
      <div :class="getClassForWrapper">
        <div class="contIcons ml-2" :class="getClassForContent">
          <BIconCheck class="check" />
          <BIconInfo class="info" />
        </div>
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
  mounted() {
    let delay = this.active ? 0 : 1000;
    setTimeout(() => {
      this.fl = true;
    }, delay);
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
    },
    getClassForWrapper() {
      return this.active
        ? "animate__animated animate__slideInRight duration "
        : "animate__animated animate__slideOutRight duration ";
    },
    getClassForContent() {
      let firtsClass = this.valid ? "rotateFront" : "rotateBack";
      let secondClass = this.fl ? "contIcons-active" : "contIcons-off";
      return firtsClass + " " + secondClass;
    }
  }
};
</script>

<style scoped lang="scss" scoped>
$duration: 0.3s;

.contIcons {
  transition: transform $duration;
  position: relative;
  height: 20px;
  width: 20px;
  transform-style: preserve-3d;
}

.duration {
  animation-duration: $duration;
}

.contIcons-active {
  opacity: 1;
}
.contIcons-off {
  opacity: 0;
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
