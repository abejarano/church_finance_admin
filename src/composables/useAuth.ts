import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { fetchLogin } from "../views/auth/services/fetchLogin";
import { useAuthStore } from "@/stores/useAuthStore.ts";
import { useToast } from "primevue/usetoast";
import { showMessage } from "@/shared/helpers/showMessage.ts";

export const useAuth = () => {
  const toast = useToast();
  const router = useRouter();
  const isSubmitting = ref(false);
  const form = reactive({
    email: "",
    pass: "",
  });

  const { setInitialUserAuth, logout, getName, getToken } = useAuthStore();

  const makeLogin = async (): Promise<void> => {
    isSubmitting.value = true;

    fetchLogin(form.email.toLowerCase(), form.pass)
      .then((data) => {
        console.log(data);
        setInitialUserAuth({
          email: data.user.email,
          token: data.dataToken,
          profileId: data.user.profileId,
          userId: data.user.userId,
          name: data.user.name,
          password: form.pass,
        });

        isSubmitting.value = false;

        showMessage(toast, "Church finance admin", "info", "Login");

        router.push("/dashboard");
      })
      .catch((e) => {
        isSubmitting.value = false;
        showMessage(toast, e, "error", "Login");
      });
  };

  return {
    form,
    isSubmitting,
    makeLogin,
    getToken,
    getName,
    logout,
  };
};
