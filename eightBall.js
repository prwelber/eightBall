var net = require('net');
var fs = require('fs');
//var _ = require('underscore');
var port = 2500;

var answerArray = ['It is certain',
'It is decidedly so',
'Without a doubt',
'Yes definitely',
'You may rely on it',
'As I see it, yes',
'Most likely',
'Maybe. Maybe not. Maybe fuck yourself.',
'Yes',
'Signs point to yes',
'Ask again later',
'Dont be ridiculous',
'Better not tell you now',
'Cannot predict now',
'Concentrate and ask again',
'Dont count on it',
'My reply is no',
'My sources say no',
'Outlook not so good',
'Very doubtful',];

var server = net.createServer(function(connection){
	console.log('connected to client');
	connection.setEncoding('utf8');
	connection.write('welcome to the magic 8-ball. Ask a question, please.' +"\n");

	connection.on('data', function(userQuestion){
		var cleanQuestion = userQuestion.trim().split(" ");
		var cleanQuestion = cleanQuestion.join().replace(/,/g, " ");
		console.log(cleanQuestion);

		if (cleanQuestion.indexOf('?') >= 0){	
			var answer = answerArray[Math.floor(Math.random()*answerArray.length)];
			connection.write(answer + "\n");

		} else {
			connection.write("Please ask a question. You will need to use a '?' in order to get an answer." + "\n")
		}




	})//end of connection.on(data)




})//end of createServer



server.listen(port, function(){
	console.log('server listening');
})