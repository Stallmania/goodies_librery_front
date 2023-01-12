import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LivreService } from 'src/app/core/services/livreService/livre.service';
import { Livre } from 'src/app/core/_model/livre';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss'],
})
export class AcceuilComponent {
  forimg = 'assets/images/livres/';
  emailForm!: FormGroup;

  books!: Livre[];
  currentBookIndex = 0;
  intervalId: any;

  constructor(private livreService: LivreService, private router: Router) {
    this.emailForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
    });
  }

  ngOnInit() {
    this.livreService.getNewLivre().subscribe((data: Livre[]) => {
      this.books = data;
    });
    console.log(this.livreService.getNewLivre().subscribe());

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

  navigate(id: number) {
    this.router.navigate(['/livres/' + id]);
  }

  getEmail() {
    return this.emailForm.controls['email'].value;
  }

  onSubmit() {
    console.log(this.emailForm.controls['email'].value);
  }
}
