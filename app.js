const express = require('express');
const app = express();


app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor HTTP usando Express!');
});

app.get('/task', (req, res) => {
  res.send('Esta ruta va a devolver una lista de tareas');
});


app.get('/task', (req, res) => {
    const tasks = [
        { id: 1, name: 'Juancho', description: 'Que Juan se bañe' },
        { id: 2, name: 'Juancha', description: 'Que Juancha se bañe'},
    ];
    res.json(tasks);
});

app.post('/task', (req, res) => {
    const newTask = req.body; 
    res.json(newTask);
});

app.get('/image/:username', (req, res) => {
  if (req.params.username === 'ronny') {
    res.sendFile(__dirname + '/ronny.jpg');
  } else {
    res.send('Página no encontrada');
  }
});


app.get('*', (req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(4600, () => {
  console.log('Servidor HTTP corriendo en el puerto 4600');
});