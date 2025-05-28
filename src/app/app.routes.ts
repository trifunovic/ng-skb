import { Routes } from '@angular/router';
import {
  UploadDocComponent,
  QueryDocComponent,
  TextRebuildComponent,

} from './pages/test-api';

export const appRoutes: Routes = [
  { path: 'upload', component: UploadDocComponent },
  { path: 'query', component: QueryDocComponent },
  { path: 'rebuild', component: TextRebuildComponent },
  { path: '', redirectTo: 'upload', pathMatch: 'full' }
];
