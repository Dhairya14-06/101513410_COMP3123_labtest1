import fs from 'fs/promises';
import path from 'path';


(async function removeLogs() {
try {
const logsDir = path.join(process.cwd(), 'Logs');
const stat = await fs.stat(logsDir).catch(() => null);
if (!stat) {
console.log('Logs directory does not exist — nothing to remove.');
return;
}
if (!stat.isDirectory()) {
console.log('Logs path exists but is not a directory:', logsDir);
return;
}


const files = await fs.readdir(logsDir);
if (files.length === 0) {
console.log('Logs directory is empty — removing directory.');
await fs.rmdir(logsDir);
console.log('Removed Logs directory.');
return;
}


console.log('Files to delete:', files.join(', '));
for (const f of files) {
await fs.unlink(path.join(logsDir, f));
console.log('Deleted', f);
}
await fs.rmdir(logsDir);
console.log('Removed Logs directory.');
} catch (err) {
console.error('Error in remove_logs:', err.message);
}
})();