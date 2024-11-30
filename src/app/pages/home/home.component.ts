import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
    this.searchQuery = this.searchService.getQuery();
  }
}
