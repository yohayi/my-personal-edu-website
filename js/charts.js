// 图表JavaScript文件

let trendChart, radarChart, barChart, comparisonChart;

// 初始化所有图表
function initCharts() {
    initTrendChart();
    initRadarChart();
    initBarChart();
    initComparisonChart();
}

// 折线图
function initTrendChart() {
    const ctx = document.getElementById('trendChart').getContext('2d');
    
    trendChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2020', '2021', '2022', '2023', '2024'],
            datasets: [
                {
                    label: '普通高校',
                    data: [65, 68, 70, 72, 74],
                    borderColor: 'rgba(102, 126, 234, 1)',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#667eea',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                },
                {
                    label: '职业院校',
                    data: [25, 27, 29, 30, 31],
                    borderColor: 'rgba(240, 147, 251, 1)',
                    backgroundColor: 'rgba(240, 147, 251, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#f093fb',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                },
                {
                    label: '直接就业',
                    data: [10, 8, 6, 5, 4],
                    borderColor: 'rgba(79, 172, 254, 1)',
                    backgroundColor: 'rgba(79, 172, 254, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointBackgroundColor: '#4facfe',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#ffffff',
                    bodyColor: '#e2e8f0',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    borderWidth: 1,
                    cornerRadius: 8,
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y}%`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            interaction: {
                intersect: false,
                mode: 'index'
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear'
                }
            }
        }
    });
}

// 雷达图
function initRadarChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    
    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['就业匹配', '学生满意度', '企业参与', '技能提升', '社会认可', '创新程度'],
            datasets: [
                {
                    label: '德国',
                    data: [90, 85, 95, 88, 82, 78],
                    backgroundColor: 'rgba(102, 126, 234, 0.2)',
                    borderColor: 'rgba(102, 126, 234, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: '#667eea',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2
                },
                {
                    label: '芬兰',
                    data: [75, 95, 70, 90, 78, 92],
                    backgroundColor: 'rgba(240, 147, 251, 0.2)',
                    borderColor: 'rgba(240, 147, 251, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: '#f093fb',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2
                },
                {
                    label: '新加坡',
                    data: [88, 80, 85, 92, 90, 85],
                    backgroundColor: 'rgba(79, 172, 254, 0.2)',
                    borderColor: 'rgba(79, 172, 254, 1)',
                    borderWidth: 2,
                    pointBackgroundColor: '#4facfe',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                r: {
                    angleLines: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    pointLabels: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        font: {
                            size: 12
                        }
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        backdropColor: 'transparent'
                    },
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });
}

// 柱状图
function initBarChart() {
    const ctx = document.getElementById('barChart').getContext('2d');
    
    barChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['德国', '芬兰', '瑞士', '新加坡', '日本', '美国'],
            datasets: [
                {
                    label: '师资培训',
                    data: [25, 30, 22, 28, 20, 18],
                    backgroundColor: 'rgba(102, 126, 234, 0.8)',
                    borderColor: 'rgba(102, 126, 234, 1)',
                    borderWidth: 1
                },
                {
                    label: '课程开发',
                    data: [20, 25, 18, 22, 15, 20],
                    backgroundColor: 'rgba(240, 147, 251, 0.8)',
                    borderColor: 'rgba(240, 147, 251, 1)',
                    borderWidth: 1
                },
                {
                    label: '设施设备',
                    data: [30, 25, 35, 30, 40, 35],
                    backgroundColor: 'rgba(79, 172, 254, 0.8)',
                    borderColor: 'rgba(79, 172, 254, 1)',
                    borderWidth: 1
                },
                {
                    label: '学生支持',
                    data: [25, 20, 25, 20, 25, 27],
                    backgroundColor: 'rgba(67, 233, 123, 0.8)',
                    borderColor: 'rgba(67, 233, 123, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// 对比图
function initComparisonChart() {
    const ctx = document.getElementById('comparisonChart1').getContext('2d');
    
    comparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['德国', '瑞士', '奥地利', '丹麦', '中国'],
            datasets: [
                {
                    label: '企业满意度',
                    data: [87, 85, 82, 80, 65],
                    backgroundColor: 'rgba(102, 126, 234, 0.8)',
                    borderColor: 'rgba(102, 126, 234, 1)',
                    borderWidth: 1
                },
                {
                    label: '毕业生就业率',
                    data: [94, 92, 90, 88, 78],
                    backgroundColor: 'rgba(240, 147, 251, 0.8)',
                    borderColor: 'rgba(240, 147, 251, 1)',
                    borderWidth: 1
                },
                {
                    label: '技能匹配度',
                    data: [76, 74, 72, 70, 58],
                    backgroundColor: 'rgba(79, 172, 254, 0.8)',
                    borderColor: 'rgba(79, 172, 254, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        padding: 20,
                        font: {
                            size: 12
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)'
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: 'rgba(255, 255, 255, 0.7)',
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            }
        }
    });
}

// 更新图表数据
function updateChartData(chart, newData) {
    chart.data.datasets.forEach((dataset, i) => {
        dataset.data = newData[i];
    });
    chart.update();
}

// 销毁图表
function destroyCharts() {
    if (trendChart) trendChart.destroy();
    if (radarChart) radarChart.destroy();
    if (barChart) barChart.destroy();
    if (comparisonChart) comparisonChart.destroy();
}

// 重新初始化图表
function reinitCharts() {
    destroyCharts();
    initCharts();
}

// 页面加载时初始化图表
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
    
    // 初始化进度条动画
    initProgressBars();
});

// 进度条动画
function initProgressBars() {
    const progressBars = document.querySelectorAll('.circle-progress');
    
    progressBars.forEach(progressBar => {
        const value = parseInt(progressBar.getAttribute('data-value'));
        const progressCircle = progressBar.querySelector('.circle-progress-bar');
        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (value / 100) * circumference;
        
        progressCircle.style.strokeDasharray = `${circumference} ${circumference}`;
        progressCircle.style.strokeDashoffset = circumference;
        
        // 延迟动画开始
        setTimeout(() => {
            progressCircle.style.transition = 'stroke-dashoffset 1.5s ease';
            progressCircle.style.strokeDashoffset = offset;
        }, 500);
    });
}

// 导出图表数据为图片
function exportChartAsImage(chartId, filename) {
    const chartCanvas = document.getElementById(chartId);
    const link = document.createElement('a');
    link.download = filename + '.png';
    link.href = chartCanvas.toDataURL('image/png');
    link.click();
}

// 图表主题切换
function updateChartTheme(isDark) {
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const textColor = isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)';
    
    // 更新所有图表的主题
    const charts = [trendChart, radarChart, barChart, comparisonChart];
    
    charts.forEach(chart => {
        if (chart) {
            chart.options.scales.x.grid.color = gridColor;
            chart.options.scales.x.ticks.color = textColor;
            
            if (chart.options.scales.y) {
                chart.options.scales.y.grid.color = gridColor;
                chart.options.scales.y.ticks.color = textColor;
            }
            
            if (chart.options.scales.r) {
                chart.options.scales.r.angleLines.color = gridColor;
                chart.options.scales.r.grid.color = gridColor;
                chart.options.scales.r.pointLabels.color = textColor;
                chart.options.scales.r.ticks.color = textColor;
            }
            
            chart.update();
        }
    });
}
