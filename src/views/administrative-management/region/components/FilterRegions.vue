<template>
  <div class="col-12">
    <Toolbar class="mb-3">
      <template #start>
        <h3 class="font-regular">{{ t("listRegions") }}</h3>
      </template>
      <template #end>
        <Button
          icon="pi pi-plus"
          :label="t('addDistrict')"
          @click="redirectEdit('')"
          severity="help"
        />
      </template>
    </Toolbar>

    <div class="card">
      <div class="p-fluid formgrid grid">
        <div class="field col-12 md:col-2">
          <label for="state">{{ t("states") }}</label>
          <Dropdown
            filter
            id="state"
            v-model="regionListFilter.stateId"
            :options="listState"
            optionLabel="name"
            optionValue="stateId"
          />
        </div>

        <div class="field col-12 md:col-2">
          <label for="state">{{ t("districts") }}</label>
          <Dropdown
            filter
            id="state"
            v-model="regionListFilter.stateId"
            :options="listState"
            optionLabel="name"
            optionValue="stateId"
          />
        </div>

        <div class="col-12 mt-3">
          <div class="field col-12 md:col-4 ml-auto">
            <div class="grid mt-0">
              <div class="field col">
                <Button
                  label="Filtrar"
                  size="small"
                  @click="fetchListRegion(true)"
                  :loading="isSubmitting"
                />
              </div>
              <div class="field col">
                <Button
                  :loading="isSubmitting"
                  label="Limpiar Filtros"
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
  </div>
</template>
<script setup lang="ts">
import Toolbar from "primevue/toolbar";
import { useI18n } from "vue-i18n";
import { useState } from "@/shared/composables/useState.ts";
import { useListRegion } from "@/views/administrative-management/composable/useListRegion.ts";

const { t } = useI18n({ useScope: "global" });
const {
  clearFilter,
  fetchListRegion,
  redirectEdit,
  regionListFilter,
  isSubmitting,
} = useListRegion();
const { listState } = useState();
</script>
