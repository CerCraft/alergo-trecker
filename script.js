// Инициализация Chart.js  
const ctx = document.getElementById('allergyChart').getContext('2d');
const allergyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: 30}, (_, i) => i+1),
        datasets: [{
            label: 'Уровень аллергенов',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1  
        }]
    }
});

// Загрузка данных из "базы данных"
function loadChartData(allergenType) {
    // Здесь должен быть запрос к вашему бэкенду  
    // Пример с моковыми данными:
    const mockData = Array.from({length: 30}, () => Math.floor(Math.random() * 4));
    allergyChart.data.datasets[0].data = mockData;
    allergyChart.update();
}

// Обработчики событий  
document.getElementById('allergyType').addEventListener('change', (e) => {
    loadChartData(e.target.value);
});

// Инициализация  
loadChartData('pollen');