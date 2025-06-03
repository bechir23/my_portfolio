import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstSectionComponent } from './first-section/first-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { ForthSectionComponent } from './forth-section/forth-section.component';
import { FifthSectionComponent } from './fifth-section/fifth-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  imports: [
    CommonModule,
    FirstSectionComponent,
    SkillsSectionComponent,
    ThirdSectionComponent,
    ForthSectionComponent,
    FifthSectionComponent,
  ]
})
export class AppComponent {
  title = 'portfolio-app';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('.main-header') as HTMLElement;
    const scrollPosition = window.scrollY;
    
    if (scrollPosition > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop - 100;
      const sectionHeight = (section as HTMLElement).offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}
