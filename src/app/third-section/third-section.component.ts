import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ThirdSectionComponent implements OnInit {
  activeFilter: string = 'all';

  constructor() {}

  ngOnInit(): void {}

  filterProjects(category: string): void {
    this.activeFilter = category;

    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card) => {
      if (card instanceof HTMLElement) {
        if (category === 'all' || card.dataset['category'] === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      }
    });

    // Update active class on filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach((button) => {
      if (button instanceof HTMLElement && button.dataset['filter'] === category) {
        button.classList.add('active');
      } else if (button instanceof HTMLElement) {
        button.classList.remove('active');
      }
    });
  }
}
