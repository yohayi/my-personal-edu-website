// js/download-bundle.js - 前端自动打包下载功能
// 共享的JavaScript文件，所有子页面都引用这个文件

// 等待页面加载完成
document.addEventListener('DOMContentLoaded', function() {
    console.log('下载打包脚本已加载');
    
    // 自动打包下载功能
    const downloadAllBtn = document.getElementById('download-all-btn');
    const progressContainer = document.getElementById('progress-container');
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    const downloadResult = document.getElementById('download-result');
    
    // 如果页面上有下载按钮，就启用打包功能
    if (downloadAllBtn && typeof JSZip !== 'undefined' && typeof saveAs !== 'undefined') {
        downloadAllBtn.addEventListener('click', async function() {
            // 显示进度条
            if (progressContainer) progressContainer.style.display = 'block';
            if (downloadResult) downloadResult.style.display = 'none';
            if (progressFill) progressFill.style.width = '10%';
            if (progressText) progressText.textContent = '正在收集文件列表...';
            
            try {
                // 收集页面上的所有文件链接
                const fileElements = document.querySelectorAll('a.btn-download[href^="papers/"]');
                const filesToDownload = [];
                
                fileElements.forEach(el => {
                    const href = el.getAttribute('href');
                    const fileName = href.split('/').pop();
                    filesToDownload.push({ 
                        name: fileName, 
                        url: href
                    });
                });
                
                // 去重
                const uniqueFiles = Array.from(new Set(filesToDownload.map(f => f.url)))
                    .map(url => filesToDownload.find(f => f.url === url));
                
                if (uniqueFiles.length === 0) {
                    alert('未找到可下载的文件，请确保文件链接正确。');
                    if (progressContainer) progressContainer.style.display = 'none';
                    return;
                }
                
                if (progressFill) progressFill.style.width = '20%';
                if (progressText) progressText.textContent = `共发现 ${uniqueFiles.length} 个文件，开始打包...`;
                
                // 创建ZIP文件
                const zip = new JSZip();
                let loadedFiles = 0;
                let successfulFiles = 0;
                
                // 依次下载并添加文件到ZIP
                for (const fileInfo of uniqueFiles) {
                    if (progressText) {
                        progressText.textContent = `正在下载: ${fileInfo.name} (${loadedFiles + 1}/${uniqueFiles.length})`;
                    }
                    
                    try {
                        const response = await fetch(fileInfo.url);
                        if (!response.ok) {
                            console.warn(`文件 ${fileInfo.name} 不存在或无法访问，跳过`);
                            loadedFiles++;
                            continue;
                        }
                        
                        const blob = await response.blob();
                        zip.file(fileInfo.name, blob);
                        successfulFiles++;
                        loadedFiles++;
                        
                        // 更新进度
                        const progress = 20 + (loadedFiles / uniqueFiles.length) * 70;
                        if (progressFill) progressFill.style.width = `${progress}%`;
                        
                    } catch (error) {
                        console.error(`下载文件 ${fileInfo.name} 失败:`, error);
                        loadedFiles++;
                        const progress = 20 + (loadedFiles / uniqueFiles.length) * 70;
                        if (progressFill) progressFill.style.width = `${progress}%`;
                    }
                }
                
                if (progressFill) progressFill.style.width = '95%';
                if (progressText) progressText.textContent = `正在生成ZIP文件 (已添加 ${successfulFiles} 个文件)...`;
                
                // 生成ZIP文件
                const zipBlob = await zip.generateAsync({ 
                    type: "blob",
                    compression: "DEFLATE",
                    compressionOptions: { level: 6 }
                });
                
                if (progressFill) progressFill.style.width = '100%';
                if (progressText) progressText.textContent = 'ZIP文件已生成，开始下载...';
                if (downloadResult) downloadResult.style.display = 'block';
                
                // 保存ZIP文件
                const cityName = document.querySelector('.page-header h1')?.textContent || '教育合作项目';
                const zipName = `${cityName.replace(/[\[\]]/g, '').trim()}完整资料.zip`;
                saveAs(zipBlob, zipName);
                
                // 下载完成后重置
                setTimeout(() => {
                    if (progressContainer) progressContainer.style.display = 'none';
                    if (downloadResult) downloadResult.style.display = 'none';
                    if (progressFill) progressFill.style.width = '0%';
                }, 3000);
                
            } catch (error) {
                console.error('打包下载失败:', error);
                if (progressText) progressText.textContent = '打包失败，请使用单个文件下载';
                if (progressFill) {
                    progressFill.style.backgroundColor = '#d32f2f';
                    progressFill.style.width = '100%';
                }
                
                // 备用方案：提示用户手动下载
                setTimeout(() => {
                    alert('自动打包失败，请使用下方的单个文件下载功能。');
                    if (progressContainer) progressContainer.style.display = 'none';
                }, 3000);
            }
        });
    } else if (downloadAllBtn) {
        // 如果JSZip库未加载，显示备用提示
        downloadAllBtn.addEventListener('click', function() {
            alert('打包功能需要加载JavaScript库，请确保网络连接正常。如果问题持续，请使用单个文件下载功能。');
        });
    }
    
    // 简单的页面交互功能
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 文件下载提示
    document.querySelectorAll('a.btn-download').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (!href || href.includes('#') || href.includes('undefined')) {
                e.preventDefault();
                alert('文件正在整理中，即将上线。如需获取文件，请联系项目负责人。');
            }
        });
    });
    
    // 创建打印按钮
    const printBtn = document.createElement('button');
    printBtn.innerHTML = '<i class="fas fa-print"></i> 打印本页';
    printBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #1a5fb4;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 50px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 999;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        font-family: 'Microsoft YaHei', 'Segoe UI', 'PingFang SC', sans-serif;
    `;
    printBtn.addEventListener('click', () => window.print());
    document.body.appendChild(printBtn);
    
    // 创建返回顶部按钮
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 100px;
        background: #2e7d32;
        color: white;
        border: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
    `;
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(backToTopBtn);
    
    // 显示/隐藏返回顶部按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    
    // 初始隐藏返回顶部按钮
    backToTopBtn.style.display = 'none';
});
