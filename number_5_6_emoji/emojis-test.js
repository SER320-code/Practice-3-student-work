var emojis = require('./emojis.js');

emojis.findEmojiById('01', function(err,emoji){
	if (err)
		console.log(err);
	
	console.log(emoji.name);
});

// emojis.getAll(function(err,emojis){
	// if (err)
		// console.log(err);
	
	// console.log(emojis);
// });
emojis.deleteEmojiByID('01', function(err,emojis){
	if (err)
		console.log(err);
	
	console.log(emojis);
});
