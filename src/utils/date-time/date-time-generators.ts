import { convertDateToAPITimestamp } from "./date-time-converters";
import moment from "moment";

export const generateTodayTimestamp = (hour: number) => {
  const today = new Date()
  today.setHours(hour)
  today.setMinutes(0)
  today.setSeconds(0)
  return convertDateToAPITimestamp(today)
}

export const generateYesterdayTimestamp = (hour: number) => {
  let yesterday = moment(new Date()).add(-1, 'days').toDate();
  yesterday.setHours(hour)
  yesterday.setMinutes(0)
  yesterday.setSeconds(0)
  return convertDateToAPITimestamp(yesterday)
}