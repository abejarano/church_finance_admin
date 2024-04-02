<template>
  <Toolbar class="mb-3">
    <template #start>
      <h3 class="font-regular">{{ t("listChurches") }}</h3>
    </template>
    <template #end>
      <Button
        icon="pi pi-plus"
        :label="t('addChurch')"
        @click="redirectEdit('')"
        severity="help"
      />
    </template>
  </Toolbar>

  <div class="card">
    <div class="p-fluid formgrid grid">
      <div class="field col-12 md:col-2">
        <label for="state">{{ t("districts") }}</label>
        <Dropdown
          filter
          id="state"
          v-model="districtSelected"
          :options="listAllDistricts"
          optionLabel="name"
          optionValue="districtId"
        />
      </div>
      <div class="field col-12 md:col-2">
        <label for="state">{{ t("regions") }}</label>
        <Dropdown
          filter
          id="state"
          :disabled="disableRegionSelector"
          v-model="churchListFilter.regionId"
          :options="listAllRegions"
          optionLabel="name"
          optionValue="regionId"
        />
      </div>

      <div class="field col-12 md:col-2">
        <label for="state">{{ t("status") }}</label>
        <Dropdown
          v-model="churchListFilter.status"
          :options="[
            { label: t('active'), value: 'ACTIVE' },
            { label: t('inactive'), value: 'INACTIVE' },
            { label: t('noMinister'), value: 'NO_MINISTER' },
          ]"
          optionLabel="label"
          optionValue="value"
          placeholder="Selecciona una naturaleza"
        />
      </div>

      <div class="col-12 mt-3">
        <div class="field col-12 md:col-4 ml-auto">
          <div class="grid mt-0">
            <div class="field col">
              <Button
                :label="t('filter')"
                size="small"
                @click="fetchListChurch(true)"
                :loading="isSubmitting"
              />
            </div>
            <div class="field col">
              <Button
                :loading="isSubmitting"
                :label="t('clearFilter')"
                severity="secondary"
                size="small"
                @click="clearFilter()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Toolbar from "primevue/toolbar";
import { useI18n } from "vue-i18n";
import { useListChurch } from "@/views/administrative-management/composable/useListChurch.ts";
import { useListRegion } from "@/views/administrative-management/composable/useListRegion.ts";
import { useListDistrict } from "@/views/administrative-management/composable/useListDistrict.ts";
import { useFilterChurch } from "@/views/administrative-management/composable/useFilterChurch.ts";

const { t } = useI18n({ useScope: "global" });
const { listAllRegions } = useListRegion();
const { listAllDistricts } = useListDistrict();
const { districtSelected, disableRegionSelector } = useFilterChurch();
const {
  isSubmitting,
  churchListFilter,
  redirectEdit,
  clearFilter,
  fetchListChurch,
} = useListChurch();
</script>
