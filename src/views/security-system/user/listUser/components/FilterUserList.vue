<template>
  <div class="col-12">
    <Toolbar class="mb-3">
      <template #start>
        <h3 class="font-regular">Listado de usuarios</h3>
      </template>
      <template #end>
        <Button
          icon="pi pi-plus"
          label="Agregar usuario"
          severity="help"
          @click="redirectEdit('')"
        />
      </template>
    </Toolbar>
    <div class="card">
      <div class="p-fluid formgrid grid">
        <div class="field col-12 md:col-2">
          <label for="firstname2"> Usuarios activos? </label>
          <Dropdown
            id="userActive"
            v-model="filterUserRequest.isActive"
            :options="booleanFilterOptions"
            option-label="name"
            optionValue="value"
          />
        </div>
        <div class="field col-12 md:col-2">
          <label for="firstname2"> Super usuarios? </label>
          <Dropdown
            id="superUser"
            v-model="filterUserRequest.isSuperuser"
            :options="booleanFilterOptions"
            option-label="name"
            optionValue="value"
          />
        </div>

        <div class="field col-12 md:col-4">
          <label for="state">Acciones</label>
          <div class="grid mt-0">
            <div class="field col">
              <Button
                label="Filtrar"
                size="small"
                @click="fetchUser()"
                :loading="isSubmitting"
                severity="help"
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
</template>

<script setup lang="ts">
import Button from "primevue/button";
import { useListUser } from "@/views/security-system/composables/useListUser.ts";
import Toolbar from "primevue/toolbar";
import Dropdown from "primevue/dropdown";

const {
  redirectEdit,
  filterUserRequest,
  fetchUser,
  isSubmitting,
  clearFilter,
} = useListUser();

const booleanFilterOptions = [
  { name: "Todos", value: "" },
  { name: "Si", value: "true" },
  { name: "No", value: "false" },
];
</script>
