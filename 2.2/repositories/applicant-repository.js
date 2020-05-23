module.exports = class ApplicantRepository {
  constructor(database) {
    this.database = database
  }

  async saveNewApplicant(name, email) {
    const save = `INSERT INTO applicants (name, email, phase) VALUES (?,?,?)`
    try {
      await this.database.run(save, [name, email, 'registered'])
    } catch (error) {
      throw new Error(`saveNewApplicant failed: ${error}`)
    }
  }

  async findRegisteredApplicants(phase) {
    const registeredUsers = `SELECT id, name, email, phase FROM applicants WHERE phase = ?`
    try {
      return await this.database.all(registeredUsers, [phase])
    } catch (error) {
      throw new Error(`findRegisteredApplicants failed: ${error}`)
    }
  }

  async findAllApplicants() {
    const findAllApplicants = `SELECT id, name, email, phase FROM applicants`
    try {
      return await this.database.all(findAllApplicants)
    } catch (error) {
      console.log(error)
      throw new Error(`findAllApplicants failed: ${error}`)
    }
  }

  async updatePhase(applicant_id, phase, interviewer_id) {
    const updateApplicants = `UPDATE applicants SET phase = ? WHERE id = ?`
    const updateInterview = `UPDATE interview SET interviewer_id = ?, applicant_id = ?, phase = ?`
    try {
      await this.database.run(updateApplicants, [phase, applicant_id])
      await this.database.run(updateInterview, [interviewer_id, applicant_id, phase])
    } catch (error) {
      throw new Error(`updatePhase failed: ${error}`)
    }
  }

  async findAllInterviewers() {
    const findAllInterviewers = `SELECT id, name FROM interviewer`
    try {
      return await this.database.all(findAllInterviewers)
    } catch (error) {
      console.log(error)
      throw new Error(`findAllInterviewers failed: ${error}`)
    }
  }


  async findInterviews(id) {
    const findInterviews = `SELECT
                              applicants.name AS applicant_name,
                               interviewer.name AS interviewer_name,
                              interview.phase
                            FROM
                              applicants
                            LEFT JOIN
                              interview ON applicants.id = interview.applicant_id
                            LEFT JOIN
                              interviewer ON interview.interviewer_id = interviewer.id
                            WHERE 
                              interview.interviewer_id = ?`

    try {
      return await this.database.all(findInterviews, [id])
    } catch (error) {
      console.log(error)
    }
  }


}