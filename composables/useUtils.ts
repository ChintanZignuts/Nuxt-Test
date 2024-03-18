export const useUtils = () => {
  const Hello = (value: string) => {
    console.log("Hello", value);
  };

  return { Hello };
};
