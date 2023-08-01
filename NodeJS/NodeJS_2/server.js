// /*Setting up a basic HTTP server: Create a Node.js application that listens for incoming HTTP
// requests and responds with a simple message. */

// /*
// //--------------------Task 1-------------------------------
// const http = require('http');

// //create http server
// const server = http.createServer((req,res)=>{
//     //set response http header with status code and content type
//     res.writeHead(200,{'Content-type':'text/plain'});

//     //send message as response
//     res.end("Hello, World! \nThis is Parth Nakum");

// });

// //start server and listen on port 3000
// server.listen(3000, ()=>{
//     console.log('Server is running and listening on port 3000');
// });

// */

// /*
// //----------------Task-X----------------------------
// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// //create http server
// const server = http.createServer((req,res)=>{
//     //parse the query string from the req url
//     const urlParts = new URL(req.url,`http://${req.headers.host}`);
//     const imageName = urlParts.searchParams.get('image');

//     //check for image query paramere
//     if(imageName){
//         //read image file
//         const imagePath = path.join(__dirname,'ironman.png');
//         fs.readFile(imagePath,(err,data)=>{
//             if(err){
//                 res.writeHead(404,{'Content-Type':'text/plain'});
//                 res.end('image not found');
//                 //console.log(err);
//             }
//             else{
//                 res.writeHead(200,{'Content-Type':'image/png'});
//                 res.end(data);
//             }
//         });
//     }
//     else{
//         res.writeHead(400,{'Content-Type':'text/plain'});
//         res.end('Missing image query parameter');
//     }
// });

// //start server & listen on port 3000
// server.listen(3000,()=>{
//     console.log("Server is running and listening at port 3000...")
// });

// */

// /*
// //---------------Task 2---------------------

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     //set respone HTTP header with a status code and content type
//     res.setHeader('Content-Type','text/plain');

//     //handle GET method
//     if(req.method === 'GET'){
//         if(req.url === '/'){
//             res.statusCode = 200;
//             res.end('This is a GET method');
//         }
//         else{
//             res.statusCode = 404;
//             res.end('404 not found');
//         }
//     }

//     //handle POST method
//     if(req.method === 'POST'){
//         if(req.url === '/'){
//             res.statusCode = 201;
//             res.end('This is a POST method');
//         }
//         else{
//             res.statusCode = 404;
//             res.end('404 not found');
//         }
//     }

//     //handle PUT request
//     if(req.method === 'PUT'){
//         if(req.url === '/'){
//             res.statusCode = 200;
//             res.end('This is a PUT method');
//         }
//         else{
//             res.statusCode = 404;
//             res.end('404 not found');
//         }
//     }

//     //handle DELETE method
//     if(req.method === 'DELETE'){
//         if(req.url === '/'){
//             res.statusCode = 200;
//             res.end('This is a DELETE method');
//         }
//         else{
//             res.statusCode = 404;
//             res.end('404 not found');
//         }
//     }

//     //handle unsupported methods
//     if (req.method !== 'GET' && req.method !== 'POST' && req.method !== 'PUT' && req.method !== 'DELETE') {
//         res.statusCode = 400;
//         res.end('400 Bad Request');
//     }


// });

// server.listen(3000,()=>{
//     console.log("Server is running and listening on port 3000");
// });
// */

// //---------------------Task-3-------------------------------
// //Testing Browser, CLI, REST Client

// /*
// //---------------------Task-4--------------------------------

// const fs = require('fs');

// fs.readFile('student_data.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     //split data in array of lines
//     const lines = data.split('\n');

//     //initialize array for matched student
//     const matchStudent = [];

//     //for loop
//     for(const line of lines){
//         //split name and cgpa
//         const[name,cgpa] = line.split(' ');

//         //check for name contain MA or cgpa > 7
//         if(name.includes('MA') && parseFloat(cgpa) > 7){
//             matchStudent.push(name);
//         }
//     }

//     //print student names
//     console.log(matchStudent);
// });

// */

// /*
// //---------------------Task-5----------------------------

// const readline = require('readline');
// const fs = require('fs');

// //readline interface to read input from the user
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Function to prompt user for employee information
// function promptEmployeeInfo() {
//   rl.question('Enter employee name: ', (name) => {
//     rl.question('Enter employee age: ', (age) => {
//       rl.question('Enter employee position: ', (position) => {
//         // Create an employee object with the collected information
//         const employee = {
//           name: name,
//           age: parseInt(age),
//           position: position
//         };

//         // Convert the employee object to JSON format
//         const employeeData = JSON.stringify(employee, null, 2);

//         // Write the employee data to the file 'employee_data.json'
//         fs.writeFile('employee-data.json', employeeData, 'utf8', (err) => {
//           if (err) {
//             console.error('Error writing to file:', err);
//           } else {
//             console.log('Employee data has been written to employee-data.json');
//           }
//           // Close the readline interface
//           rl.close();
//         });
//       });
//     });
//   });
// }

// // Call the function to input employee information
// promptEmployeeInfo();

// */

// /*
// //------------------------Task-6--------------------------

// const fs = require('fs');
// const readline = require('readline');

// function readFile(filePath){
//   return new Promise((resolve,reject)=>{
//     fs.readFile(filePath,'utf8',(err,data)=>{
//       if(err) reject(err);
//       else resolve(data);
//     })
//   })
// }

// function compareFiles(file1Path,file2Path){
//   Promise.all([readFile(file1Path),readFile(file2Path)]).then(([file1Content,file2Content])=>{
//     const lines1 = file1Content.split('\n');
//     const lines2 = file2Content.split('\n');

//     const largerFile = lines1.length > lines2.length ? file1Path : file1Path;
    
//     console.log(`The Larger file is ${largerFile}`);

//     const differences = [];
//     for (let i = 0; i < Math.min(lines1.length,lines2.length); i++) {
//       if(lines1[i] !== lines2[i]){
//         differences.push({
//           lineNumber : i+1,
//           file1 : lines1[i],
//           file2 : lines2[i]
//         });
//       }
//     }
//     console.log("Differences: ");

//     differences.forEach((diff)=>{
//       console.log(`Line ${diff.lineNumber}:`);
//       console.log(`${file1Path} : ${diff.file1}`);
//       console.log(`${file2Path} : ${diff.file2}`);
//       console.log('-------');
//     });
//   })
//   .catch((err)=>{
//     console.error("Error reading file: ",err);
//   });
// }

// const rl = readline.createInterface({
//   input : process.stdin,
//   output : process.stdout
// });

// function userInput(){
//   rl.question('Enter First file: ', (file1Path)=>{
//     rl.question('Enter Second file: ', (file2Path)=>{
//       compareFiles(file1Path, file2Path);
//       rl.close();
//     });
//   });
// }

// userInput();

// // const file1Path = 'file61.txt';
// // const file2Path = 'file62.txt';

// */

// //----------------Old Task-6----------------------
// /*
// const fs = require('fs');

// function compareFiles(file1Path, file2Path) {
//   try {
//     // Read files
//     const file1Content = fs.readFileSync(file1Path, 'utf8');
//     const file2Content = fs.readFileSync(file2Path, 'utf8');

//     // Compare file sizes
//     const file1Size = Buffer.byteLength(file1Content, 'utf8');
//     const file2Size = Buffer.byteLength(file2Content, 'utf8');

//     if (file1Size > file2Size) {
//       console.log(`File '${file1Path}' is larger than '${file2Path}'.`);
//     } else if (file1Size < file2Size) {
//       console.log(`File '${file2Path}' is larger than '${file1Path}'.`);
//     } else {
//       console.log('Both files have the same size.');
//     }

//     // Compare file content line by line
//     const lines1 = file1Content.split('\n');
//     const lines2 = file2Content.split('\n');

//     const maxLength = Math.max(lines1.length, lines2.length);

//     for (let i = 0; i < maxLength; i++) {
//       if (lines1[i] !== lines2[i]) {
//         console.log(`Line ${i + 1} is different:`);
//         console.log(`File 1: ${lines1[i] || '<empty>'}`);
//         console.log(`File 2: ${lines2[i] || '<empty>'}`);
//         console.log('-----------------------------');
//       }
//     }
//   } catch (err) {
//     console.error('Error comparing files:', err);
//   }
// }

// // Call the function and provide the paths to the files you want to compare
// const file1Path = 'file61.txt';
// const file2Path = 'file62.txt';
// compareFiles(file1Path, file2Path);

// */

//----------------------------------Task-7--------------------------
// const fs = require('fs').promises;

// //backup of a file
// async function createBackup(sourceFilePath, backupFilePath) {
//   try {
//     await fs.copyFile(sourceFilePath,backupFilePath);
//     console.log(`Backup file created successfully at ${backupFilePath}.`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// //restore a file from the backup
// async function restoreFromBackup(backupFilePath, restoreFilePath) {
//   try {
//     await fs.copyFile(backupFilePath,restoreFilePath);
//     console.log(`Restore file successfully created at ${restoreFilePath}.`);
//   } catch (err) {
//     console.log(err);
//   }
// }

// const sourceFile = 'source.txt';
// const backupFile = 'backup.txt';

// (async ()=> {
//   try {
//     //backup of source file
//     await createBackup(sourceFile,backupFile);

//     //changes in source file, add new content
//     const content = "This is new content!";
//     await fs.writeFile('source.txt',content);
//     console.log("File has written succesfully");

//     //restore source file from backup
//     const restoredFile = 'restored.txt';
//     restoreFromBackup(backupFile,restoredFile);
//   } catch (err) {
//     console.log(err);
//   }
// })();

/*

// //--------------------------Task-8-----------------------
// /*
//  * folder-structure.json
//  * {
//   "folders": [
//     {
//       "name": "Documents",
//       "subfolders": [
//         {
//           "name": "Projects",
//           "subfolders": []
//         },
//         {
//           "name": "Reports",
//           "subfolders": []
//         }
//       ]
//     },
//     {
//       "name": "Pictures",
//       "subfolders": []
//     }
//   ],
//   "files": [
//     {
//       "name": "file1.txt",
//       "content": "This is the content of file 1."
//     },
//     {
//       "name": "file2.txt",
//       "content": "This is the content of file 2."
//     }
//   ]
// }
// */

// /*
//Now, you can create the file/folder structure using the following Node.js code:

// const fs = require('fs');
// const path = require('path');

// function createFoldersAndFiles(basePath, folders, files) {
//   try {
//     // Create folders
//     for (const folder of folders) {
//       const folderPath = path.join(basePath, folder.name);
//       fs.mkdirSync(folderPath);
//       if (folder.subfolders.length > 0) {
//         createFoldersAndFiles(folderPath, folder.subfolders, []);
//       }
//     }

//     // Create files
//     for (const file of files) {
//       const filePath = path.join(basePath, file.name);
//       fs.writeFileSync(filePath, file.content);
//     }

//     console.log('Folder and file structure created successfully.');
//   } catch (err) {
//     console.error('Error creating folder and file structure:', err);
//   }
// }

// // Read the JSON file
// fs.readFile('folder-structure.json', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading JSON file:', err);
//     return;
//   }

//   try {
//     const folderData = JSON.parse(data);
//     createFoldersAndFiles('.', folderData.folders, folderData.files);
//   } catch (err) {
//     console.error('Error parsing JSON:', err);
//   }
// });

// Structure:

// - Documents
//   - Projects
//   - Reports
// - Pictures
// - file1.txt
// - file2.txt
// */

// //-----------------------Task-9------------------------

//create file:
const fs = require('fs');

fs.writeFile('example.txt', 'This is a new file!', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File created successfully.');
  }
});

//read file
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File content:', data);
  }
});

//append file
fs.appendFile('example.txt', '\nThis is additional content.', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Content appended successfully.');
  }
});

//delete file
fs.unlink('renamed-example.txt', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File deleted successfully.');
  }
});

//rename file
fs.rename('example.txt', 'renamed-example.txt', (err) => {
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log('File renamed successfully.');
  }
});

//list file in directory
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error listing files/directories:', err);
  } else {
    console.log('Files/directories in the current directory:');
    files.forEach((file) => {
      console.log(file);
    });
  }
});