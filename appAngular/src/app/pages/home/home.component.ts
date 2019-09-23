import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild("mybtn", null) button: ElementRef;
  term: string = "";

  constructor(private router: Router) { }

  ngOnInit() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.term = "teste";
      setTimeout(() => {
        const elem = this.button.nativeElement;
        elem.click();
      }, 2000);
    }, 2000);
  }

  onFormSubmit(form) {
    if (!this.term.length) {
      alert("Informe um termo!");
      return false;
    }
    this.router.navigate([`lista/${this.term}`]);
  }

}
