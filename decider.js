exports.decide = function(req){
  var data = '';

console.log('in decide!!!');

    req.on('data', function(chunk){
        data += chunk;
        })
    req.on('end', function(){
      if(data){
console.log('in if');
        return 'next lesson';
      }
      else{
console.log('in else');
        return 'same lesson';
      }
    })
}
