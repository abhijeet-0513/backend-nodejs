const path=require('path')

function getMessages(req,res,){
  
  res.sendFile(path.join(__dirname,'..','public','download.jpeg'))
}

function postMessages(req,res,){
  console.log('updating messages');
  res.send('messages updated');
}

module.exports = {
  getMessages,
  postMessages
}