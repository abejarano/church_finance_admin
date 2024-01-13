<template>
  <div class="card">
    <div class="grid">
      <div class="col-12 lg:col-7">
        <h3>Modulos del sistema</h3>
      </div>
      <div class="col-6 lg:col-3">
        <SplitButton label="Modulo del Sistema" :model="btnSystemModule" />
      </div>
      <div class="col-6 lg:col-2">
        <SplitButton
          label="Opcion de Modulo"
          :model="btnOptionModule"
          severity="help"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import SplitButton from "primevue/splitbutton";
import { useAddOrEditSystemModule } from "@/views/security-system/composables/useAddOrEditSystemModule.ts";
import { useAddOrEditOptionModule } from "@/views/security-system/composables/useAddOrEditOptionModule.ts";

const { btnSystemModule } = useAddOrEditSystemModule();

const { btnOptionModule } = useAddOrEditOptionModule();
</script>
