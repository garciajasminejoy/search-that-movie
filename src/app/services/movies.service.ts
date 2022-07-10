import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Movie } from '../movie.model';
import { UiService } from './ui.service';


class ApiResponse {
  Response: boolean;
  Search: Movie[];
  totalResults: number;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey: string;
  searchTerm: string;
  movies$: BehaviorSubject<Movie[]>;

  constructor(private http: HttpClient,
              private uiService: UiService) {
    this.movies$ = new BehaviorSubject([]);
    this.apiKey = 'edf1ac64';
  }

  searchMoviesByKeyword(movie: Movie): void {
    this.uiService.showLoader(true);
    this.searchTerm = movie.Title;

    const params = new HttpParams()
      .set('s', movie.Title);

    this.http.get(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${this.apiKey}`,
      { params }
    )
    .subscribe((response: ApiResponse) => {
      this.uiService.showLoader(false);
      this.movies$.next(response.Search);
    });
  }

  getMovies$(): Observable<Movie[]> {
    return this.movies$.asObservable();
  }

  getSearchTerm(): string {
    return this.searchTerm;
  }
}
