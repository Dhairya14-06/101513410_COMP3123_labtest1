import { lowerCaseWords } from './lowerCaseWords.js';


const examples = [
{ input: ['Hello', 1, 'WORLD', null], desc: 'mix of strings and non-strings' },
{ input: [1, 2, true], desc: 'no strings should reject' },
{ input: 'not-an-array', desc: 'invalid input should reject' }
];


(async function runTests() {
for (const ex of examples) {
try {
const res = await lowerCaseWords(ex.input);
console.log(`PASS — ${ex.desc} ->`, res);
} catch (err) {
console.error(`FAIL — ${ex.desc} ->`, err.message);
}
}
})();