import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  private getDate(): string {
    return (new Date()).toUTCString();
  }

  error(message: string) {
    console.error(`Error:: ${this.getDate()} ${message}`);
  }

  warn(message: string) {
    console.warn(`Warning:: ${this.getDate()} ${message}`);
  }

  log(message: string) {
    console.log(`Log:: ${this.getDate()} ${message}`);
  }
}
