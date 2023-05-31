const newman = require('newman');
 
newman.run({
    //collection: require('./collection/Dmoney.json'),
    collection: 'https://api.postman.com/collections/22829865-18089b29-58f2-4d8d-93e8-02a2fcff3b7e?access_key=PMAT-01H1SAS3GRPKVP62F2BRGVR9ZS',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});