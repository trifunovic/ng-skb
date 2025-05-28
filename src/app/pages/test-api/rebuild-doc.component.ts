import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { BaseComponent } from './base.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-text-rebuild',
  standalone: false,
  templateUrl: './rebuild-doc.component.html'
})
export class TextRebuildComponent extends BaseComponent {
public docsJson: string = JSON.stringify(
  [
    {
      id: 'doc1',
      content: 'Sample content for document 1',
      metadata: { source: 'manual', category: 'example' }
    },
    {
      id: 'doc2',
      content: 'Sample content for document 2',
      metadata: {}  // <-- DODATO
    }
  ],
  null,
  2
);

  response: string = '';

  constructor(private api: DocumentService) {
    super();
  }

  rebuild(): void {
    this.response = '';
    this.errorMessage = '';
    this.successMessage = '';

    try {
      const docs = JSON.parse(this.docsJson);
      this.api.rebuildIndex(docs).subscribe({
        next: (res: any) => {
          this.response = JSON.stringify(res, null, 2);
          this.handleSuccess('✅ Index rebuilt successfully.');
        },
        error: (err: HttpErrorResponse) => {
          this.response = JSON.stringify(err.error, null, 2);
          this.handleHttpError(err);
        }
      });
    } catch (e) {
      this.errorMessage = '❌ Invalid JSON format';
    }
  }
}
