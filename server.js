const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const AppRouter = require('./routes/AppRouter')
const cool = require('cool-ascii-faces');
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const AuthRouter = require('./routes/AuthRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', AppRouter);
app.use('/auth', AuthRouter);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    })
}
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));


