import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Livre } from 'src/app/core/model/livre';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.scss'],
})
export class LivreComponent {
  constructor(private httpClient: HttpClient) {}
  id!: number;
  book!: Livre;
  coverPath!: string;
  ngOnInit(): void {
    this.httpClient
      .get<Livre>('http://localhost:8080/book?id=1')
      .subscribe((book) => (this.book = book));
  }

  public name() {
    console.log('Le livre: ', this.book);
  }
}
