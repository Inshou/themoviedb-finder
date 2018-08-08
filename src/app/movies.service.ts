import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';
import { Subject }    from 'rxjs';

@Injectable()
export class MoviesService {
  apikey: string;
  db_url: string;
  movieList: Array<string>;
  
  // Observable string sources
  private movieObjects = new Subject<Object>();

  movieObjects$ = this.movieObjects.asObservable();

  constructor(private _jsonp: Jsonp) {
    this.apikey = '559df6f478abef12ad54120d28335f0c';
    this.db_url = 'https://api.themoviedb.org/3/';
    this.movieList = JSON.parse(localStorage.getItem('mvlist'));
  }

  searchMovies(searchStr: string) {
    var search = new URLSearchParams();
    search.set('language', 'ru-RU');
    search.set('region', 'RU')
    search.set('sort_by','popularity.desc');
    search.set('query', searchStr);
    search.set('api_key', this.apikey);
    search.set('callback', 'JSONP_CALLBACK')
    return this._jsonp.get(this.db_url+'search/movie', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovie(id: string) {
    var search = new URLSearchParams();
    search.set('language', 'ru-RU');
    search.set('region', 'RU');
    search.set('api_key', this.apikey);
    search.set('callback', 'JSONP_CALLBACK')
    return this._jsonp.get(this.db_url+'movie/'+ id, {search})
      .map(res => {
        return res.json();
      })
  }

  getMovies() {
    this.movieList = JSON.parse(localStorage.getItem('mvlist'));
    if (this.movieList) {
      let i = this.movieList.length;
      while (i--) {
        this.getMovie(this.movieList[i]).subscribe(
          res => {
            this.movieObjects.next(res);
          });
      }
    }
  }

  clearStorage() {
    localStorage.clear();
  }

  getGenres() {
    var search = new URLSearchParams();
    search.set('language', 'ru-RU');
    search.set('region', 'RU');
    search.set('api_key', this.apikey);
    search.set('callback', 'JSONP_CALLBACK')
    return this._jsonp.get(this.db_url+'genre/movie/list', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovieReviews(id: string) {
    var search = new URLSearchParams();
    search.set('language', 'ru-RU');
    search.set('region', 'RU');
    search.set('api_key', this.apikey);
    search.set('callback', 'JSONP_CALLBACK')
    return this._jsonp.get(this.db_url+'movie/'+ id +'/reviews', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovieVideos(id: string) {
    var search = new URLSearchParams();
    search.set('language', 'ru-RU');
    search.set('region', 'RU');
    search.set('api_key', this.apikey);
    search.set('callback', 'JSONP_CALLBACK')
    return this._jsonp.get(this.db_url+'movie/'+ id +'/videos', {search})
      .map(res => {
        return res.json();
      })
  }

  getMovieCredits(id: string) {
    var search = new URLSearchParams();
    search.set('language', 'ru-RU');
    search.set('region', 'RU');
    search.set('api_key', this.apikey);
    search.set('callback', 'JSONP_CALLBACK')
    return this._jsonp.get(this.db_url+'movie/' + id +'/credits', {search})
      .map(res => {
        return res.json();
      })
  }

  saveMovie(movie: Object) {
    let movieList = JSON.parse(localStorage.getItem('mvlist'));
    if (movieList === null) { movieList = [] };
    if (movieList.indexOf(movie['id']) == -1) {
      movieList.push(movie['id']);
      this.movieObjects.next(movie);
    }
    localStorage.setItem('mvlist', JSON.stringify(movieList));
  }

}
