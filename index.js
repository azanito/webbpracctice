const express = require('express');
const app = express();
const port = 3000;

// Добавьте обработчик для корневого маршрута
app.get('/', (req, res) => {
    res.send('Welcome to the Web Practice Application!');
});

// Обработчик для /hello
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
