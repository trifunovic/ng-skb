import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { HttpErrorResponse } from '@angular/common/http';
import ids from '../../../data/document-ids.data.json';
import { BaseComponent } from './base.component';

@Component({
  selector: 'app-text-query',
  standalone: false,
  templateUrl: './text-query.component.html'
})
export class TextQueryComponent extends BaseComponent {
  query: string = '';
  results: any[] = [];

  constructor(private api: DocumentService) {
    super(); // poziva konstruktor BaseComponent
  }

  search() {
    this.results = [];
    this.errorMessage = '';

    if (!this.query.trim()) {
      this.errorMessage = 'Query cannot be empty.';
      return;
    }

    this.api.searchDocuments(this.query).subscribe({
      next: (data: any) => {
        this.results = data.results || [];
        this.errorMessage = '';
      },
      error: (err: HttpErrorResponse) => this.handleHttpError(err)
    });
  }

  loadAllDocuments() {
    this.results = [];
    this.errorMessage = '';

    this.api.loadDocumentsByIds(ids).subscribe({
      next: (data: any) => {
        this.results = data.results || [];
        this.errorMessage = '';
      },
      error: (err: HttpErrorResponse) => this.handleHttpError(err)
    });
  }
}
