import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material';
import { ToolbarComponent } from './components';
import { IntersectionObserverDirective } from './directives';

@NgModule({
  declarations: [ToolbarComponent, IntersectionObserverDirective],
  imports: [CommonModule, FormsModule, RouterModule, MaterialModule],
  exports: [
    ToolbarComponent,
    IntersectionObserverDirective,
    MaterialModule,
  ],
})
export class SharedModule {}
