import { Injectable } from '@angular/core';
import { IStorage, ValueOf } from '../models';

const STORAGE_KEY = 'angular-photo-stock';

@Injectable({
  providedIn: 'root',
})
export class StorageFacade {
  public set(key: keyof IStorage, value: ValueOf<IStorage>): void {
    const storage: IStorage = this.getStorage();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storage ? { ...storage, [key]: value } : { [key]: value }));
  }

  public get(key: keyof IStorage): ValueOf<IStorage> | undefined {
    const storage: IStorage = this.getStorage();
    if (storage) {
      return storage[key];
    }
    return;
  }

  public clear(): void {
    localStorage.setItem(STORAGE_KEY, '');
  }

  public remove(key: keyof IStorage): void {
    const storage: IStorage = this.getStorage();
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(storage ? { ...storage, [key]: undefined } : { [key]: undefined }),
    );
  }

  private getStorage(): IStorage {
    const storage: string | null = localStorage.getItem(STORAGE_KEY);
    return storage ? <IStorage>JSON.parse(storage) : <IStorage>{};
  }
}
