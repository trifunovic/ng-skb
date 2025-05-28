import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-text-rebuild',
  standalone: false,
  templateUrl: './text-rebuild.component.html'
})
export class TextRebuildComponent {
  docsJson = '[{"id":"1","content":"tekst 1"},{"id":"2","content":"tekst 2"}]';
  response = '';

  constructor(private api: ApiService) {}

  rebuild() {
    try {
      const docs = JSON.parse(this.docsJson);
      this.api.rebuildIndex(docs).subscribe(res => this.response = JSON.stringify(res, null, 2));
    } catch (e) {
      this.response = 'Invalid JSON';
    }
  }
}
