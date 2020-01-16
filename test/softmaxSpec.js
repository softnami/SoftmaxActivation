'use strict';

import {SoftmaxActivation} from '../softmax';

let assert = require('assert');
let mathjs = require('mathjs');
let sinon = require('sinon');

describe('SoftmaxActivation', function() {

  let softmax =new SoftmaxActivation();

  describe('when processing input data and weights.', function() {

    let X = (mathjs.random(mathjs.matrix([50, 3]), 0, 1)),
      W = (mathjs.random(mathjs.matrix([3, 50]), 0, 1));

    it('should successfuly call exp_matrix method.', function(done) {
     let spy = sinon.spy(softmax, "exp_matrix");
     
     softmax.process(X, W).then((data)=>{
      assert.equal((data.size()[0]===X.size()[0] && data.size()[1]===W.size()[1] && spy.callCount===1), true);
      spy.restore();
      done();
     });

    });
  
   it('should successfuly call hypothesis method.', function(done) {
     let spy = sinon.spy(softmax, "hypothesis");
     
     softmax.process(X, W).then((data)=>{
      assert.equal((data.size()[0]===X.size()[0] && data.size()[1]===W.size()[1] && spy.callCount===1), true);
      spy.restore();
      done();
     });

    });

      
   it('should be able to process matrices with 0 values.', function(done) {
     X = (mathjs.random(mathjs.matrix([50, 3]), 0, 0)),
     W = (mathjs.random(mathjs.matrix([3, 50]), 0, 0));
     let flag = false;

     softmax.process(X, W).then((data)=>{
      //check for NaN or infinity
      for(let i =0; i<data._data.length; i++){
        for(let j = 0; j<data._data[0].length; j++){
            if(isNaN(data._data[i][j]) || data._data[i][j]===Number.POSITIVE_INFINITY  || data._data[i][j]===Number.NEGATIVE_INFINITY){
                flag = true;
                break;
            }
        }
      }

      assert.equal((data.size()[0]===X.size()[0] && data.size()[1]===W.size()[1] && !flag), true);
      done();
     });

    });

   
    it('should be able to process multi dimensional arrays.', function(done) {

      X = []; 
      for (let i = 0; i < 50; i++) {
        X[i] = []; 
        for (let j = 0; j < 3; j++) {
          X[i][j] = ((Math.random() * 5) | 0) + 6;
        }
      }

      W = []; 
      for (let i = 0; i < 3; i++) {
        W[i] = []; 
        for (let j = 0; j < 50; j++) {
          W[i][j] = ((Math.random() * 5) | 0) + 6;
        }
      }
 
      softmax.process(X, W).then((data)=>{
         
       //check for NaN or infinity
       for(let i =0; i<data._data.length; i++){
         for(let j = 0; j<data._data[0].length; j++){
             if(isNaN(data._data[i][j]) || data._data[i][j]===Number.POSITIVE_INFINITY  || data._data[i][j]===Number.NEGATIVE_INFINITY){
                 flag = true;
                 break;
             }
         }
       }
 
       assert.equal((data.size()[0]===X.length && data.size()[1]===W[0].length), true);
       done();
      });
 
     });


   it('should be able to process matrices with very small values.', function(done) {
     X = (mathjs.random(mathjs.matrix([50, 3]), 0, 1)),
     W = (mathjs.random(mathjs.matrix([3, 50]), (Number.MIN_VALUE), (Number.MIN_VALUE)));
     let flag = false;

     softmax.process(X, W).then((data)=>{
        
      //check for NaN or infinity
      for(let i =0; i<data._data.length; i++){
        for(let j = 0; j<data._data[0].length; j++){
            if(isNaN(data._data[i][j]) || data._data[i][j]===Number.POSITIVE_INFINITY  || data._data[i][j]===Number.NEGATIVE_INFINITY){
                flag = true;
                break;
            }
        }
      }

      assert.equal((data.size()[0]===X.size()[0] && data.size()[1]===W.size()[1]), true);
      done();
     });

    });


   it('should be able to process matrices with very large values.', function(done) {
     
      X = (mathjs.random(mathjs.matrix([50, 3]), 0, 1)),
      W = (mathjs.random(mathjs.matrix([3, 50]), mathjs.sqrt(Number.MAX_VALUE-100000), mathjs.sqrt(Number.MAX_VALUE)));  
      let flag = false;

     softmax.process(X, W).then((data)=>{

      //check for NaN or infinity
      for(let i =0; i<data._data.length; i++){
        for(let j = 0; j<data._data[0].length; j++){
            if(isNaN(data._data[i][j]) || data._data[i][j]===Number.POSITIVE_INFINITY  || data._data[i][j]===Number.NEGATIVE_INFINITY){
                flag = true;
                break;
            }
        }
      }

      assert.equal((data.size()[0]===X.size()[0] && data.size()[1]===W.size()[1]), true);
      done();
     });

    });


   it('should be able to process matrices with negative values.', function(done) {     
      X = (mathjs.random(mathjs.matrix([50, 3]), 0, 1)),
      W = (mathjs.random(mathjs.matrix([3, 50]), -50, 0));   
      let flag = false;
     
     softmax.process(X, W).then((data)=>{
      //check for NaN or infinity
      for(let i =0; i<data._data.length; i++){
        for(let j = 0; j<data._data[0].length; j++){
            if(isNaN(data._data[i][j]) || data._data[i][j]===Number.POSITIVE_INFINITY  || data._data[i][j]===Number.NEGATIVE_INFINITY){
                flag = true;
                break;
            }
        }
      }
      assert.equal((data.size()[0]===X.size()[0] && data.size()[1]===W.size()[1]), true);
      done();
     });

    });

    
  });


});
