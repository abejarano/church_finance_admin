<template>
  <div class="col-12">
    <Toolbar class="mb-3">
      <template #start>
        <h3 class="font-regular">{{ t("listDistrict") }}</h3>
      </template>
      <template #end>
        <Button
          icon="pi pi-plus"
          :label="t('addDistrict')"
          @click="redirectEdit('')"
          severity="help"
        />
      </template>
    </Toolbar>
  </div>
  <div class="grid">
    <TableDistrict v-if="!isSubmitting" />
    <TableSkeleton v-if="isSubmitting" />
  </div>
</template>
<script setup lang="ts">
import { useListDistrict } from "@/views/administrative-management/composable/useListDistrict.ts";
import TableDistrict from "@/views/administrative-management/district/TableDistrict.vue";
import { onMounted } from "vue";
import { useState } from "@/shared/composables/useState.ts";
import Toolbar from "primevue/toolbar";
import { useI18n } from "vue-i18n";
import TableSkeleton from "@/shared/components/TableSkeleton.vue";

const { isSubmitting, fetchDistrictList, redirectEdit, districtList } =
  useListDistrict();
const { fetchListState, listState } = useState();

const { t } = useI18n({ useScope: "global" });

onMounted(() => {
  if (listState.value.length === 0) {
    fetchListState();
  }

  if (districtList.value.length === 0) {
    fetchDistrictList();
  }
});
</script>
