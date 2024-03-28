import { defineStore } from "pinia";
import { State } from "@/shared/types/state.type.ts";

export const useStateStore = defineStore("useStateStore", {
  state: () => ({
    stateList: [] as State[],
  }),
  actions: {
    setStates(stateList: State[]) {
      this.stateList = [...this.stateList, ...stateList];
    },
    getStateList() {
      return this.stateList;
    },
    findStateById(stateId: string): State | undefined {
      return this.stateList.find((state) => state.stateId === stateId);
    },
  },
});
