var emojisList = {
  '01': {
    name: 'smile',
    desciption: 'similey face',
  },
  '02': {
    name: 'sad',
	description: 'sad face'
  },
  '03': {
    name: 'laugh',
	description: 'laughing face'
  }
};


var emojis = {
	//retrieve all emojis
    getAll(callback){
		return callback(null,emojisList);
},
	//return an emoji using id
    findEmojiById : function (id, callback) {
	// Perform query that calls callback when it's done
	
  if (!emojisList[id])
    return callback(new Error('No user matching ' + id));
  
  return callback(null, emojisList[id]);
},
//delete an emoji using id
 deleteEmojiByID : function (id, callback) {
	
  if (!emojisList[id])
    return callback(new Error(
      'No emoji matching '
       + id
      )
    );
   delete emojisList[id]
    return callback(null, emojisList);
},
//TODO implement the updateEmoji that accepts an emoji object to update at given id
updateEmoji : function(id,emoji, callback){
        if (!emojisList[id])
    return callback(new Error('No emoji matching ' + id));
     emojisList[id] = emoji;
            
},
//TODO implement the addEmoji functionality that accepts an emoji json object and returns the collection including the added emoji.
addEmoji:function(emoji,callback){
	emojisList.push(emoji);
    return(callback(null, emojisList));
    
}
}

module.exports = emojis;
