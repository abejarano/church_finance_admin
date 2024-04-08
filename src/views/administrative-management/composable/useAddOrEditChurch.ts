import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { useListChurchStore } from "@/views/administrative-management/stores/useListChurchStore.ts";
import { formChurch } from "@/views/administrative-management/types/church.type.ts";
import { saveAPIChurch } from "@/views/administrative-management/services/church.service.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";

export const useAddOrEditChurch = () => {
  const isSubmitting = ref(false);
  const toast = useToast();
  const router = useRouter();
  const { t } = useI18n({ useScope: "global" });
  const { findChurchById, setChurch } = useListChurchStore();
  const formChurch = ref<formChurch>({
    name: "",
    city: "",
    address: "",
    street: "",
    number: "",
    postalCode: "",
    email: "",
    openingDate: "",
    regionId: "",
  });
  const titleForm = ref<string>(t("addChurch"));
  const selectedState = ref<string>("");

  const saveChurch = async () => {
    isSubmitting.value = true;

    saveAPIChurch(formChurch.value)
      .then((response) => {
        isSubmitting.value = false;
        showMessage(toast, response.message, "success");
        setChurch([response.data]);
        router.push({ name: "churchList" });
      })
      .catch((e) => {
        isSubmitting.value = false;
        showMessage(toast, e, "warn");
      });
  };

  const editChurch = (churchId: string): boolean => {
    const church = findChurchById(churchId);
    console.log(church);
    if (!church) {
      return false;
    }

    titleForm.value = t("editChurch");
    formChurch.value.name = church.name;
    formChurch.value.city = church.city;
    formChurch.value.address = church.address;
    formChurch.value.street = church.street;
    formChurch.value.number = church.number;
    formChurch.value.postalCode = church.postalCode;
    formChurch.value.email = church.email;
    formChurch.value.openingDate = church.openingDate;
    formChurch.value.regionId = church.region.regionId;

    return true;
  };

  return {
    titleForm,
    isSubmitting,
    formChurch,
    selectedState,
    editChurch,
    saveChurch,
  };
};
