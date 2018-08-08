import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'storage-list',
  templateUrl: './storage-list.component.html',
  styleUrls: ['./storage-list.component.css'],
})
export class StorageListComponent implements OnInit {
  movieObjects: Object[] = [];

  constructor(private _movieService: MoviesService) { 
    _movieService.movieObjects$.subscribe(
      res => {
        this.movieObjects.push(res);
      });
  }

  ngOnInit() {
     this.getMovies();
  }

  getMovies() {
    this._movieService.getMovies();
  }

  removeMovie(index) {
    /* Remove from stream */
    this.movieObjects.splice(index, 1);

    /* Remove from storage */
    let movieList = JSON.parse(localStorage.getItem('mvlist'));
    movieList.splice(index, 1);
    localStorage.setItem('mvlist', JSON.stringify(movieList));
  }

  clearStorage() {
    /* Clear stream */
    this.movieObjects = [];

    /* Clear storage */
    this._movieService.clearStorage();
    this._movieService.getMovies();
  }

}
