import { createStore } from "zustand/vanilla";

const useCountStore = createStore((set) => ({
  count: 0,
  doubleCount: 0,
}))

export const { getState, setState, subscribe } = useCountStore;

export default useCountStore