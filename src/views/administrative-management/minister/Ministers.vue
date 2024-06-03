<template>
  <FilterMinisters />

  <div class="grid">
    <TableSkeleton v-if="isSubmitting" />
    <TableMinister v-if="!isSubmitting" />
  </div>
</template>
<script setup lang="ts">
import FilterMinisters from "@/views/administrative-management/minister/components/FilterMinisters.vue";
import TableSkeleton from "@/shared/components/TableSkeleton.vue";
import { useListMinisters } from "@/views/administrative-management/composable/useListMinisters.ts";
import TableMinister from "@/views/administrative-management/minister/TableMinister.vue";
import { onMounted } from "vue";

const { isSubmitting, listMinisters, fetchListMinisters } = useListMinisters();

onMounted(() => {
  if (listMinisters.value.length === 0) {
    fetchListMinisters();
  }
});
</script>
