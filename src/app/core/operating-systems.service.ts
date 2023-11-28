import { Injectable } from '@angular/core';
import { OperatingSystem } from '../interfaces/operating-system';

@Injectable({
  providedIn: 'root'
})
export class OperatingSystemsService {
  operatingSystem: OperatingSystem[] = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}]; 
  
  constructor() { }

  getOperatingSystems(): OperatingSystem[] {
    return this.operatingSystem;
  }
}
