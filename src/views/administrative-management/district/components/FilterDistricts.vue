<template>
  <div class="col-12">
    <Toolbar class="mb-3">
      <template #start>
        <h3 class="font-regular">{{ t("addNewDistrict") }}</h3>
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
          <label for="firstname2"> Nombre del cliente </label>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Toolbar from "primevue/toolbar";
import { useListDistrict } from "@/views/administrative-management/composable/useListDistrcit.ts";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
const { redirectEdit } = useListDistrict();
</script>
