import { useAuthStore } from "@/stores/useAuthStore.ts";
import { reactive } from "vue";
import { fetchLogin } from "@/views/auth/services/fetchLogin.ts";

export default async function () {
  const { setInitialUserAuth, logout, getPassword, getEmail } = useAuthStore();

  const form = reactive({
    email: "",
    pass: "",
  });

  form.email = getEmail();
  form.pass = getPassword();

  logout();

  fetchLogin(form.email.toLowerCase(), form.pass).then((data) => {
    setInitialUserAuth({
      email: data.user.email,
      token: data.dataToken.token,
      profileId: data.user.profileId,
      userId: data.user.userId,
      name: data.user.name,
      password: form.pass,
    });
  });
}
