const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, '/public')));

// Templating
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
