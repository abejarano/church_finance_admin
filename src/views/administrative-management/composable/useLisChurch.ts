import { useListChurchStore } from "@/views/administrative-management/stores/useListChurchStore.ts";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const isSubmitting = ref(false);

export const useLisChurch = () => {
  const listChurchStore = useListChurchStore;
  const { t } = useI18n({ useScope: "global" });

  const columnsHeader = [
    { field: "code", header: "" },
    { field: "name", header: t("church") },
    { field: "city", header: t("city") },
    { field: "state", header: t("state") },
    { field: "createdAt", header: t("createDate") },
  ];
};
