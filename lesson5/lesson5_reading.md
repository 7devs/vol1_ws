#Lesson5_reading

##Background of Node.js

###Synchronous I/O
The traditional way to handle input and output is to have a function, such as `readFile`, start reading a file and return only when the file has been fully read. This is called **synchronous I/O** (I/O stands for input/output).

###Asynchronous I/O
An asynchronous interface allows the script to continue running while it does its work and calls a callback function when it’s done. This is the way Node does all its I/O.

Reference:
* [EloquentJavaScript](http://eloquentjavascript.net/20_node.html)


##Uniform Resource Locator
###What's URL?
Uniform Resource Locators were defined in [Request for Comments (RFC)](https://en.wikipedia.org/wiki/Request_for_Comments) 1738 in 1994 by Tim Berners-Lee.

The format combines the pre-existing system of domain names (created in 1985) with file path syntax, where slashes are used to separate directory and file names.

###Syntax
A generic URI is of the form:
```
scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]
```
An optional **query**, separated from the preceding part by a question mark (?), containing a [query string](https://en.wikipedia.org/wiki/Query_string) of non-hierarchical data. Its syntax is not well defined, but by convention is most often a sequence of attribute–value pairs separated by a delimiter.  
**Query delimiter**:Ampersand `&` and Ampersand `;`
Example:  
`key1=value1&key2=value2`  
`key1=value1;key2=value2`  

##`Query` and `Body`


##HTTP
 Node.js's **HTTP API** is very low-level. It deals with stream handling and message parsing only. It parses a message into headers and body but it does not parse the actual headers or the body.   
 HTTP message headers are represented by an object like this:
```
{ 'content-length': '123',
  'content-type': 'text/plain',
  'connection': 'keep-alive',
  'host': 'mysite.com',
  'accept': '*/*' }
```
the previous message header object might have a rawHeaders list like the following:
```
[ 'ConTent-Length', '123456',
 'content-LENGTH', '123',
 'content-type', 'text/plain',
 'CONNECTION', 'keep-alive',
 'Host', 'mysite.com',
 'accepT', '*/*' ]
 ```
* **Method, URL and Headers**
>[**Anatomy of an HTTP Transaction**](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/) 

When handling a request, the first thing you'll probably want to do is look at the method and URL.
```
var method = request.method;
var url = request.url;
```
The `method` here will always be a normal HTTP method/verb. The `url` is the full URL **without the server, protocol or port**.
