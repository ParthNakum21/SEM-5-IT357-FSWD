const express = require('express');
const bodyParser = require('bodyParser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

//in memory database to store contact information
let contacts = [];

//bodyParser middleware is used to parse incoming body req. to json payloads 
app.use(bodyParser.json());

//data validation schema using Joi
const contactSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().requiered(),
    message: Joi.string().required()
});

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
});