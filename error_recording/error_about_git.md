# 在公司网络下，git push问题
## terminal 下的错误信息
```
$ git push
ssh: connect to host github.com port 22: Operation timed out
fatal: Could not read from remote repository.
```

## 解决过程：  
1. 更改连接类型
```
$ ssh -T git@github.com
$ git config --global url."https://".insteadOf git://
```
和
```
$ git config --global url."https://github".insteadOf git://github
```
结果无效。


1. 创建config文件，更改端口 `22` 为 端口 `443`
```
edit the file at ~/.ssh/config, and add this section:

Host github.com
   Hostname ssh.github.com   
   Port 443
```
可用。



参考：
1. [更改连接类型-无效](http://stackoverflow.com/questions/15589682/ssh-connect-to-host-github-com-port-22-connection-timed-out)
1. 创建config文件，更改端口 `22` 为 端口 `443` http://stackoverflow.com/questions/4891527/git-protocol-blocked-by-company-how-can-i-get-around-that/10729634#10729634
1. [github官方-Using SSH over the HTTPS port]（https://help.github.com/articles/using-ssh-over-the-https-port/）
