import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpinnerService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor(public spinnerService: SpinnerService) {}
}
