import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements AfterViewInit {
  private animate(): void {
    // Get the currently checked input
    const checked = document.querySelector<HTMLInputElement>(".sliderSelection:checked");
    if (checked) {
      // Find the next sibling element
      let next = checked.nextElementSibling as HTMLInputElement | null;

      // If the next element is not valid, loop back to the first input
      if (!next || next.id === "sliderContainer") {
        next = document.getElementById("input1") as HTMLInputElement | null;
      }

      // Set the next input as checked
      if (next) {
        next.checked = true;
      }
    }

    // Schedule the next animation
    window.setTimeout(() => this.animate(), 3000);
  }

  ngAfterViewInit(): void {
    this.animate();
  }
}
