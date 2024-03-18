export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const name = ref("Eduardo");
  const decrement = () => {
    count.value--;
  };
  function increment() {
    count.value++;
  }

  return { count, name, decrement, increment };
});
