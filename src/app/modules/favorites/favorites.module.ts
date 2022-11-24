import {NgModule} from '@angular/core';
import {FavoritesComponent} from "./favorites.component";
import {FavoritesRoutingModule} from "./favorites-routing.module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, RouterModule, FavoritesRoutingModule],
})
export class FavoritesModule {}
