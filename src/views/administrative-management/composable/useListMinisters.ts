import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { Minister } from "@/views/administrative-management/types/minister.type.ts";
import { useListMinisterStore } from "@/views/administrative-management/stores/useListMinisterStore.ts";
import { MinisterListFilter } from "@/views/administrative-management/types/ministerListFilter.type.ts";
import { fetchAPIListMinisters } from "@/views/administrative-management/services/minister.service.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { useI18n } from "vue-i18n";

const listAllMinisters = ref<Minister[]>([]);

export const useListMinisters = () => {
  const toast = useToast();
  const { t } = useI18n({ useScope: "global" });
  const router = useRouter();
  const listMinisterStore = useListMinisterStore();
  const listMinisters = ref<Minister[]>(listMinisterStore.getMinisterList());
  const listMinistersFilter = ref<MinisterListFilter>(
    listMinisterStore.getFilters(),
  );
  const isSubmitting = ref(false);

  listMinisterStore.$subscribe((mutation, state) => {
    listMinisters.value = state.listMinisters;
    listMinistersFilter.value = state.filter;
  });

  const columnsHeader = [
    { field: "code", header: "" },
    { field: "name", header: t("name") },
    { field: "email", header: t("email") },
    { field: "phone", header: t("phone") },
    { field: "createdAt", header: t("createDate") },
  ];

  const fetchListMinisters = async (cleanList: boolean = false) => {
    if (cleanList) {
      listMinisterStore.clearList();
      listMinisterStore.setNextPage(1);
    }
    isSubmitting.value = true;
    fetchAPIListMinisters(listMinistersFilter.value)
      .then((response) => {
        listMinisterStore.setMinister(response.results);
        listMinisterStore.setNextPage(response.nextPage);

        isSubmitting.value = false;
      })
      .catch((error) => {
        isSubmitting.value = false;
        showMessage(toast, error);
      });
  };

  const redirectEdit = (ministerId: string) => {
    if (ministerId === "") {
      router.push({ name: "addNewMinister" });
      return;
    }

    router.push({ name: "editMinister", params: { ministerId } });
  };

  const clearFilter = () => {
    listMinistersFilter.value = {
      districtId: "",
      ministerType: "",
      page: 1,
      perPage: 10,
      regionId: "",
    };
  };

  return {
    redirectEdit,
    clearFilter,
    isSubmitting,
    listMinistersFilter,
    listMinisters,
    fetchListMinisters,
    columnsHeader,
  };
};
