import { ref } from "vue";
import { useListUserStore } from "@/stores/useListUserStore.ts";
import { FormAddOrEditUser, User } from "@/views/security-system/types/user.ts";
import {
  addUserService,
  editUserService,
} from "@/views/security-system/services/userServices.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { useToast } from "primevue/usetoast";
import { useRouter } from "vue-router";

const formAddOrEditUser = ref<FormAddOrEditUser>({
  name: "",
  email: "",
  password: "",
  profileId: undefined,
  isActive: false,
  isSuperuser: false,
});

export const useUser = () => {
  const router = useRouter();
  const isSubmitting = ref<boolean>(false);
  const toast = useToast();
  const { findByUserId } = useListUserStore();
  const { setUsers } = useListUserStore();

  const titleForm = ref<string>("Registrar nuevo usuario");

  const saveUser = async () => {
    try {
      isSubmitting.value = true;
      if (!formAddOrEditUser.value.userId) {
        const user = await addUserService(formAddOrEditUser.value);
        setUsers([user]);
      } else {
        await editUserService(formAddOrEditUser.value);
      }

      toast.add({
        severity: "success",
        summary: "Usuario",
        detail: "Se ha guardado correctamente",
        life: 4000,
      });

      router.push({ name: "userList" });

      isSubmitting.value = false;
    } catch (e) {
      isSubmitting.value = false;
      showMessage(toast, e);
    }
  };

  const editUser = (userId: string): boolean => {
    const user = findByUserId(userId);
    if (user) {
      formAddOrEditUser.value = user as User;
      return true;
    }

    return false;
  };

  return {
    editUser,
    saveUser,
    isSubmitting,
    titleForm,
    formAddOrEditUser,
  };
};
