<template>
  <div class="home">
    <transition name="toast">
      <Toast v-if="showToast" />
    </transition>
    <Todos @bad-value="triggerToast" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Toast from "../components/Toast.vue";
import Todos from "../components/Todos.vue";

const showToast = ref(false);

const triggerToast = () => {
  showToast.value = true;
  setTimeout(() => {
    showToast.value = false;
  }, 3000);
};
</script>

<style scoped>
.toast-enter-from {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.toast-enter-active {
  transition: all 1s ease-in;
}

.toast-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(60px);
}
.toast-leave-active {
  transition: all 1s ease-out;
}
</style>