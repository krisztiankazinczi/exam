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

    let applicants;
    try {
     applicants = await this.applicantService.findAllApplicants() 
    } catch (error) {
      res.redirect('/applicants?dbE=true')
      return
    }

    res.render('update-phase', {
      applicants,
      fieldError
    })
  }

  async updatePhase(req, res) {
    const {id, phase} = req.body
    if (id, phase) {
      try {
        await this.applicantService.updatePhase(id, phase)
        res.redirect('/applicants')
        return
      } catch (error) {
        res.redirect('/applicants?dbE=true')
        return
      }
    }
    res.redirect('/updatePhase?fieldError=true')
    
  }



}