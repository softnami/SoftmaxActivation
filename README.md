# Softmax
###[Author: Hussain Mir Ali]
Softmax contains to run the softmax algorithm.

##External Libraries Used:
* mathjs License: https://github.com/josdejong/mathjs/blob/master/LICENSE
* mocha License: https://github.com/mochajs/mocha/blob/master/LICENSE
* sinon Licencse: https://github.com/sinonjs/sinon/blob/master/LICENSE
* yuidocjs License: https://github.com/yui/yuidoc/blob/master/LICENSE
* nodeJS License: https://github.com/nodejs/node/blob/master/LICENSE

##Installation:
*  Download the project and unzip it.
*  Copy the 'softmax' folder to your node_modules folder in your project directory.

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
        <script src="softmax/lib/q.js"></script>
        <script src="softmax/lib/math.js"></script>
        <script src="softmax/softmax.js"></script>
         <!--Include the main.js file where you use the algorithm.-->
+        <script src="main.js"></script>
</body>
</html>

*/
```

##Testing:
* For unit testing Mocha and Sinon have been used. 
* On newer computers run the command 'mocha --timeout 50000', the 50000 ms timeout is to give enough time for tests to complete as they might not process before timeout. 
* On older computers run the command 'mocha --timeout 300000', the 300000 ms timeout is to give enough time for tests to complete as they might not process before timeout on older computers. 
* If need be more than 300000 ms should be used to run the tests depending on the processing power of the computer. 


##Documentation
*  The documentation is available in the 'out' folder of this project. Open the 'index.html' file under the 'out' folder with Crhome or Firefox.
*  To generate the documentation run 'yuidoc .' command in the main directory of this project.
