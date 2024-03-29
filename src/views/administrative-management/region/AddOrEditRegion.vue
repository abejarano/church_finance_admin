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
            :label="t('save')"
            icon="pi pi-save"
            class="font-extra-light"
            @click="saveRegion"
            :loading="isSubmitting"
            severity="help"
          />
        </template>
      </Toolbar>
      <div class="card p-fluid">
        <div class="formgrid grid">
          <div class="field col">
            <label for="name2">{{ t("regionName") }}</label>
            <InputText id="name2" type="text" v-model="formRegion.name" />
          </div>
          <div class="field col">
            <label for="email2">{{ t("district") }}</label>
            <Dropdown
              filter
              id="state"
              :options="listAllDistricts"
              v-model="formRegion.districtId"
              optionLabel="name"
              optionValue="districtId"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import { useAddOrEditRegion } from "@/views/administrative-management/composable/useAddOrEditRegion.ts";
import toBack from "@/shared/helpers/toBack.ts";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useListDistrict } from "@/views/administrative-management/composable/useListDistrict.ts";

const route = useRoute();
const router = useRouter();
const { t } = useI18n({ useScope: "global" });
const { titleForm, isSubmitting, formRegion, saveRegion, editRegion } =
  useAddOrEditRegion();
const { listAllDistricts } = useListDistrict();

onMounted(() => {
  if (route.params.regionId) {
    if (!editRegion(route.params.regionId.toString())) {
      router.push({ name: "regionList" });
    }
  }
});
</script>
