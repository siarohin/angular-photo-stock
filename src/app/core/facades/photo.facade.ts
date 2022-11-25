import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { IPhoto, IPhotoResponse } from '../models';
import { PhotoService, SpinnerService } from '../services';

/** Emulate real-world API with random delay of range in ms **/
const MIN_DELAY = 200;
const MAX_DELAY = 1000;

@Injectable({
  providedIn: 'root',
})
export class PhotoFacade {
  constructor(private photoService: PhotoService, private spinnerService: SpinnerService) {}

  // NOTE: Emulate real-world request for getting data in the range
  public getSet(from: number, to: number): Observable<IPhotoResponse> {
    return this.get().pipe(map((resp: IPhotoResponse) => ({ ...resp, data: resp.data.slice(from, to) })));
  }

  // NOTE: Emulate real-world request for getting data by id
  public getById(id: string): Observable<IPhoto | undefined> {
    return this.get().pipe(map((resp: IPhotoResponse) => {
      return (resp.data.find((item: IPhoto) => item.id === id));
    }));
  }

  public get(): Observable<IPhotoResponse> {
    return this.photoService.get().pipe(
      // NOTE: With real-world request we may move spinner into interceptor
      tap(() => this.spinnerService.showSpinner()),
      delay(this.generateRandomDelay()),
      tap(() => this.spinnerService.hideSpinner()),
    );
  }

  private generateRandomDelay(): number {
    return Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1) + MIN_DELAY)
  }
}
