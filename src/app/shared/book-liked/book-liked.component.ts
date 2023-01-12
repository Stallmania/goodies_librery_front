import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from 'src/app/core/services/livreService/livre.service';
import { Livre } from 'src/app/core/_model/livre';

@Component({
  selector: 'app-book-liked',
  templateUrl: './book-liked.component.html',
  styleUrls: ['./book-liked.component.scss']
})
export class BookLikedComponent {
  constructor(private route:ActivatedRoute,private livre:LivreService) {
    this.id = this.route.snapshot.params['id'];
  }
  id!: number;
  @Input() responsive!: String;
  @Input('class')left!: string;
  @Input() book!: Livre;

  forimg = "assets/images/livres/"

  ngOnInit(): void {
    this.livre.getLivre(this.id).subscribe((book) => (this.book = book));
  }

  public name() {
    console.log('Le livre: ', this.book);
  }
}
