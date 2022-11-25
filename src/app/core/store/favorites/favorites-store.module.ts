import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FavoritesEffects } from './favorites.effects';
import { FavoritesStoreFacade } from './favorites-store.facade';
import { favoritesReducers } from './favorites.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('favorites', favoritesReducers),
    EffectsModule.forFeature([FavoritesEffects])
  ],
  providers: [FavoritesStoreFacade],
})
export class FavoritesStoreModule {}
