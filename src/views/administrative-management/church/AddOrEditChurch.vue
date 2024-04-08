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
            @click="saveChurch"
            :loading="isSubmitting"
            severity="help"
          />
        </template>
      </Toolbar>
      <div class="card p-fluid">
        <div class="formgrid grid">
          <div class="field col">
            <label for="name2">{{ t("regionName") }}</label>
            <InputText id="name2" type="text" v-model="formChurch.name" />
          </div>
          <div class="field col-6 md:col-6 lg:col-3">
            <label for="state">{{ t("district") }}</label>
            <Dropdown
              filter
              id="state"
              v-model="districtSelected"
              :options="listAllDistricts"
              optionLabel="name"
              optionValue="districtId"
              @change="fetchListRegionByDistrictId(districtSelected)"
            />
          </div>

          <div class="field col-6 md:col-6 lg:col-3">
            <label for="state">{{ t("region") }}</label>
            <Dropdown
              filter
              id="state"
              :disabled="disableRegionSelector"
              v-model="formChurch.regionId"
              :options="listAllRegions"
              optionLabel="name"
              optionValue="regionId"
            />
          </div>
        </div>

        <h3>{{ t("address") }}</h3>
        <Divider />

        <div class="formgrid grid">
          <div class="field col-6 md:col-6 lg:col-3">
            <label for="city">{{ t("city") }}</label>
            <InputText id="city" type="text" v-model="formChurch.name" />
          </div>
          <div class="field col-12 md:col-9 lg:col-9">
            <label for="complement">{{ t("complement") }}</label>
            <InputText id="complement" type="text" v-model="formChurch.name" />
          </div>
        </div>
        <div class="formgrid grid">
          <div class="field col-6 md:col-6 lg:col-3">
            <label for="number">{{ t("number") }}</label>
            <InputText id="number" type="text" v-model="formChurch.name" />
          </div>
          <div class="field col-6 md:col-6 lg:col-3">
            <label for="name2">{{ t("postalCode") }}</label>
            <InputText id="name2" type="text" v-model="formChurch.name" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import toBack from "@/shared/helpers/toBack.ts";
import Button from "primevue/button";
import Toolbar from "primevue/toolbar";
import { useAddOrEditChurch } from "@/views/administrative-management/composable/useAddOrEditChurch.ts";
import { useI18n } from "vue-i18n";
import Divider from "primevue/divider";
import { useListRegion } from "@/views/administrative-management/composable/useListRegion.ts";
import { useListDistrict } from "@/views/administrative-management/composable/useListDistrict.ts";
import { useFilterChurch } from "@/views/administrative-management/composable/useFilterChurch.ts";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const { t } = useI18n({ useScope: "global" });
const route = useRoute();
const router = useRouter();
const { titleForm, isSubmitting, formChurch, editChurch, saveChurch } =
  useAddOrEditChurch();
const { listAllRegions, fetchListRegionByDistrictId } = useListRegion();
const { listAllDistricts } = useListDistrict();
const { districtSelected, disableRegionSelector } = useFilterChurch();

onMounted(() => {
  if (route.params.churchId) {
    if (!editChurch(route.params.churchId.toString())) {
      router.push({ name: "churchList" });
    }
  }
});
</script>
