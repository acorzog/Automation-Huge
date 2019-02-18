var request = require('sync-request');
var ContactUS_Page = require ('../POM/ContactUS_Page')

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {
  it('Should be able to submit a successful submission via contact us form', function(done) {

		ContactUS_Page.submitAllInformationViaContactUsForm('joe','Blogh','sarah_Jomes@mail.com','bla bla bla');
		ContactUS_Page.confirmSuccessfulSubmission();
	});

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
		ContactUS_Page.submitAllInformationViaContactUsForm(null,'Blogh','sarah_Jomes@mail.com','bla bla bla');
  	ContactUS_Page.confirmUnsuccessfulSubmission();
  });

  
	it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
		ContactUS_Page.submitAllInformationViaContactUsForm('joe',null,'sarah_Jomes@mail.com','bla bla bla');
  	ContactUS_Page.confirmUnsuccessfulSubmission();
	});

	it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
		ContactUS_Page.submitAllInformationViaContactUsForm('joe','Blogh','sarah_Jomes@mail.com',null);
  	ContactUS_Page.confirmUnsuccessfulSubmission();
	});		
});
