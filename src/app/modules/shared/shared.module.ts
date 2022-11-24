import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material';
import {ToolbarComponent} from "./components";

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule],
  exports: [
    ToolbarComponent,
    MaterialModule,
  ],
})
export class SharedModule {}
