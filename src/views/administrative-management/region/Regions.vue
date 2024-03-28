<template>
  <div class="grid">
    <TableSkeleton />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import TableSkeleton from "@/shared/components/TableSkeleton.vue";

const { t } = useI18n({ useScope: "global" });
</script>
