const express = require('express')
const app = express();
const server = require('http').Server(app);
const path = require('path');
const port = process.env.PORT || 5000;

// Make sure that file is taken from build folder when deployed on Server
let fileLoc = '';
app.use(express.static(path.join(__dirname, 'client/build')));
if (process.env.NODE_ENV === 'production') fileLoc = path.join(__dirname = 'client/build/index.html');
else fileLoc = path.join(__dirname, 'client/public/index.html');

server.listen(port);
console.log(`Using port ${port}`)

const employees = ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4', 'Employee 5', 'Employee 6'];
const survyes = ['Survey 1', 'Survey 2', 'Survey 3', 'Survey 4', 'Survey 5', 'Survey 6'];

let employeeSurvey = {
    'Employee 1': ['Survey 4', 'Survey 5']
}

// Will return the homepage
app.get('/', (req, res) => {
    res.sendFile(fileLoc);
});

// Will return an array of employees
app.get('/getEmployees', (req, res) => {
    console.log('Returning employees array')
    res.send(employees);
});

// Will return an array of surveys
app.get('/getSurveys', (req, res) => {
    console.log('Returning surveys array')
    res.send(survyes);
});

// Will add survey to employee
app.post('/putSurvey', (req, res) => {
    try {
        const body = JSON.parse(req.body);
        employeeSurvey[body.employee] = body.surveys;
        console.log(`Successfully added ${body.survyes.length} surveys for ${employees}`)
        res.sendStatus(204);
    }
    catch (err) {
        console.log('Invalid data format');
        res.sendStatus(422);
    }
});