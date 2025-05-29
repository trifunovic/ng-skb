import { Routes } from '@angular/router';
import {
  UploadDocComponent,
  SearchDocComponent,
  RebuildIndexComponent,

} from './pages/test-api';

export const appRoutes: Routes = [
  { path: 'upload', component: UploadDocComponent },
  { path: 'search', component: SearchDocComponent },
  { path: 'rebuild', component: RebuildIndexComponent },
  { path: '', redirectTo: 'upload', pathMatch: 'full' }
];
