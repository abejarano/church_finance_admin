import { ref } from "vue";
import { fetchListUser } from "@/views/security-system/services/userServices.ts";
import { FilterListUserRequestType } from "@/views/security-system/types/filterListUserRequest.type.ts";
import { useListUserStore } from "@/stores/useListUserStore.ts";
import { User } from "@/views/security-system/types/user.ts";
import { useRouter } from "vue-router";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { useToast } from "primevue/usetoast";

const isSubmitting = ref(false);

export const useListUser = () => {
  const toast = useToast();
  const router = useRouter();

  const listUserStore = useListUserStore();
  const filterUserRequest = ref<FilterListUserRequestType>(
    listUserStore.getFilters(),
  );

  const listClient = ref<User[]>(listUserStore.getListUser());

  const columnsHeader = [
    { field: "code", header: "" },
    { field: "name", header: "Nombre" },
    { field: "email", header: "Correo electronico" },
    { field: "quantity", header: "" },
  ];

  const fetchUser = () => {
    isSubmitting.value = true;

    fetchListUser(filterUserRequest.value!)
      .then((data: any) => {
        isSubmitting.value = false;
        listUserStore.setUsers(data.results);
        listUserStore.setNextPage(data.nextPag);
      })
      .catch((e) => {
        console.log(e);
        isSubmitting.value = false;
        showMessage(toast, e);
      });
  };

  const clearFilter = () => {
    listUserStore.clearFilter();
  };

  const redirectEdit = (userId: string) => {
    if (userId === "") {
      router.push({ name: "addNewUser" });
      return;
    }
    router.push({ name: "editUser", params: { userId } });
  };

  return {
    listClient,
    columnsHeader,
    filterUserRequest,
    isSubmitting,
    fetchUser,
    clearFilter,
    redirectEdit,
  };
};
