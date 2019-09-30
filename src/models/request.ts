export interface ISettingsModel {
  start_day: number,
  end_day: number,
  line: string,
  part_type: string,
  software_version: string,
  sample_size: number,
  delimiter: string,
  fail_on_unfilled: boolean,
  type: string
}
export interface IRequestGridModel {
  request_uid: string,
  request_date: Date,
  request_date_format: string,
  request_user: string,
  status: string,
  status_display: string,
  status_message: string,
  sample_size: string,
  extract_progress: string,
  zip_file_name: string
  Settings: ISettingsModel,
  DetailsData: []
}
export interface IRequestModel {
  request_uid: number,
  request_timestamp: number,
  request_user: string,
  status: string,
  status_message: string,
  sample_size: number,
  extract_progress: string,
  zip_file_name: string
}