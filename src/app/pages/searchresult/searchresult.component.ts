import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit, OnDestroy {

  showPopup = false;
  enquiryData = { name: '', email: '', message: '' }; // Form data model
  interval: any; // Stores the interval ID for cleanup

  constructor() { }

  ngOnInit(): void {

    this.showPopup = true;

    this.interval = setInterval(() => {
      this.showPopup = true;
    }, (20000));
  }

  @HostListener('document:keydown.escape', ['$event']) // Listen for Esc key press
  handleEscapeKey(event: KeyboardEvent) {
    if (this.showPopup) {
      this.closePopup();
    }
  }

  submitEnquiry() {
    console.log('Form submitted', this.enquiryData)
    this.closePopup();
  }

  closePopup() {
    this.showPopup = false;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
