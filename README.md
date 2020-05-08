# Network Keyboard 

## About

* [reddit thread](https://www.reddit.com/r/badUIbattles/comments/gf9sk3/using_http_requests_to_different_ascii_encoded_in/?utm_source=share&utm_medium=web2x)
* Switched it to use ports. (only ports, not ports __and__ ip)


* Type on a web page via req to different ports of the same host.  
* Only using node.
* There is a random maping of ports to ascii codes for lower case chars.
* There is a single buffer. All clients write to the same buffer, and every read will remove the latest entry from the buffer. Chaos.

## Install and run

```
$ git clone https://github.com/aBozowski/networkKeyboard
$ cd networkKeyboard
$ npm install
$ npm start
```

* Running at ```127.0.0.1:8080``` or ```127.0.0.1:$PORT```
* Check the console for the port mappings
* Make requests to 127.0.0.1:PORT_MAPPED_TO_CHAR and they'll show up on the page.

## To Do
* Render the port mapping on the index page for the user
* Replace polling with websockets, replace single buffer
  * or maintain a TTL buffer for all clients
    * bad
