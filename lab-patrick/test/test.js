'use strict';

const expect = require('chai').expect;
const fs = require('fs');

describe('fs-module', function(){
  describe('#readFile', function(){
    it('should read a file and produce the first 8 bytes in hex', function(){
      fs.readFile(`../data/one.txt`, function(err, data){
        if(err) throw err;
        let oneData = data.toString('hex', 0, 8);
        console.log('one', oneData);

        fs.readFile(`../data/two.txt`, function(err, data){
          if(err) throw err;
          let twoData = data.toString('hex', 0, 8);
          console.log('two', twoData);

          fs.readFile(`../data/three.txt`, function(err, data){
            if(err) throw err;
            let threeData = data.toString('hex', 0, 8);
            console.log('three', threeData);
          });
        });
      });
    });
  });
});
