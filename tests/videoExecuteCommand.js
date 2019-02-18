beforeEach(function() {
    browser.url("https://www.w3schools.com/html/html5_video.asp");
})

browser.addCommand('isVideoPaused', function() {
    var isPaused = browser.execute(function() {
        console.log('Outputetd inside the console window');

        var video = document.querySelector('#video1');
        return video.Paused;
    })
    return isPaused.value;
})

describe('Video Test', function() {
    it('Validate that the video is paused upon accessing the page', function(done) {
        this.timeout(20000);
        var isPaused = browser.isVideoPaused();
        expect(isPaused).to.be.true;
        browser.pause(1000);
    });
    it('Alter the width of the video', function(done){
        var videoWidth = browser.execute(function(){
            var video = document.querySelector('#video1');
            return video.style.width = "300px";
        });
        browser.pause(1000);
    });
});