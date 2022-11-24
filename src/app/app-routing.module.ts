import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Path} from "./constants";

const routes: Routes = [
  {
    path: Path.Root,
    loadChildren: () => import('./modules/photos/photos.module').then((module) => module.PhotosModule),
    pathMatch: 'full' },
  {
    path: Path.Favorites,
    loadChildren: () => import('./modules/favorites/favorites.module').then((module) => module.FavoritesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
