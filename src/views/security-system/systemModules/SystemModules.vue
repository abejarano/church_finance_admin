<template>
  <TableSystemModule v-if="!isSubmitting" />
  <TableSystemModuleSkeleton v-if="isSubmitting" />
</template>
<script setup lang="ts">
import TableSystemModule from "@/views/security-system/systemModules/components/TableSystemModule.vue";
import TableSystemModuleSkeleton from "@/views/security-system/systemModules/components/TableSystemModuleSkeleton.vue";
import { useListSystemModules } from "@/views/security-system/composables/useListSystemModules.ts";

const { isSubmitting } = useListSystemModules();
</script>
