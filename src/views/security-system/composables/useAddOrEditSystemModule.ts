import { ref } from "vue";
import { useSystemModuleStore } from "@/views/security-system/store/useSystemModuleStore.ts";
import { SystemModule } from "@/views/security-system/types/systemModule.ts";
import {
  createNewModuleService,
  editModuleService,
} from "@/views/security-system/services/systemModuleService.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { useToast } from "primevue/usetoast";

const isOpenFormAddOrEditSystemModule = ref(false);
const formSystemModule = ref<SystemModule>({
  systemModuleId: undefined,
  name: "",
  description: "",
  isActive: true,
});
const systemModuleId = ref<string>("");

export const useAddOrEditSystemModule = () => {
  const toast = useToast();
  const isSubmitting = ref<boolean>(false);
  const { findSystemModuleById, setSystemModule } = useSystemModuleStore();
  const titleForm = ref("Agregar modulo");

  const btnSystemModule = [
    {
      label: "Nuevo",
      icon: "pi pi-clone",
      command: () => {
        addNewModule();
      },
    },
    {
      label: "Editar",
      icon: "pi pi-file-edit",
      command: () => {
        if (systemModuleId.value === "") {
          toast.add({
            severity: "warn",
            summary: "Seleccione un modulo",
            detail: "",
            life: 4000,
          });
          return;
        }
        editModule();
      },
    },
  ];

  const editModule = () => {
    const module = findSystemModuleById(systemModuleId.value);

    if (!module) {
      return;
    }

    titleForm.value = "Editar modulo";
    formSystemModule.value = module;
    isOpenFormAddOrEditSystemModule.value = true;
  };

  const addNewModule = () => {
    titleForm.value = "Agregar modulo";
    formSystemModule.value = {
      systemModuleId: undefined,
      name: "",
      description: "",
      isActive: true,
    };
    isOpenFormAddOrEditSystemModule.value = true;
  };

  const saveModule = async () => {
    try {
      isSubmitting.value = true;

      if (!formSystemModule.value.systemModuleId) {
        const data = await createNewModuleService(formSystemModule.value);
        setSystemModule([data.data]);
      } else {
        await editModuleService(formSystemModule.value);
      }

      isSubmitting.value = false;
      isOpenFormAddOrEditSystemModule.value = false;
    } catch (e) {
      isSubmitting.value = false;
      showMessage(toast, e);
    }
  };

  return {
    saveModule,
    titleForm,
    isSubmitting,
    isOpenFormAddOrEditSystemModule,
    formSystemModule,
    btnSystemModule,
    systemModuleId,
  };
};
