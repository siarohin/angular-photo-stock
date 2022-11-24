import {IPhoto} from "./photo.model";

export interface IPhotoResponse {
  count: number;
  data: IPhoto[],
}
