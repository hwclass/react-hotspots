/**
* @author hwclass
* @filename server.js
*/

const express = require('express'),
      fs = require('fs'),
      app = express(),
      Redis = require('./Redis'),
      sampleData = require('./../data/sample'),
      config = require('./config'),
      port = 3000,
      moduleId = 'editorial_hotspots_590359239320250140028';

//creating a connection over redis instance
redisClient = Redis.connect(config.redis.port, config.redis.host);

//setting the key for the current module specified with moduleId definition
Redis.setKey(redisClient, moduleId, JSON.stringify(sampleData));

//printing the current data set for editorial_hotspots_590359239320250140028
console.dir(JSON.parse(Redis.getKey(redisClient, moduleId)));

app.get('/module/:id', (req, res) => {
  res.send(sampleData);
  res.end();
});

app.use((err, req, res, next) => {
  if (err) {
    console.log(err.message);
    res.status(500).send(err);
  }
});

app.listen(port);

console.log('Listening on port ' + port + '...');

