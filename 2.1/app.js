const express = require('express')
const exphbs = require('express-handlebars');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test.db')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const Database = require('./adapter/adapter')
const database = new Database()

const ApplicantRepository = require('./repositories/applicant-repository')
const ApplicantService = require('./services/applicant-service')
const ApplicantController = require('./controllers/applicant-controller')

const applicantController = new ApplicantController( new ApplicantService( new ApplicantRepository( database)))

app.get('/addNew', applicantController.addNewApplicantPage.bind(applicantController))
app.post('/addNew', applicantController.addNewApplicant.bind(applicantController))
app.get('/applicants', applicantController.applicantList.bind(applicantController))
app.get('/updatePhase', applicantController.updatePhasePage.bind(applicantController))
app.post('/updatePhase', applicantController.updatePhase.bind(applicantController))



app.listen(port, () => {

  db.serialize(() => {
    database.run(`CREATE TABLE IF NOT EXISTS applicants (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(60) NOT NULL, email VARCHAR(60) NOT NULL,
            phase VARCHAR(60) NOT NULL)`);


  });


  console.log(`Example app listening on port ${port}!`)
})