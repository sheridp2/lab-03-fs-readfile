'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const textArray = ['./data/one.txt', './data/two.txt', './data/three.txt'];
const hexArray = [];
const testData = ['6f6d6d6f646f2063','4865726520617265','4c6f72656d206970'];

describe('fs-module', function(){
  describe('#readFile', function(){
    it('should produce an array', done=>{
      fs.readFile(textArray[0], (err, data) => {
        if(err) throw err;
        hexArray.push(data.toString('hex', 0, 8));

        fs.readFile(textArray[1], (err, data) => {
          if(err) throw err;
          hexArray.push(data.toString('hex', 0, 8));

          fs.readFile(textArray[2], (err, data) => {
            if(err) throw err;
            hexArray.push(data.toString('hex', 0, 8));

            expect(hexArray[0]).to.equal(testData[0]);
            expect(hexArray[1]).to.equal(testData[1]);
            expect(hexArray[2]).to.equal(testData[2]);

            done();
          });
        });
      });
    });
  });
});
