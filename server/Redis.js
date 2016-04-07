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

  getKey = (client, key) => {
    return client.get(key, redis.print);
  }

  return {
    connect : connect,
    setKey : setKey,
    getKey : getKey 
  }

})();

module.exports = Redis;