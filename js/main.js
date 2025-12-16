// main.js
// 主题切换
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
} else {
  document.documentElement.setAttribute('data-theme', 'light');
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// 导航栏高亮
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').substring(1) === current) {
      link.classList.add('active');
    }
  });
});

// 数字计数器动画
const statNumbers = document.querySelectorAll('.stat-number');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const count = target.getAttribute('data-count');
      const increment = count / 100;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current > count) {
          target.innerText = count;
          clearInterval(timer);
        } else {
          target.innerText = Math.floor(current);
        }
      }, 20);

      observer.unobserve(target);
    }
  });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
  observer.observe(stat);
});

// 初始化粒子背景（简化版）
function initParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'absolute';
    particle.style.width = Math.random() * 5 + 'px';
    particle.style.height = particle.style.width;
    particle.style.backgroundColor = 'var(--primary-color)';
    particle.style.borderRadius = '50%';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.opacity = Math.random() * 0.5 + 0.2;
    particlesContainer.appendChild(particle);

    // 简单动画
    animateParticle(particle);
  }
}

function animateParticle(particle) {
  let x = Math.random() * 100;
  let y = Math.random() * 100;
  let dx = (Math.random() - 0.5) * 0.5;
  let dy = (Math.random() - 0.5) * 0.5;

  function move() {
    x += dx;
    y += dy;

    if (x <= 0 || x >= 100) dx = -dx;
    if (y <= 0 || y >= 100) dy = -dy;

    particle.style.left = x + '%';
    particle.style.top = y + '%';

    requestAnimationFrame(move);
  }

  move();
}

// 当页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
});
