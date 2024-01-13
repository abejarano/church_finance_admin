<template>
  <div class="grid">
    <TableProfile v-if="!isSubmitting" />
    <TableProfileSkeleton v-if="isSubmitting" />
  </div>
</template>

<script setup lang="ts">
import { useProfileList } from "@/views/security-system/composables/useProfileList.ts";
import TableProfile from "@/views/security-system/profile/listProfile/components/TableProfile.vue";
import TableProfileSkeleton from "@/views/security-system/profile/listProfile/components/TableProfileSkeleton.vue";
import { onMounted } from "vue";

const { isSubmitting, listProfile, fetchProfileList } = useProfileList();

onMounted(() => {
  if (listProfile.value.length === 0) fetchProfileList();
});
</script>
