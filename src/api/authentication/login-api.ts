import axios, { AxiosResponse } from "axios";
import { GITHUB_API_CONFIG, getAPIGeneralError } from "../api-config";

export const loginRegular = async (username: string, password: string): Promise<void> => {
  try {
    const response: AxiosResponse<any> = await axios.get(`${GITHUB_API_CONFIG.url}/user`, {
      auth: {
        username: username,
        password: password
      }
    })
  } catch (error) {
    throw getAPIGeneralError(error.response.status)
  }
}

export const loginBySocialNetwork = async (): Promise<void> => {
  const response: AxiosResponse<any> = await axios.get(`${GITHUB_API_CONFIG.url}/login`)
}

export const loginByPhone = async (): Promise<void> => {
  const response: AxiosResponse<any> = await axios.get(`${GITHUB_API_CONFIG.url}/login`)
}