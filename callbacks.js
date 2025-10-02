export function delayedSuccess(message, ms = 500) {
return new Promise(resolve => setTimeout(() => resolve(message), ms));
}


export function delayedException(errMessage, ms = 500) {
return new Promise((_, reject) => setTimeout(() => reject(new Error(errMessage)), ms));
}


export function resolvedPromise() {
return delayedSuccess('resolved: success message after 500ms', 500);
}


export function rejectedPromise() {
return delayedException('rejected: error message after 500ms', 500);
}