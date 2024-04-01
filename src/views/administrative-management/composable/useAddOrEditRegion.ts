import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useListRegionStore } from "@/views/administrative-management/stores/useListRegionStore.ts";
import { saveAPIRegion } from "@/views/administrative-management/services/region.service.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";

type formRegionType = {
  regionId: string | undefined;
  name: string;
  districtId: string;
};

export const useAddOrEditRegion = () => {
  const isSubmitting = ref(false);
  const toast = useToast();
  const router = useRouter();
  const { t } = useI18n({ useScope: "global" });
  const { findRegionById, setRegion } = useListRegionStore();
  const formRegion = ref<formRegionType>({
    regionId: undefined,
    name: "",
    districtId: "",
  });

  const titleForm = ref<string>(t("addRegion"));

  const saveRegion = async () => {
    isSubmitting.value = true;
    saveAPIRegion(formRegion.value)
      .then((response) => {
        isSubmitting.value = false;
        showMessage(toast, response.message, "success");
        setRegion([response.data]);
        router.push({ name: "regionList" });
      })
      .catch((e) => {
        isSubmitting.value = false;
        showMessage(toast, e, "warn");
      });
  };

  const editRegion = (regionId: string): boolean => {
    const region = findRegionById(regionId);
    if (!region) {
      return false;
    }
    titleForm.value = t("editRegion");
    formRegion.value.name = region.name;
    formRegion.value.districtId = region.district.districtId;
    formRegion.value.regionId = regionId;

    return true;
  };

  return {
    titleForm,
    isSubmitting,
    formRegion,
    saveRegion,
    editRegion,
  };
};
