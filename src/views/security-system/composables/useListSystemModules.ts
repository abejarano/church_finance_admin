import { computed, ref } from "vue";
import { useSystemModuleStore } from "@/stores/useSystemModuleStore.ts";
import {
  OptionModule,
  SystemModule,
} from "@/views/security-system/types/systemModule.ts";
import { fetchListSystemModule } from "@/views/security-system/services/systemModuleService.ts";
import { showMessage } from "@/shared/helpers/showMessage.ts";
import { useToast } from "primevue/usetoast";

const isSubmitting = ref(false);

export const useListSystemModules = () => {
  const toast = useToast();
  const systemModuleStore = useSystemModuleStore();
  const { getOnlyListModuleOptions } = useSystemModuleStore();
  const listSystemModules = ref<SystemModule[]>(
    systemModuleStore.getSystemModuleList(),
  );

  const columnsHeaderSystemModules = [
    { field: "name", header: "Ttiulo", expander: true },
    { field: "description", header: "Descripcion" },
    { field: "URL", header: "URL" },
    { field: "status", header: "Estatus" },
  ];

  systemModuleStore.$subscribe((mutation, state: any) => {
    listSystemModules.value = state.systemModuleList;
  });

  const fetchSystemModules = (): Promise<boolean> => {
    return new Promise((resolve, reject) => {
      isSubmitting.value = true;
      fetchListSystemModule()
        .then((data: any) => {
          isSubmitting.value = false;
          systemModuleStore.setSystemModule(data);
          resolve(true);
        })
        .catch((e) => {
          isSubmitting.value = false;
          showMessage(toast, e);
          resolve(false);
        });
    });
  };

  const listTree = computed(() => {
    const list = listSystemModules.value;
    const listTree: any = [];

    for (const el of list) {
      const children = el.options?.map((o: OptionModule) => {
        return {
          key: o.optionModuleId,
          data: {
            name: o.name,
            description: o.description,
            URL: o.URL,
            status: o.isActive ? "ACTIVO" : "INACTIVO",
          },
        };
      });
      listTree.push({
        key: el.systemModuleId,
        principal: true,
        data: {
          name: el.name,
          description: el.description,
          URL: "",
          status: el.isActive ? "ACTIVO" : "INACTIVO",
        },
        children: children,
      });
    }

    return listTree;
  });

  return {
    getOnlyListModuleOptions,
    fetchSystemModules,
    listTree,
    columnsHeaderSystemModules,
    listSystemModules,
    isSubmitting,
  };
};
