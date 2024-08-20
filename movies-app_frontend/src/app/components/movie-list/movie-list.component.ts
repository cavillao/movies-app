import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css',
  providers: [MovieService],
})
export class MovieListComponent {
  movies: any[] = [];
  query: string = '';
  defaultImage = '../../assets/elementor-placeholder-image.webp';

  constructor(
    private movieService: MovieService,
    private modalService: NgbModal
  ) {}

  searchMovies(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    this.movieService.searchMovies(this.query).subscribe((movies) => {
      this.movies = movies;
    });
  }

  onImageError(event: any): void {
    event.target.src = this.defaultImage;
  }

  openDetail(movie: any) {
    const modalRef = this.modalService.open(MovieDetailComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.movie = movie;
  }
}
