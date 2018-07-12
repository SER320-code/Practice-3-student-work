var express = require('express');
var router = express.Router();
var emoji = require('./emojis')

router.get('/', function (req, res, next) {
    emoji.getAll(function (err, emojis) {
        if (err) throw err;
        res.json(emojis);

    });
});

router.post('/', function (req, res, next) {
    emojis.addEmoji(req.body, function (err, emojis) {
        if (err) throw err;
        res.json(emojis);
    });

});
router.get('/:id', function (req, res, next) {
    emojis.findEmojiById(req.params.id, function (err, emojis) {
        if (err) throw err;
        res.json(emojis);
    });
});
router.put('/:id', function (req, res, next) {
    emojis.updateEmoji(req.params.id, req.body, function (err, emojis) {
        if (err) throw err;
        res.json(emojis);

    });

});
router.delete('/:id', function (req, res, next) {
    emojis.deleteEmojiByID(req.params.id, function (err, emojis) {
        if (err) throw err;
        res.json(emojis);

    });

});
