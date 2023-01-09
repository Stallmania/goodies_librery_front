import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LivreService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApi;
  }
}
