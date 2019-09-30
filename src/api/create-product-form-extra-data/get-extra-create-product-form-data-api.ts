import axios, { AxiosResponse } from "axios";
import { getAPIGeneralError, HASH_SYSTEM_API_CONFIG, GeneralAPIError, APIError } from "../api-config";
import { ISoftwareVersionModel } from "../../models/software-version";
import { IExtraCreateRequestFormDataModel } from "../../models/extra-create-product-form-data";

// Timeout definition
const responseTimeout = 5000
const connectionTimeout = 10000

// Error definition
export const GetCreateRequestFormExtraDataAPIError = {
  RESPONSE_FORMAT_ERROR: {
    id: "get-create-product-form-extra-data-version-api-response-format-error"
  } as APIError,
  UNDEFINED: {
    id: "get-create-product-form-extra-data-version-api-undefined"
  } as APIError
}

// API Methods
export const request = async (): Promise<IExtraCreateRequestFormDataModel> => {
  try {
    // Set connection timeout
    let connectionTimeoutToken = axios.CancelToken.source();
    setTimeout(() => {
      connectionTimeoutToken.cancel();
    }, connectionTimeout);

    // Process request
    // const accessToken = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.API_ACCESS_TOKEN_KEY)
    const response: AxiosResponse<any> = await axios.get(
      `${HASH_SYSTEM_API_CONFIG.url}/createrequest/get-extra-form-data`,
      {
        timeout: responseTimeout,
        cancelToken: connectionTimeoutToken.token
      }
    )
    try {
      return {
        results: response.data.results,
        edr_delimiter_list: response.data.edr_delimiter_list,
        edr_delimiter_default: response.data.edr_delimiter_default,
        edr_max_date_interval: response.data.edr_max_date_interval
      } as IExtraCreateRequestFormDataModel
      
    } catch {
      throw GetCreateRequestFormExtraDataAPIError.RESPONSE_FORMAT_ERROR
    }
  } catch (error) {
    if (!error.response) {
      throw GeneralAPIError.UNDEFINED
    }

    if (!error.response.data) {
      throw getAPIGeneralError(error.response.status)
    }

    if (GetCreateRequestFormExtraDataAPIError.RESPONSE_FORMAT_ERROR) {
      throw GetCreateRequestFormExtraDataAPIError.RESPONSE_FORMAT_ERROR
    }

    throw GetCreateRequestFormExtraDataAPIError.UNDEFINED
  }
}