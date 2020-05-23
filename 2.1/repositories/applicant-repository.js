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
      throw new Error(`findAllApplicants failed: ${error}`)
    }
  }

  async updatePhase(id, phase) {
    const update = `UPDATE applicants SET phase = ? WHERE id = ?`
    try {
      await this.database.run(update, [phase, id])
    } catch (error) {
      throw new Error(`updatePhase failed: ${error}`)
    }
  }



}