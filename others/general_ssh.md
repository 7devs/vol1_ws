$ ssh-keygen -t rsa -b 4096 -C "fantasy.ws@gmail.com"
$ cat ~/.ssh/id_rsa.pub
##copy the text into the github.com

##copy .git url "use ssh" from github.com
$ git remote set-url origin git@github.com:7devs/vol1_ws.git


$ git pull
The authenticity of host 'github.com (192.30.253.112)' can't be established.
RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
Are you sure you want to continue connecting (yes/no)? y
Please type 'yes' or 'no': yes
Warning: Permanently added 'github.com,192.30.253.112' (RSA) to the list of known hosts.
Already up-to-date.

