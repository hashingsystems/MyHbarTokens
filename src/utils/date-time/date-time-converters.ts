import moment from "moment"

export const convertAPITimestampToDate = (apiTimeStamp: string): Date | null => {
  try {
    const year =  parseInt(apiTimeStamp.substring(0, 4))
    const month = parseInt(apiTimeStamp.substring(4, 6))
    const date = parseInt(apiTimeStamp.substring(6, 8))
    const hour = parseInt(apiTimeStamp.substring(8, 10))
    const minute = parseInt(apiTimeStamp.substring(10, 12))
    const second = parseInt(apiTimeStamp.substring(12, 14))

    if (isNaN(year) || isNaN(month) || isNaN(date)  || isNaN(hour)  || isNaN(minute)  || isNaN(second)) {
      throw Error("Invalid api timestamp format ")
    }

    return new Date(year, month - 1, date, hour, minute, second)
  } catch(error) {
    return null
  }
}

export const convertDateToAPITimestamp = (date: Date): string => {
  const timestamp = moment(date).format("YYYYMMDDhhmmss")
  return timestamp
}

export const convertDateToFormat = (date: Date | null, format: string): string => {
  if (date === null) {
    return ""
  }

  const timestamp = moment(date).format(format)
  return timestamp
}