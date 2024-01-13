import type { AxiosInstance } from "axios";
import axios from "axios";

import { useRouter } from "vue-router";
import reAuthenticate from "@/shared/services/reAuthenticate.ts";
import { useAuthStore } from "@/stores/useAuthStore.ts";

export interface payloadInterface {
  [key: string]: string | number | null | undefined;
}

export class HttpService {
  private client: AxiosInstance;

  constructor(urlAPI: string) {
    this.client = axios.create({
      baseURL: urlAPI,
    });
  }

  private async getHeader(isFormData: boolean = false) {
    const { getToken } = useAuthStore();
    let token = getToken();
    if (!token) {
      const router = useRouter();

      await router.push("/");
      return;
    }
    const type = isFormData ? "multipart/form-data" : "application/json";
    return {
      headers: {
        "Content-Type": type,
        Authorization: "Bearer " + token,
      },
    };
  }

  public async post<T>(
    url: string,
    form: any,
    isPrivate: boolean = true,
    isFormData: boolean = false,
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      let headerRequest: any;
      if (isPrivate) {
        headerRequest = await this.getHeader(isFormData);
      } else {
        headerRequest = {};
      }

      try {
        const response = await this.client.post(url, form, headerRequest);

        return resolve(response.data ?? ("" as T));
      } catch (e: any) {
        if (e.response.status === 401) {
          await reAuthenticate();
          await this.post(url, form, isPrivate, isFormData);
          return;
        }

        reject(e);
      }
    });
  }

  public async put<T>(
    url: string,
    form: any,
    isPrivate: boolean = true,
    isFormData: boolean = false,
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      let headerRequest: any;
      if (isPrivate) {
        headerRequest = await this.getHeader(isFormData);
      } else {
        headerRequest = {};
      }

      try {
        const response = await this.client.put(url, form, headerRequest);

        resolve(response.data ?? ("" as T));
      } catch (e: any) {
        if (e.response.status === 401) {
          await reAuthenticate();
          await this.put(url, form, isPrivate, isFormData);
          return;
        }

        reject(e);
      }
    });
  }

  public async patch<T>(
    url: string,
    form: any,
    isPrivate: boolean = true,
    isFormData: boolean = false,
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      let headerRequest: any;
      if (isPrivate) {
        headerRequest = await this.getHeader(isFormData);
      } else {
        headerRequest = {};
      }

      try {
        const response = await this.client.patch(url, form, headerRequest);

        resolve(response.data ?? ("" as T));
      } catch (e: any) {
        if (e.response.status === 401) {
          await reAuthenticate();
          await this.patch(url, form, isPrivate, isFormData);
          return;
        }

        reject(e);
      }
    });
  }

  public async get<T>(
    url: string,
    payload: payloadInterface = {},
    isPrivate = true,
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      let data: any;
      let header: any;
      let params: any;
      if (isPrivate) {
        header = await this.getHeader();
      } else {
        header = {};
      }

      if (Object.keys(payload).length > 0) {
        params = Object.entries(payload)
          .filter(([value]) => ![0, "", null, undefined].includes(value))
          .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});
      }

      try {
        data = await this.client.get(url, { headers: header.headers, params });
        resolve(data.data.data);
      } catch (e: any) {
        if (e.response.status === 401) {
          await reAuthenticate();
          await this.get<T>(url, payload, isPrivate);
          return;
        }

        reject(e);
      }
    });
  }

  public async delete<T>(
    url: string,
    form: any,
    isPrivate: boolean = true,
    isFormData: boolean = false,
  ): Promise<T> {
    return new Promise(async (resolve, reject) => {
      let headerRequest: any;
      if (isPrivate) {
        headerRequest = await this.getHeader(isFormData);
      } else {
        headerRequest = {};
      }

      try {
        const response = await this.client.delete(url, {
          data: form,
          headers: headerRequest.headers,
        });

        resolve(response.data ?? ("" as T));
      } catch (e: any) {
        if (e.response.status === 401) {
          await reAuthenticate();
          await this.delete(url, form, isPrivate, isFormData);
          return;
        }

        reject(e);
      }
    });
  }
}
