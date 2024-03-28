import { useStateStore } from "@/shared/stores/useStateStore.ts";
import { ref } from "vue";
import { fetchStates } from "@/shared/services/world.service.ts";
import { State } from "@/shared/types/state.type.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { useToast } from "primevue/usetoast";

export const useState = () => {
  const toast = useToast();
  const stateStore = useStateStore();
  const listState = ref<State[]>(stateStore.getStateList());

  stateStore.$subscribe((mutation, state) => {
    listState.value = state.stateList;
  });

  const fetchListState = async () => {
    fetchStates("BRA")
      .then((data) => {
        stateStore.setStates(data);
      })
      .catch((e) => {
        showMessage(toast, e);
      });
  };

  return {
    listState,
    findStateById: stateStore.findStateById,
    fetchListState,
  };
};
