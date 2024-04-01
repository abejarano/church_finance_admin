import { ref } from "vue";
import { useRouter } from "vue-router";
import { DistrictListFilter } from "@/views/administrative-management/types/districtListFilter.type.ts";
import { useListDistrictStore } from "@/views/administrative-management/stores/useListDistrictStore.ts";
import { useI18n } from "vue-i18n";
import {
  fetchAPIAllDistrict,
  fetchListDistrict,
} from "@/views/administrative-management/services/district.service.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { useToast } from "primevue/usetoast";
import { District } from "@/views/administrative-management/types/district.type.ts";

const isSubmitting = ref(false);
const listAllDistricts = ref<District[]>([]);

export const useListDistrict = () => {
  const router = useRouter();
  const toast = useToast();

  const districtListStore = useListDistrictStore();
  const districtListFilter = ref<DistrictListFilter>(
    districtListStore.getFilters(),
  );
  const districtList = ref<District[]>(districtListStore.getDistrictList());

  districtListStore.$subscribe((mutation, state) => {
    districtList.value = state.districtList;
    districtListFilter.value = state.filter;
  });

  const { t } = useI18n({ useScope: "global" });

  const columnsHeader = [
    { field: "code", header: "" },
    { field: "name", header: t("district") },
    { field: "createdAt", header: t("createDate") },
  ];

  const fetchDistrictList = (cleanList: boolean = false) => {
    if (cleanList) {
      districtListStore.clearList();
      districtListStore.setNextPage(1);
    }

    isSubmitting.value = true;
    fetchListDistrict(districtListFilter.value)
      .then((data) => {
        isSubmitting.value = false;
        districtListStore.setDistrict(data.results);
        districtListStore.setFilters({
          ...districtListFilter.value,
          page: data.nextPage,
        });
      })
      .catch((e) => {
        isSubmitting.value = false;
        showMessage(toast, e);
      });
  };

  const redirectEdit = (districtId: string) => {
    if (districtId === "") {
      router.push({ name: "addNewDistrict" });
      return;
    }

    router.push({ name: "editDistrict", params: { districtId } });
  };

  const clearFilter = () => {
    districtListStore.clearList();
    districtListStore.setFilters({
      perPage: 10,
      page: 1,
      stateId: "",
    });
  };

  const fetchAllDistrict = () => {
    fetchAPIAllDistrict()
      .then((data) => {
        listAllDistricts.value = data;
      })
      .catch((e) => {
        showMessage(toast, e);
      });
  };
  return {
    isSubmitting,
    columnsHeader,
    districtList,
    districtListFilter,
    listAllDistricts,
    fetchAllDistrict,
    clearFilter,
    redirectEdit,
    fetchDistrictList,
  };
};
