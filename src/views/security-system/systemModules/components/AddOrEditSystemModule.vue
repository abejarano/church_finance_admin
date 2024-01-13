<template>
  <Dialog
    v-model:visible="isOpenFormAddOrEditSystemModule"
    modal
    header="Header"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <template #header>
      <div class="inline-flex align-items-center justify-content-center gap-2">
        <span class="font-bold white-space-nowrap">{{ titleForm }}</span>
      </div>
    </template>

    <div class="flex flex-column align-items-center justify-content-center">
      <div class="w-full surface-card py-3 px-5 sm:px-8">
        <div>
          <label for="email1" class="block text-900 text-xl font-medium mb-2"
            >Nombre del modulo</label
          >
          <InputText
            type="text"
            class="w-full mb-3"
            style="padding: 1rem"
            v-model="formSystemModule.name"
          />

          <label for="password1" class="block text-900 font-medium text-xl mb-2"
            >Descripcion</label
          >
          <InputText
            type="text"
            class="w-full mb-3"
            style="padding: 1rem"
            v-model="formSystemModule.description"
          />

          <div class="field sm:col-4 xl:col-2 md:col-4">
            <div class="flex align-items-center mt-2">
              <Checkbox
                v-model="formSystemModule.isActive"
                inputId="activo"
                binary
              />
              <label for="activo" class="ml-2"> Activo? </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template #footer>
      <Button
        icon="pi pi-save"
        :loading="isSubmitting"
        label="Guardar"
        @click="saveModule"
      />
      <Button
        label="Cerrar"
        icon="pi pi-sign-out"
        class="p-button-help ml-4"
        @click="isOpenFormAddOrEditSystemModule = false"
        autofocus
      />
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import { useAddOrEditSystemModule } from "@/views/security-system/composables/useAddOrEditSystemModule.ts";

const {
  isOpenFormAddOrEditSystemModule,
  isSubmitting,
  formSystemModule,
  titleForm,
  saveModule,
} = useAddOrEditSystemModule();
</script>
