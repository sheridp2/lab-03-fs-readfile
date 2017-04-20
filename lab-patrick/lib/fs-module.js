'use strict';

const fs = require('fs');

fs.readFile(`../data/one.txt`, function(err, data){
  if(err) throw err;
  // console.log(data);
  let oneData = data.toString('hex', 0, 8);
  console.log(oneData);
});

fs.readFile(`../data/two.txt`, function(err, data){
  if(err) throw err;
  // console.log(data);
  let oneData = data.toString('hex', 0, 8);
  console.log(oneData);
});

fs.readFile(`../data/three.txt`, function(err, data){
  if(err) throw err;
  // console.log(data);
  let oneData = data.toString('hex', 0, 8);
  console.log(oneData);
});
