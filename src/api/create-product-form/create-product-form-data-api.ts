import axios, { AxiosResponse } from "axios";
import { getAPIGeneralError, HASH_SYSTEM_API_CONFIG, GeneralAPIError, APIError } from "../api-config";

// Timeout definition
const responseTimeout = 5000
const connectionTimeout = 10000

// Error definition
export const CreateRequestFormAPIError = {
  RESPONSE_FORMAT_ERROR: {
    id: "create-product-form-api-response-format-error"
  } as APIError,
  QDATA_EXTRACTOR_CONFIGURED_INCORRECTLY : {
    id: "create-product-form-api-project-configured-incorrectly"
  } as APIError,
  REQUEST_COULD_NOT_BE_CREATED: {
    id: "create-product-form-api-request-could-not-be-created"
  } as APIError,
  UNDEFINED: {
    id: "create-product-form-api-undefined"
  } as APIError
}

export interface ICreateRequestFormRequestBody {
  line: string,
  stations: [{
    id: string
  }],
  data_items: [{
    station: string,
    data_item: string
  }],
  fail_on_unfilled: number,
  data_delimiter: string,
  start_date: string,
  end_date: string,
  login_user: string,
  part_type: string,
  software_version: string,
  sample_size: 9
}

// API Methods
export const request = async (requestBody: ICreateRequestFormRequestBody): Promise<void> => {
  try {
    console.log(requestBody)

    // Set connection timeout
    let connectionTimeoutToken = axios.CancelToken.source();
    setTimeout(() => {
      connectionTimeoutToken.cancel();
    }, connectionTimeout);

    // Process request
    // const accessToken = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.API_ACCESS_TOKEN_KEY)
    const response: AxiosResponse<any> = await axios.post(
      `${HASH_SYSTEM_API_CONFIG.url}/createrequest/save`,
      requestBody,
      {
        timeout: responseTimeout,
        cancelToken: connectionTimeoutToken.token
      }
    )
    if (response.data.response_code === 201) {
      throw CreateRequestFormAPIError.REQUEST_COULD_NOT_BE_CREATED
    }
    if (response.data.response_code === 202) {
      throw CreateRequestFormAPIError.QDATA_EXTRACTOR_CONFIGURED_INCORRECTLY
    }
  } catch (error) {
    if (error === CreateRequestFormAPIError.RESPONSE_FORMAT_ERROR || error === CreateRequestFormAPIError.QDATA_EXTRACTOR_CONFIGURED_INCORRECTLY || error === CreateRequestFormAPIError.REQUEST_COULD_NOT_BE_CREATED) {
      throw error
    }
    if (!error.response) {
      throw GeneralAPIError.UNDEFINED
    }

    if (!error.response.data) {
      throw getAPIGeneralError(error.response.status)
    }

    throw CreateRequestFormAPIError.UNDEFINED
  }
}