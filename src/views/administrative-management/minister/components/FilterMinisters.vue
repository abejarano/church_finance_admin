<template>
  <div class="col-12">
    <Toolbar class="mb-3">
      <template #start>
        <h3 class="font-regular">{{ t("listMinisters") }}</h3>
      </template>
      <template #end>
        <Button
          icon="pi pi-plus"
          :label="t('addNewMinister')"
          @click="redirectEdit('')"
          severity="help"
        />
      </template>
    </Toolbar>
  </div>
</template>
<script setup lang="ts">
import Toolbar from "primevue/toolbar";
import { useListMinisters } from "@/views/administrative-management/composable/useListMinisters.ts";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const { redirectEdit } = useListMinisters();
</script>
