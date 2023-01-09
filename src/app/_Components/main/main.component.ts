import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  books = [
    {
      image: '/assets/images/livres/livre_page_livre.png',
      title: 'Titre du livre 1',
      description: 'Description du livre 1',
    },
    {
      image: '/assets/images/livres/livre_2.png',
      title: 'Titre du livre 2',
      description: 'Description du livre 2',
    },
    {
      image: '/assets/images/livres/livre_page_livre.png',
      title: 'Titre du livre 3',
      description: 'Description du livre 3',
    },
  ];
  currentBookIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextBook();
    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  previousBook() {
    // Réinitialiser l'index du livre courant s'il est déjà à 0
    if (this.currentBookIndex === 0) {
      this.currentBookIndex = this.books.length - 1;
    } else {
      this.currentBookIndex--;
    }
  }

  nextBook() {
    // Réinitialiser l'index du livre courant s'il est déjà à l'index du dernier livre
    if (this.currentBookIndex === this.books.length - 1) {
      this.currentBookIndex = 0;
    } else {
      this.currentBookIndex++;
    }
  }
}
