/**
* @author hwclass
* @filename server.js
*/

const express = require('express'),
      fs = require('fs'),
      app = express(),
      _ = require('lodash'),
      Redis = require('./Redis'),
      sampleData = require('./../data/sample'),
      config = require('./config'),
      port = 3000;

const moduleId = sampleData.moduleId;

//creating a connection over redis instance
redisClient = Redis.connect(config.redis.port, config.redis.host);

//setting the key for the current module specified with moduleId definition
Redis.setKey(redisClient, moduleId, JSON.stringify(sampleData));

//the url endpoint for data set for editorial_hotspots_590359239320250140028
app.get('/module/:id', (req, res) => {
  if (_.isEmpty(req.params.id) || _.isNull(req.params.id) || _.isUndefined(req.params.id)) {
    console.log(err.message);
    res.status(500).send(err);
  } else {
    if (moduleId === req.params.id) {
      Redis.getKey(redisClient, moduleId, (data) => {
        res.writeHead(200, {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'connection': 'keep-alive',
          'Access-Control-Allow-Origin' : '*'
        });
        res.write('id: ' + Math.random(Date.now() * 100) + '\n');
        res.write("data: " + data + '\n\n');
        res.end();
      })
    }
  }
});

app.use((err, req, res, next) => {
  if (err) {
    console.log(err.message);
    res.status(500).send(err);
  }
});

app.listen(port);

console.log('Listening on port ' + port + '...');

