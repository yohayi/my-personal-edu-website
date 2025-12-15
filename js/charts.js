// js/charts.js - 图表渲染
let trendChart, radarChart, barChart, comparisonChart1;

function initCharts() {
    // 1. 趋势折线图
    const trendCtx = document.getElementById('trendChart');
    if (trendCtx) {
        trendChart = new Chart(trendCtx, {
            type: 'line',
            data: {
                labels: ['2020', '2021', '2022', '2023', '2024'],
                datasets: [
                    {
                        label: '普通高校',
                        data: [45.2, 46.5, 47.1, 47.8, 48.3],
                        borderColor: '#1a56db',
                        backgroundColor: 'rgba(26, 86, 219, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: '职业院校',
                        data: [38.7, 37.9, 37.2, 36.5, 35.9],
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: '直接就业',
                        data: [10.1, 9.8, 10.2, 10.5, 10.8],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4
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
                        mode: 'index',
                        intersect: false,
                        backgroundColor: 'rgba(31, 41, 55, 0.9)',
                        titleColor: '#fff',
                        bodyColor: '#fff',
                        borderColor: 'rgba(255, 255, 255, 0.1)',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        min: 0,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    }
                },
                animation: {
                    duration: 1000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }
    
    // 2. 雷达图 - 各国教育改革成效对比
    const radarCtx = document.getElementById('radarChart');
    if (radarCtx) {
        radarChart = new Chart(radarCtx, {
            type: 'radar',
            data: {
                labels: ['政策支持', '实施效果', '社会认可', '学生发展', '教师支持', '资源投入'],
                datasets: [
                    {
                        label: '德国',
                        data: [95, 88, 85, 82, 78, 90],
                        borderColor: '#1a56db',
                        backgroundColor: 'rgba(26, 86, 219, 0.2)',
                        borderWidth: 2
                    },
                    {
                        label: '芬兰',
                        data: [90, 92, 88, 95, 90, 85],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.2)',
                        borderWidth: 2
                    },
                    {
                        label: '新加坡',
                        data: [85, 90, 82, 88, 85, 92],
                        borderColor: '#f59e0b',
                        backgroundColor: 'rgba(245, 158, 11, 0.2)',
                        borderWidth: 2
                    },
                    {
                        label: '上海',
                        data: [80, 85, 78, 82, 80, 88],
                        borderColor: '#ef4444',
                        backgroundColor: 'rgba(239, 68, 68, 0.2)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        angleLines: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        },
                        pointLabels: {
                            font: {
                                size: 12
                            }
                        },
                        ticks: {
                            display: false,
                            maxTicksLimit: 5
                        },
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    }
                }
            }
        });
    }
    
    // 3. 堆叠柱状图 - 教育投入分配
    const barCtx = document.getElementById('barChart');
    if (barCtx) {
        barChart = new Chart(barCtx, {
            type: 'bar',
            data: {
                labels: ['德国', '芬兰', '新加坡', '日本', '上海', '全国平均'],
                datasets: [
                    {
                        label: '基础教育',
                        data: [42, 45, 48, 40, 50, 38],
                        backgroundColor: '#1a56db',
                        stack: 'Stack 0'
                    },
                    {
                        label: '职业教育',
                        data: [28, 25, 22, 30, 20, 18],
                        backgroundColor: '#f59e0b',
                        stack: 'Stack 0'
                    },
                    {
                        label: '高等教育',
                        data: [22, 20, 18, 20, 18, 15],
                        backgroundColor: '#10b981',
                        stack: 'Stack 0'
                    },
                    {
                        label: '教师发展',
                        data: [8, 10, 12, 10, 12, 9],
                        backgroundColor: '#7c3aed',
                        stack: 'Stack 0'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                        callbacks: {
                            label: function(context) {
                                return `${context.dataset.label}: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        stacked: true,
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        stacked: true,
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    }
                }
            }
        });
    }
    
    // 4. 比较分析图表
    const comparisonCtx = document.getElementById('comparisonChart1');
    if (comparisonCtx) {
        comparisonChart1 = new Chart(comparisonCtx, {
            type: 'bar',
            data: {
                labels: ['企业满意度', '青年就业率', '毕业生留用', '社会认可度', '长期收入'],
                datasets: [
                    {
                        label: '双元制模式',
                        data: [87, 94.8, 65, 78, 85],
                        backgroundColor: '#1a56db',
                        borderColor: '#0e4aa3',
                        borderWidth: 1
                    },
                    {
                        label: '传统模式',
                        data: [65, 88.2, 42, 55, 72],
                        backgroundColor: 'rgba(107, 114, 128, 0.5)',
                        borderColor: '#6b7280',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                    datalabels: {
                        color: '#1f2937',
                        anchor: 'end',
                        align: 'top',
                        formatter: function(value) {
                            return value + '%';
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }
}

// 更新图表数据的函数（根据地区筛选）
function updateChartData(region, indicator) {
    // 根据地区和指标更新图表数据
    console.log(`更新图表数据: ${region}, ${indicator}`);
    
    // 这里可以根据筛选条件动态更新图表数据
    // 例如从服务器获取新数据并更新图表
}

// 页面加载完成后初始化图表
document.addEventListener('DOMContentLoaded', function() {
    initCharts();
});

// 窗口大小改变时重新调整图表
window.addEventListener('resize', function() {
    if (trendChart) trendChart.resize();
    if (radarChart) radarChart.resize();
    if (barChart) barChart.resize();
    if (comparisonChart1) comparisonChart1.resize();
});
