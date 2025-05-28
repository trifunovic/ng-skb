
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {
  TextUploadComponent,
  TextQueryComponent,
  TextRebuildComponent,
  SystemInfoComponent,
  TextListComponent
} from './pages/test-api';

@NgModule({
  declarations: [
    AppComponent,
    TextUploadComponent,
    TextQueryComponent,
    TextRebuildComponent,
    SystemInfoComponent,
    TextListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'upload', component: TextUploadComponent },
      { path: 'query', component: TextQueryComponent },
      { path: 'rebuild', component: TextRebuildComponent },
      { path: 'info', component: SystemInfoComponent },
      { path: 'list', component: TextListComponent },
      { path: '', redirectTo: 'upload', pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
