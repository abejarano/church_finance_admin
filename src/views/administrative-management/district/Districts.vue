<template>
  <div class="grid">
    <FilterDistricts />
    <TableDistrict v-if="!isSubmitting" />
    <TableDistrictSkeleton v-if="isSubmitting" />
  </div>
</template>
<script setup lang="ts">
import { useListDistrict } from "@/views/administrative-management/composable/useListDistrcit.ts";
import TableDistrict from "@/views/administrative-management/district/components/TableDistrict.vue";
import TableDistrictSkeleton from "@/views/administrative-management/district/components/TableDistrictSkeleton.vue";
import FilterDistricts from "@/views/administrative-management/district/components/FilterDistricts.vue";

const { isSubmitting } = useListDistrict();
</script>
