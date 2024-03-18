export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      Hello: (value: string) => {
        console.log("Hello", value);
      },
    },
  };
});
