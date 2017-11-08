
// import Chai and its 'expect' function
var expect = require('chai').expect;
// import whole guest greeter object
var GuestGreeter = require('../app/guest-greeter.js');

var testBlanks = {firstName:'Melisa',lastName:'Preston',greeting:'Good evening',roomNumber:417,company:'Hotel California',message:', [FIRSTNAME], and Welcome to [COMPANY]! Room [ROOMNUMBER] is now ready for you. Enjoy your stay, and please let us know if you need anything.'};

var testObject = {id:4,firstName:'Melisa',lastName: 'Preston',reservation:{roomNumber:417,startTimestamp: 1486614763,endTimestamp:1486832543}};

// ::::: fill in the blanks ::::: //
describe('fillInTheBlanks function', function(){
  it('should assign firstName value to the message firstName blank',
  function() {
    GuestGreeter.fillInTheBlanks(testObject, 'Hotel California', '');
    expect(GuestGreeter.theBlanks.firstName).
    to.equal('Melisa');
  });

  it('should assign hotel to the companyName blank',
  function() {
    GuestGreeter.fillInTheBlanks(testObject, 'Hotel California', '');
    expect(GuestGreeter.theBlanks.company).
    to.equal('Hotel California');
  });

  it('should assign the room number to the roomNumber blank',
  function() {
    GuestGreeter.fillInTheBlanks(testObject, 'Hotel California', '');
    expect(GuestGreeter.theBlanks.roomNumber).
    to.equal(417);
  });

  it('should set a custom message when one is entered',
  function() {
    GuestGreeter.fillInTheBlanks(testObject, 'The Grand Budapest Hotel', '[FIRSTNAME]! Welcome to [COMPANY]! Your room is [ROOMNUMBER]');
    expect(GuestGreeter.theBlanks.message).to.equal(' [FIRSTNAME]! Welcome to [COMPANY]! Your room is [ROOMNUMBER]');
  });

  it('should set the default message when no custom message is entered',
  function() {
    GuestGreeter.fillInTheBlanks(testObject, 'Hotel California', '');
    expect(GuestGreeter.theBlanks.message).to.equal(', [FIRSTNAME], and Welcome to [COMPANY]! Room [ROOMNUMBER] is now ready for you. Enjoy your stay, and please let us know if you need anything.');
  });
});


// ::::: find guest function ::::: //
describe('findGuest function', function() {
  it('should get a person from a first name search',
  function() {
    expect(GuestGreeter.findGuest('Latoya').lastName).
    to.equal('Herrera');
  });

  it('should get a person from a last name search',
  function() {
    expect(GuestGreeter.findGuest('Preston').firstName).
    to.equal('Melisa');
  });

  it('should throw an error when no value matches the searchWord',
  function() {
    expect(function(){GuestGreeter.findGuest('beepboop')}).
    to.throw("No 'beepboop' found! I'm fussy about exact matches, and I'm case sensitive. I'm pretty fussy and sensitive in general, really.");
  });

  it('should not distinguish between lowercase and uppercase');
  it('should find a result with a partial word match');
});


// ::::: select company function ::::: //
describe('selectCompany function', function() {
  it('should get a company name from a search term',
  function() {
    expect(GuestGreeter.selectCompany('The Heartbreak Hotel')).
    to.equal('The Heartbreak Hotel');
  });

  it('should throw an error when no value matches the searchWord',
  function() {
    expect(function(){GuestGreeter.selectCompany('beepboop')}).
    to.throw("No 'beepboop' found! I'm fussy about exact matches, and I'm case sensitive. I'm pretty fussy and sensitive in general, really.");
  });

  it('should find a result with a partial word match');
  it('should not distinguish between lowercase and uppercase');
});


// ::::: select greeting function ::::: //
describe('selectGreeting function', function() {
  it('should select the morning greeting given a morning timestamp',
  function() {
    expect(GuestGreeter.selectGreeting(1486654792)).
    to.equal('Good morning');
  });

  it('should select the afternoon greeting given an afternoon timestamp',
  function() {
    expect(GuestGreeter.selectGreeting(1509994813)).
    to.equal('Good afternoon');
  });

  it('should select the evening greeting given an evening timestamp',
  function() {
    expect(GuestGreeter.selectGreeting(1486520344)).
    to.equal('Good evening');
  });

  it('should recognize the timezone of the company OR use UTC');
});


// ::::: choose message function ::::: //
describe('chooseMessage function', function() {
  it('should return a custom message if supplied one',
  function(){
    expect(GuestGreeter.chooseMessage('beep boop [FIRSTNAME], boop boop [COMPANY], beep boop beep [ROOMNUMBER]?')).
    to.equal(' beep boop [FIRSTNAME], boop boop [COMPANY], beep boop beep [ROOMNUMBER]?');
  });
});


// ::::: generate message function ::::: //
describe('generateMessage function', function() {
  it('should display message with the correct variables',
  function(){
    expect(GuestGreeter.generateMessage(testBlanks)).
    to.equal('Good evening, Melisa, and Welcome to Hotel California! Room 417 is now ready for you. Enjoy your stay, and please let us know if you need anything.');
  });

  it('should notify the user if any of the placeholders are missing');

});
