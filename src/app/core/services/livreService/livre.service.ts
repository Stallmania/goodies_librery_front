import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { Livre } from '../../_model/livre';

@Injectable({
  providedIn: 'root',
})
export class LivreService {
  private urlApi: string;

  constructor(private http: HttpClient) {
    this.urlApi = environment.urlApi;
  }

  getLivre(id: number) {
    return this.http.get<Livre>(this.urlApi+'book?id=' + id);
  }

  getNewLivre(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.urlApi+'books/news');
  }
}
