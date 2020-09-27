import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Movie } from 'src/app/core/movie.model';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Output() newTypeOrder = new EventEmitter<string>();
  @Input() movies: Movie[];

  constructor() { }

  ngOnInit(): void {
  }

  changeActiveNav(type: string) {
    const classSort = document.getElementsByClassName('sort-active');
    while(classSort[0]) {
      classSort[0].classList.remove('sort-active');
    }
    switch(type) {
      case 'dates':
        document.getElementById('order-by-dates').classList.add('sort-active');
        break;
      case 'titles':
        document.getElementById('order-by-titles').classList.add('sort-active');
        break;
      case 'ratings':
        document.getElementById('order-by-ratings').classList.add('sort-active');
        break;
    }
  }

  emitTypeOrder(type: string) {
    this.newTypeOrder.emit(type);
  }

}
