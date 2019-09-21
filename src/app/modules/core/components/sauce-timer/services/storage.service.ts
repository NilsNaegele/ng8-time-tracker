import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  save(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
    console.log('saved ' + key + ':', value);
  }

  get(key: string): any {
    const value = localStorage.getItem(key);
    console.log('retrieved ' + key + ':', JSON.parse(value));
    return value && JSON.parse(value);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
    console.log('removed ' + key);
  }

  clear(): void {
    console.log('cleared storage');
    return localStorage.clear();
  }
}
