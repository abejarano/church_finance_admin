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
          <span class="text-xl font-regular">{{ title }}</span>
        </template>

        <template #end>
          <Button
            label="Grabar"
            icon="pi pi-check"
            class="font-extra-light"
            @click="saveProfile"
            :loading="isSubmitting"
          />
        </template>
      </Toolbar>

      <div class="card p-fluid">
        <div class="formgrid grid">
          <div class="field sm:col-6 xl:col-2 md:col-4">
            <label for="name2">Nombre del perfil</label>
            <InputText
              id="name2"
              type="text"
              v-model="formProfilePermission.name"
            />
          </div>

          <!--          <div class="field sm:col-4 xl:col-2 md:col-4">-->
          <!--            <div class="flex align-items-center mt-5">-->
          <!--              <Checkbox v-model="active" inputId="activo" binary />-->
          <!--              <label for="activo" class="ml-2"> Activo? </label>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
        <PickList
          v-model="dataPickList"
          listStyle="height:342px"
          dataKey="id"
          breakpoint="1400px"
        >
          <template #sourceheader> Opciones del sistema</template>
          <template #targetheader> Permisos del perfil</template>
          <template #item="slotProps">
            <div class="grid">
              <div class="col-2">
                <i class="pi pi-check pt-3"></i>
              </div>
              <div class="col-10">
                <div class="flex-1 flex flex-column gap-2">
                  <span class="font-bold">{{ slotProps.item.name }}</span>
                  <div class="flex align-items-center gap-2">
                    <span>{{ slotProps.item.description }}</span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </PickList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import PickList from "primevue/picklist";
import InputText from "primevue/inputtext";
import Toolbar from "primevue/toolbar";
import { useProfile } from "@/views/security-system/composables/useProfile.ts";
import Button from "primevue/button";
import { useRouter } from "vue-router";

const router = useRouter();
const active = ref(false);

const {
  dataPickList,
  title,
  isSubmitting,
  formProfilePermission,
  saveProfile,
  prepareDataPickList,
} = useProfile();

onMounted(async () => {
  await prepareDataPickList();
});

const toBack = () => {
  router.back();
};
</script>
