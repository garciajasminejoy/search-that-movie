import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '../movie.model';
import { MoviesService } from '../services/movies.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  movie: Movie;

  constructor(private movieService: MoviesService,
              private router: Router
  ) { }

  ngOnInit() {
    this.movie = new Movie();
  }

  searchMovies(): void {
    this.router.navigateByUrl('/result');
    this.movieService.searchMoviesByKeyword(this.movie);
  }

}
