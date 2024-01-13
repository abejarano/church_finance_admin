export type User = {
  userId: string;
  name: string;
  email: string;
  profileId: string[];
  isActive: boolean;
  isSuperuser: boolean;
  createdAt: string;
};

export type FormAddOrEditUser = {
  userId?: string;
  password?: string;
  name: string;
  email: string;
  profileId?: string[];
  isActive: boolean;
  isSuperuser: boolean;
};
