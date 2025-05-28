import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-text-list',
  standalone: false,
  templateUrl: './text-list.component.html'
})
export class TextListComponent {
  docIds: string[] = [];

  constructor(private api: ApiService) {}

  loadDocs() {
    this.api.listDocuments().subscribe(res => {
      this.docIds = res.document_ids || [];
    });
  }
}
