const express = require('express');
const app = express();

app.set('views', '.');
app.set('view engine', 'ejs');

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');

app.get('/ejs', (req, res) => {
    res.render('sample.ejs', { name: 'Will Smith' });
})

app.get('/pug', (req, res) => {
  res.render('sample.pug', { name: 'Will Smith' });
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
