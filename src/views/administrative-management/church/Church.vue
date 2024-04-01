<template>
  <FilterChurch />
  <div class="grid">
    <TableSkeleton v-if="isSubmitting" />
    <TableChurch v-if="!isSubmitting" />
  </div>
</template>

<script setup lang="ts">
import TableSkeleton from "@/shared/components/TableSkeleton.vue";
import TableChurch from "@/views/administrative-management/church/TableChurch.vue";
import { useListChurch } from "@/views/administrative-management/composable/useListChurch.ts";
import { onMounted } from "vue";
import FilterChurch from "@/views/administrative-management/church/components/FilterChurch.vue";
import { useListDistrict } from "@/views/administrative-management/composable/useListDistrict.ts";

const { isSubmitting, churchesList, fetchListChurch } = useListChurch();
const { listAllDistricts, fetchAllDistrict } = useListDistrict();

onMounted(() => {
  if (churchesList.value.length === 0) {
    fetchListChurch();
  }

  if (listAllDistricts.value.length === 0) {
    fetchAllDistrict();
  }
});
</script>
