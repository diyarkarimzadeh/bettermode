import axios, { AxiosResponse } from 'axios';

interface PostProps {
  url: string;
  body: object;
  params?: object;
  headers?: object;
  signal?: AbortSignal;
}

const BASE_URL = 'https://frontend.bettermode.io/api';

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  timeout: 20 * 1000,
});

const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Origin: 'https://frontend.bettermode.io',
};

const requestApi = {
  post: async ({
    url,
    params = {},
    body = {},
    headers = DEFAULT_HEADERS,
    signal,
  }: PostProps) => {
    try {
      const response: AxiosResponse = await axiosClient.post(url, body, {
        params,
        headers,
        signal,
      });
      return response;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.log(error);
      throw new Error(error);
    }
  },
};

export default requestApi;
