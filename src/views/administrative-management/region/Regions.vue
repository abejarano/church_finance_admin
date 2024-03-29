<template>
  <FilterRegions />

  <div class="grid">
    <TableSkeleton v-if="isSubmitting" />
    <TableRegion v-if="!isSubmitting" />
  </div>
</template>
<script setup lang="ts">
import TableSkeleton from "@/shared/components/TableSkeleton.vue";
import TableRegion from "@/views/administrative-management/region/TableRegion.vue";
import { useListRegion } from "@/views/administrative-management/composable/useListRegion.ts";
import { onMounted } from "vue";
import FilterRegions from "@/views/administrative-management/region/components/FilterRegions.vue";
import { useListDistrict } from "@/views/administrative-management/composable/useListDistrict.ts";

const { isSubmitting, fetchListRegion, regionList } = useListRegion();
const { listAllDistricts, fetchAllDistrict } = useListDistrict();

onMounted(() => {
  if (listAllDistricts.value.length === 0) {
    fetchAllDistrict();
  }

  if (regionList.value.length === 0) {
    fetchListRegion();
  }
});
</script>
