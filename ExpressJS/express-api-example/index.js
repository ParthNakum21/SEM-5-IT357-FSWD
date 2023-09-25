// const express = require('express');
// const bodyParser = require('body-parser');
// const Joi = require('joi');
// const multer = require('multer');
// const nodemailer = require('nodemailer');

// const app = express();
// const port = 3000;

// //in memory database to store contact information
// let contacts = [];

// //bodyParser middleware is used to parse incoming body req. to json payloads 
// app.use(bodyParser.json());

// //data validation schema using Joi
// const contactSchema = Joi.object({
//     name: Joi.string().required(),
//     email: Joi.string().required(),
//     message: Joi.string().required()
// });

// //file upload configuration using multer (handles file uploads, defines destination directory for uploaded files)
// const storage = multer.diskStorage({
//     destination: (req,file,cb) => {
//         cb(null,'uploads/');
//     },
//     filename: (req, file, cb) => {
//         cb(null,file.originalname);
//     },
// });

// const upload = multer({storage});

// //CRUD operations

// app.get('/contacts',(req,res)=>{
//     res.json(contacts);
// });

// app.post('/contacts',(res,req)=>{
//     const {error} = contactSchema.validate(req.body);
//     if(error){
//         return res.status(400).json({error: error.details[0].message});
//     }

//     const newContact = {id: contacts.length + 1, ...req.body};
//     contacts.push(newContact);
//     res.json(newContact);
// });

// app.put('/contact/:id',(req,res)=>{
//     const contactId = parseInt(req.params.id);
//     const contactIndex = contacts.findIndex(contact => contact.id === contactId);

//     if(contactIndex === -1){
//         return res.status(404).json({error: 'Contact not found'});
//     }

//     const {error} = contactSchema.validate(req.body);
//     if(error){
//         return res.status(400).json({error: error.details[0].message});
//     }

//     contacts[contactIndex] = {id: contactId, ...req.body};
//     res.json(contacts[contactIndex]);
// });

// app.delete('contacts/:id',(req,res)=>{
//     const contactId = parseInt(req.params.id);
//     const contactIndex = contacts.findIndex(contact => contact.id === contactId);

//     if(contactIndex === -1){
//         return res.status(404).json({error: 'Contact not found'});
//     }

//     contacts.splice(contactIndex,1);
//     res.sendStatus(204);
// })

// //file upload API
// // /uploads is created to handle file uploads
// //upload.single('file') middleware is used to process a single uploadedd file.

// app.post('/upload',upload.single('file'),(req,res)=>{
//     if(!req.file){
//         return res.status(400).json({error: 'No file uploaded'});
//     }
//     res.json({message: 'File uploaded successfully', filename: req.file.originalname});
// });

// //Contact Us API using nodemailer
// //Contact Us API: An endpoint /contact-us is created to handle contact form submissions. 
// //This endpoint uses Nodemailer to send an email to a predefined admin email address.
// app.post('/contact-us',(req,res)=>{
//     const {name,email,message} = req.body;
//     const transporter = nodemailer.createTransport({
//         service: 'Gmail', //email service
//         auth:{
//             user: 'mymail@gmail.com',
//             pass: 'XXXXXXXX'
//         }
//     });

//     const mailOptions = {
//         from: 'mymail@gamil.com', 
//         to: 'admin@gmail.com', // admin's mail
//         subject: '(FSWD Check) New contact form submission',
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     transporter.sendMail(mailOptions,(error,info)=>{
//         if(error){
//             console.log(error);
//             return res.status(500).json({error: 'Failed to send email'});
//         }
//         console.log('Email sent'+ info.response);
//         res.json({message: 'Email sent successfully'});
//     });
// });

// app.get('/', (req, res) => {
//     res.send('Welcome to the contact app');
// });

// app.listen(port,()=>{
//     console.log(`Server is running at port ${port}`);
// });

//////////////////////////////////////////////////////////////////////////////////////////
//Environment Variables
//////////////////////////////////////////////////////////////////////////////////////////

const os = require('os');

//get all env variables
const environmentVariables = process.env;

console.log("All Environment Variables: ");
console.log(environmentVariables);

//display value of a specific environment variable
function getEnvironmentVariableValue(variableName){
    const value = process.env[variableName];

    if(value != undefined){
        console.log(`Value of a ${variableName}: ${value}`);
    }
    else{
        console.log(`${variableName} is not defined.`);
    }
}

//Usage example
getEnvironmentVariableValue('OS'); //replace var name to check.
getEnvironmentVariableValue('LANG');

//using dotenv
require('dotenv').config();

// Require and configure dotenv to load environment variables from .env
require('dotenv').config();

// Access environment variables
const testDbUrl = process.env.TEST_DB_URL;
const uatDbUrl = process.env.UAT_DB_URL;
const prodDbUrl = process.env.PROD_DB_URL;
const apiKey = process.env.API_KEY;
const secretKey = process.env.SECRET_KEY;

// Use these variables in your application
console.log('Test Database URL:', testDbUrl);
console.log('UAT Database URL:', uatDbUrl);
console.log('Production Database URL:', prodDbUrl);
console.log('API Key:', apiKey);
console.log('Secret Key:', secretKey);