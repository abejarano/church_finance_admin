<template>
  <div class="col-12">
    <div class="card">
      <DataTable :value="districtList">
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
              @click="redirectEdit(data.districtId)"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { useListDistrict } from "@/views/administrative-management/composable/useListDistrcit.ts";
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";

const { t } = useI18n({ useScope: "global" });
const { redirectEdit, fetchDistrictList, districtList, columnsHeader } =
  useListDistrict();

onMounted(() => {
  if (districtList.value.length === 0) {
    fetchDistrictList();
  }
});
</script>
