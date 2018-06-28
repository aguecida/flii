import { StatusCode } from '../constants/status-code';

export interface StatusMessage {
  status: StatusCode;
  message: string;
  icon: string;
}

export class SuccessStatusMessage implements StatusMessage {
  status: StatusCode;
  message: string;
  icon: string;

  constructor(message: string) {
    this.status = StatusCode.Success;
    this.message = message;
    this.icon = 'check';
  }
}

export class ErrorStatusMessage implements StatusMessage {
  status: StatusCode;
  message: string;
  icon: string;

  constructor(message: string) {
    this.status = StatusCode.Error;
    this.message = message;
    this.icon = 'close';
  }
}
