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

//SoftmaxActivation.process(<input> 4x1, <weights> 1x4);
SoftmaxActivation.process([[2.12], [1.24], [0.12], [3.81]], [[1.23, 3.3, 3.42, 2.34]]).then((data)=>{
    console.log(data);
});
```
## Testing:
* For unit testing, Mocha and Sinon have been used. 
* Run 'npm test', if timeout occurs then increase timeout in test script

## Documentation
*  The documentation is available in the 'out' folder of this project. Open the 'index.html' file under the 'out' folder with Crhome or Firefox.
*  To generate the documentation install yuidocjs globally then run 'yuidoc .' command in the main directory of this project.

## Theory

* You can learn more about softmax activation and why it is used at [https://github.com/Kulbear](https://github.com/Kulbear/deep-learning-nano-foundation/wiki/ReLU-and-Softmax-Activation-Functions).

## 💡 Practice Daily Coding 
* Practice coding questions from top companies daily, visit [softnami.com/dailycoding](https://www.softnami.com/dailycoding/signup.html?ref=npm).