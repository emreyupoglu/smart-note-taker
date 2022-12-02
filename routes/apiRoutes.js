const router = require('express').Router();
const { readFromFile, readAndAppend}= require('../helpers/fsUtils')

// Get "/api/notes" responds with all notes from the database
router.get('/notes', (req, res) => {
   readFromFile('./db/db.json').then((data)=> res.json(JSON.parse(data)))
});

router.post('/notes', (req, res) => {
readAndAppend(req.body, './db/db.json');
res.json('note created')
});

// //delete "/api/notes" deletes the note with an id equal to req.params.id
// router.delete('/notes/:id', (req, res) => {
//     store
//         .removeNote(req.params.id)
//         .then(() => res.json({ ok: true}))
//         .catch((err) => res.status(500).json(err));
// });

module.exports = router;