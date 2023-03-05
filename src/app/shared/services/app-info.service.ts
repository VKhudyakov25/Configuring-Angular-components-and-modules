import { Injectable } from '@angular/core';

@Injectable()
export class AppInfoService {
  constructor() {}

  public get title() {
    return 'Configuring Angular Components And Modules';
  }

  public get currentYear() {
    return new Date().getFullYear();
  }
}
