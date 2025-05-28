import { Component } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { BaseComponent } from './base.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-text-config',
  standalone: false,
  templateUrl: './text-config.component.html'
})
export class TextConfigComponent extends BaseComponent {
  configData: string = '';

  constructor(private api: DocumentService) {
    super();
  }

  loadConfig(): void {
    this.errorMessage = '';
    this.successMessage = '';
    this.configData = '';

    this.api.getConfig().subscribe({
      next: (res: any) => {
        this.configData = JSON.stringify(res, null, 2);
        this.handleSuccess('✅ Config loaded successfully.');
      },
      error: (err: HttpErrorResponse) => this.handleHttpError(err)
    });
  }
}
