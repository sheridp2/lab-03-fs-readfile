'use strict';

const fs = require('fs');
const textArray = ['../data/one.txt', '../data/two.txt', '../data/three.txt'];


module.exports =function() {
  const hexArray = [];

  fs.readFile(textArray[0], (err, data) => {
    if(err) throw err;
    hexArray.push(data.toString('hex', 0, 8));

    fs.readFile(textArray[1], (err, data) => {
      if(err) throw err;
      hexArray.push(data.toString('hex', 0, 8));

      fs.readFile(textArray[2], (err, data) => {
        if(err) throw err;
        hexArray.push(data.toString('hex', 0, 8));
        console.log(hexArray);
      });
    });
  });
};
