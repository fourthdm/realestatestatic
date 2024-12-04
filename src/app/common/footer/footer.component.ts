import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  scrolltop = document.getElementById('scrolltop');
  rootelemt = document.documentElement

  scroll() {
    this.rootelemt.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

}
