import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MovieInterface } from '../models';
import { CommonModule } from '@angular/common';
import { DefaultImagePipe } from '../../../utils/pipes/default-image.pipe';
import { RouterModule } from '@angular/router';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatSortModule, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-movie-table',
  standalone: true,
  imports: [CommonModule, DefaultImagePipe, RouterModule, MatTableModule, MatSortModule],
  templateUrl: './movie-table.component.html',
  styleUrl: './movie-table.component.scss'
})

export class MovieTableComponent implements OnInit {
    
  @Input() movieData: MovieInterface[] | undefined;
  fallbackImgUrl = "https://www.timeoutdubai.com/cloud/timeoutdubai/2022/02/10/movies-in-uae.jpg";

  translateType(type: string): string {
    switch (type) {
        case 'movie':
            return 'Película';
        case 'series':
            return 'Serie';
        case 'episode':
            return 'Episodio';
        default:
            return type;
        }
    }

    displayedColumns = ['IMDB ID', 'Titulo', 'Tipo', 'Año', 'Poster'];

    ngOnInit(): void {
        
    }

    @ViewChild(MatTable) matTable!: MatTable<any>

    
    onSort(event: Sort) {
    
      if (this.movieData) {
        let newArray = [...this.movieData].sort((rowA, rowB) => {
    
          const column = event.active;
          const valueA = rowA[column as keyof MovieInterface];
          const valueB = rowB[column as keyof MovieInterface];
    
          if (valueA < valueB) {
            return -1;
          }
    
          if (valueA > valueB) {
            return 1;
          }
    
          return 0;
        });
    
        if (event.direction === '') {
          newArray = [...this.movieData];
        }
    
        if (event.direction === 'desc') {
          newArray = newArray.reverse();
        }
    
        this.matTable.dataSource = newArray;
        this.matTable.renderRows();
      }
    }
    
      
}
