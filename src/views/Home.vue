<template>
  <div class="home">
    <Toast v-if="showToast" />
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
