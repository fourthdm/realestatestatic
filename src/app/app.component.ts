import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newrealestate';

  searchQuery: string = '';

  constructor(private searchService: SearchService, private router: Router) { }

  onSearch() {
    this.searchService.updateQuery(this.searchQuery);

    if (this.searchService.isValidRoute(this.searchQuery)) {
      this.router.navigate([`/${this.searchQuery.toLowerCase()}`]);
    }
  }

}
