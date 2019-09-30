import axios, { AxiosResponse } from "axios";
import { GITHUB_API_CONFIG } from "../api-config";

export const signup = async (): Promise<void> => {
  const response: AxiosResponse<any> = await axios.get(`${GITHUB_API_CONFIG.url}/login`)
  console.log(response)
}