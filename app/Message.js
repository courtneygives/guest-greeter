var messageTemplates = require('../data/MessageTemplates');

module.exports = class Message {
  constructor(aGuest, aCompany, aMessage) {
    this.aMessage = aMessage; // chosen message string
    this.aCompany = aCompany; // searched company name
    this.aGuest   = aGuest;   // searched guest object
  }

  selectGreeting() {
    var getHour = new Date(this.aGuest.reservation.startTimestamp * 1000).getHours();
    var bestGreeting = 'Hello';
    if (getHour >= 16) {
      bestGreeting = messageTemplates.greetings.evening;
      return bestGreeting;
    }
    if (getHour < 12 ) {
      bestGreeting = messageTemplates.greetings.morning;
      return bestGreeting;
    }
    bestGreeting = messageTemplates.greetings.afternoon;
    return bestGreeting;
  }

  generateMessage() {
    var messageChoice = '';
    if (this.aMessage == '') {
       messageChoice = this.selectGreeting() + messageTemplates.pleasantries;
    } else {
      messageChoice = this.aMessage;
    }
    var newMessage = messageChoice
    .replace('[N]', this.aGuest.firstName)
    .replace('[C]', this.aCompany)
    .replace('[R]', this.aGuest.reservation.roomNumber);

    return newMessage.toString();
    // TODO:
    // check if all placeholders are accounted for
    // give option for custom/no greeting
  }
};
