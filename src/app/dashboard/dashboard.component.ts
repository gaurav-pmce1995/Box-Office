import { Component } from '@angular/core';
import { Movie } from '../models/movie';
import { MOVIES } from '../models/movies';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Trending Movies';
  movies:Movie[] = MOVIES;
  movieArray:Movie[] = MOVIES;
  searchText:string = '';
  search(){
    if(this.searchText != ''){
      this.movies = this.movies.filter((m)=> m.movieTitle == this.searchText);
    }
  }
  reset(){
    this.movies = this.movieArray;
  }
}
