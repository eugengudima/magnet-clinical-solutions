/* ===== NAVBAR SCROLL ===== */
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* ===== MOBILE MENU ===== */
const hamburger = document.querySelector('.navbar-hamburger');
const navLinks = document.querySelector('.navbar-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(255,255,255,0.97)';
    navLinks.style.padding = '1.5rem 2rem';
    navLinks.style.boxShadow = '0 8px 32px rgba(27,42,107,0.1)';
  });
}

/* ===== ACTIVE NAV LINK ===== */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navbar-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* ===== GSAP ANIMATIONS ===== */
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* Staggered fade-up for cards */
  gsap.utils.toArray('.service-card, .testimonial-card, .team-card, .gallery-item').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 0,
      y: 40,
      duration: 0.7,
      delay: (i % 4) * 0.1,
      ease: 'power3.out'
    });
  });

  /* Generic fade-up */
  gsap.utils.toArray('.fade-up').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out'
    });
  });

  /* Fade-in */
  gsap.utils.toArray('.fade-in').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 1,
      duration: 0.9,
      ease: 'power2.out'
    });
  });

  /* Slide left */
  gsap.utils.toArray('.slide-left').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: 'power3.out'
    });
  });

  /* Slide right */
  gsap.utils.toArray('.slide-right').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: 'power3.out'
    });
  });

  /* Scale in */
  gsap.utils.toArray('.scale-in').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: 'back.out(1.4)'
    });
  });

  /* Hero entrance */
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from('.hero-badge',    { opacity: 0, y: 20, duration: 0.6 })
      .from('.hero h1',       { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
      .from('.hero-subtitle', { opacity: 0, y: 20, duration: 0.7 }, '-=0.5')
      .from('.hero-actions',  { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
      .from('.hero-stats',    { opacity: 0, y: 15, duration: 0.6 }, '-=0.3');
  }

  /* Floating card parallax */
  const floatingCard = document.querySelector('.why-us-card-floating');
  if (floatingCard) {
    gsap.to(floatingCard, {
      scrollTrigger: {
        trigger: '.why-us',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      y: -30
    });
  }

  /* Counter animation for stats */
  document.querySelectorAll('.stat-number[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    gsap.from({ val: 0 }, {
      scrollTrigger: { trigger: el, start: 'top 90%' },
      val: target,
      duration: 1.8,
      ease: 'power2.out',
      onUpdate: function() {
        el.textContent = Math.round(this.targets()[0].val) + suffix;
      }
    });
  });

  /* About pills stagger */
  gsap.utils.toArray('.about-pill').forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 88%' },
      opacity: 0,
      x: 30,
      duration: 0.6,
      delay: i * 0.12,
      ease: 'power3.out'
    });
  });

  /* Service detail alternating entrance */
  document.querySelectorAll('.service-detail-inner').forEach((el, i) => {
    const visual = el.querySelector('.service-detail-visual');
    const content = el.querySelector('.service-detail-content');
    const dir = i % 2 === 0 ? -1 : 1;
    if (visual) gsap.from(visual, { scrollTrigger: { trigger: el, start: 'top 80%' }, opacity: 0, x: dir * 50, duration: 0.9, ease: 'power3.out' });
    if (content) gsap.from(content, { scrollTrigger: { trigger: el, start: 'top 80%' }, opacity: 0, x: dir * -50, duration: 0.9, ease: 'power3.out', delay: 0.1 });
  });
});

/* ===== CONTACT FORM ===== */
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type=submit]');
    const orig = btn.textContent;
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    btn.style.background = '#2d8a4e';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = orig;
      btn.disabled = false;
      btn.style.background = '';
      btn.style.color = '';
      contactForm.reset();
    }, 3500);
  });
}
