import { ref } from "vue";
import { useAddOrEditSystemModule } from "@/views/security-system/composables/useAddOrEditSystemModule.ts";
import { useToast } from "primevue/usetoast";
import {
  FormOptionModule,
  OptionModule,
  OptionModuleMethodsType,
} from "@/views/security-system/types/systemModule.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { addOptionModuleService } from "@/views/security-system/services/systemModuleService.ts";
import { useSystemModuleStore } from "@/views/security-system/store/useSystemModuleStore.ts";

const isOpenFormAddOrEditOptionModule = ref(false);
const optionModuleId = ref<string>("");
const formOptionModule = ref<FormOptionModule>({
  systemModuleId: "",
  optionModuleId: "",
  name: "",
  description: "",
  isActive: true,
  URL: "",
  method: OptionModuleMethodsType.GET,
});

export const useAddOrEditOptionModule = () => {
  const toast = useToast();
  const { setOptionModule, findOptionModuleById } = useSystemModuleStore();
  const { systemModuleId } = useAddOrEditSystemModule();

  const titleForm = ref<string>("Agregar opción");
  const isSubmitting = ref(false);

  const btnOptionModule = [
    {
      label: "Nuevo",
      icon: "pi pi-clone",
      command: () => {
        if (systemModuleId.value === "") {
          toast.add({
            severity: "warn",
            summary: "Seleccione un módulo",
            detail: "",
            life: 4000,
          });
          return;
        }

        addNewOptionModule();
      },
    },
    {
      label: "Editar",
      icon: "pi pi-file-edit",
      command: () => {
        if (optionModuleId.value === "") {
          toast.add({
            severity: "warn",
            summary: "Seleccione una opción",
            detail: "",
            life: 4000,
          });
          return;
        }
        editOptionModule();
      },
    },
  ];
  const addNewOptionModule = () => {
    titleForm.value = "Agregar opción al módulo";
    formOptionModule.value = {
      systemModuleId: systemModuleId.value,
      optionModuleId: "",
      name: "",
      description: "",
      isActive: true,
      URL: "",
      method: OptionModuleMethodsType.GET,
    };

    isOpenFormAddOrEditOptionModule.value = true;
  };

  const saveOptionModule = async () => {
    try {
      isSubmitting.value = true;
      if (formOptionModule.value.optionModuleId === "") {
        const data: OptionModule = await addOptionModuleService(
          formOptionModule.value,
        );

        setOptionModule(formOptionModule.value.systemModuleId, data);
      } else {
      }
      isSubmitting.value = false;
      isOpenFormAddOrEditOptionModule.value = false;
    } catch (e) {
      isOpenFormAddOrEditOptionModule.value = false;
      showMessage(toast, e);
    }
  };

  const editOptionModule = () => {
    const [systemModuleId, optionModule] = findOptionModuleById(
      optionModuleId.value,
    );

    if (!optionModule) {
      return;
    }

    titleForm.value = "Editar opción";
    formOptionModule.value = { ...optionModule, systemModuleId };
    isOpenFormAddOrEditOptionModule.value = true;
  };

  return {
    saveOptionModule,
    isSubmitting,
    formOptionModule,
    btnOptionModule,
    optionModuleId,
    titleForm,
    isOpenFormAddOrEditOptionModule,
  };
};
