import { defineStore } from "pinia";
import { Minister } from "@/views/administrative-management/types/minister.type.ts";
import { MinisterListFilter } from "@/views/administrative-management/types/ministerListFilter.type.ts";

type ListMinisterStore = {
  listMinisters: Minister[];
  filter: MinisterListFilter;
};
export const useListMinisterStore = defineStore("useListMinisterStore", {
  state: (): ListMinisterStore => ({
    listMinisters: [] as Minister[],
    filter: {
      districtId: "",
      ministerType: "",
      page: 1,
      perPage: 10,
      regionId: "",
    },
  }),
  actions: {
    clearList() {
      this.listMinisters = [];
    },
    setMinister(listMinisters: Minister[]) {
      this.listMinisters = [...this.listMinisters, ...listMinisters];
    },
    getMinisterList() {
      return this.listMinisters;
    },
    findMinisterById(ministerId: string): Minister | undefined {
      return this.listMinisters.find(
        (minister) => minister.ministerId === ministerId,
      );
    },
    getFilters(): MinisterListFilter {
      return this.filter;
    },
    setFilters(filter: MinisterListFilter) {
      this.filter = filter;
    },
    setNextPage(page: number) {
      this.filter.page = page;
    },
  },
});
