// 背景效果JavaScript文件

// 初始化动态背景
function initDynamicBackground() {
    // 创建Canvas背景
    createCanvasBackground();
    
    // 初始化浮动元素
    initFloatingElements();
    
    // 初始化交互效果
    initInteractionEffects();
    
    // 初始化主题切换监听
    initThemeListener();
}

// 创建Canvas背景
function createCanvasBackground() {
    const canvas = document.createElement('canvas');
    canvas.id = 'dynamic-bg';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    // 粒子数组
    let particles = [];
    const particleCount = 100;
    
    // 粒子类
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = getRandomColor();
            this.opacity = Math.random() * 0.5 + 0.2;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // 边界检查
            if (this.x > width) this.x = 0;
            if (this.x < 0) this.x = width;
            if (this.y > height) this.y = 0;
            if (this.y < 0) this.y = height;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // 获取随机颜色
    function getRandomColor() {
        const colors = [
            '#4361ee', '#3a0ca3', '#4cc9f0', 
            '#4ade80', '#fbbf24', '#f87171'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // 初始化粒子
    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }
    
    // 绘制连接线
    function drawConnections() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = particles[i].color;
                    ctx.globalAlpha = 0.1 * (1 - distance / 100);
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    // 动画循环
    function animate() {
        ctx.clearRect(0, 0, width, height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        drawConnections();
        requestAnimationFrame(animate);
    }
    
    // 窗口大小调整
    function handleResize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    }
    
    // 鼠标交互
    function handleMouseMove(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        particles.forEach(particle => {
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
                particle.x -= dx * 0.02;
                particle.y -= dy * 0.02;
            }
        });
    }
    
    // 初始化
    initParticles();
    animate();
    
    // 事件监听
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);
}

// 初始化浮动元素
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.floating-element');
    
    floatingElements.forEach(element => {
        // 随机动画延迟和持续时间
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 10;
        
        element.style.animationDelay = `${delay}s`;
        element.style.animationDuration = `${duration}s`;
    });
}

// 初始化交互效果
function initInteractionEffects() {
    // 鼠标悬停波纹效果
    document.addEventListener('mouseover', function(e) {
        const target = e.target;
        
        if (target.classList.contains('interactive')) {
            createRipple(target, e);
        }
    });
    
    // 创建波纹
    function createRipple(element, event) {
        const ripple = document.createElement('div');
        ripple.className = 'ripple-effect';
        
        const rect = element.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            top: ${y}px;
            left: ${x}px;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple-animation 0.6s ease;
            pointer-events: none;
        `;
        
        element.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
    
    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// 初始化主题监听
function initThemeListener() {
    // 监听主题变化
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class') {
                updateBackgroundForTheme();
            }
        });
    });
    
    observer.observe(document.body, { attributes: true });
    
    // 初始更新
    updateBackgroundForTheme();
}

// 根据主题更新背景
function updateBackgroundForTheme() {
    const isDark = document.body.classList.contains('dark');
    const gradientBg = document.querySelector('.gradient-background');
    
    if (gradientBg) {
        if (isDark) {
            gradientBg.style.background = 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
            gradientBg.style.opacity = '0.1';
        } else {
            gradientBg.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            gradientBg.style.opacity = '0.05';
        }
    }
}

// 创建星空背景
function createStarfield() {
    const starfield = document.createElement('div');
    starfield.className = 'starfield';
    document.body.appendChild(starfield);
    
    // 创建星星
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // 随机位置和大小
        const size = Math.random() * 3;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.5;
        const duration = 3 + Math.random() * 5;
        const delay = Math.random() * 5;
        
        star.style.cssText = `
            position: absolute;
            left: ${left}%;
            top: ${top}%;
            width: ${size}px;
            height: ${size}px;
            background: white;
            border-radius: 50%;
            opacity: ${opacity};
            animation: twinkle ${duration}s infinite ${delay}s;
        `;
        
        starfield.appendChild(star);
    }
    
    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
        .starfield {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }
        
        @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

// 创建波浪背景
function createWaveBackground() {
    const waveContainer = document.createElement('div');
    waveContainer.className = 'wave-container';
    
    // 创建多层波浪
    for (let i = 0; i < 3; i++) {
        const wave = document.createElement('div');
        wave.className = `wave wave-${i + 1}`;
        
        const amplitude = 50 + i * 20;
        const duration = 20 + i * 5;
        const opacity = 0.05 + i * 0.02;
        const color = i === 0 ? '#4361ee' : i === 1 ? '#3a0ca3' : '#4cc9f0';
        
        wave.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            width: 200%;
            height: ${amplitude}px;
            background: ${color};
            opacity: ${opacity};
            border-radius: 50%;
            animation: wave-animation ${duration}s linear infinite;
        `;
        
        waveContainer.appendChild(wave);
    }
    
    document.body.appendChild(waveContainer);
    
    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
        .wave-container {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 300px;
            pointer-events: none;
            z-index: -1;
            overflow: hidden;
        }
        
        @keyframes wave-animation {
            0% { transform: translateX(0) translateY(0); }
            50% { transform: translateX(-25%) translateY(-20px); }
            100% { transform: translateX(-50%) translateY(0); }
        }
        
        .wave-2 { animation-delay: -5s; }
        .wave-3 { animation-delay: -10s; }
    `;
    document.head.appendChild(style);
}

// 创建网格背景
function createGridBackground() {
    const grid = document.createElement('div');
    grid.className = 'grid-background';
    
    // 创建网格线
    const gridSize = 50;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const cols = Math.ceil(width / gridSize);
    const rows = Math.ceil(height / gridSize);
    
    // 创建垂直线
    for (let i = 0; i <= cols; i++) {
        const line = document.createElement('div');
        line.className = 'grid-line vertical';
        line.style.left = `${i * gridSize}px`;
        grid.appendChild(line);
    }
    
    // 创建水平线
    for (let i = 0; i <= rows; i++) {
        const line = document.createElement('div');
        line.className = 'grid-line horizontal';
        line.style.top = `${i * gridSize}px`;
        grid.appendChild(line);
    }
    
    // 创建交叉点
    for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
            const dot = document.createElement('div');
            dot.className = 'grid-dot';
            dot.style.left = `${i * gridSize}px`;
            dot.style.top = `${j * gridSize}px`;
            grid.appendChild(dot);
        }
    }
    
    document.body.appendChild(grid);
    
    // 添加CSS样式
    const style = document.createElement('style');
    style.textContent = `
        .grid-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
            opacity: 0.05;
        }
        
        .grid-line {
            position: absolute;
            background: currentColor;
        }
        
        .grid-line.vertical {
            width: 1px;
            height: 100%;
        }
        
        .grid-line.horizontal {
            width: 100%;
            height: 1px;
        }
        
        .grid-dot {
            position: absolute;
            width: 4px;
            height: 4px;
            background: currentColor;
            border-radius: 50%;
            transform: translate(-50%, -50%);
        }
    `;
    document.head.appendChild(style);
}

// 创建光晕效果
function createGlowEffects() {
    const glowContainer = document.createElement('div');
    glowContainer.className = 'glow-effects';
    
    // 创建多个光晕
    const positions = [
        { left: '10%', top: '20%' },
        { left: '80%', top: '30%' },
        { left: '30%', top: '70%' },
        { left: '70%', top: '80%' }
    ];
    
    positions.forEach((pos, i) => {
        const glow = document.createElement('div');
        glow.className = `glow glow-${i + 1}`;
        
        const size = 300 + i * 100;
        const duration = 15 + i * 5;
        const color = i % 2 === 0 ? '#4361ee' : '#4cc9f0';
        
        glow.style.cssText = `
            position: absolute;
            left: ${pos.left};
            top: ${pos.top};
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, ${color} 0%, transparent 70%);
            opacity: 0.1;
            filter: blur(60px);
            animation: glow-move ${duration}s infinite alternate ease-in-out;
            transform: translate(-50%, -50%);
        `;
        
        glowContainer.appendChild(glow);
    });
    
    document.body.appendChild(glowContainer);
    
    // 添加CSS动画
    const style = document.createElement('style');
    style.textContent = `
        @keyframes glow-move {
            0% { transform: translate(-50%, -50%) scale(1); }
            100% { transform: translate(-50%, -50%) scale(1.2); }
        }
    `;
    document.head.appendChild(style);
}

// 初始化所有背景效果
document.addEventListener('DOMContentLoaded', function() {
    initDynamicBackground();
    
    // 根据用户偏好添加额外的背景效果
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        createStarfield();
        createWaveBackground();
        createGlowEffects();
        
        // 只有在大屏幕上显示网格背景
        if (window.innerWidth > 768) {
            createGridBackground();
        }
    }
    
    // 性能优化：在页面失去焦点时暂停动画
    document.addEventListener('visibilitychange', function() {
        const animations = document.querySelectorAll('.wave, .star, .glow, .shape');
        
        if (document.hidden) {
            animations.forEach(el => {
                el.style.animationPlayState = 'paused';
            });
        } else {
            animations.forEach(el => {
                el.style.animationPlayState = 'running';
            });
        }
    });
});

// 导出函数供其他模块使用
window.BackgroundEffects = {
    init: initDynamicBackground,
    createStarfield,
    createWaveBackground,
    createGridBackground,
    createGlowEffects
};
