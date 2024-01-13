import { HttpService } from "@/shared/services/Http.ts";
import { FilterListUserRequestType } from "@/views/security-system/types/filterListUserRequest.type.ts";
import { FormAddOrEditUser, User } from "@/views/security-system/types/user.ts";

export const fetchListUser = (filter: FilterListUserRequestType) => {
  return new HttpService(import.meta.env.VITE_BASE_ENDPOINT).get<any>(
    `security-system/user`,
    { ...filter },
  );
};

export const addUserService = async (
  user: FormAddOrEditUser,
): Promise<User> => {
  const response = await new HttpService(
    import.meta.env.VITE_BASE_ENDPOINT,
  ).post<any>(`security-system/user/create`, user);

  return response.data as User;
};

export const editUserService = async (user: FormAddOrEditUser) => {
  await new HttpService(import.meta.env.VITE_BASE_ENDPOINT).put<any>(
    `security-system/user/edit-user/${user.userId}`,
    user,
  );
};
