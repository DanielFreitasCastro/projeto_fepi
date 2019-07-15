import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { GithubService } from '../../services/github.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  term: string;
  list: Array<any> = null;

  constructor(private route: ActivatedRoute, private router: Router, private githubService: GithubService) {
    console.log('LOG: ListComponent -> constructor -> route', route);

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.term = params.get("term");
      this.githubService.getList(this.term).subscribe(
        (data: any) => {

          if (!this.term || !this.term.length) {
            this.router.navigate(['/']);
            return;
          }

          this.list = data.items;
        },
        () => { alert("Algo deu errado!"); }
      )
    });
  }


}
