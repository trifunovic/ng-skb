import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-text-rebuild',
  standalone: false,
  templateUrl: './text-rebuild.component.html'
})
export class TextRebuildComponent {
  docsJson = '[{"id":"1","content":"tekst 1"},{"id":"2","content":"tekst 2"}]';
  response = '';

  constructor(private api: DocumentService) {}

  rebuild() {
    try {
      const docs = JSON.parse(this.docsJson);
      this.api.rebuildIndex(docs).subscribe((res: any) => this.response = JSON.stringify(res, null, 2));
    } catch (e) {
      this.response = 'Invalid JSON';
    }
  }
}
