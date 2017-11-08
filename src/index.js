let casper = require('casper').create({
    verbose: true,
    logLevel: "info",
    pageSettings: {
        userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.62 Safari/537.36"
    }
});

// Starting app
casper.start('http://www.google.com', function() {
    var pageTitle = this.evaluate(function() {
        var title = document.title;
        return title;
    });
    logging(pageTitle);
});

// ON URL CHANGE
casper.on('url.changed',function(url) {
   logging(url, 'info') 
});

// HELPER FUNCTION
function logging(msg, type = 'info') {
    console.log('********************');
    casper.log(msg, type);
    console.log('********************');
}

casper.run(function() {
    this.exit();
});
