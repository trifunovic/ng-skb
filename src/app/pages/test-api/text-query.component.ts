
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-text-query',
  standalone:false,
  templateUrl: './text-query.component.html'
})
export class TextQueryComponent {
  query = '';
  results: any[] = [];

  constructor(private api: ApiService) {}

  search() {
    this.api.search(this.query).subscribe(res => {
      this.results = res.results;
    });
  }
}
