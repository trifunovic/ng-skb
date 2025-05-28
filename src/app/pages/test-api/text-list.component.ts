import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-text-list',
  standalone: false,
  templateUrl: './text-list.component.html'
})
export class TextListComponent {
  docIds: string[] = [];

  constructor(private api: DocumentService) {}

  loadDocs() {
    this.api.getDocuments().subscribe((res: any) => {
      this.docIds = res.document_ids || [];
    });
  }
}
