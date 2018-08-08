import { Component, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
})
export class MovieCardComponent {
  movieObjects: Array<Object>;
  subscription: Subscription;

  constructor(private _moviesService: MoviesService) { }

  @Input()
  movie: Object;

  saveMovie() {
    this._moviesService.saveMovie(this.movie);
  }
}
