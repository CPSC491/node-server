var mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'mongoid');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

    var lessonSchema = mongoose.Schema({
      Lesson_id:String,
      _type:String,
      title:String,
      id:String,
      owner_id:String
    });

    var lesson = db.model('lesson', lessonSchema);
    var query = lesson.findById('5064edc8b20d6e9e7d000003', error);
    query.select('title');
    query.exec(function(err, lesson){
      if(err) return handleError(err);
      console.log(lesson.title);
      lesson.title = 'Something New!';

      lesson.save(function(err){
        if(err) return handleError(err);
        console.log('Saved!');
      });
    });


var error = function(){
  console.log("error!!!")
}

});
