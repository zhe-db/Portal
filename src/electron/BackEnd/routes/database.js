var express = require('express');
var jsonfile = require('jsonfile')
const router = express.Router();
var uwaterlooApi = require('uwaterloo-api');
var uwclient = new uwaterlooApi({
    API_KEY : '743887d93f1df944a7acae0f78741746 '
});

router.get('/courses', (req, res) => {
  uwclient.get('/courses', (error, result) => {
      jsonfile.writeFile('./src/electron/BackEnd/data/courses.json', result.data, (err) =>{ if (err) console.log(err); });
      res.send(result.data);
  });
});

router.get('/display', (req, res) => {
  jsonfile.readFile('./src/electron/BackEnd/data/courses.json', (err, result) => {
    if (err) console.log(err);
    result.forEach((course) => {
      console.log(course.course_id);
    });
  });
  res.send("Success");
});

module.exports = router;
