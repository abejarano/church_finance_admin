import { defineStore } from "pinia";
import { Church } from "@/views/administrative-management/types/church.type.ts";
import { ChurchListFilter } from "@/views/administrative-management/types/churchListFilter.type.ts";

type ListChurchStore = {
  churchList: Church[];
  filter: ChurchListFilter;
};
export const useListChurchStore = defineStore("useListChurchStore", {
  state: (): ListChurchStore => ({
    churchList: [] as Church[],
    filter: {
      perPage: 10,
      page: 1,
      regionId: "",
    },
  }),
  actions: {
    clearList() {
      this.churchList = [];
    },
    setChurch(churchList: Church[]) {
      this.churchList = [...this.churchList, ...churchList];
    },
    getChurchList() {
      return this.churchList;
    },
    findChurchById(churchId: string): Church | undefined {
      return this.churchList.find((church) => church.churchId === churchId);
    },
    getFilters(): ChurchListFilter {
      return this.filter;
    },
    setFilters(filter: ChurchListFilter) {
      this.filter = filter;
    },
    setNextPage(page: number) {
      this.filter.page = page;
    },
  },
});
