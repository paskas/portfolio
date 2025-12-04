import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactMessagePayload {
  name: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class MailContactService {
  private httpClient = inject(HttpClient);
  private endpointUrl = 'https://formspree.io/f/mzznvddd';

  sendMessage$(payload: ContactMessagePayload): Observable<unknown> {
    const body = {
      name: payload.name,
      email: payload.email,
      message: payload.message,
      _replyto: payload.email,
      _subject: 'Kontaktformular Portfolio',
    };
    const headers = new HttpHeaders({
      Accept: 'application/json',
    });
    return this.httpClient.post(this.endpointUrl, body, { headers });
  }
}
