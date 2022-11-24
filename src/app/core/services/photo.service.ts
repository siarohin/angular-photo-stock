import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IPhoto} from "../models";
import {BASE_URL} from "../../constants";

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  constructor(private http: HttpClient) {}

  public get(): Observable<IPhoto[]> {
    return this.http.get<Array<IPhoto>>(`${BASE_URL}/assets/db.json`);
  }
}
