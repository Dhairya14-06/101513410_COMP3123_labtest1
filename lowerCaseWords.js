export function lowerCaseWords(input) {
return new Promise((resolve, reject) => {
if (!Array.isArray(input)) return reject(new TypeError('Input must be an array'));
const lowered = input
.filter(x => typeof x === 'string')
.map(s => s.toLowerCase());
if (lowered.length === 0) return reject(new Error('No string elements found'));
resolve(lowered);
});
}