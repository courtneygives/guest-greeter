var expect = require('chai').expect;
var SearchTermNotFoundException = require('../app/SearchTermNotFoundException.js');

// :::::: Search tests :::::: //
var Search = require('../app/Search.js');

describe('Search', () => {
  it('should get a person from a first name search', () => {
    expect(Search.searchGuest('Latoya').firstName).to.equal('Latoya');
  });

  it('should get a person from a last name search', () => {
    expect(Search.searchGuest('Preston').firstName).to.equal('Melisa');
  });

  it('should throw an error when no value matches the guest searchWord', () => {
    expect(Search.searchGuest.bind('beepboop')).to.throw(SearchTermNotFoundException());
  });

  it('should get a company name from a search term', () => {
    expect(Search.searchCompany('The Heartbreak Hotel')).to.equal('The Heartbreak Hotel');
  });

  it('should throw an error when no value matches the company searchWord', () => {
      expect(Search.searchCompany.bind('beepboop')).to.throw(SearchTermNotFoundException());
  });

  it('should find a result with a partial word match');
  it('should not distinguish between lowercase and uppercase');
});
