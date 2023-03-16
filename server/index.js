const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors);

// const appointments = require('./routes/api/appointments')
//
// app.use('/api/appointments', appointments);

app.get('/', async (req, res) => {
    res.send('Hello World!')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));