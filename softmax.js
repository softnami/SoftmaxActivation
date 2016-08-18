"use strict";


class Softmax {

  /**
   * This method serves as the constructor for the Softmax class.
   * @method constructor
   */
  constructor() {
    this.MathJS = require('mathjs');
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

    let W = (typeof(_W) === "number") ? this.MathJS.matrix([
      [_W]
    ]) : this.W;
    let scope = {
        x: _X[0],
        W_transpose: this.MathJS.transpose(W)
      },
      exp_term;

    exp_term = this.MathJS.eval('e.^(W_transpose.*x)', scope);

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
    let sum = this.MathJS.sum(exp_term);
    let scope = {
      exp_term: exp_term,
      sum: sum
    };
    let result = this.MathJS.eval('exp_term.*(1/sum)', scope);

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
    let expMatrix = [];
    this.X = X;
    this.W = W;

    for (let i = 0; i < X.size()[0]; i++) {
      expMatrix[i] = this.exp_matrix(W, X._data[i])._data[0];
    }

    let softmaxMatrix = this.hypothesis(expMatrix);

    return new Promise((resolve, reject) => {
      resolve(softmaxMatrix);
    });
  }

}

module.exports = Softmax;
