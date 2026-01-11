document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile menu toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');
  
  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', () => {
      mainNav.classList.toggle('show');
      hamburgerBtn.innerHTML = mainNav.classList.contains('show') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('show');
        hamburgerBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Add header shadow on scroll
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
      } else {
        header.style.boxShadow = 'none';
      }
    }
  });
  
  // Simple animation for skill bars when they come into view
  const observerOptions = {
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const skillBars = entry.target.querySelectorAll('.skill-progress-bar');
        skillBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => {
            bar.style.width = width;
          }, 100);
        });
      }
    });
  }, observerOptions);
  
  // Observe the about section for skill bar animations
  const aboutSection = document.getElementById('about');
  if (aboutSection) {
    observer.observe(aboutSection);
  }
  
  // Add hover effect to project cards
  const projectCards = document.querySelectorAll('.project-card, .certificate-card, .achievement-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
});


