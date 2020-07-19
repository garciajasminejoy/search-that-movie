import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { UiService } from './ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search That Movie';
  showLoader$: Observable<boolean>;

  constructor(private uiService: UiService) {
    this.showLoader$ = uiService.getLoaderState();
  }

}
