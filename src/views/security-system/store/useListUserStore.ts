import { defineStore } from "pinia";
import { User } from "@/views/security-system/types/user.ts";
import { FilterListUserRequestType } from "@/views/security-system/types/filterListUserRequest.type.ts";

type ListUserStore = {
  listUser: User[];
  page: number;
  filter: FilterListUserRequestType;
};

export const useListUserStore = defineStore("useListUserStore", {
  state: (): ListUserStore => ({
    listUser: [] as User[],
    page: 1,
    filter: {
      isActive: "",
      isSuperuser: "",
    } as FilterListUserRequestType,
  }),
  actions: {
    setUsers(users: User[]) {
      if (users.length === 0) {
        this.listUser = [];
        return;
      }

      const newUsers = users.filter(
        (newUser: User) =>
          !this.listUser.some(
            (existingUser) => existingUser.userId === newUser.userId,
          ),
      );

      this.listUser = [...this.listUser, ...newUsers];
    },
    findByUserId(userId: string): User | undefined {
      return this.listUser.find((user: User) => user.userId === userId);
    },
    setNextPage(page: number) {
      this.page = page;
    },
    setFilters(filter: FilterListUserRequestType) {
      this.filter = filter;
    },
    getListUser(): User[] {
      return this.listUser;
    },
    clearFilter() {
      this.filter = {
        page: 1,
        isActive: "",
        isSuperuser: "",
      } as FilterListUserRequestType;
    },
    getFilters(): FilterListUserRequestType {
      return { ...this.filter, page: this.page };
    },
  },
});
