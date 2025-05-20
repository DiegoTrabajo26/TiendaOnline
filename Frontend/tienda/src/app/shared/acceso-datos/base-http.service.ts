import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../app/ambiente/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseHttpService {
  http = inject(HttpClient);
  apiUrl = environment.API_URL;
}