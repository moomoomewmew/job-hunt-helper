'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          userName: 'John',
          password: '$321!pass!123$',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {})

    const users = await queryInterface.sequelize.query(
      `SELECT id from users;`)

    const userId = users[0][0].id

    await queryInterface.bulkInsert('opportunities', [
      {
        jobTitle: 'Engineer',
        company: 'Google',
        payRange: '$40K-$600000',
        location: 'remote',
        pointOfContact: 'Rodney The Cat',
        phoneNumber: '40487987439',
        jobPostURL: 'www.iduhgehrg.com',
        companyURL: 'www.dfjhbgweg.com',
        DateApplied: '2022-02-07',
        userId: userId,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    const opportunity = await queryInterface.sequelize.query(
      `SELECT id from opportunities;`)

    const opportunityId = opportunity[0][0].id

    await queryInterface.bulkInsert('interviews', [
      {
        opportunityId: opportunityId,
        time: '19:30:00',
        date: '2022-04-12',
        meetingLink: 'www.efkjgner.com',
        interviewer: 'www.erubge.com',
        location: 'zoom',
        notes: 'ekdjfbwirbgwbgr',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
