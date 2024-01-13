<template>
  <div class="grid">
    <div class="col-12 md:col-12">
      <Toolbar class="mb-3">
        <template #start>
          <Button
            label=""
            icon="pi pi-angle-left"
            iconPos="left"
            class="p-button-text"
            @click="toBack"
          />
          <span class="text-xl font-regular">{{ titleForm }}</span>
        </template>

        <template #end>
          <Button
            label="Grabar"
            icon="pi pi-check"
            class="font-extra-light"
            :loading="isSubmitting"
            @click="saveUser"
          />
        </template>
      </Toolbar>

      <div class="card p-fluid">
        <div class="formgrid grid">
          <div class="field col">
            <label for="name2">Nombre</label>
            <InputText
              id="name2"
              type="text"
              v-model="formAddOrEditUser.name"
            />
          </div>
          <div class="field col">
            <label for="email2">Correo electronico</label>
            <InputText
              id="email2"
              type="text"
              v-model="formAddOrEditUser.email"
            />
          </div>
        </div>

        <div class="formgrid grid">
          <div class="field col">
            <label for="Perfil">Perfil</label>

            <MultiSelect
              v-model="formAddOrEditUser.profileId"
              :options="listProfile"
              optionLabel="name"
              optionValue="profileId"
              class="w-full"
            />
          </div>
          <div class="field col" v-if="!formAddOrEditUser.userId">
            <label for="password">Contraseña</label>
            <InputText
              id="password"
              type="password"
              v-model="formAddOrEditUser.password"
            />
          </div>
        </div>

        <div class="formgrid grid">
          <div class="field sm:col-6 xl:col-2 md:col-4">
            <div class="flex align-items-center mt-4">
              <Checkbox
                v-model="formAddOrEditUser.isSuperuser"
                inputId="superUser"
                binary
              />
              <label for="superUser" class="ml-2"> Es super usuario? </label>
            </div>
          </div>
        </div>

        <div class="formgrid grid">
          <div class="field sm:col-6 xl:col-2 md:col-4">
            <div class="flex align-items-center mt-4">
              <Checkbox
                v-model="formAddOrEditUser.isActive"
                inputId="activo"
                binary
              />
              <label for="activo" class="ml-2"> Activo? </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import Checkbox from "primevue/checkbox";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import MultiSelect from "primevue/multiselect";
import { useRoute, useRouter } from "vue-router";
import { useUser } from "@/views/security-system/composables/useUser.ts";
import { useProfileList } from "@/views/security-system/composables/useProfileList.ts";

const router = useRouter();

const { formAddOrEditUser, titleForm, isSubmitting, editUser, saveUser } =
  useUser();
const { listProfile, fetchProfileList } = useProfileList();

const route = useRoute();

onMounted(() => {
  if (route.name === "editUser") {
    titleForm.value = "Editar usuario";
  }

  if (route.params.userId) {
    if (!editUser(route.params.userId.toString())) {
      router.push({ name: "userList" });
    }
  }

  if (listProfile.value.length === 0) {
    fetchProfileList();
  }
});

const toBack = () => {
  router.back();
};
</script>
