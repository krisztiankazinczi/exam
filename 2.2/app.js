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

app.get('/sortByInterviewer', applicantController.sortByInterviewerPage.bind(applicantController))
app.post('/sort', applicantController.sort.bind(applicantController))
app.get('/sortByInterviewer/:id', applicantController.sorted.bind(applicantController))



app.listen(port, () => {

  db.serialize(() => {
    // database.run(`DROP TABLE applicants`)
    // database.run(`DROP TABLE interview`)
    // database.run(`DROP TABLE interviewer`)

    // database.run(`CREATE TABLE IF NOT EXISTS applicants (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(60) NOT NULL, email VARCHAR(60) NOT NULL,
    //         phase VARCHAR(60) NOT NULL)`);
    // database.run(`CREATE TABLE IF NOT EXISTS interviewer (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(60) NOT NULL)`);
    // database.run(`INSERT INTO interviewer (name) VALUES ('Jani')`);
    // database.run(`INSERT INTO interviewer (name) VALUES ('Orsi')`);
    // database.run(`INSERT INTO interviewer (name) VALUES ('Angela')`);
    // database.run(`INSERT INTO interviewer (name) VALUES ('Adam')`);

    // database.run(`CREATE TABLE IF NOT EXISTS interview (id INTEGER PRIMARY KEY AUTOINCREMENT, interviewer_id INTEGER NOT NULL, applicant_id INTEGER NOT NULL, phase VARCHAR(60) NOT NULL, FOREIGN KEY (interviewer_id) REFERENCES interviewer (id), FOREIGN KEY (applicant_id) REFERENCES applicants (id))`);




  });


  console.log(`Example app listening on port ${port}!`)
})