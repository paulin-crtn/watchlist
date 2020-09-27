import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit {

  constructor(
    private titleService: Title, 
    private metaService: Meta,
  ) {}

  ngOnInit(): void {
    // SET PAGE TITLE AND META
    this.titleService.setTitle('Ajoute un film à regarder | Watchlist');
    this.metaService.addTags([
      {name: 'description', content: 'Enregistre un nouveau film à regarder plus tard.'},
    ]);
  }
}
