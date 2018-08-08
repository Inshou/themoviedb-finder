import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../movies.service';
@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchRes: Array<Object>;
  searchStr: string;
  constructor(private _moviesService: MoviesService) {}

  ngOnInit() {
  }

  searchMovies() {
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}
