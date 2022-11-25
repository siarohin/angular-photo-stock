import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from './photos.component';
import {Path} from "../../constants";
import {PhotoDetailsComponent} from "./photo-details";

const routes: Routes = [
  {
    path: Path.Root,
    component: PhotosComponent,
    pathMatch: 'full'
  },
  {
    path: Path.Id,
    component: PhotoDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
