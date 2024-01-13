<template>
  <div class="col-12">
    <div class="card">
      <DataTable :value="products">
        <Column field="code" header="">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>
        <Column field="name" header="PERFIL">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>
        <Column field="category" header="ACTIVO?">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>

        <Column field="code" header="">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Skeleton from "primevue/skeleton";

const products = ref(new Array(4));
</script>
