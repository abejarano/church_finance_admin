<template>
  <div
    class="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden"
  >
    <div class="flex flex-column align-items-center justify-content-center">
      <div
        style="
          border-radius: 56px;
          padding: 0.3rem;
          background: linear-gradient(
            180deg,
            var(--purple-800) 10%,
            rgba(33, 150, 243, 0) 30%
          );
        "
      >
        <div
          class="w-full surface-card py-8 px-5 sm:px-8"
          style="border-radius: 53px"
        >
          <div class="text-center mb-5">
            <img src="/logo.png" alt="Image" height="50" class="mb-3" />
            <div class="text-900 text-3xl font-medium mb-3">
              {{ t("welcome") }}!
            </div>
            <span class="text-600 font-medium">{{ t("credentials") }}</span>
          </div>

          <div class="mt-7">
            <label
              for="email1"
              class="block text-900 text-xl font-medium mb-2"
              >{{ t("email") }}</label
            >
            <InputText
              id="email1"
              type="text"
              placeholder="Email address"
              class="w-full md:w-30rem mb-5"
              style="padding: 1rem"
              v-model="form.email"
            />

            <label
              for="password1"
              class="block text-900 font-medium text-xl mb-2"
              >{{ t("password") }}</label
            >
            <Password
              id="password1"
              :feedback="false"
              v-model="form.pass"
              placeholder="Password"
              class="w-full mb-3"
              inputClass="w-full"
              :inputStyle="{ padding: '1rem' }"
            />

            <div
              class="flex align-items-center justify-content-between mb-5 gap-5"
            >
              <a
                class="font-medium no-underline ml-2 text-right cursor-pointer"
                style="color: var(--purple-800)"
                >{{ t("forgot") }}</a
              >
            </div>
            <Button
              @click="makeLogin()"
              :loading="isSubmitting"
              severity="help"
              :label="t('login')"
              class="w-full p-3 text-xl"
            />
          </div>
        </div>
      </div>
      <Lang />
    </div>
  </div>
</template>
<script setup lang="ts">
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import { useAuth } from "@/composables/useAuth.ts";
import { useI18n } from "vue-i18n";
import Lang from "@/components/Lang.vue";

const { form, makeLogin, isSubmitting } = useAuth();

const { t } = useI18n({ useScope: "global" });
</script>
<style scoped></style>
