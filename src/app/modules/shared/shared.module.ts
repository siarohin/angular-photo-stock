import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule],
  exports: [
    MaterialModule,
  ],
})
export class SharedModule {}
