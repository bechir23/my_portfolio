import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class SkillsSectionComponent implements OnInit {
  skillCategories = [
    {
      title: 'Machine Learning & AI',
      icon: 'fas fa-brain',
      color: '#3b82f6',
      skills: [
        'Deep Learning',
        'Computer Vision',
        'Natural Language Processing',
        'PyTorch',
        'TensorFlow',
        'Scikit-learn',
        'Hugging Face',
        'OpenCV',
        'YOLO',
        'Transformers'
      ]
    },
    {
      title: 'Programming & Development',
      icon: 'fas fa-code',
      color: '#10b981',
      skills: [
        'Python',
        'JavaScript',
        'TypeScript',
        'Java',
        'SQL',
        'Angular',
        'React',
        'FastAPI',
        'Flask',
        'Docker'
      ]
    },
    {
      title: 'Data Science & Analytics',
      icon: 'fas fa-chart-line',
      color: '#f59e0b',
      skills: [
        'Data Analysis',
        'Data Visualization',
        'Statistical Modeling',
        'Pandas',
        'NumPy',
        'Matplotlib',
        'Seaborn',
        'Jupyter',
        'Power BI',
        'Tableau'
      ]
    },
    {
      title: 'AI Automation & Tools',
      icon: 'fas fa-robot',
      color: '#8b5cf6',
      skills: [
        'n8n Automation',
        'Zapier',
        'Web Scraping',
        'API Integration',
        'Selenium',
        'Beautiful Soup',
        'Scrapy',
        'Workflow Automation',
        'Process Optimization',
        'Task Automation'
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: 'fas fa-cloud',
      color: '#06b6d4',
      skills: [
        'AWS',
        'Google Cloud',
        'Docker',
        'Git',
        'GitHub Actions',
        'CI/CD',
        'Linux',
        'MongoDB',
        'MySQL',
        'Firebase'
      ]
    },
    {
      title: 'Research & Development',
      icon: 'fas fa-microscope',
      color: '#ef4444',
      skills: [
        'Academic Research',
        'Paper Writing',
        'Experiment Design',
        'Model Optimization',
        'Performance Tuning',
        'Edge Computing',
        'NVIDIA TensorRT',
        'Model Deployment',
        'Quantization',
        'MLOps'
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
