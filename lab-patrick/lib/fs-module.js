'use strict';

const fs = require('fs');
const textArray = ['../data/one.txt', '../data/two.txt', '../data/three.txt'];

for (var i = 0; i < textArray.length; i++ ) {
  fs.readFile(textArray[i], function(err, data){
    if(err) throw err;
    let dataI = data.toString('hex', 0, 8);
    console.log(dataI);
  })
}
