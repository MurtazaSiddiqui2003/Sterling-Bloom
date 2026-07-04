  const revealEls = document.querySelectorAll('.reveal, .henna-divider');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => observer.observe(el));