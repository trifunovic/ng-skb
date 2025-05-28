import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { BaseComponent } from './base.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-text-pinecone',
  standalone: false,
  templateUrl: './text-pinecone.component.html'
})
export class TextPineconeComponent extends BaseComponent {
  response: any;

  constructor(private api: DocumentService) {
    super();
  }

  testConnection(): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.response = '';

    this.api.testPinecone().subscribe({
      next: (res: any) => {
        this.response = JSON.stringify(res, null, 2);
        this.handleSuccess('✅ Pinecone connection successful.');
      },
      error: (err: HttpErrorResponse) => this.handleHttpError(err)
    });
  }
}
