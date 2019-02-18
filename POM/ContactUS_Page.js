class ContactUS_Page {
    get firstName() {
        return $("[name='first_name']");}
    get lastName() {
        return $("[name='last_name']");}
    get emailAddress() {
        return $("[name='email']");}
    get comments() {
        return $("[name='message']");}
    get submitButton() {
        return $("[type='submit']");}



setFirstName(firstName) {
    return this.firstName.setValue(firstName)
}
setLastName(lastName) {
    return this.lastName.setValue(lastName);
}
setEmailAddress(emailAddress) {
    return this.emailAddress.setValue(emailAddress);
}
SetComments(comments) {
    return this.comments.setValue(comments);
}
clickSubmitButton() {
    return this.submitButton.click();
}

submitAllInformationViaContactUsForm(firstName, lastName, emailAddress, comments) {
    if(firstName){
        this.firstName.setValue(firstName);
    }
    if(lastName){
        this.lastName.setValue(lastName);
    }
    if(emailAddress){
        this.emailAddress.setValue(emailAddress);
    }
    if(comments){
        this.comments.setValue(comments);
    }
    this.submitButton.click();

}


confirmSuccessfulSubmission(){
    var successfulSubmissionSelector = "#contact_reply h1";
    var validateSubmissionHeader = browser.waitUntil(function(){
        return browser.getText(successfulSubmissionSelector) === 'Thank You for your Message!'
    }, 3000)
    expect(validateSubmissionHeader, 'Successful Submission Message does not Exist!').to.be.true;
}
confirmUnsuccessfulSubmission() {
    var unsuccessfulSubmissionSelector = "body";
    var validateSubmissionHeader = browser.waitUntil(function() {
        return browser.getText(unsuccessfulSubmissionSelector) == 'Error: all fields are required'
    }, 3000)
    expect(browser.getText(unsuccessfulSubmissionSelector)).to.include('Error: all fields are required');
}
}

module.exports = new ContactUS_Page();