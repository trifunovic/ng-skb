import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import documents from '../../../data/documents.data.json';
import { BaseComponent } from './base.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-text-upload',
  standalone: false,
  templateUrl: './text-upload.component.html'
})
export class TextUploadComponent extends BaseComponent {
  doc = { id: '', content: '', metadata: { author: '', category: '' } };

  constructor(private api: DocumentService) {
    super(); // poziva konstruktor BaseComponent
  }

  submitDoc(): void {
    const docToSend = {
      id: this.doc.id,
      content: this.doc.content,
      metadata: {
        author: this.doc.metadata.author,
        category: this.doc.metadata.category
      }
    };

    this.api.addDocument(docToSend).subscribe({
      next: (res) => {
        console.log('✅ Document uploaded:', res);
        this.errorMessage = '';
      },
      error: (err: HttpErrorResponse) => this.handleHttpError(err)
    });
  }

  submitBulkFromFile(): void {
    this.api.addDocuments(documents).subscribe({
      next: (res) => {
        console.log('✅ Bulk insert result:', res);
        this.errorMessage = '';
      },
      error: (err: HttpErrorResponse) => this.handleHttpError(err)
    });
  }
}
