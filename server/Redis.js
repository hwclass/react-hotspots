/**
* @author hwclass
* @filename redis.js
*/

const redis = require('redis');

const Redis = (() => {

  connect = (port, host) => {
    return redis.createClient(port, host);
  };

  setKey = (client, key, val) => {
    client.set(key, val, redis.print);
  }

  getKey = (client, key, callback) => {
    client.get(key, (err, reply) => {
      callback(reply);
    });
  }

  return {
    connect : connect,
    setKey : setKey,
    getKey : getKey 
  }

})();

module.exports = Redis;