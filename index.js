const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;
const server = "localhost";
const database = "productsdb";

// bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

// mongoose connection
const coneectDB = async()=> {
    try{
        await mongoose.connect('mongodb://localhost/productsdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useFindAndModify: false,
            //useCreateIndex: true
        });
    }catch(err){
        console.log("Failed to connect to DataBase", err);
    }
};

connectDB();