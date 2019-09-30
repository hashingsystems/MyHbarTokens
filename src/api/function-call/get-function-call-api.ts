import axios, { AxiosResponse } from "axios";
import { getAPIGeneralError, HASH_SYSTEM_API_CONFIG, GeneralAPIError, APIError } from "../api-config";

// Timeout definition
const responseTimeout = 5000
const connectionTimeout = 10000

// Error definition
export const GetFunctionCallAPIError = {
  RESPONSE_FORMAT_ERROR: {
    id: "get-function-call-api-response-format-error"
  } as APIError,
  UNDEFINED: {
    id: "get-function-call-api-undefined"
  } as APIError
}

export interface IGetFunctionCallRequestBody {
  contractNumber: number,
  functionName: "balanceOf"
  argsValues: Array<string>,
  ABIData: string
}

// API Methods
export const request = async (requestBody: IGetFunctionCallRequestBody): Promise<any> => {
  try {
    console.log(requestBody)

    // Set connection timeout
    let connectionTimeoutToken = axios.CancelToken.source();
    setTimeout(() => {
      connectionTimeoutToken.cancel();
    }, connectionTimeout);

    // Currently, it's kind of fast, should set minimum response time for better UI
    await new Promise(r => setTimeout(r, 300));

    // Process request
    // const accessToken = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.API_ACCESS_TOKEN_KEY)
    const response: AxiosResponse<any> = await axios.post(
      `${HASH_SYSTEM_API_CONFIG.url}/getFunctionCall`,
      requestBody,
      {
        timeout: responseTimeout,
        cancelToken: connectionTimeoutToken.token
      }
    )
    console.log(response)
    return response.data
  } catch (error) {
    if (!error.response) {
      throw GeneralAPIError.UNDEFINED
    }

    if (!error.response.data) {
      throw getAPIGeneralError(error.response.status)
    }

    throw GetFunctionCallAPIError.UNDEFINED
  }
}