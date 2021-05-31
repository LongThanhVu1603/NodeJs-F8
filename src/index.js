const express = require('express');
var morgan = require('morgan');
var exphbs  = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

// Template Engine
app.engine('hbs', exphbs({
    extname: ".hbs" // rút gọn tên layout 
}));
app.set('view engine', 'hbs');


app.set('views', path.join(__dirname, 'resources/views')); //đường dẫn thư mục

//Render ra cac layout
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

//end layout

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})