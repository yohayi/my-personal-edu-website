@echo off
set /p cityname=请输入城市名称（如 北京市）:
set /p department=请输入合作单位（如 北京市教育局）:

echo 正在创建 %cityname% 页面...

:: 创建文件夹
if not exist "政府合作案例\%cityname%" mkdir "政府合作案例\%cityname%"
if not exist "政府合作案例\%cityname%\files" mkdir "政府合作案例\%cityname%\files"
if not exist "政府合作案例\%cityname%\download" mkdir "政府合作案例\%cityname%\download"

:: 复制模板并替换内容
copy /y "政府合作案例\template.html" "政府合作案例\%cityname%\index.html"

:: 这里可以使用 sed 或其他工具批量替换内容
echo 请手动修改 "政府合作案例\%cityname%\index.html" 中的以下内容：
echo 1. [城市名] → %cityname%
echo 2. [合作单位名称] → %department%
echo 3. 其他相关信息

echo.
echo 完成！%cityname% 页面已创建。
pause
