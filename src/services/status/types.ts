export enum ActivityLevel {
  ACTIVE = 'ACTIVE',
  IDLE = 'IDLE',
  MOBILE = 'MOBILE',
  INACTIVE = 'INACTIVE'
}

export enum UserStatus {
  ONLINE = 'ONLINE',
  ONLINE_MOBILE = 'ONLINE_MOBILE',
  IDLE = 'IDLE',
  DO_NOT_DISTURB = 'DO_NOT_DISTURB',
  OFFLINE = 'OFFLINE'
}

export interface StatusIndicator {
  status: UserStatus;
  icon: string;
  color: string;
  message: string;
} 