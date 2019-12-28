# Softmax Activation
### [Author: Hussain Mir Ali]
Softmax Activation contains code to run the softmax activation function.

## External Libraries Used:
* mathjs License: https://github.com/josdejong/mathjs/blob/master/LICENSE
* mocha License: https://github.com/mochajs/mocha/blob/master/LICENSE
* sinon Licencse: https://github.com/sinonjs/sinon/blob/master/LICENSE
* yuidocjs License: https://github.com/yui/yuidoc/blob/master/LICENSE
* nodeJS License: https://github.com/nodejs/node/blob/master/LICENSE

## Installation:
*  Run 'npm i @softnami/softmax-activation'

### Sample usage:

```javascript
import {SoftmaxActivation} from '@softnami/softmax-activation';
import * as math from 'mathjs';

let result = SoftmaxActivation.process(math.floor(math.random(math.matrix([50, 1]), 0, 5)), (math.random(math.matrix([50, 4]), 0, 1)));//SoftmaxActivation.process(<input>, <weights>);

console.log(result);

```

## Testing:
* For unit testing, Mocha and Sinon have been used. 
* Run 'npm test', if timeout occurs then increase timeout in test script

## Documentation
*  The documentation is available in the 'out' folder of this project. Open the 'index.html' file under the 'out' folder with Crhome or Firefox.
*  To generate the documentation run 'npm run doc' command in the main directory of this project.

## 💡 Practice Daily Coding 
* Practice coding questions from top companies daily, visit [softnami.com/dailycoding](https://www.softnami.com/dailycoding/signup.html?ref=npm)