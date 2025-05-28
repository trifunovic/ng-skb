
import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-text-upload',
  standalone:false,
  templateUrl: './text-upload.component.html'
})
export class TextUploadComponent {
  doc = { id: '', content: '', metadata: { author: '', category: '' } };

  constructor(private api: DocumentService) {}

  submitDoc() {
    const docToSend = {
      id: this.doc.id,
      content: this.doc.content,
      metadata: { author: this.doc.metadata.author, category: this.doc.metadata.category }
    };
    this.api.addDocument(docToSend).subscribe(console.log);
  }
}
