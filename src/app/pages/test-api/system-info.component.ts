import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';

@Component({
  selector: 'app-system-info',
  standalone: false,
  templateUrl: './system-info.component.html'
})
export class SystemInfoComponent {
  config: any;
  pinecone: any;

  constructor(private api: DocumentService) {}

  getConfig() {
    this.api.getConfig().subscribe((res: any) => this.config = res);
  }

  testPinecone() {
    this.api.testPinecone().subscribe((res: any) => this.pinecone = res);
  }
}
