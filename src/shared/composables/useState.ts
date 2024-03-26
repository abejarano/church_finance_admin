import { useStateStore } from "@/shared/stores/useStateStore.ts";

export const useState = () => {
  const stateStore = useStateStore();

  return {
    stateList: stateStore.getStateList(),
    findStateById: stateStore.findStateById,
  };
};
