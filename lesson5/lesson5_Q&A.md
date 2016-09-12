#Lesson5
##Q001:在 git push时，如何做到不上传 `node_modules` 目录？

##A001:创建 `.gitignore` 文件，将不上传的文件夹或文件放入列表中。可以创建全局和单个列表

见 `[Ignoring files]` (https://help.github.com/articles/ignoring-files/)

**已上传的文件，用下面命令，停止追踪指定文件，但该文件会保留在工作区**
命令`$ git rm --cached [file]`
在 commit 项目前，设置好 `.gitignore` , 再次push后，就可以删除远程仓库的不需要文件。

**全局列表：**

```
git config --global core.excludesfile ~/.gitignore_global
```
