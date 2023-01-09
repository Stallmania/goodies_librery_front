import { Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  x!:any;

  myFunction() {
    let x = document.getElementById("myLinks");
    if (x!.style.display === "block") {
        x!.style.display = "none";
    } else {
        x!.style.display = "block";
    }
  }
  myFunc(){
    console.log("function called");
  }
}
