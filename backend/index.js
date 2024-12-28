const express = require('express');
const db = require('./db/config')
const route = require('./routes/route');
const cors = require('cors');
const port = 5001

const app = express();

app.use(express.json());
  
app.use(cors())

app.use('/api', route);

app.listen(port, () => {
    console.log(`Server listening at :${port}`);
});


const DATABASE_URL = 'mongodb+srv://003boske:Srikar%402003@cluster0.jadkjwq.mongodb.net/Prolink'
const DATABASE = 'Prolink'

db(DATABASE_URL, DATABASE);