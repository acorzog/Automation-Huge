describe('Test the webdriverUniversity homepage', function() {
    it('output the height of the homepage carousel', function() {
        browser
        .url('/')
        .pause(2000)
        var divCarouselHeight = browser.getCssProperty('#udemy-promo-video', 'height');
        console.log(divCarouselHeight);
    });
});