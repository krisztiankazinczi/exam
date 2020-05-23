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

  updatePhase(id, phase) {
    return this.applicantRepository.updatePhase(id, phase)
  }



}