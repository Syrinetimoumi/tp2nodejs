const express = require('express');
const router = express.Router();

const Voitures = [
    {id:1, name : "Range Rover"},
    {id:2, name : "Mini cooper"},
    {id:3, name : "Bmw"}
];


router.get('/all',(req,res) => {
    res.json(Voitures);
});


router.post('/add/:id',(req,res) => {
    res.send('Ajouter Une Voiture');
});


router.get('/:id',(req,res) => {
    const id = parseInt(req.params.id);
    const post = Voitures.find(post => post.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send("voiture n'exist pas");
    }
});

router.get('/getByName/:name', (req, res) => {
    const carName = req.params.name.toLowerCase();
    const car = Voitures.find(car => car.name.toLowerCase() === carName);
    
    if (car) {
        res.json(car);
    } else {
        res.status(404).send('Car not found');
    }
});


router.put('/modify/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    const post = Voitures.find(post => post.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send("voiture n'exist pas");
    }
});


router.delete('/delete/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    const post = Voitures.find(post => post.id === id);
    if (post) {
        res.json(post);
    } else {
        res.status(404).send("voiture n'exist pas");
    }
});




module.exports = router;