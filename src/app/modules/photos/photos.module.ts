import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';
import { PhotosComponent } from './photos.component';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotoItemComponent } from './photo-item';
import { PhotoDetailsComponent } from './photo-details';

@NgModule({
  declarations: [PhotosComponent, PhotoItemComponent, PhotoDetailsComponent],
  imports: [CommonModule, RouterModule, PhotosRoutingModule, SharedModule],
})
export class PhotosModule {}
