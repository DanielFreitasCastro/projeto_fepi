import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  term: string = "";

  constructor(private router: Router) { }

  ngOnInit() { }

  onFormSubmit(form) {
    if (!this.term.length) {
      alert("Informe um termo!");
      return false;
    }
    this.router.navigate([`lista/${this.term}`]);
  }

}
