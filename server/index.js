const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
//app.use(cors);

const motorcycles = require('./routes/api/motorcycles')
const appointments = require('./routes/api/appointments')

app.use('/api/motorcycles', motorcycles);
app.use('/api/appointments', appointments);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
});