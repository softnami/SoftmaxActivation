# Softmax Activation
### [Author: Hussain Mir Ali]
This package contains code to run the softmax activation function.

## Installation:
```javascript
npm install @softnami/softmax-activation
```

## Sample usage:

```javascript
import {SoftmaxActivation} from '@softnami/softmax-activation';

//SoftmaxActivation.process(<input> 2x1, <weights> 2x4);
SoftmaxActivation.process([2.12, 1.24], [[1.23, 3.3, 3.42, 2.34],[0.23, 1.3, 1.22, 1.34]]).then((data)=>{
    console.log(data);
});
```
## Testing:
* For unit testing, Mocha and Sinon have been used. 
* Run 'npm test', if timeout occurs then increase timeout in test script

## Documentation
*  The documentation is available in the 'out' folder of this project. Open the 'index.html' file under the 'out' folder with Crhome or Firefox.
*  To generate the documentation install yuidocjs globally then run 'yuidoc .' command in the main directory of this project.

## 💡 Practice Daily Coding 
* Practice coding questions from top companies daily, visit [softnami.com/dailycoding](https://www.softnami.com/dailycoding/signup.html?ref=npm).