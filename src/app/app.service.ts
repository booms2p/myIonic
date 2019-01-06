import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  destinationProvince: destination;

  constructor() { 
    this.destinationProvince = {
      imgSrc: '',
      province: ''
    }
  }
}

export interface destination {
  imgSrc: string;
  province: string;
}

export interface userInfo {
  userName: string;
  firstName: string;
  lastName: string;
}