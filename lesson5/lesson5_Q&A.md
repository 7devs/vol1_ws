#Lesson5
##Q001:在 git push时，如何做到不上传 `node_modules` 目录？

##A001:停止追踪指定文件，但该文件会保留在工作区
命令`$ git rm --cached [file]`
(待验证)
利用`.gitignore`配置文件
