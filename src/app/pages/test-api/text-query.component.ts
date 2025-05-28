
import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-text-query',
  standalone:false,
  templateUrl: './text-query.component.html'
})
export class TextQueryComponent {
  query = '';
  results: any[] = [];

  constructor(private api: DocumentService) {}

  search() {
    this.api.searchDocuments(this.query).subscribe((res: any) => {
      this.results = res.results;
    });
  }
}
