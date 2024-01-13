import { defineStore } from "pinia";
import { Profile } from "@/views/security-system/types/profile.ts";

type ProfileListStore = {
  profileList: Profile[];
};

export const useProfileListStore = defineStore("useProfileListStore", {
  state: (): ProfileListStore => ({
    profileList: [] as Profile[],
  }),
  actions: {
    setProfile(profileList: Profile[]) {
      this.profileList = [...this.profileList, ...profileList];
    },
    getProfileList() {
      return this.profileList;
    },
    findProfileById(profileId: string): Profile | undefined {
      return this.profileList.find(
        (profile) => profile.profileId === profileId,
      );
    },
  },
});
