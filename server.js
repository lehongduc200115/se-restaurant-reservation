const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send("Hello world!")
})

app.listen(3000, () => {
    console.log('App is listening on port 3000!')
})