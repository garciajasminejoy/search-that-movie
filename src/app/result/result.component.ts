import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from '../movie.model';
import { MoviesService } from '../movies.service';
import { UiService } from '../ui.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  movies: Movie[];
  searchTerm: string;
  showLoader: Observable<boolean>;

  constructor(private movieService: MoviesService,
              private uiService: UiService) { }

  ngOnInit() {
    this.searchTerm = this.movieService.getSearchTerm();
    this.showLoader = this.uiService.getLoaderState();
    this.filterMovies();
  }

  filterMovies(): void {
    this.movieService.getMovies$()
      .pipe(
        map(movies => movies.map(movie => {
          movie.$$displayText = `${movie.Title} (${movie.Year})`;
          movie.Poster = movie.Poster === 'N/A' ? 'assets/images/clapper.png' : movie.Poster;
          return movie;
        }))
      )
      .subscribe((movies) => this.movies =  movies);
  }

}
