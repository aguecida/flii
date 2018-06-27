import { StatusCode } from '../constants/status-code';

export interface StatusMessage {
  status: StatusCode;
  message: string;
  getIcon();
}

export class SuccessStatusMessage implements StatusMessage {
  status: StatusCode;
  message: string;

  constructor(message: string) {
    this.status = StatusCode.Success;
    this.message = message;
  }

  getIcon() {
    return 'check';
  }
}

export class ErrorStatusMessage implements StatusMessage {
  status: StatusCode;
  message: string;

  constructor(message: string) {
    this.status = StatusCode.Error;
    this.message = message;
  }

  getIcon() {
    return 'close';
  }
}
