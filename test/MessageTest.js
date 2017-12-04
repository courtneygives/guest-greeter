var expect = require('chai').expect;
var Guests = require('../data/Guests.json');

// :::::: Message tests :::::: //
var Message = require('../app/Message.js');

describe('Message', () => {
  describe('generateMessage', () => {
    it('should return a custom message if supplied one', () => {
      var message = new Message(Guests[3], 'Hotel California', 'beep boop [N], boop boop [C], beep boop beep [R]?');
      expect(message.generateMessage()).to.equal('beep boop Melisa, boop boop Hotel California, beep boop beep 417?');
    });

    it('should display message with the correct variables', () => {
      var message = new Message(Guests[3], 'Hotel California', '');
      expect(message.generateMessage()).to.equal('Good evening, Melisa, and welcome to Hotel California! Room 417 is ready for you! Let us know if you need anything.');
    });
  });

  describe('selectGreeting', () => {
    it('should select the morning greeting given a morning timestamp', () => {
      var testGuest = {
        "reservation": {
          "startTimestamp": 1511179627
        }
      };
      var message = new Message(testGuest, 'Hotel California', '');
      expect(message.selectGreeting()).to.equal('Good morning');
    });

    it('should select the afternoon greeting given an afternoon timestamp', () => {
      var testGuest = {
        "reservation": {
          "startTimestamp": 1511204827
        }
      };
      var message = new Message(testGuest, 'Hotel California', '');
      expect(message.selectGreeting()).to.equal('Good afternoon');
    });

    it('should select the evening greeting given an evening timestamp', () => {
      var testGuest = {
        "reservation": {
          "startTimestamp": 1511230027
        }
      };
      var message = new Message(testGuest, 'Hotel California', '');
      expect(message.selectGreeting()).to.equal('Good evening');
    });

    it('should recognize the timezone of the company OR use UTC');
  });
});
