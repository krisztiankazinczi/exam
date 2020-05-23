module.exports = class ApplicantService {
  constructor(applicantRepository) {
    this.applicantRepository = applicantRepository
  }

  saveNewApplicant(name, email) {
    return this.applicantRepository.saveNewApplicant(name, email)
  }

  findRegisteredApplicants(phase) {
    return this.applicantRepository.findRegisteredApplicants(phase)
  }

  findAllApplicants() {
    return this.applicantRepository.findAllApplicants()
  }

  updatePhase(applicant_id, phase, interviewer_id) {
    return this.applicantRepository.updatePhase(applicant_id, phase, interviewer_id)
  }

  findAllInterviewers() {
    return this.applicantRepository.findAllInterviewers() 
  }

  findInterviews(id) {
    return this.applicantRepository.findInterviews(id)
  }


}