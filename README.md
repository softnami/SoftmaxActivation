# Softmax
###[Author: Hussain Mir Ali]
Softmax contains to run the softmax algorithm.

##External Librarbies Used:
* mathjs License: https://github.com/josdejong/mathjs/blob/master/LICENSE
* mocha License: https://github.com/mochajs/mocha/blob/master/LICENSE
* sinon Licencse: https://github.com/sinonjs/sinon/blob/master/LICENSE
* yuidocjs License: https://github.com/yui/yuidoc/blob/master/LICENSE
* nodeJS License: https://github.com/nodejs/node/blob/master/LICENSE

##Installation:
*  Download the project and unzip it.
*  Copy the 'softmax' folder to your node_modules folder in your project directory.
*  Require it using 'require('softmax')' in your main JavaScript file.
*  If you want to reinstall node_modules for this project then run 'sudo npm install -g" in your terminal under the 'softmax' project directory.

##Testing:
* For unit testing Mocha and Sinon have been used. Use 'mocha test' to start the test.


##Documentation
*  The documentation is available in the 'out' folder of this project. Open the 'index.html' file under the 'out' folder with Crhome or Firefox.
*  To generate the documentation run 'yuidoc .' command in the main directory of this project.

###Sample usage:

```javascript

var sft = new window.Softmax();
var result = sft.process(math.floor(math.random(math.matrix([50, 1]), 0, 5)), (math.random(math.matrix([50, 4]), 0, 1)));//sft.process(X, Weights);

console.log(result);

```

```
<!--index.html-->
<!doctype html>
<html>
  <head>
  </head>
  <body >
        <script src="Softmax/lib/q.js"></script>
        <script src="Softmax/lib/math.js"></script>
        <script src="Softmax/softmax.js"></script>
</body>
</html>

*/
```