import {SoftmaxActivation} from '../softmaxActivation';

onmessage = (e)=>{
    const data = JSON.parse(e.data);
    const method = data.method;
    const Softmax = new SoftmaxActivation();
    let output = Softnamx[method](...data.argumetns);
    output = JSON.stringify(output);
    postMessage(output);
};