

describe('Verify whether webdriveruni links on homepage work correctly', function() {
    it('Check that the contact us button opens the contact us webpage', function(done) {
        browser.setViewportSize({
            width: 1200,
            height: 800
        })
        browser.url('/');
        
        var title = browser.getTitle();
        expect(title).to.equal('WebDriverUniversity.com');
            console.log('Title is: ' + title);
        browser.click('#contact-us');
        
        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);
        console.log(tabIds);
        
        var title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Contact Us');
            console.log('Title is: ' + title2);
        
        var url = browser.getUrl();
        expect(url).to.include('Contact-Us', 'URL Mismatch');
            console.log('Title is: ' + url);
        browser.close();
    });
    it('Check that the loging button opens the loging portal page', function(done) {
        browser.url('/');
        var title = browser.getTitle();
        title.should.equal('WebDriverUniversity.com');
            console.log('Title is: ' + title);
        browser.click('#login-portal');

        var tabIds = browser.getTabIds();
        browser.switchTab(tabIds[1]);
        console.log(tabIds);

        var title2 = browser.getTitle();
        expect(title2).to.equal('WebDriver | Login Portal');
            console.log('Title is: ' + title2);

        var url = browser.getUrl();
        expect(url).to.include('Login-Portal', 'URL Mismatch');
            console.log('Title is: ' + url);
    });
});