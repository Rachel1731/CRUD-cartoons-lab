const Show = require('./models/pet.js');

const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());

// Routes go here

// CREATE - POST - /cartoons
app.post('/cartoons', async (req, res) => {
  //const createdCartoon = await Cartoon.create(req.body);
  //res.json(createdCartoon)

});

// READ - GET - /cartoons
app.get('/cartoons', async (req, res) => {
 const foundCartoons = await Cartoon.find();
   res.json(foundCartoons);
 });

 app.delete('/cartoons/:showId', async (req, res) => {
	const deletedCartoon = await Cartoon.findByIdAndDelete(req.params.petId);
    res.json(deletedCartoon);
});

// UPDATE - PUT - /cartoons/:showId
app.put('/cartoons/:showId', async (req, res) => {
    res.json({ message: `Update route with the param ${req.params.showId}` });
});

// UPDATE - PUT - /cartoons/:showId
app.put('/:showId', async (req, res) => {
    const updatedCartoon = await Cartoon.findByIdAndUpdate(
	    req.params.showIdId, 
	    req.body,
	    {new: true}
    );
});

const cors = require('cors');
app.use(cors());

app.listen(3000, () => {
  console.log('The express app is ready!');
});