// charts.js
// 初始化图表
function initCharts() {
  // 折线图
  const trendCtx = document.getElementById('trendChart').getContext('2d');
  const trendChart = new Chart(trendCtx, {
    type: 'line',
    data: {
      labels: ['2020', '2021', '2022', '2023', '2024'],
      datasets: [
        {
          label: '普通高校',
          data: [65, 68, 70, 72, 74],
          borderColor: '#1a56db',
          backgroundColor: 'rgba(26, 86, 219, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: '职业院校',
          data: [25, 27, 29, 30, 31],
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: '直接就业',
          data: [10, 8, 6, 5, 4],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.1)',
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
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
          }
        }
      }
    }
  });

  // 雷达图
  const radarCtx = document.getElementById('radarChart').getContext('2d');
  const radarChart = new Chart(radarCtx, {
    type: 'radar',
    data: {
      labels: ['就业匹配', '学生满意度', '企业参与', '技能提升', '社会认可'],
      datasets: [
        {
          label: '德国',
          data: [90, 85, 95, 88, 82],
          borderColor: '#1a56db',
          backgroundColor: 'rgba(26, 86, 219, 0.2)'
        },
        {
          label: '芬兰',
          data: [75, 95, 70, 90, 78],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.2)'
        },
        {
          label: '新加坡',
          data: [88, 80, 85, 92, 90],
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245, 158, 11, 0.2)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 100
        }
      }
    }
  });

  // 柱状图
  const barCtx = document.getElementById('barChart').getContext('2d');
  const barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: ['德国', '芬兰', '瑞士', '新加坡', '日本', '美国'],
      datasets: [
        {
          label: '师资培训',
          data: [25, 30, 22, 28, 20, 18],
          backgroundColor: '#1a56db'
        },
        {
          label: '课程开发',
          data: [20, 25, 18, 22, 15, 20],
          backgroundColor: '#f59e0b'
        },
        {
          label: '设施设备',
          data: [30, 25, 35, 30, 40, 35],
          backgroundColor: '#10b981'
        },
        {
          label: '学生支持',
          data: [25, 20, 25, 20, 25, 27],
          backgroundColor: '#8b5cf6'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true,
          ticks: {
            callback: function(value) {
              return value + '%';
            }
          }
        }
      }
    }
  });
}

// 初始化图表
document.addEventListener('DOMContentLoaded', initCharts);
