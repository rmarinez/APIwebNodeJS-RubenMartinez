'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('basketplayers', [{
      name: 'LeBron',
      lastname:'James',
      birth: '1984-12-30',
      team:'Lakers',
    },{
      name: 'Stephen',
      lastname:'Curry',
      birth: '1988-3-14',
      team:'Warriors',
    },{
      name: 'Michael',
      lastname:'Jordan',
      birth: '1963-2-17',
      team:'Chicago Bulls',
    },{
      name: 'Kobe',
      lastname:'Bryant',
      birth: '1978-8-23',
      team:'Lakers',
    },{
      name: 'Chris',
      lastname:'Paul',
      birth: '1985-4-6',
      team:'Phoenix Suns',
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
