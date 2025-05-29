import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { appRoutes } from './app.routes';

import { AuthInterceptor } from './services/auth.interceptor';
import { AppComponent } from './app.component';
import {
  UploadDocComponent,
  SearchDocComponent,
  RebuildIndexComponent,
} from './pages/test-api';

import { DocumentService } from './services/document.service';

@NgModule({
  declarations: [
    AppComponent,
    UploadDocComponent,
    SearchDocComponent,
    RebuildIndexComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DocumentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
