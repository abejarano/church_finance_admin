<template>
  <div class="col-12">
    <div class="card">
      <DataTable :value="listClient">
        <Column
          v-for="col of columnsHeader"
          :key="col.field"
          :field="col.field"
          :header="col.header"
        />

        <template #loading> Loading customers data. Please wait.</template>

        <Column
          field="admin"
          header="Es administrador?"
          dataType="boolean"
          style="min-width: 6rem"
        >
          <template #body="{ data }">
            <i
              class="pi"
              :class="{
                'pi-check-circle text-green-500': data.isSuperuser,
                'pi-times-circle text-red-400': !data.isSuperuser,
              }"
            ></i>
          </template>
        </Column>

        <Column
          field="admin"
          header="Esta activo?"
          dataType="boolean"
          style="min-width: 6rem"
        >
          <template #body="{ data }">
            <i
              class="pi"
              :class="{
                'pi-check-circle text-green-500': data.isActive,
                'pi-times-circle text-red-400': !data.isActive,
              }"
            ></i>
          </template>
        </Column>

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
              @click="redirectEdit(data.userId)"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>
<script setup lang="ts">
import Column from "primevue/column";
import { useListUser } from "@/views/security-system/composables/useListUser.ts";

const { redirectEdit, listClient, columnsHeader } = useListUser();
</script>
