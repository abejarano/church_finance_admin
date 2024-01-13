<template>
  <div class="col-12">
    <Toolbar class="mb-3">
      <template #start>
        <h3 class="font-regular">Listado de perfiles de usuario</h3>
      </template>
      <template #end>
        <Button
          icon="pi pi-plus"
          label="Crear grupo"
          @click="redirectEdit('')"
        />
      </template>
    </Toolbar>
  </div>
  <div class="col-12">
    <div class="card">
      <DataTable :value="listProfile">
        <Column
          v-for="col of columnsHeader"
          :key="col.field"
          :field="col.field"
          :header="col.header"
        />

        <template #loading> Loading customers data. Please wait.</template>

        <Column
          field="actions"
          header="Acciones"
          :showFilterMenu="false"
          :filterMenuStyle="{ width: '14rem' }"
          style="min-width: 12rem"
        >
          <template #body="{ data }">
            <Button
              icon="pi pi-file-edit"
              severity="warning"
              @click="redirectEdit(data.profileId)"
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
import Toolbar from "primevue/toolbar";
import { useProfileList } from "@/views/security-system/composables/useProfileList.ts";

const { listProfile, columnsHeader, redirectEdit } = useProfileList();
</script>
