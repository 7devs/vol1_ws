$ ssh-keygen -t rsa -b 4096 -C "exmaple@abc.com"  

$ cat ~/.ssh/id_rsa.pub
##copy the text into the github.com

##copy .git url "use ssh" from github.com
$ git remote set-url origin   git@github.com:7devs/vol1_ws.git


$ git pull
