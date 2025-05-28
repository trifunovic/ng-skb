import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import documents from '../../../data/documents.data.json';
import { BaseComponent } from './base.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-text-upload',
  standalone: false,
  templateUrl: './upload-doc.component.html'
})
export class UploadDocComponent extends BaseComponent {

doc = {
  id: 'doc1',
  content: 'Lara je najbolji student u Stodderd zato sot igra Tenis',
  metadata: {
    author: 'System',
    category: 'Test'
  }
};

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
        this.successMessage = `Dokument "${res.id}" uspešno dodat.`;
        this.errorMessage = '';
      },
      error: (err: HttpErrorResponse) => this.handleHttpError(err)
    });
  }

  submitBulkFromFile(): void {
    this.api.addDocuments({ documents: documents }).subscribe({
      next: (res) => {
        console.log('✅ Bulk insert result:', res);
        this.errorMessage = '';
      },
      error: (err: HttpErrorResponse) => this.handleHttpError(err)
    });
  }
}
