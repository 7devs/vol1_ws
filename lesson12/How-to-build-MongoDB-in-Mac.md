# How to build MongoDB in Mac?
First edition: 2016/10/18.

## Install Manually.
### Step1. Download the binaries.
1. Go to `https://www.mongodb.com/download-center`.
2. Dowload the zip file, like `mongodb-osx-ssl-x86_64-3.2.10.tgz`.

### Step2. Extract the file.  
```
$ cd ~/Downloads/
$ ls -lt
$ tar xvf mongodb-osx-ssl-x86_64-3.2.10.tgz
$ ls
$ cd mongodb-osx-ssl-x86_64-3.2.10/bin
$ ls
```
In file list, there are some files:
* `mongo` is the mongo shell.
* `mongod` is the actual server that we want to get running. The server is going to put its data in /data/db by default.

### Step3. Copy the extracted archive to the target directory.
Go into the `~/Downloads/mongodb-osx-ssl-x86_64-3.2.10/bin`.
```
$ cd ~/Downloads/mongodb-osx-ssl-x86_64-3.2.10/bin
$ cp * /usr/local/bin
```

### Step4. Create `/data/db` Directory.
1. Become root.
```
$ sudo bash
$ mkdir -p /data/db
```
1. Set permissions for the data directory.  
The purpose is that we can exit root and write to them from no-root account. Chmod `/data` and `/data/db` Directories 777:
```
$ chmod 777 /data
$ chmod 777 /data/db
$ ls -ld /data
```
After that, we can found permission of `/data` and `/data/db` directory had been changed from `drwxr-xr-x` to `drwxrwxrwx`.  
Now we can exit Root:
```
$ exit
```

### Step5. Run MongoDB
Go into the `/usr/local/bin`. Or if system `PATH` variable includes the location of the mongod binary and we use the default data directory(`/data/db`).
Just enter `mongod` at the prompt:
```
$ mongod
```
Now, server is running. We can see that, by default, the server is listening on port 27017.

### Step6. Being using MongoDB
We can use `which` command to find the path of mongo binaries.
```
$ which mongo
/usr/local/bin/mongo
```
Enter `mongo` to run mongo shell:
```
$ mongo
MongoDB shell version: 3.2.10
connecting to: test
>
```
Let's insert a name to database in shell:
```
> db.names.insert({'name':'Wungsen'});
WriteResult({ "nInserted" : 1 })
```
Let's have a look at the data:
```
> db.names.find()
{ "_id" : ObjectId("58058bea15c16c49f7125e46"), "name" : "Wungsen" }
```
Need help, enter:
```
>help
```
Or, manual is here: https://docs.mongodb.com/v3.0/#getting-started.
On github: https://github.com/mongodb/mongo.

## Install MongoDB with HomeBrew.
We can also install MongoDB via `brew`. See here:  
(https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/#id3)

---
参考文档：  
1. [Mongo Install Manual](https://docs.mongodb.com/v3.0/tutorial/install-mongodb-on-os-x/)  
1. [Training Course](https://university.mongodb.com/Week_1_Introduction/568c46c8d8ca390830d6eb57/vertical_ef14cae65834)
