export interface IExtraCreateRequestFormDataModel {
  results: Array<{
    value: string,
    text: string
  }>,
  edr_delimiter_list: Array<{
    value: string,
    text: string
  }>,
  edr_delimiter_default: string,
  edr_max_date_interval:number
}