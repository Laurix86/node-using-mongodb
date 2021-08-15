const express = require('express');
const mongoose = require('mongoose');
import routes from './src/routes/routes';
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

app.get('/', (req, res) =>
    res.send(`Store server running on port ${PORT}`)
);
routes(app);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
);

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/productsdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
});

//mongoose.connection.on('error', console.error.bind(console, 'Error de conexión MongoDB:'));
