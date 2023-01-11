import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from 'src/app/core/services/livreService/livre.service';
import { Livre } from 'src/app/core/_model/livre';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.scss'],
})
export class LivreComponent {


  constructor(private route:ActivatedRoute, private httpClient:HttpClient,private livre:LivreService) {
    this.id = this.route.snapshot.params['id'];
  }
  id!: number;
  book!: Livre;
  coverPath!: string;
  forimg = "assets/images/livres/"
  ngOnInit(): void {
    this.livre.getLivre(this.id).subscribe((book) => (this.book = book));
  }

  public name() {
    console.log('Le livre: ', this.book);
  }
}
