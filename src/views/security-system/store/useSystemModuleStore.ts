import { defineStore } from "pinia";
import {
  OptionModule,
  SystemModule,
} from "@/views/security-system/types/systemModule.ts";

type SystemModuleStore = {
  systemModuleList: SystemModule[];
};

export const useSystemModuleStore = defineStore("useSystemModuleStore", {
  state: (): SystemModuleStore => ({
    systemModuleList: [] as SystemModule[],
  }),
  actions: {
    setSystemModule(systemModuleList: SystemModule[]) {
      this.systemModuleList = [...this.systemModuleList, ...systemModuleList];
    },
    setOptionModule(systemModuleId: string, optionModule: OptionModule) {
      const systemModule = this.systemModuleList.find(
        (systemModule) => systemModule.systemModuleId === systemModuleId,
      );

      if (systemModule) {
        systemModule.options =
          systemModule.options !== undefined
            ? [...systemModule.options, optionModule]
            : [optionModule];
      }
    },
    getSystemModuleList() {
      return this.systemModuleList;
    },
    findSystemModuleById(systemModuleId: string): SystemModule | undefined {
      return this.systemModuleList.find(
        (systemModule) => systemModule.systemModuleId === systemModuleId,
      );
    },
    findOptionModuleById(
      optionModuleId: string,
    ): [string, OptionModule | undefined] {
      for (const systemModule of this.systemModuleList) {
        const optionModule = systemModule.options?.find(
          (optionModule) => optionModule.optionModuleId === optionModuleId,
        );

        if (optionModule) {
          return [systemModule.systemModuleId ?? "", optionModule];
        }
      }
      return ["", undefined];
    },
    getOnlyListModuleOptions(): OptionModule[] {
      const list: OptionModule[] = [];
      for (const systemModule of this.systemModuleList) {
        if (systemModule.options) {
          list.push(...systemModule.options);
        }
      }
      return list;
    },
  },
});
