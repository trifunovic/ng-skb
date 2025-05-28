import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IDocument } from '../models';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getDocuments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/documents`)
      .pipe(catchError(err => of([])));
  }

  searchDocuments(query: string): Observable<any> {
    const params = new HttpParams().set('query', query);
    return this.http.get(`${this.baseUrl}/search/`, { params })
      .pipe(catchError(err => of([])));
  }

  addDocument(doc: IDocument): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-document/`, doc)
      .pipe(catchError(err => of([])));
  }

  rebuildIndex(docs: IDocument[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/rebuild-index/`, docs)
      .pipe(catchError(err => of([])));
  }

  testPinecone(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test-pinecone`)
      .pipe(catchError(err => of([])));
  }

  getConfig(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test-config`)
      .pipe(catchError(err => of([])));
  }
}
