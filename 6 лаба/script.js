document.getElementById('loadData').addEventListener('click', async () => {
    try {
        const response = await fetch('/data');
        if (!response.ok) throw new Error('Ошибка загрузки данных');
        const data = await response.json();
        document.getElementById('name').value = data.name;
        document.getElementById('address').value = data.address;
        document.getElementById('age').value = data.age;
        document.getElementById('position').value = data.position;
    } catch (error) {
        console.error(error);
    }
});

document.getElementById('loadMedia').addEventListener('click', () => {
    const mediaContainer = document.getElementById('mediaContainer');
    mediaContainer.innerHTML = ''; // Очистка предыдущего содержимого
    const mediaFile = 'example.gif'; // Укажите имя файла
    const mediaElement = document.createElement('img');
    mediaElement.src = `/media/${mediaFile}`;
    mediaElement.alt = 'Загружаемое медиа';
    mediaContainer.appendChild(mediaElement);
});

document.getElementById('clearForm').addEventListener('click', () => {
    document.getElementById('myForm').reset();
    document.getElementById('mediaContainer').innerHTML = ''; // Очистка медиа
});