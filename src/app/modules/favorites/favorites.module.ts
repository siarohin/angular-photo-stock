import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FavoritesComponent } from './favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoriteItemComponent } from './favorite-item';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [FavoritesComponent, FavoriteItemComponent],
  imports: [CommonModule, RouterModule, FavoritesRoutingModule, SharedModule],
})
export class FavoritesModule {}
