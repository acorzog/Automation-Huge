describe('Test that the button is clickable once the Ajax loader completed loading', function(){
    it('Attempt to click the button ASAP', function(done) {
        browser
        .url('/Ajax-Loader/index.html')
        .click('#ajax-loader');
    });
    it('Attempt to click the button after 7 seconds', function(done) {
        browser
        .url('/Ajax-Loader/index.html');
        this.timeout(20000);
        browser.pause(7000);
        browser.click('#button1');
        browser.pause(7000);

    });
});