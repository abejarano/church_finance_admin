<script setup lang="ts">
import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";
import { useAuth } from "@/composables/useAuth.ts";

const { form, makeLogin, isSubmitting } = useAuth();
</script>

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
            var(--primary-color) 10%,
            rgba(33, 150, 243, 0) 30%
          );
        "
      >
        <div
          class="w-full surface-card py-8 px-5 sm:px-8"
          style="border-radius: 53px"
        >
          <div class="text-center mb-5">
            <img src="/imagotipo.svg" alt="Image" height="50" class="mb-3" />
            <div class="text-900 text-3xl font-medium mb-3">Bienvenido!</div>
            <span class="text-600 font-medium">Coloca tus datos</span>
          </div>

          <div>
            <label for="email1" class="block text-900 text-xl font-medium mb-2"
              >Correo electronico</label
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
              >Contraseñas</label
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
                style="color: var(--primary-color)"
                >Olvide la clave</a
              >
            </div>
            <Button
              @click="makeLogin()"
              :loading="isSubmitting"
              label="Ingresar"
              class="w-full p-3 text-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pi-eye {
  transform: scale(1.6);
  margin-right: 1rem;
}

.pi-eye-slash {
  transform: scale(1.6);
  margin-right: 1rem;
}
</style>
