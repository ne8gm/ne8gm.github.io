// Project data
const projects = [
  {
    title: 'Predictive Healthcare Analytics System',
    image: 'https://pplx-res.cloudinary.com/image/upload/v1754727409/pplx_project_search_images/3f8e19b8b28971eba86f4d5df2a55f76133d20c7.png',
    description: 'Built a comprehensive end-to-end machine learning pipeline for predicting patient outcomes using electronic health records. The system processes and analyzes vast amounts of medical data to provide actionable insights for healthcare professionals.',
    techStack: ['Python', 'TensorFlow', 'Flask', 'Docker', 'AWS', 'PostgreSQL'],
    highlights: [
      'Achieved 94% prediction accuracy using ensemble methods',
      'Real-time predictions with sub-second latency',
      'Cloud deployed on AWS with auto-scaling capabilities',
      'Processed 100,000+ patient records',
      'HIPAA compliant data handling and encryption'
    ],
    challenges: 'Dealing with imbalanced datasets and ensuring model interpretability for medical professionals',
    impact: 'Reduced hospital readmission rates by 18% and improved resource allocation'
  },
  {
    title: 'Computer Vision Quality Control System',
    image: 'https://pplx-res.cloudinary.com/image/upload/v1754682845/pplx_project_search_images/f97c6d9bae45e26615c0913aaac56274136fafbc.png',
    description: 'Developed an AI-powered defect detection system for manufacturing environments using advanced computer vision techniques. The system identifies product defects in real-time on production lines.',
    techStack: ['PyTorch', 'OpenCV', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    highlights: [
      '98% precision in defect detection',
      'Reduced manual inspection time by 75%',
      'Real-time processing at 60 FPS',
      'Deployed across 5 manufacturing facilities',
      'Custom annotation tool for continuous learning'
    ],
    challenges: 'Handling varying lighting conditions and adapting to different product types',
    impact: 'Saved $2M annually in quality control costs and reduced defect rate by 40%'
  },
  {
    title: 'NLP Sentiment Analysis Platform',
    image: 'https://pplx-res.cloudinary.com/image/upload/v1761420393/pplx_project_search_images/3a666e0037d9a15cb32fe84d7cb868458f49e45d.png',
    description: 'Created a multi-lingual sentiment analysis API for social media monitoring using state-of-the-art transformer models. The platform provides real-time insights into brand perception and customer sentiment.',
    techStack: ['BERT', 'Hugging Face', 'Django', 'Redis', 'Docker', 'Kubernetes'],
    highlights: [
      'Supports 12 languages with high accuracy',
      'Processes 10,000+ tweets per minute',
      'RESTful API with comprehensive documentation',
      'Real-time streaming analysis capabilities',
      'Custom entity recognition for brand mentions'
    ],
    challenges: 'Handling code-switching in multilingual content and sarcasm detection',
    impact: 'Enabled proactive customer service response, improving satisfaction scores by 25%'
  },
  {
    title: 'Deep Learning Recommendation Engine',
    image: 'https://pplx-res.cloudinary.com/image/upload/v1754650022/pplx_project_search_images/f4276732e68abb38641a6e2a90c023749f73e9a1.png',
    description: 'Built a personalized recommendation system using collaborative filtering and deep neural networks. The system combines user behavior patterns with content features for highly accurate recommendations.',
    techStack: ['PyTorch', 'pandas', 'NumPy', 'Flask', 'MongoDB', 'Redis'],
    highlights: [
      'Improved CTR by 35% compared to baseline',
      'Handles millions of users and items',
      'Real-time personalization with sub-100ms latency',
      'A/B tested with statistical significance',
      'Hybrid approach combining multiple algorithms'
    ],
    challenges: 'Cold start problem for new users and scalability with growing user base',
    impact: 'Increased user engagement by 45% and revenue per user by 28%'
  },
  {
    title: 'Time Series Forecasting Dashboard',
    image: 'https://pplx-res.cloudinary.com/image/upload/v1754727409/pplx_project_search_images/3f8e19b8b28971eba86f4d5df2a55f76133d20c7.png',
    description: 'Developed an interactive dashboard for financial market prediction using LSTM networks. The system provides real-time forecasts and interactive visualizations for traders and analysts.',
    techStack: ['Python', 'LSTM', 'Plotly Dash', 'SQLite', 'Docker', 'pandas'],
    highlights: [
      '89% forecast accuracy on validation set',
      'Real-time data updates from market APIs',
      'Interactive visualizations with drill-down capabilities',
      'Multi-timeframe predictions (daily, weekly, monthly)',
      'Confidence intervals and uncertainty quantification'
    ],
    challenges: 'Dealing with market volatility and non-stationary time series data',
    impact: 'Helped traders make informed decisions, improving portfolio returns by 15%'
  },
  {
    title: 'MLOps Automation Pipeline',
    image: 'https://pplx-res.cloudinary.com/image/upload/v1754682845/pplx_project_search_images/f97c6d9bae45e26615c0913aaac56274136fafbc.png',
    description: 'Created a comprehensive CI/CD pipeline for ML model deployment and monitoring. The system automates the entire ML lifecycle from training to production deployment.',
    techStack: ['MLflow', 'GitHub Actions', 'Docker', 'Kubernetes', 'Prometheus', 'Grafana'],
    highlights: [
      'Automated model retraining with data drift detection',
      'Model versioning and experiment tracking',
      'Performance monitoring with custom metrics',
      'Automated testing and validation pipelines',
      'Rollback capabilities for failed deployments'
    ],
    challenges: 'Coordinating multiple services and ensuring zero-downtime deployments',
    impact: 'Reduced deployment time from days to hours, improving team productivity by 60%'
  }
];

// Typewriter effect
const typewriterTexts = [
  'AI & Data Scientist',
  'Machine Learning Engineer',
  'Deep Learning Specialist',
  'MLOps Enthusiast'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typewriterDelay = 100;

function typewriter() {
  const typewriterElement = document.getElementById('typewriter');
  const currentText = typewriterTexts[textIndex];
  
  if (!isDeleting) {
    typewriterElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    
    if (charIndex === currentText.length) {
      isDeleting = true;
      typewriterDelay = 2000;
    } else {
      typewriterDelay = 100;
    }
  } else {
    typewriterElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    
    if (charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % typewriterTexts.length;
      typewriterDelay = 500;
    } else {
      typewriterDelay = 50;
    }
  }
  
  setTimeout(typewriter, typewriterDelay);
}

// Scroll progress indicator
function updateScrollProgress() {
  const scrollProgress = document.getElementById('scrollProgress');
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;
  scrollProgress.style.width = scrollPercentage + '%';
}

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
      
      // Animate skill bars when skills section is visible
      if (entry.target.classList.contains('skill-category')) {
        const skillBars = entry.target.querySelectorAll('.skill-progress');
        skillBars.forEach(bar => {
          const progress = bar.getAttribute('data-progress');
          bar.style.setProperty('--progress-width', progress + '%');
          bar.classList.add('animate');
        });
      }
    }
  });
}, observerOptions);

// Observe all elements with animate-on-scroll class
function observeElements() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(el => observer.observe(el));
}

// Mobile navigation toggle
function setupMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href.length <= 1) return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Modal functions
function openModal(projectIndex) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const project = projects[projectIndex];
  
  modalBody.innerHTML = `
    <div class="modal-body">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      
      <h3>Tech Stack</h3>
      <div class="project-tags">
        ${project.techStack.map(tech => `<span class="tag">${tech}</span>`).join('')}
      </div>
      
      <h3>Key Highlights</h3>
      <ul>
        ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
      </ul>
      
      <h3>Challenges</h3>
      <p>${project.challenges}</p>
      
      <h3>Impact</h3>
      <p>${project.impact}</p>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
  const modal = document.getElementById('projectModal');
  if (e.target === modal) {
    closeModal();
  }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Contact form handling
function setupContactForm() {
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission
      const name = document.getElementById('name').value;
      formMessage.textContent = `Thank you, ${name}! Your message has been received. I'll get back to you soon.`;
      formMessage.classList.add('success');
      form.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.style.display = 'none';
        formMessage.classList.remove('success');
      }, 5000);
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Start typewriter effect
  typewriter();
  
  // Setup scroll progress
  window.addEventListener('scroll', updateScrollProgress);
  updateScrollProgress();
  
  // Setup intersection observer
  observeElements();
  
  // Setup mobile navigation
  setupMobileNav();
  
  // Setup smooth scroll
  setupSmoothScroll();
  
  // Setup contact form
  setupContactForm();
});

// Make openModal and closeModal globally accessible
window.openModal = openModal;
window.closeModal = closeModal;