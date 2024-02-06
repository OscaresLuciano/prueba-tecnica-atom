import { Component } from '@angular/core';
import { moviesService } from '../services/movies.service';
import { MovieInterface } from '../models';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MovieTableComponent } from '../movie-table/movie-table.component';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MovieTableComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss'
})
export class MovieSearchComponent {

  searchValue = 'Dragon Ball';
  movies: MovieInterface[] = [];
  searchForm = this.formBuilder.nonNullable.group({
    searchValue: '',
  })

  constructor(
    private movieService: moviesService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.movieService.getMovies(this.searchValue).subscribe((movies) => {
      this.movies = movies;
    });
  }

  onSearchSubmit(): void {
    this.searchValue = this.searchForm.value.searchValue ?? '';
    this.fetchData();
  }

  trackByFn(index: number, item: MovieInterface): string {
    return item.imdbID;
  }

}
