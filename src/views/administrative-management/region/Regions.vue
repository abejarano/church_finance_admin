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
import { useI18n } from "vue-i18n";
import { onMounted } from "vue";
import { useState } from "@/shared/composables/useState.ts";
import FilterRegions from "@/views/administrative-management/region/components/FilterRegions.vue";

const { t } = useI18n({ useScope: "global" });
const { isSubmitting, fetchListRegion, regionList } = useListRegion();
const { listState, fetchListState } = useState();

onMounted(() => {
  if (listState.value.length === 0) {
    fetchListState();
  }

  if (regionList.value.length === 0) {
    fetchListRegion();
  }
});
</script>
