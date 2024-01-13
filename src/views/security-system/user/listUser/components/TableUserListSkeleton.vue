<template>
  <div class="col-12">
    <div class="card">
      <DataTable :value="products">
        <Column field="code" header="">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>
        <Column field="name" header="Nombre">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>
        <Column field="category" header="Correo electronico">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>
        <Column field="quantity" header="Es administrador?">
          <template #body>
            <Skeleton></Skeleton>
          </template>
        </Column>
        <Column field="quantity" header="Esta activo?">
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
import Column from "primevue/column";
import Skeleton from "primevue/skeleton";

const products = ref(new Array(4));
</script>
