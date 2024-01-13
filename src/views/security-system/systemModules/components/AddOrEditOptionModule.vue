<template>
  <Dialog
    v-model:visible="isOpenFormAddOrEditOptionModule"
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
        <label for="name" class="block text-900 text-xl font-medium mb-2"
          >Nombre de la opción</label
        >
        <InputText
          type="text"
          class="w-full mb-3"
          style="padding: 1rem"
          v-model="formOptionModule.name"
        />

        <label for="description" class="block text-900 text-xl font-medium mb-2"
          >Descripción</label
        >
        <InputText
          type="text"
          class="w-full mb-3"
          style="padding: 1rem"
          v-model="formOptionModule.description"
        />

        <label for="description" class="block text-900 text-xl font-medium mb-2"
          >URL</label
        >
        <InputText
          type="text"
          class="w-full mb-3"
          style="padding: 1rem"
          v-model="formOptionModule.URL"
        />

        <label for="description" class="block text-900 text-xl font-medium mb-2"
          >Metodos</label
        >

        <Dropdown
          v-model="formOptionModule.method"
          :options="methods"
          option-value="code"
          optionLabel="name"
          :maxSelectedLabels="3"
          class="w-full"
        />
      </div>
    </div>
    <template #footer>
      <Button
        icon="pi pi-save"
        :loading="isSubmitting"
        label="Guardar"
        @click="saveOptionModule"
      />
      <Button
        label="Cerrar"
        icon="pi pi-sign-out"
        class="p-button-help ml-4"
        @click="isOpenFormAddOrEditOptionModule = false"
        autofocus
      />
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import Dialog from "primevue/dialog";
import Dropdown from "primevue/dropdown";
import { useAddOrEditOptionModule } from "@/views/security-system/composables/useAddOrEditOptionModule.ts";
import InputText from "primevue/inputtext";
import { ref } from "vue";
import Button from "primevue/button";
import { OptionModuleMethodsType } from "@/views/security-system/types/systemModule.ts";

const {
  isOpenFormAddOrEditOptionModule,
  titleForm,
  formOptionModule,
  isSubmitting,
  saveOptionModule,
} = useAddOrEditOptionModule();

const methods = ref([
  { name: OptionModuleMethodsType.GET, code: OptionModuleMethodsType.GET },
  { name: OptionModuleMethodsType.POST, code: OptionModuleMethodsType.POST },
  { name: OptionModuleMethodsType.PUT, code: OptionModuleMethodsType.PUT },
  {
    name: OptionModuleMethodsType.DELETE,
    code: OptionModuleMethodsType.DELETE,
  },
]);
</script>
