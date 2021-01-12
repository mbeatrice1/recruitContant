module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("contact", {
      name: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      }
    });
  
    return Contact;
  };