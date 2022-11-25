import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPhotoResponse } from '../models';
import { BASE_URL } from '../../constants';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  public get(): Observable<IPhotoResponse> {
    return this.http.get<IPhotoResponse>(`${BASE_URL}/assets/db.json`);
  }
}
