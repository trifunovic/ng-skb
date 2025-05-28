import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-system-info',
  standalone: false,
  templateUrl: './system-info.component.html'
})
export class SystemInfoComponent {
  config: any;
  pinecone: any;

  constructor(private api: ApiService) {}

  getConfig() {
    this.api.getConfig().subscribe(res => this.config = res);
  }

  testPinecone() {
    this.api.testPinecone().subscribe(res => this.pinecone = res);
  }
}
