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
      .pipe(catchError(this.handleError('getDocuments', [])));
  }

  searchDocuments(query: string): Observable<any> {
    const params = new HttpParams().set('query', query);
    return this.http.get(`${this.baseUrl}/search/`, { params })
      .pipe(catchError(this.handleError('searchDocuments', [])));
  }

  addDocument(doc: IDocument): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-document/`, doc)
      .pipe(catchError(this.handleError('addDocument', [])));
  }

  rebuildIndex(docs: IDocument[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/rebuild-index/`, docs)
      .pipe(catchError(this.handleError('rebuildIndex', [])));
  }

  testPinecone(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test-pinecone`)
      .pipe(catchError(this.handleError('testPinecone', [])));
  }

  getConfig(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test-config`)
      .pipe(catchError(this.handleError('getConfig', [])));
  }

  addDocuments(docs: IDocument[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-documents/`, docs)
      .pipe(catchError(this.handleError('addDocuments', [])));
  }

  loadDocumentsByIds(ids: string[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/get-all-documents/`, { ids })
      .pipe(catchError(this.handleError('loadDocumentsByIds', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`❌ ${operation} failed:`, error);
      throw error; // Rethrow to be caught by component for UI display
      // return of(result as T); // <- use this only if you want to suppress errors silently
    };
  }
}
