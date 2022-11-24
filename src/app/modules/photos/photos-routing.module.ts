import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PhotosComponent} from './photos.component';
import {Path} from "../../constants";

const routes: Routes = [
  {
    path: Path.Root,
    component: PhotosComponent,
    pathMatch: 'full'
  },
  {
    path: `${Path.Photos}/${Path.Id}`,
    component: PhotosComponent, // TODO: TBD
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhotosRoutingModule {}
