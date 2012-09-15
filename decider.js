exports.decide = function(req){
  var data = '';

    req.on('data', function(chunk){
        data += chunk;
        })
    req.on('end', function(){
      if(data){
        return 'next lesson';
      }
      else{
        return 'same lesson';
      }
    })
}
