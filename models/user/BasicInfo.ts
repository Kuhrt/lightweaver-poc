import { ConnectionStatusEnum } from '../enums/ConnectionStatusEnum'

export interface BasicInfo {
  uid: string
  first_name?: string
  last_name?: string
  pic?: string
  connectionStatus: ConnectionStatusEnum
}
