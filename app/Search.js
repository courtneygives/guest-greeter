var Companies = require('../data/Companies.json');
var Guests = require('../data/Guests.json');
var SearchTermNotFoundException = require('../app/SearchTermNotFoundException.js');


module.exports = {

  // TODO: make the search smarter
  searchGuest: function(searchTerm) {
    for (var i = 0; i < Guests.length; i++) {
      if (Object.values(Guests[i]).includes(searchTerm)) {
        var guestInfo = Guests[i];
        return guestInfo;
      }
    }
    throw new SearchTermNotFoundException(searchTerm);
  },

  searchCompany: function(searchTerm) {
    for (var i = 0; i < Companies.length; i++) {
      if (Object.values(Companies[i]).includes(searchTerm)) {
        return Companies[i].company;
      }
    }
    throw new SearchTermNotFoundException(searchTerm);
  }

};
