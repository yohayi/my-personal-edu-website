// 动画JavaScript文件

// 页面加载动画
function initPageAnimations() {
    // 添加页面加载类
    document.body.classList.add('page-loaded');
    
    // 初始化粒子系统
    initParticles();
    
    // 初始化滚动动画
    initScrollAnimations();
    
    // 初始化悬停效果
    initHoverEffects();
    
    // 初始化视差效果
    initParallax();
}

// 粒子系统初始化
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#4361ee'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true
                },
                size: {
                    value: 3,
                    random: true
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#4361ee',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    }
                }
            },
            retina_detect: true
        });
    }
}

// 滚动动画
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // 获取动画配置
                const animation = element.getAttribute('data-animation');
                const delay = element.getAttribute('data-delay') || 0;
                
                // 添加动画类
                setTimeout(() => {
                    element.classList.add(`animate-${animation}`);
                    element.classList.add('animated');
                }, parseInt(delay));
                
                observer.unobserve(element);
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// 悬停效果
function initHoverEffects() {
    // 卡片悬停效果
    const cards = document.querySelectorAll('.glass, .stat-card, .framework-card, .resource-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover-lift');
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover-lift');
            this.style.transform = 'translateY(0)';
        });
    });
    
    // 按钮悬停效果
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-download');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('hover-scale');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('hover-scale');
        });
    });
}

// 视差效果
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-speed') || 0.5;
            const yPos = -(scrollTop * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// 打字机效果
function typewriterEffect(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 进度条动画
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar-fill, .circle-progress-bar');
    
    progressBars.forEach(bar => {
        const targetWidth = bar.getAttribute('data-value') || '100';
        
        // 重置宽度
        if (bar.classList.contains('progress-bar-fill')) {
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.width = targetWidth + '%';
            }, 500);
        }
        
        // 圆形进度条
        if (bar.classList.contains('circle-progress-bar')) {
            const value = parseInt(bar.parentElement.getAttribute('data-value'));
            const radius = bar.getAttribute('r');
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (value / 100) * circumference;
            
            bar.style.strokeDasharray = `${circumference} ${circumference}`;
            bar.style.strokeDashoffset = circumference;
            
            setTimeout(() => {
                bar.style.transition = 'stroke-dashoffset 1.5s ease';
                bar.style.strokeDashoffset = offset;
            }, 500);
        }
    });
}

// 计数器动画
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// 波纹效果
function initRippleEffects() {
    const buttons = document.querySelectorAll('.ripple');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                top: ${y}px;
                left: ${x}px;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// 鼠标跟随效果
function initMouseFollow() {
    const follower = document.createElement('div');
    follower.className = 'mouse-follower';
    document.body.appendChild(follower);
    
    document.addEventListener('mousemove', function(e) {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    });
    
    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        .mouse-follower {
            position: fixed;
            width: 20px;
            height: 20px;
            border: 2px solid var(--primary-color);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: width 0.3s, height 0.3s, border-color 0.3s;
            mix-blend-mode: difference;
        }
    `;
    document.head.appendChild(style);
}

// 页面过渡效果
function pageTransition() {
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);
    
    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        .page-transition {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--gradient-1);
            z-index: 9999;
            transform: scaleY(0);
            transform-origin: top;
            transition: transform 0.6s ease;
        }
        
        .page-transition.active {
            transform: scaleY(1);
        }
    `;
    document.head.appendChild(style);
    
    // 页面加载时
    window.addEventListener('load', function() {
        setTimeout(() => {
            transition.classList.add('active');
            
            setTimeout(() => {
                transition.style.transformOrigin = 'bottom';
                transition.classList.remove('active');
                
                setTimeout(() => {
                    transition.remove();
                }, 600);
            }, 300);
        }, 100);
    });
}

// 滚动进度指示器
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
    
    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: var(--gradient-1);
            z-index: 10000;
            width: 0%;
            transition: width 0.1s ease;
        }
    `;
    document.head.appendChild(style);
}

// 随机背景动画
function initRandomBackground() {
    const shapes = document.querySelectorAll('.shape');
    
    shapes.forEach(shape => {
        // 随机位置
        const left = Math.random() * 90;
        const top = Math.random() * 90;
        
        // 随机大小
        const size = 100 + Math.random() * 200;
        
        // 随机颜色
        const colors = [
            'rgba(67, 97, 238, 0.1)',
            'rgba(58, 12, 163, 0.1)',
            'rgba(76, 201, 240, 0.1)',
            'rgba(74, 222, 128, 0.1)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        shape.style.left = left + '%';
        shape.style.top = top + '%';
        shape.style.width = size + 'px';
        shape.style.height = size + 'px';
        shape.style.background = color;
        
        // 随机动画
        const duration = 20 + Math.random() * 20;
        const delay = Math.random() * 10;
        
        shape.style.animationDuration = duration + 's';
        shape.style.animationDelay = -delay + 's';
    });
}

// 初始化所有动画
document.addEventListener('DOMContentLoaded', function() {
    initPageAnimations();
    animateProgressBars();
    initRippleEffects();
    initRandomBackground();
    pageTransition();
    initScrollProgress();
    
    // 初始化统计数字动画
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(stat.getAttribute('data-count'));
                    animateCounter(stat, target);
                    observer.unobserve(stat);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
});
