<template>
  <div class="grid">
    <FilterUserList />
    <TableUserList v-if="!isSubmitting" />
    <TableUserListSkeleton v-if="isSubmitting" />
  </div>
</template>

<script setup lang="ts">
import { useListUser } from "../../composables/useListUser.ts";

import { onMounted } from "vue";
import FilterUserList from "@/views/security-system/user/listUser/components/FilterUserList.vue";
import TableUserListSkeleton from "@/views/security-system/user/listUser/components/TableUserListSkeleton.vue";
import TableUserList from "@/views/security-system/user/listUser/components/TableUserList.vue";

const { isSubmitting, listClient, fetchUser } = useListUser();

onMounted(() => {
  if (listClient.value.length === 0) {
    fetchUser();
  }
});
</script>
