# Network Keyboard 

## About

* [reddit thread](https://www.reddit.com/r/badUIbattles/comments/gf9sk3/using_http_requests_to_different_ascii_encoded_in/?utm_source=share&utm_medium=web2x)
* Switched it to use ports. (only ports, not ports __and__ ip)


* Type on a web page via req to different ports of the same host.  
* Only using node.
* There is a random maping of ports to ascii codes for lower case chars.

## Install and run

```
$ git clone https://github.com/aBozowski/networkKeyboard
$ cd networkKeyboard
$ npm install
$ npm start
```

* Running at ```127.0.0.1:8080``` or ```127.0.0.1:$PORT```
* Check the console for the port mappings like this
```
Character a listening on port 42993
Character b listening on port 35623
Character c listening on port 42879
Character d listening on port 40363
Character e listening on port 42777
Character f listening on port 40415
Character g listening on port 44353
Character h listening on port 37975
Character i listening on port 45395
Character j listening on port 45691
Character k listening on port 39431
Character l listening on port 38563
Character m listening on port 46311
Character n listening on port 36537
Character o listening on port 46627
Character p listening on port 37105
Character q listening on port 42101
Character r listening on port 45245
Character s listening on port 33485
Character t listening on port 45459
Character u listening on port 37529
Character v listening on port 46475
Character w listening on port 39039
Character x listening on port 34735
Character y listening on port 46187
Character z listening on port 39873
```
* Make ```GET``` requests to ```127.0.0.1:PORT_MAPPED_TO_CHAR``` and the corresponding character will show up on the page.

## To Do
* Render the port mapping on the index page for the user
* Cap the max size of keyboard
* Web sockets?
* Py Client to demo
