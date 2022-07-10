import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseService } from './services/firebase.service';
import { UiService } from './services/ui.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Search That Movie';
  showLoader$: Observable<boolean>;

  constructor(private uiService: UiService,
              private firebase: FirebaseService) {
    this.showLoader$ = uiService.getLoaderState();
    this.firebase.initFirebase();
  }

}
