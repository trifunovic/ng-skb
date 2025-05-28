import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthInterceptor } from './services/auth.interceptor';
import { AppComponent } from './app.component';
import {
  TextUploadComponent,
  TextQueryComponent,
  TextRebuildComponent,
  SystemInfoComponent,
  TextListComponent,
  TextConfigComponent,
  TextPineconeComponent
} from './pages/test-api';

import { DocumentService } from './services/document.service';

@NgModule({
  declarations: [
    AppComponent,
    TextUploadComponent,
    TextQueryComponent,
    TextRebuildComponent,
    TextListComponent,
    SystemInfoComponent,
    TextConfigComponent,
    TextPineconeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'upload', component: TextUploadComponent },
      { path: 'query', component: TextQueryComponent },
      { path: 'rebuild', component: TextRebuildComponent },
      { path: 'list', component: TextListComponent },
      { path: 'info', component: SystemInfoComponent },
      { path: 'config', component: TextConfigComponent },
      { path: 'pinecone', component: TextPineconeComponent },
      { path: '', redirectTo: 'upload', pathMatch: 'full' }
    ])
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
