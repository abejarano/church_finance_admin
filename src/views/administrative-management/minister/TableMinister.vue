<template>
  <div class="col-12">
    <div class="card">
      <DataTable :value="listMinisters">
        <Column
          v-for="col of columnsHeader"
          :key="col.field"
          :field="col.field"
          :header="col.header"
        />

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
              @click="redirectEdit(data.ministerId)"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useListMinisters } from "@/views/administrative-management/composable/useListMinisters.ts";
import Column from "primevue/column";
import { useI18n } from "vue-i18n";

const { t } = useI18n({ useScope: "global" });

const { listMinisters, columnsHeader, redirectEdit } = useListMinisters();
</script>
