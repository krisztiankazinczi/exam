module.exports = class ApplicantController {
  constructor(applicantService) {
    this.applicantService = applicantService
  }

  addNewApplicantPage(req, res) {
    const {emptyField, db} = req.query
    res.render('add-new-applicant', {
      emptyField, 
      db
    })
  }

  async addNewApplicant(req, res) {
    const {name, email} = req.body
    if (!name || !email) {
      res.redirect('/addNew?emptyfield=true')
      return
    }

    try {
      await this.applicantService.saveNewApplicant(name, email)
      res.redirect('/applicants')
      return
    } catch (error) {
      res.redirect('/addNew?db=true')
    }

  }

  async applicantList(req, res) {
    const {dbE} = req.query
    let registered, firstPhase, hired, rejected;
    try {
      registered = await this.applicantService.findRegisteredApplicants('registered')
      firstPhase = await this.applicantService.findRegisteredApplicants('firstPhase')
      hired = await this.applicantService.findRegisteredApplicants('hired')
      rejected = await this.applicantService.findRegisteredApplicants('rejected')
    } catch (error) {
      res.redirect('/applicants?dbE=true')
      return
    }
    res.render('applicants', {
      registered,
      firstPhase,
      hired,
      rejected,
      dbE
    })
  }

  async updatePhasePage(req, res) {
    const {fieldError} = req.query

    let applicants, interviewers;
    try {
     applicants = await this.applicantService.findAllApplicants() 
     interviewers = await this.applicantService.findAllInterviewers() 
    } catch (error) {
      res.redirect('/applicants?dbE=true')
      return
    }

    res.render('update-phase', {
      applicants,
      interviewers,
      fieldError
    })
  }

  async updatePhase(req, res) {
    const {applicant_id, phase, interviewer_id} = req.body
    if (applicant_id, phase, interviewer_id ) {
      try {
        await this.applicantService.updatePhase(applicant_id, phase, interviewer_id)
        res.redirect('/applicants')
        return
      } catch (error) {
        res.redirect('/applicants?dbE=true')
        return
      }
    }
    res.redirect('/updatePhase?fieldError=true')
    
  }

  async sortByInterviewerPage(req, res) {
    let interviewers;
    try {
     interviewers = await this.applicantService.findAllInterviewers() 
    } catch (error) {
      res.redirect('/applicants?dbE=true')
      return
    }

    res.render('sort-by-interviewer', {
      interviewers
    })
  }

  async sort(req, res) {
    const id = req.body
    console.log(id)

    res.redirect(`/sortByInterviewer/${id}`)
  }

  async sorted(req, res) {
    const id = req.params.id

    let interviewers, interviews;
    try {
     interviewers = await this.applicantService.findAllInterviewers() 
     interviews = await this.applicantService.findInterviews(id)
     console.log(interviews)
    } catch (error) {
      res.redirect('/applicants?dbE=true')
      return
    }

    res.render('sort-by-interviewer', {
      interviewers,
      interviews
    })
  }

  



}