import { useListRegionStore } from "@/views/administrative-management/stores/useListRegionStore.ts";
import { ref } from "vue";
import { Region } from "@/views/administrative-management/types/region.type.ts";
import { RegionListFilter } from "@/views/administrative-management/types/regionListFilter.type.ts";
import {
  fetchAPIAllRegionByDistrictId,
  fetchAPIAllState,
  fetchAPIListRegion,
} from "@/views/administrative-management/services/region.service.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { State } from "@/shared/types/state.type.ts";

const listAllRegions = ref<Region[]>([]);

export const useListRegion = () => {
  const toast = useToast();
  const router = useRouter();

  const listRegionStore = useListRegionStore();
  const regionList = ref<Region[]>(listRegionStore.getRegionList());
  const regionListFilter = ref<RegionListFilter>(listRegionStore.getFilters());
  const isSubmitting = ref(false);
  const listState = ref<State[]>(fetchAPIAllState());

  listRegionStore.$subscribe((mutation, state) => {
    regionList.value = state.listRegion;
    regionListFilter.value = state.filter;
  });

  const columnsHeader = [
    { field: "code", header: "" },
    { field: "name", header: "region" },
    { field: "createdAt", header: "createDate" },
  ];

  const fetchListRegion = async (cleanList: boolean = false) => {
    if (cleanList) {
      listRegionStore.clearList();
      listRegionStore.setNextPage(1);
    }
    isSubmitting.value = true;
    fetchAPIListRegion(regionListFilter.value)
      .then((response) => {
        listRegionStore.setRegion(response.results);
        listRegionStore.setNextPage(response.nextPage);

        isSubmitting.value = false;
      })
      .catch((error) => {
        isSubmitting.value = false;
        showMessage(toast, error);
      });
  };

  const fetchListRegionByDistrictId = async (districtId: string) => {
    isSubmitting.value = true;
    fetchAPIAllRegionByDistrictId(districtId)
      .then((response) => {
        listAllRegions.value = response;
        isSubmitting.value = false;
      })
      .catch((error) => {
        isSubmitting.value = false;
        showMessage(toast, error);
      });
  };

  const redirectEdit = (regionId: string) => {
    if (regionId === "") {
      router.push({ name: "addNewRegion" });
      return;
    }

    router.push({ name: "editRegion", params: { regionId } });
  };

  const clearFilter = () => {
    listRegionStore.clearList();
    listRegionStore.setFilters({
      districtId: "",
      perPage: 10,
      page: 1,
    });
  };

  return {
    isSubmitting,
    regionList,
    regionListFilter,
    columnsHeader,
    listAllRegions,
    listState,
    fetchListRegionByDistrictId,
    fetchListRegion,
    redirectEdit,
    clearFilter,
  };
};
