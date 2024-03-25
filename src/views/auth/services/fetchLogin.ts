import axios from "axios";

export const fetchLogin = async (
  email: string,
  password: string,
): Promise<any> => {
  const client = axios.create({
    baseURL: import.meta.env.VITE_BASE_ENDPOINT,
  });

  const response = await client.post(`admin/user/login`, {
    email,
    password,
  });
  return response.data.data;
};
