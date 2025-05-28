import { HttpErrorResponse } from '@angular/common/http';

export class BaseComponent {
  public errorMessage: string = '';
  public successMessage: string = '';

  protected handleHttpError(err: HttpErrorResponse): void {
    this.successMessage = '';

    if (typeof err?.error === 'string') {
      this.errorMessage = err.error;
    } else if (err?.error?.detail) {
      this.errorMessage = err.error.detail.toString();
    } else if (err?.message) {
      this.errorMessage = err.message;
    } else {
      this.errorMessage = JSON.stringify(err, null, 2);
    }

    console.error('❌ HTTP Error:', err);
  }

  protected handleSuccess(message: string): void {
    this.errorMessage = '';
    this.successMessage = message;
  }
}
