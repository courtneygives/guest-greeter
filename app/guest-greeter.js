
var companies = require('../data/Companies.json');
var guests = require('../data/Guests.json');
var messageTemplates = require('../data/MessageTemplates');

module.exports = {

  theBlanks: {
    firstName: null,
    lastName: null,
    greeting: null,
    roomNumber: null,
    company: null,
    message: ''
  },

  // ::::: fill in the blanks ::::: //
  fillInTheBlanks: function(guest, company, message) {
    this.theBlanks.firstName = guest.firstName;
    this.theBlanks.lastName = guest.lastName;
    this.theBlanks.roomNumber = guest.reservation.roomNumber;
    this.theBlanks.company = company;
    this.theBlanks.message = this.chooseMessage(message);
    this.theBlanks.greeting = this.selectGreeting(guest.reservation.startTimestamp);

    return this.generateMessage(this.theBlanks);

  },

  // ::::: find guest function ::::: //
  findGuest: function(searchWord) {
    for (var i = 0; i < guests.length; i++) {
      if (Object.values(guests[i]).includes(searchWord)) {
        return guests[i];
      }
    }
    throw("No '" + searchWord + "' found! I'm fussy about exact matches, and I'm case sensitive. I'm pretty fussy and sensitive in general, really.");

  },

  // ::::: select company function ::::: //
  selectCompany: function(companySearch) {
    for (var i = 0; i < companies.length; i++) {
      if (Object.values(companies[i]).includes(companySearch)) {
        return companies[i].company;
      }
    }
    throw("No '" + companySearch + "' found! I'm fussy about exact matches, and I'm case sensitive. I'm pretty fussy and sensitive in general, really.");
  },

  // ::::: select greeting function ::::: //
  selectGreeting: function(timestamp) {
    var getHour = new Date(timestamp * 1000).getHours();
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
  },

  // ::::: choose message function ::::: //
  chooseMessage: function(custom) {
    if (custom == '') {
      return messageTemplates.pleasantries.toString();
    }
    return ' ' + custom;
  },

  // ::::: generate message function ::::: //
  generateMessage: function(filledBlanks) {
    var getMessage = filledBlanks.message;
    var makeMessage =
    getMessage.replace('[FIRSTNAME]', filledBlanks.firstName)
    .replace('[COMPANY]', filledBlanks.company)
    .replace('[ROOMNUMBER]', filledBlanks.roomNumber);

    var finalMessage = filledBlanks.greeting + makeMessage;

    return finalMessage;

  }

};
