export type ProfilePermissions = {
  name: string;
  description: string;
  isActive: boolean;
  URL: string;
  optionModuleId: string;
};

export type Profile = {
  profileId: string;
  name: string;
  permissions: ProfilePermissions[];
};

export type FormAddOrEditProfilePermissions = {
  profileId?: string;
  name: string;
  optionModuleIds: string[];
};
