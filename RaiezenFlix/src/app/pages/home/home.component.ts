import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieApiService } from '../../services/movie-api.service'; 

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor (private service: MovieApiService) {}

  bannerResults: any = [];

  ngOnInit(): void {
    this.bannerData();
  }


  // Consumode serviço de banner
  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      //console.log(result)
      this.bannerResults = result.results;
    }) 
  }




}
