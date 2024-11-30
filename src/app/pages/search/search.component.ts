import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchQuery: string = '';

  constructor(private searchService: SearchService, private router: Router) {}

  onSearch() {
    this.searchService.updateQuery(this.searchQuery);
    this.router.navigate(['/search-results']);
  }
}
