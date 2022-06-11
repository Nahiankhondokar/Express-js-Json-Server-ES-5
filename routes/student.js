const express = require('express');
const router = express.Router();



// all student router
router.get('/', (req, res) => {
    res.send('GET Route Done');
});

router.post('/', (req, res) => {
    res.send('Post Route Done');
});

router.put('/:id', (req, res) => {
    res.send('Put Route Done ' + req.params.id);
});

router.delete('/:id', (req, res) => {
    res.send('Delete Route Done ' + req.params.id);
});




module.exports = router;