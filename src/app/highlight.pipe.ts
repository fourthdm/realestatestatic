import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string, searchQuery: string): string {
    if (!searchQuery) return value;
    const regex = new RegExp(searchQuery, '');
    return value.replace(regex, match => `<span class="highlight">${match}</span>`);
  }

}