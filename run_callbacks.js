import { resolvedPromise, rejectedPromise } from './callbacks.js';


(async function run() {
// Call resolvedPromise and log
resolvedPromise()
.then(msg => console.log('resolvedPromise ->', msg))
.catch(err => console.error('resolvedPromise error ->', err.message));


// Call rejectedPromise and handle rejection
rejectedPromise()
.then(msg => console.log('rejectedPromise ->', msg))
.catch(err => console.error('rejectedPromise error ->', err.message));
})();