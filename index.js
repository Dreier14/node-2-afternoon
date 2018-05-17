const express = require ('express');
const bodyParser = require ('body-parser');
const massive = require ('massive');
require('dotenv').config();
const products_controller = require('./products_controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
});

app.post('/api/product', products_controller.create);
app.get('/api/product', products_controller.getAll);
app.get('/api/product/:id', products_controller.getOne);
app.put('/api/product/:id', products_controller.update);
app.delete('/api/product/:id', products_controller.delete);

const PORT = 4000
app.listen(PORT, () => { console.log('Server listening on port ' + PORT );
})