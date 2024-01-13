import { ref } from "vue";
import { fetchListProfile } from "@/views/security-system/services/profileService.ts";
import { Profile } from "@/views/security-system/types/profile.ts";
import { useProfileListStore } from "@/stores/useProfileListStore.ts";
import { useRouter } from "vue-router";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { useToast } from "primevue/usetoast";

export const useProfileList = () => {
  const toast = useToast();
  const isSubmitting = ref(false);
  const profileListStore = useProfileListStore();
  const router = useRouter();

  const columnsHeader = [
    { field: "code", header: "" },
    { field: "name", header: "Perfil" },
  ];

  const listProfile = ref<Profile[]>(profileListStore.getProfileList());

  profileListStore.$subscribe((mutation: any, state: any) => {
    listProfile.value = state.profileList;
  });

  const fetchProfileList = () => {
    isSubmitting.value = true;
    fetchListProfile()
      .then((data: any) => {
        isSubmitting.value = false;

        profileListStore.setProfile(data);
      })
      .catch((e) => {
        isSubmitting.value = false;
        showMessage(toast, e);
      });
  };

  const redirectEdit = (profileId: string) => {
    if (profileId === "") {
      router.push({ name: "addNewProfile" });
      return;
    }

    router.push({ name: "editProfile", params: { profileId } });
  };

  return {
    listProfile,
    isSubmitting,
    columnsHeader,
    redirectEdit,
    fetchProfileList,
  };
};
