import { HttpService } from "@/shared/services/Http.ts";
import {
  FormAddOrEditProfilePermissions,
  Profile,
} from "@/views/security-system/types/profile.ts";

export const fetchListProfile = () => {
  return new HttpService(import.meta.env.VITE_BASE_ENDPOINT).get<any>(
    `admin/profile`,
  );
};

export const registerProfileService = async (
  profile: FormAddOrEditProfilePermissions,
): Promise<Profile> => {
  const response = await new HttpService(
    import.meta.env.VITE_BASE_ENDPOINT,
  ).post<any>(`admin/profile`, profile);

  return response.data;
};
