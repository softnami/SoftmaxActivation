var Softmax = require('../softmax');
var assert = require('assert');
var mathjs = require('mathjs');
var sinon = require('sinon');

describe('Softmax', function() {

  var softmax =new Softmax();

  describe('when processing input data and weights.', function() {

    var X = (mathjs.random(mathjs.matrix([50, 1]), 0, 1)),
      W = (mathjs.random(mathjs.matrix([50, 1]), 0, 1));

    it('should successfuly call exp_matrix method.', function(done) {
     var spy = sinon.spy(softmax, "exp_matrix");
     
     softmax.process(X, W).then((data)=>{
      assert.equal((spy.callCount=== X.size()[0]), true);
      spy.restore();
      done();
     });

    });

   it('should successfuly call hypothesis method.', function(done) {
     var spy = sinon.spy(softmax, "hypothesis");
     
     softmax.process(X, W).then((data)=>{
      assert.equal(((spy.callCount=== 1) && (data.length === X.size()[0] && data[0].length === W.size()[0])), true);
      spy.restore();
      done();
     });

    });



  });


});
