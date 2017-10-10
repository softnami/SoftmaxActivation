"use strict";

let window_object = (function(g){
      return g;
  }(this));

/**
* This class contains the logic to run the softmax algorightm.
*
* @class Softmax
* @constructor
*/
class Softmax {

  /**
   * This method serves as the constructor for the Softmax class.
   * @method constructor
   */
  constructor() {
    if(Object.keys(window_object).length === 0){
        this.MathJS = require('mathjs');
    }
    else{
        this.MathJS = math;
    }
    this.X = {};
    this.Y = {};
  }

  /**
   * This method serves as the logic for generating the natural exponent matrix in softmax.
   *
   * @method exp_matrix
   * @param {matrix} _W The matrix to be used as the weights for the exp_matrix.
   * @param {matrix} _X The matrix to be used as the input data for the exp_matrix.
   * @return {matrix} Returns the exp_term matrix.
   */
  exp_matrix(_W, _X) {

    let W = (typeof(_W) === "number") ? this.MathJS.matrix(
      _W
    ) : this.W;
    let scope = {
        x: _X,
        W: (W),
        max: 0
      },
      exp_term, product;

    product = this.MathJS.eval('(x*W)', scope);
    scope.max = this.MathJS.max(product);
    scope.product = product;
    exp_term = this.MathJS.eval('e.^(product-max)', scope);

    return exp_term;
  }

  /**
   * This method serves as the logic for hypothesis.
   *
   * @method hypothesis
   * @param {matrix} exp_term The matrix to be used as the exp_term.
   * @return {matrix} Returns the hypothesis matrix.
   */
  hypothesis(exp_term) {

    let sum = this.MathJS.mean(exp_term,0);
    let scope = {
      exp_term: exp_term,
      sum: sum,
      ones: {},
      size: sum.size()[0]
    };

        scope.ones = this.MathJS.squeeze(this.MathJS.ones(1, scope.exp_term.size()[1]));
        scope.sum = this.MathJS.eval('sum*ones*size',scope);
        let result = this.MathJS.eval('exp_term.*(1/(sum))', scope);

    return result;
  }


  /**
   * This method serves as the logic for softmax function.
   *
   * @method process
   * @param {matrix} X The matrix to be used as the input data.
   * @param {matrix} W The matrix to be used as the weights.
   * @return {matrix} Returns the softmax matrix.
   */
  process(X, W) {
    let expMatrix;
    this.X = X;
    this.W = W;

    expMatrix= this.exp_matrix(W, X);
    
    let softmaxMatrix = this.hypothesis(expMatrix);

    return new Promise((resolve, reject) => {
      resolve(softmaxMatrix);
    });
  }

}

if(Object.keys(window_object).length === 0){
    module.exports = Softmax;
}else{
    window['Softmax'] = Softmax;
}