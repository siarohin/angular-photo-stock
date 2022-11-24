import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {delay, map} from 'rxjs/operators';
import {IPhoto} from "../models";
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
  public getSet(from: number, to: number): Observable<IPhoto[]> {
    return this.get().pipe(map((photos: IPhoto[]) => photos.slice(from, to)));
  }

  public get(): Observable<IPhoto[]> {
    return this.photoService.get().pipe(delay(this.generateRandomDelay()));
  }

  private generateRandomDelay(): number {
    return Math.floor(Math.random() * (MAX_DELAY - MIN_DELAY + 1) + MIN_DELAY)
  }
}
