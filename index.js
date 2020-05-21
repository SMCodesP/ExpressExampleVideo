const express = require('express');

const app = express();

app.get('/', (req, res) => {
	console.log('User connect!');
	return res.send('Olá, deu certinho!');
});

app.listen(1293, () => {
	console.log('Um servidor http foi iniciado na porta 1293');
});
