import { UserAuth } from "@/types/userAuth.type.ts";
import { CryptoService } from "@/shared/services/Crypto.ts";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("useAuthStore", {
  state: (): UserAuth => {
    const storageUser = sessionStorage.getItem("bk_user");

    if (storageUser) {
      return JSON.parse(new CryptoService().decrypt(storageUser)) as UserAuth;
    }

    return {
      email: "",
      token: "",
      profileId: [""],
      userId: "",
      name: "",
      password: "",
    };
  },
  actions: {
    setInitialUserAuth(userAuth: UserAuth) {
      this.email = userAuth.email;
      this.token = userAuth.token;
      this.profileId = userAuth.profileId;
      this.userId = userAuth.userId;
      this.name = userAuth.name;
      this.password = userAuth.password;

      const cryptoService = new CryptoService();
      sessionStorage.setItem(
        "bk_user",
        cryptoService.encrypt(JSON.stringify({ ...userAuth })),
      );
    },
    getToken() {
      return this.token;
    },
    logout() {
      sessionStorage.removeItem("bk_user");
      window.location.href = "/";
    },
    getEmail() {
      return this.email;
    },
    getPassword() {
      return this.password;
    },
    getName() {
      return this.name;
    },
  },
});
