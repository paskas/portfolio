import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactMessagePayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class MailContactService {
  private httpClient = inject(HttpClient);
  private endpointUrl = '/api/contact';

  sendMessage$(payload: ContactMessagePayload): Observable<string> {
    return this.httpClient.post(
      this.endpointUrl,
      payload,
      { responseType: 'text' as const }
    );
  }
}
