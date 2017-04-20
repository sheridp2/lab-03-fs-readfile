'use strict';

const expect = require('chai').expect;
const fs = require('fs');


describe('fs-module', function(){
  describe('#readFile', function(){
    it('should check that the text files display in order', function(){

      let hexArray = [];
      const textArray = ['../data/one.txt', '../data/two.txt', '../data/three.txt'];
      for (var i = 0; i < textArray.length; i++ ) {
        fs.readFile(textArray[i], function(err, data){
          if(err) throw err;
          let dataI = data.toString('hex', 0, 8);
          console.log(dataI);
          hexArray.push(dataI);
        });
        expect(hexArray[0]).to.equal('6f6d6d6f646f2063');
      }
    });
  });
});
