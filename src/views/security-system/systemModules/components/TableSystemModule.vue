<template>
  <AddOrEditSystemModule />

  <AddOrEditOptionModule />

  <ButtonsSystemModuleAndOptionModule />

  <div class="card">
    <TreeTable
      scrollable
      :value="listTree"
      selection-mode="single"
      crollDirection="both"
      @node-select="selectPrincipalModule"
    >
      <Column
        v-for="col of columnsHeaderSystemModules"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        :expander="col.expander"
      />
    </TreeTable>
  </div>
</template>
<script setup lang="ts">
import Column from "primevue/column";
import TreeTable from "primevue/treetable";
import { useListSystemModules } from "@/views/security-system/composables/useListSystemModules.ts";
import { useAddOrEditSystemModule } from "@/views/security-system/composables/useAddOrEditSystemModule.ts";
import AddOrEditSystemModule from "@/views/security-system/systemModules/components/AddOrEditSystemModule.vue";
import { useAddOrEditOptionModule } from "@/views/security-system/composables/useAddOrEditOptionModule.ts";
import ButtonsSystemModuleAndOptionModule from "@/views/security-system/systemModules/components/ButtonsSystemModuleAndOptionModule.vue";
import { onMounted } from "vue";
import AddOrEditOptionModule from "@/views/security-system/systemModules/components/AddOrEditOptionModule.vue";

const { listTree, columnsHeaderSystemModules, fetchSystemModules } =
  useListSystemModules();

const { systemModuleId } = useAddOrEditSystemModule();

const { optionModuleId } = useAddOrEditOptionModule();

onMounted(() => {
  if (listTree.value.length === 0) fetchSystemModules();
});
const selectPrincipalModule = (e: any) => {
  if (e.principal) {
    systemModuleId.value = e.key;
    optionModuleId.value = "";
  } else {
    optionModuleId.value = e.key;
    systemModuleId.value = "";
  }
};
</script>
