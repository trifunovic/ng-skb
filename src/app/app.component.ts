import { Component } from '@angular/core';
import { DocumentService } from './services/document.service';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html'
})
export class AppComponent {
  frontendVersion = ''
constructor(private api: DocumentService) {
  this.api.getFrontendVersion().subscribe({
    next: (v: string) => this.frontendVersion = v,
    error: () => this.frontendVersion = 'unknown'
  });
}
}


