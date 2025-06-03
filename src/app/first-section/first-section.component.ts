import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class FirstSectionComponent implements OnInit, AfterViewInit {
  @ViewChild('typedText') typedTextElement!: ElementRef;

  specialties: string[] = [
    'Machine Learning Engineer',
    'AI Research Specialist',
    'Deep Learning Expert',
    'Data Science Professional',
    'Neural Network Architect',
  ];

  private currentIndex = 0;
  private currentText = '';
  private isDeleting = false;
  private typingSpeed = 100; // Speed in milliseconds
  private pauseDuration = 1500; // Time to pause after full text is typed

  constructor() {}

  ngOnInit(): void {
    // Add additional randomization to shapes if needed
    this.addRandomMovementToShapes();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.typeText();
    }, 500);
  }

  typeText(): void {
    const currentSpecialty = this.specialties[this.currentIndex];

    if (this.isDeleting) {
      // Delete one character
      this.currentText = currentSpecialty.substring(
        0,
        this.currentText.length - 1
      );
    } else {
      // Type one character
      this.currentText = currentSpecialty.substring(
        0,
        this.currentText.length + 1
      );
    }

    if (this.typedTextElement && this.typedTextElement.nativeElement) {
      this.typedTextElement.nativeElement.textContent = this.currentText;
    }

    let typingDelay = this.typingSpeed;

    if (this.isDeleting) {
      typingDelay /= 2; // Delete faster than type
    }

    if (!this.isDeleting && this.currentText === currentSpecialty) {
      // Text is fully typed, wait before deleting
      typingDelay = this.pauseDuration;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      // Text is fully deleted, move to next specialty
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.specialties.length;
      typingDelay = 500; // Pause before typing next word
    }

    setTimeout(() => this.typeText(), typingDelay);
  }

  downloadResume(): void {
    const link = document.createElement('a');
    link.href = 'assets/downloads/bechir_bentekfa_resume.pdf';
    link.download = 'Bechir_BenTekfa_Resume.pdf';
    link.click();
  }

  private addRandomMovementToShapes(): void {
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape) => {
      // Add slight random initial positions
      const randomX = Math.random() * 10 - 5; // -5 to 5
      const randomY = Math.random() * 10 - 5; // -5 to 5
      const randomDelay = Math.random() * 3; // 0 to 3s

      const element = shape as HTMLElement;
      element.style.transform = `translate(${randomX}px, ${randomY}px)`;
      element.style.animationDelay = `${randomDelay}s`;
    });
  }
}
