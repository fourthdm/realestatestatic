import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchQuery: string = '';
  validRoutes: string[] = ['home', 'about', 'contact']; // Define your routes here

  updateQuery(query: string) {
    this.searchQuery = query;
  }

  getQuery(): string {
    return this.searchQuery;
  }

  isValidRoute(query: string): boolean {
    return this.validRoutes.includes(query.toLowerCase());
  }
}
