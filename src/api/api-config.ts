export interface IAPIConfig {
  url: string,
  timeout: number
}

export const HASH_SYSTEM_API_CONFIG: IAPIConfig = {
  url: "http://HashDeployer-env.vuhcsv8rts.us-east-1.elasticbeanstalk.com/sc",
  timeout: 15000
}

export const GITHUB_API_CONFIG: IAPIConfig = {
  url: "https://api.github.com",
  timeout: 15000
}

export interface APIError {
  id: string,
  details?: any
}

export const GeneralAPIError = {
  NETWORK_ERROR: {
    id: "general-api-error-network-error"
  },
  UNAUTHORIZED: {
    id: "general-api-error-unauthorized"
  },
  REJECTED: {
    id: "general-api-error-rejected"
  },
  API_NOT_FOUND: {
    id: "general-api-error-not-found"
  },
  UNDEFINED: {
    id: "general-api-error-undefined"
  }
}

export const getAPIGeneralError = (statusCode: number): APIError => {
  switch (statusCode) {
    case 401:
      return GeneralAPIError.UNAUTHORIZED
    case 400:
    case 405:
      return GeneralAPIError.NETWORK_ERROR
    case 400:
      return GeneralAPIError.REJECTED
    case 404:
      return GeneralAPIError.API_NOT_FOUND
    default:
      return GeneralAPIError.UNDEFINED
  }
}

