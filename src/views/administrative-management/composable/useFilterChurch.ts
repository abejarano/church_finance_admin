import { computed, ref } from "vue";
import { useListRegion } from "@/views/administrative-management/composable/useListRegion.ts";

export const useFilterChurch = () => {
  const districtSelected = ref<string>("");
  const { fetchListRegionByDistrictId } = useListRegion();

  const disableRegionSelector = computed(() => {
    if (districtSelected.value !== "") {
      fetchListRegionByDistrictId(districtSelected.value);
    }
    return districtSelected.value === "";
  });

  return {
    districtSelected,
    disableRegionSelector,
  };
};
