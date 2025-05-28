import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:8080';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-secure-api-key'
  });

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    const params = new HttpParams().set('query', query);
    return this.http.get(`${this.baseUrl}/search/`, { headers: this.headers, params });
  }

  addDocument(doc: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add-document/`, doc, { headers: this.headers });
  }

  rebuildIndex(docs: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/rebuild-index/`, docs, { headers: this.headers });
  }

  testPinecone(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test-pinecone`, { headers: this.headers });
  }

  getConfig(): Observable<any> {
    return this.http.get(`${this.baseUrl}/test-config`, { headers: this.headers });
  }

  listDocuments(): Observable<any> {
    return this.http.get(`${this.baseUrl}/documents`, { headers: this.headers });
  }
}
