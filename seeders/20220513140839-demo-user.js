'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('users', [{
        username: 'ruben',
        password:'ruben',
        email:'rmarinez@ilg.cat',
      },{
        username: 'ruben2',
        password:'ruben2',
        email:'rmarinez2@ilg.cat',
      },{
        username: 'ruben3',
        password:'ruben3',
        email:'rmarinez3@ilg.cat',
      },{
        username: 'ruben4',
        password:'ruben4',
        email:'rmarinez4@ilg.cat',
      },{
        username: 'ruben5',
        password:'ruben5',
        email:'rmarinez5@ilg.cat',
      }],{}); 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
