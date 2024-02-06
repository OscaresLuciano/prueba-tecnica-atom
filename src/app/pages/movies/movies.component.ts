import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/components/header/header.component';
import { FooterComponent } from '../layout/components/footer/footer.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MovieSearchComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent {

}
