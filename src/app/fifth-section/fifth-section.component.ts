import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fifth-section',
  templateUrl: './fifth-section.component.html',
  styleUrls: ['./fifth-section.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class FifthSectionComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      
      // Simulate form submission
      setTimeout(() => {
        console.log('Form submitted', this.contactForm.value);
        this.contactForm.reset();
        this.isSubmitting = false;
        alert('Thank you for your message! I will get back to you soon.');
      }, 1500);
    }
  }
}
