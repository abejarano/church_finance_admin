import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useListSystemModules } from "@/views/security-system/composables/useListSystemModules.ts";
import { useToast } from "primevue/usetoast";
import {
  FormAddOrEditProfilePermissions,
  Profile,
} from "@/views/security-system/types/profile.ts";
import { useProfileListStore } from "@/stores/useProfileListStore.ts";
import { registerProfileService } from "@/views/security-system/services/profileService.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";

const formProfilePermission = ref<FormAddOrEditProfilePermissions>({
  profileId: undefined,
  name: "",
  optionModuleIds: [],
});
export const useProfile = () => {
  const toast = useToast();
  const route = useRoute();
  const isSubmitting = ref(false);
  const { getOnlyListModuleOptions, fetchSystemModules } =
    useListSystemModules();
  const { findProfileById, setProfile } = useProfileListStore();

  const dataPickList = ref<any>([]);

  const title = ref("Registrar nuevo perfil");

  watch(dataPickList, (newValue, oldValue) => {
    const list = [];
    for (const opt of newValue[1]) {
      list.push(opt.optionModuleId);
    }

    formProfilePermission.value.optionModuleIds = list;
  });

  const prepareDataPickList = async () => {
    if (getOnlyListModuleOptions().length === 0) {
      await fetchSystemModules();
    }

    const listModuleOptions = getOnlyListModuleOptions();

    let profilePermission: any[] = [];
    if (route.name === "editProfile") {
      formProfilePermission.value.profileId = route.params.profileId as string;
      const profile = findProfileById(formProfilePermission.value.profileId);

      if (profile) {
        formProfilePermission.value.name = profile.name;
        title.value = `Editar perfil ${profile.name}`;
        profilePermission = profile.permissions;

        for (const profileElement of profilePermission) {
          const index = listModuleOptions.findIndex(
            (opt) => opt.optionModuleId === profileElement.optionModuleId,
          );

          if (index !== -1) {
            listModuleOptions.splice(index, 1);
          }
        }
      }
    }

    dataPickList.value = [listModuleOptions, profilePermission];
  };

  const validate = (): boolean => {
    let returnValidate = true;
    if (formProfilePermission.value.optionModuleIds.length === 0) {
      toast.add({
        severity: "warn",
        summary: "Validación",
        detail: "Debe seleccionar al menos un permiso",
        life: 4000,
      });
      returnValidate = false;
    }

    if (formProfilePermission.value.name === "") {
      toast.add({
        severity: "warn",
        summary: "Validación",
        detail: "Debe seleccionar escribir un nombre de perfil",
        life: 4000,
      });
      returnValidate = false;
    }

    isSubmitting.value = true;

    registerProfileService(formProfilePermission.value)
      .then((profile: Profile) => {
        isSubmitting.value = false;
        setProfile([profile]);
        toast.add({
          severity: "success",
          summary: "Registro",
          detail: "Se ha registrado correctamente",
          life: 4000,
        });
      })
      .catch((e) => {
        isSubmitting.value = false;
        showMessage(toast, e);
      });

    return returnValidate;
  };

  const saveProfile = () => {
    if (!validate()) {
      return;
    }
  };

  return {
    saveProfile,
    prepareDataPickList,
    formProfilePermission,
    isSubmitting,
    dataPickList,
    title,
  };
};
