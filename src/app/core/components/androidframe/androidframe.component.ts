import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-androidframe',
  imports: [CommonModule],
  templateUrl: './androidframe.component.html',
  styleUrl: './androidframe.component.css',
})
export class AndroidframeComponent {
  @Input() mediaUrls: string[] = [];
  @Input() frameColor: string = 'black';
  @Input() arrowsColor: string = 'white';

  currentIndex = 0;

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.mediaUrls.length;
    console.log(this.currentIndex);
  }

  prevImage() {
    this.currentIndex =
      (this.currentIndex - 1 + this.mediaUrls.length) % this.mediaUrls.length;
    console.log(this.currentIndex);
  }
}
