<template>
  <div class="col-12">
    <div class="card">
      <DataTable :value="regionList">
        <Column
          v-for="col of columnsHeader"
          :key="col.field"
          :field="col.field"
          :header="col.header"
        />

        <template #loading> Loading customers data. Please wait.</template>

        <Column
          field="actions"
          :header="t('actions')"
          :showFilterMenu="false"
          :filterMenuStyle="{ width: '14rem' }"
          style="min-width: 12rem"
        >
          <template #body="{ data }">
            <Button
              icon="pi pi-file-edit"
              severity="warning"
              @click="redirectEdit(data.regionId)"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useListRegion } from "@/views/administrative-management/composable/useListRegion.ts";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });
const { regionList, columnsHeader, redirectEdit } = useListRegion();
</script>
