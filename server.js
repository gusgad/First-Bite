const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const urlencodedParser = bodyParser.urlencoded({extended: false});

let data = [{item: 'Milk'}, {item: 'Water'}, {item: 'Bread'}]

app.set('view engine', 'ejs');

app.use(express.static('./public'));

app.get('/food', (req, res) => {
    res.json(data);
});

app.post('/', urlencodedParser, (req, res) => {
    data.push(req.body);
    res.json(data);
});

app.delete('/:item', urlencodedParser, (req, res) => {
    data = data.filter((todo) => {
        return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    res.json(data);
});

app.listen(8081);
console.log('Listening on port 8081');