const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware для статических файлов
app.use(express.static(path.join(__dirname)));

// Парсинг JSON
app.use(express.json());

// Эндпоинт для получения данных из JSON
app.get('/data', (req, res) => {
    fs.readFile(path.join(__dirname, 'resources', 'data.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Ошибка чтения файла');
        }
        res.json(JSON.parse(data));
    });
});

// Эндпоинт для получения медиафайлов
app.get('/media/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'resources', 'media', req.params.filename);
    res.sendFile(filePath);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});