# sony-hotspots
Challengy application example for experimenting responsive hotspots for Sony

###Technical Spec
- [x] [Node.js](www.nodejs.org) / as Javascript hero
- [x] [Babel (ES6)](http://babel.io) / as ES6 dialect
- [x] [Express](http://expressjs.com) / as middleware for server-side and client-side
- [x] [Redis](http://redis.io) / as key-value hulk
- [ ] [Bolt](https://github.com/ecto/bolt) / as common event system
- [x] [Server-Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events) / as events sending from server-side
- [x] [React](https://facebook.github.io/react/) / for client-side view, functionality and state control
- [x] [Webpack](https://webpack.github.io/) / as development bundler
- [ ] [Grunt](http://gruntjs.com/) / as paranoid android 
- [x] [Sass](http://sass-lang.com/) / declarative CSS
- [ ] [Karma](https://karma-runner.github.io/0.13/index.html) / as spectacular tracking the status

<!--<img src="http://oi65.tinypic.com/idy4g9.jpg" style="width: 100%;" border="0">-->

###Setup

####Install
* [Node.js](https://nodejs.org/en/download/)
* Babel : ```npm install babel -g```
* [Redis](http://redis.io/download)
* Grunt : ```npm install grunt-cli -g```
* Node Dependencies : ```npm install```

###Initializing

* Start Redis Server

```javascript
npm run start-redis
```

* Start our Redis watcher

```javascript
npm run start-redis-subscriber
```

* Start our Server instance

```javascript
npm run start-server
```

* Open the browser and hit the following:

```javascript
http://localhost:8080/
```