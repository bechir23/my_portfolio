import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-macframe',
  imports: [CommonModule],
  templateUrl: './macframe.component.html',
  styleUrl: './macframe.component.css',
})
export class MacframeComponent {
  @Input() mediaUrls: string[] = [];
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
