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

// Routes
app.get('/', (req, res) => {
  res.render('home', { meta_title: 'Home | ThemeLad'});
});

app.get('/themes', (req, res) => {
  res.render('themes', { meta_title: 'Themes | ThemeLad'});
});

app.get('/pricing', (req, res) => {
  res.render('pricing', { meta_title: 'Pricing | ThemeLad'});
});

app.get('/blog', (req, res) => {
  res.render('blog', { meta_title: 'Blog | ThemeLad'});
});

app.get('/contact', (req, res) => {
  res.render('contact', { meta_title: 'Contact Us | ThemeLad'});
});

app.listen(PORT, () => {
  console.log(`Listening at: http://localhost:${PORT}`);
});
