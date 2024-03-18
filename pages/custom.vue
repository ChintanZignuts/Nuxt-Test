<script setup>
import { useCounterStore } from "../stores/counter";

definePageMeta({
  layout: "custom",
  middleware: ["auth"],
});
const counterStore = useCounterStore();
</script>
<template>
  <h1>custom page</h1>
  <ContentDoc />
  <div>
    Counter: {{ counterStore.count }}
    <button @click="counterStore.increment()">+</button>
    <button @click="counterStore.decrement()">-</button>
  </div>
</template>
