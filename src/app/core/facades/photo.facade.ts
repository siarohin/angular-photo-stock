import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {IPhotoResponse} from "../models";
import {PhotoService} from "../services";

/** Emulate real-world API with random delay of range in ms **/
const MIN_DELAY = 200;
const MAX_DELAY = 300;

@Injectable({
  providedIn: 'root',
})
export class PhotoFacade {
  constructor(private photoService: PhotoService) {}

  // NOTE: Emulate real-world request for getting data in the range
  public getSet(from: number, to: number): Observable<IPhotoResponse> {
    return this.get().pipe(map((resp: IPhotoResponse) => ({ ...resp, data: resp.data.slice(from, to) })));
  }

  public get(): Observable<IPhotoResponse> {
    return this.photoService.get().pipe(delay(this.generateRandomDelay()));
  }

  private generateRandomDelay(): number {
    return Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1) + MIN_DELAY)
  }
}
