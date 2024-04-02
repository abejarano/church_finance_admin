import { useListChurchStore } from "@/views/administrative-management/stores/useListChurchStore.ts";
import { useRouter } from "vue-router";
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import { Church } from "@/views/administrative-management/types/church.type.ts";
import { useI18n } from "vue-i18n";
import { fetchPaginateChurch } from "@/views/administrative-management/services/church.service.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { ChurchListFilter } from "@/views/administrative-management/types/churchListFilter.type.ts";
import { useFilterChurch } from "@/views/administrative-management/composable/useFilterChurch.ts";

const isSubmitting = ref(false);

export const useListChurch = () => {
  const router = useRouter();
  const toast = useToast();
  const churchListStore = useListChurchStore();
  const churchesList = ref<Church[]>(churchListStore.getChurchList());
  const churchListFilter = ref<ChurchListFilter>(churchListStore.getFilters());
  const { t } = useI18n({ useScope: "global" });
  const { districtSelected } = useFilterChurch();

  churchListStore.$subscribe((mutation, state) => {
    churchesList.value = state.churchList;
    churchListFilter.value = state.filter;
  });

  const columnsHeader = [
    { field: "code", header: "" },
    { field: "name", header: t("church") },
    { field: "city", header: t("city") },
    { field: "createdAt", header: t("createDate") },
  ];

  const fetchListChurch = (cleanFilter: boolean = false) => {
    if (cleanFilter) {
      churchListStore.clearList();
      churchListStore.setNextPage(1);
    }

    fetchPaginateChurch(churchListFilter.value)
      .then((data) => {
        churchListStore.setChurch(data.results);
        churchListStore.setFilters({
          ...churchListStore.getFilters(),
          page: data.nextPage,
        });
      })
      .catch((e) => {
        isSubmitting.value = false;
        showMessage(toast, e);
      });
  };

  const clearFilter = () => {
    districtSelected.value = "";
    churchListStore.clearList();
    churchListStore.setFilters({
      perPage: 10,
      page: 1,
      regionId: "",
      status: "",
    });
    churchListStore.setNextPage(1);
  };

  const redirectEdit = (churchId: string) => {
    if (churchId === "") {
      router.push({ name: "addNewChurch" });
      return;
    }

    router.push({ name: "editChurch", params: { churchId } });
  };

  return {
    isSubmitting,
    churchesList,
    columnsHeader,
    churchListFilter,
    redirectEdit,
    fetchListChurch,
    clearFilter,
  };
};
