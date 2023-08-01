const fs = require('fs').promises;

// Backup of a file
async function createBackup(sourceFilePath, backupFilePath) {
  try {
    await fs.copyFile(sourceFilePath, backupFilePath);
    console.log(`Backup created successfully at '${backupFilePath}'.`);
  } catch (err) {
    console.error(err);
  }
}

// Restore a file from the backup
async function restoreFromBackup(backupFilePath, restoreFilePath) {
  try {
    await fs.copyFile(backupFilePath, restoreFilePath);
    console.log(`File restored from backup to '${restoreFilePath}'.`);
  } catch (err) {
    console.error(err);
  }
}

const sourceFile = 'source.txt';
const backupFile = 'backup.txt';

(async () => {
  try {
    // Backup of the source file
    await createBackup(sourceFile, backupFile);

    // Changes to the source file, write new content
    const content = "This is new content";
    await fs.writeFile('source.txt', content);
    console.log('File written successfully!');

    // Restore the source file from the backup
    const restoredFile = 'restored.txt';
    await restoreFromBackup(backupFile, restoredFile);
  } catch (err) {
    console.error(err);
  }
})();
