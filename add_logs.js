import fs from 'fs/promises';
import path from 'path';


(async function addLogs() {
try {
const logsDir = path.join(process.cwd(), 'Logs');
await fs.mkdir(logsDir, { recursive: true });
// change into Logs dir
process.chdir(logsDir);


const created = [];
for (let i = 1; i <= 10; i++) {
const name = `log${i}.txt`;
const content = `Log file ${i}\nCreated: ${new Date().toISOString()}\n`;
await fs.writeFile(name, content, 'utf8');
console.log('Created', name);
created.push(name);
}
console.log('Created files:', created.join(', '));
} catch (err) {
console.error('Error in add_logs:', err.message);
}
})();