import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  organization: string;
  role: string;
  date: string;
  description: string[];
  technologies: string[];
  icon: string;
  badgeColor: string;
}

interface AcademicProject {
  description: string;
  icon: string;
}

@Component({
  selector: 'app-forth-section',
  templateUrl: './forth-section.component.html',
  styleUrls: ['./forth-section.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ForthSectionComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Audio Classification for Medical ICBHI Dataset',
      organization: 'Southern Denmark University, Denmark',
      role: 'ML/DL Research Intern',
      date: 'February 2025',
      description: [
        'Developed an end-to-end pipeline for respiratory sound classification by extracting spectrogram features with Librosa and TorchVision.',
        'Integrated advanced loss strategies including asymmetric error weighting, logit adjustment, and class-pair confusion penalties to mitigate misclassifications.',
        'Applied SwAV contrastive learning with progressive weight adjustments and dynamic temperature scaling to enhance feature discrimination and model calibration.',
      ],
      technologies: [
        'PyTorch',
        'SwAV',
        'Librosa',
        'Signal Processing',
        'Medical AI',
      ],
      icon: 'fas fa-heartbeat',
      badgeColor: '#1a73e8',
    },
    {
      title: 'Real-time Hand Gesture Recognition System',
      organization: 'Technical University of Munich, Germany',
      role: 'Research Assistant',
      date: 'May 2024',
      description: [
        'Engineered a real-time hand gesture recognition system using Mediapipe and TensorFlow, achieving 95% accuracy in controlled environments.',
        'Optimized model inference time to 30ms per frame, enabling seamless integration with AR applications.',
        'Conducted user studies to evaluate the system\'s performance in naturalistic settings, gathering qualitative and quantitative feedback for iterative improvement.',
      ],
      technologies: [
        'TensorFlow',
        'Mediapipe',
        'Python',
        'Machine Learning',
        'Augmented Reality',
      ],
      icon: 'fas fa-hand-paper',
      badgeColor: '#0d47a1',
    },
    {
      title: 'AI-Powered Chatbot for Mental Health Support',
      organization: 'University of Melbourne, Australia',
      role: 'AI Developer',
      date: 'August 2023',
      description: [
        'Developed an AI-powered chatbot using GPT-3.5-turbo to provide 24/7 mental health support, offering resources and coping strategies for users.',
        'Implemented a user-friendly interface with React and Tailwind CSS, ensuring accessibility and engagement.',
        'Collaborated with mental health professionals to validate chatbot responses and improve intervention strategies.',
      ],
      technologies: [
        'OpenAI API',
        'React',
        'Tailwind CSS',
        'JavaScript',
        'Mental Health',
      ],
      icon: 'fas fa-comments',
      badgeColor: '#4285f4',
    },
    {
      title: 'Automated Essay Scoring System',
      organization: 'Stanford University, USA',
      role: 'NLP Intern',
      date: 'December 2023',
      description: [
        'Designed an automated essay scoring system using BERT embeddings and a regression model to predict essay scores with high correlation to human raters.',
        'Developed a web application for students to receive instant feedback on their essays, including score predictions and improvement areas.',
        'Published a research paper on the system\'s effectiveness in the Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing (EMNLP 2025).',
      ],
      technologies: [
        'Python',
        'BERT',
        'Flask',
        'JavaScript',
        'Natural Language Processing',
      ],
      icon: 'fas fa-file-alt',
      badgeColor: '#1a73e8',
    },
  ];

  academicProjects: AcademicProject[] = [
    {
      description:
        'Capstone project for the Master of Machine Learning program, focusing on developing a novel deep learning architecture for image classification.',
      icon: 'fas fa-graduation-cap',
    },
    {
      description:
        'Research project on reinforcement learning algorithms for robotic control, resulting in a publication in the Journal of Machine Learning Research.',
      icon: 'fas fa-robot',
    },
    {
      description:
        'Development of a predictive maintenance system for industrial machines using IoT data and machine learning, reducing downtime by 30%.',
      icon: 'fas fa-cogs',
    },
    {
      description:
        'Creation of an intelligent tutoring system using natural language processing to provide personalized feedback to students.',
      icon: 'fas fa-book-reader',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
  
  // Helper function to generate lighter color for tags
  getLighterColor(hexColor: string): string {
    return hexColor + '20'; // Adding 20 for 12% opacity
  }
  
  // Helper function to get color for academic projects
  getAcademicColor(index: number): string {
    const colors = ['#1a73e8', '#0d47a1', '#4285f4', '#1a73e8'];
    return colors[index % colors.length];
  }
}
