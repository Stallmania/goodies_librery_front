import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Book } from 'src/app/_Models/Book';

@Component({
  selector: 'app-main-livre',
  templateUrl: './main-livre.component.html',
  styleUrls: ['./main-livre.component.scss']
})
export class MainLivreComponent {
  constructor(private httpClient:HttpClient) {

  }
  id!: number;
  book!:Book
  coverPath!: string;
  ngOnInit(): void {
    this.httpClient.get<Book>('http://localhost:8080/book?id=1')
      .subscribe(book => this.book = book)
  }

  public name() {
    console.log('Le livre: ', this.book)
  }
}
