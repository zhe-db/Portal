var request = require('request');

var request = request.defaults({jar: true});

var form_data = {
  username: 'z687wang',
  password: 'Jameswhelton#1998',
  lt:'e2s1',
  _eventId: 'submit',
  submit: 'LOGIN'
}


request.get('https://cas.uwaterloo.ca/cas/login', function (error, response, body) {
  // console.log('error:', error); // Print the error if one occurred
   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received // Print the HTML for the Google homepage.
   var authOptions = {
     url: 'https://cas.uwaterloo.ca/cas/login',
     headers: {
       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
       'Accept-Encoding': 'gzip, deflate, br',
       'Accept-Language': 'en-US,en;q=0.9',
       'Connection': 'keep-alive',
       'Cache-Control': 'max-age=0',
       'Content-Type': 'application/x-www-form-urlencoded',
       'Host': 'cas.uwaterloo.ca',
       'Origin': 'https://cas.uwaterloo.ca',
       'Referer': 'https://cas.uwaterloo.ca/cas/login',
       'Upgrade-Insecure-Requests': 1,
       'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.89 Safari/537.36',
       'Cookie': response.headers['set-cookie'],

    },
    formData: form_data
   }
   request(authOptions, function (error, response, body) {
     console.log('error: ', error);
     console.log('statusCode: ', response && response.statusCode);
  //   console.log(body);
   });
});
