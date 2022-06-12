const express = require('express')
const consign = require('consign')

const  PORT = 3000
const app = express();

app.set('json spaces', 4);

consign()
    .include('models')
    .include('routes')
    .into(app);

app.listen(PORT, () => {
    console.log(`NTask API - porta ${PORT}`);
});