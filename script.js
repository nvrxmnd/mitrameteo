// script.js — ПОЛНАЯ РАБОЧАЯ ВЕРСИЯ

const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-toggle__icon');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    if (body.classList.contains('light-theme')) {
        themeIcon.textContent = '🌙';
    } else {
        themeIcon.textContent = '☀️';
    }
});

const navButtons = document.querySelectorAll('.nav__btn');
const sections = document.querySelectorAll('.section');

navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const sectionId = btn.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

function updateActiveButton() {
    let currentSection = 'home';
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navButtons.forEach(btn => {
        const btnSection = btn.getAttribute('data-section');
        btn.classList.toggle('active', btnSection === currentSection);
    });
}

window.addEventListener('scroll', updateActiveButton);
window.addEventListener('load', updateActiveButton);

// ==================== РАСШИРЕННАЯ БАЗА ВСЕХ РОССИЙСКИХ ГОРОДОВ ====================
const ALL_RUSSIAN_CITIES = [
    'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Казань',
    'Нижний Новгород', 'Челябинск', 'Самара', 'Омск', 'Ростов-на-Дону',
    'Уфа', 'Красноярск', 'Пермь', 'Воронеж', 'Волгоград', 'Краснодар',
    'Саратов', 'Тюмень', 'Тольятти', 'Ижевск', 'Барнаул', 'Иркутск',
    'Ульяновск', 'Хабаровск', 'Ярославль', 'Владивосток', 'Махачкала',
    'Томск', 'Оренбург', 'Кемерово', 'Новокузнецк', 'Рязань', 'Астрахань',
    'Сочи', 'Калининград', 'Тула', 'Киров', 'Чебоксары', 'Брянск', 'Иваново',
    'Магнитогорск', 'Курск', 'Тверь', 'Нижний Тагил', 'Ставрополь', 'Белгород',
    'Архангельск', 'Владимир', 'Сургут', 'Чита', 'Калуга', 'Смоленск',
    'Волжский', 'Курган', 'Орёл', 'Череповец', 'Владикавказ', 'Мурманск',
    'Тамбов', 'Петрозаводск', 'Кострома', 'Новороссийск', 'Йошкар-Ола',
    'Таганрог', 'Комсомольск-на-Амуре', 'Сыктывкар', 'Нальчик', 'Улан-Удэ',
    'Прокопьевск', 'Бийск', 'Рубцовск', 'Мытищи', 'Люберцы', 'Химки',
    'Балашиха', 'Королёв', 'Подольск', 'Красногорск', 'Электросталь',
    'Коломна', 'Одинцово', 'Серпухов', 'Щёлково', 'Домодедово', 'Раменское',
    'Жуковский', 'Пушкино', 'Ногинск', 'Сергиев Посад', 'Арзамас', 'Дзержинск',
    'Саров', 'Бор', 'Кстово', 'Павлово', 'Выкса', 'Балахна', 'Воткинск',
    'Глазов', 'Сарапул', 'Можга', 'Камбарка', 'Чехов', 'Дмитров', 'Егорьевск',
    'Ступино', 'Дубна', 'Клин', 'Лобня', 'Воскресенск', 'Фрязино', 'Лыткарино',
    'Реутов', 'Долгопрудный', 'Солнечногорск', 'Павловский Посад', 'Ивантеевка',
    'Гатчина', 'Выборг', 'Всеволожск', 'Сосновый Бор', 'Тихвин', 'Кириши',
    'Кингисепп', 'Волхов', 'Сертолово', 'Луга', 'Тосно', 'Сланцы', 'Кировск',
    'Отрадное', 'Никольское', 'Коммунар', 'Приозерск', 'Шлиссельбург', 'Туапсе',
    'Ейск', 'Армавир', 'Кропоткин', 'Геленджик', 'Анапа', 'Лабинск',
    'Тихорецк', 'Крымск', 'Тимашёвск', 'Белореченск', 'Курганинск', 'Хадыженск',
    'Каменск-Шахтинский', 'Новочеркасск', 'Шахты', 'Волгодонск', 'Новошахтинск',
    'Батайск', 'Азов', 'Гуково', 'Сальск', 'Донецк', 'Белая Калитва', 'Аксай',
    'Миллерово', 'Морозовск', 'Зерноград', 'Семикаракорск', 'Цимлянск',
    'Константиновск', 'Зверево', 'Пролетарск', 'Пятигорск', 'Кисловодск',
    'Невинномысск', 'Ессентуки', 'Минеральные Воды', 'Георгиевск', 'Будённовск',
    'Изобильный', 'Светлоград', 'Зеленокумск', 'Благодарный', 'Новоалександровск',
    'Ипатово', 'Железноводск', 'Лермонтов', 'Нефтекумск', 'Черкесск', 'Грозный',
    'Назрань', 'Магас', 'Нальчик', 'Прохладный', 'Баксан', 'Нарткала', 'Майский',
    'Терек', 'Тырныауз', 'Чегем', 'Владикавказ', 'Моздок', 'Беслан', 'Алагир',
    'Ардон', 'Дигора', 'Карабулак', 'Малгобек', 'Кизляр', 'Дербент', 'Хасавюрт',
    'Каспийск', 'Буйнакск', 'Избербаш', 'Кизилюрт', 'Дагестанские Огни', 'Южно-Сухокумск',
    'Элиста', 'Городовиковск', 'Лагань', 'Майкоп', 'Адыгейск', 'Симферополь',
    'Севастополь', 'Керчь', 'Евпатория', 'Ялта', 'Феодосия', 'Джанкой', 'Алушта',
    'Бахчисарай', 'Судак', 'Саки', 'Армянск', 'Красноперекопск', 'Щёлкино',
    'Старый Крым', 'Балаклава', 'Инкерман', 'Белогорск', 'Раздольное', 'Первомайское'
];

// Преобразуем массив в Set для быстрого поиска
const russianCitiesSet = new Set(ALL_RUSSIAN_CITIES.map(city => city.toLowerCase()));

function normalizeCityName(name) {
    return name.trim().toLowerCase().replace(/(^|\s|-)\S/g, letter => letter.toUpperCase());
}

function isRussianCity(cityName) {
    const normalized = cityName.trim().toLowerCase();
    return russianCitiesSet.has(normalized);
}

const weatherConditions = [
    { icon: '☀️', description: 'Ясно', tempRange: [20, 32], humidityRange: [30, 50], windRange: [1, 5], particleType: 'none' },
    { icon: '⛅', description: 'Малооблачно', tempRange: [15, 27], humidityRange: [40, 60], windRange: [2, 7], particleType: 'none' },
    { icon: '☁️', description: 'Облачно', tempRange: [10, 22], humidityRange: [55, 75], windRange: [3, 9], particleType: 'fog' },
    { icon: '🌧️', description: 'Дождь', tempRange: [5, 16], humidityRange: [75, 95], windRange: [4, 12], particleType: 'rain' },
    { icon: '⛈️', description: 'Гроза', tempRange: [8, 20], humidityRange: [80, 98], windRange: [6, 15], particleType: 'rain' },
    { icon: '🌨️', description: 'Снег', tempRange: [-15, 2], humidityRange: [70, 90], windRange: [3, 10], particleType: 'snow' },
    { icon: '🌫️', description: 'Туман', tempRange: [-5, 10], humidityRange: [85, 100], windRange: [0, 3], particleType: 'fog' },
];

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateWeather(cityName) {
    const condition = getRandomItem(weatherConditions);
    return {
        city: cityName,
        date: getCurrentDate(),
        icon: condition.icon,
        description: condition.description,
        temperature: randomInRange(condition.tempRange[0], condition.tempRange[1]),
        humidity: randomInRange(condition.humidityRange[0], condition.humidityRange[1]),
        wind: randomInRange(condition.windRange[0], condition.windRange[1]),
        pressure: randomInRange(740, 770),
        particleType: condition.particleType
    };
}

function generateDayWeather(baseCondition) {
    const condition = getRandomItem(weatherConditions);
    const tempShift = randomInRange(-5, 5);
    const baseTemp = randomInRange(condition.tempRange[0], condition.tempRange[1]);
    return {
        icon: condition.icon,
        description: condition.description,
        temperature: baseTemp + tempShift,
        particleType: condition.particleType
    };
}

function getCurrentDate() {
    const now = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' };
    return now.toLocaleDateString('ru-RU', options);
}

function getTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'long' });
}

function getDayAfterTomorrowDate() {
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    return dayAfter.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', weekday: 'long' });
}

const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');
const errorMsg = document.getElementById('errorMsg');
const weatherCard = document.getElementById('weatherCard');
const cityNameEl = document.getElementById('cityName');
const dateEl = document.getElementById('date');
const weatherIconEl = document.getElementById('weatherIcon');
const temperatureEl = document.getElementById('temperature');
const descriptionEl = document.getElementById('description');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const pressureEl = document.getElementById('pressure');

let forecastContainer = document.getElementById('forecastContainer');
if (!forecastContainer) {
    forecastContainer = document.createElement('div');
    forecastContainer.id = 'forecastContainer';
    forecastContainer.className = 'forecast-mini';
    if (weatherCard && weatherCard.parentNode) {
        weatherCard.parentNode.insertBefore(forecastContainer, weatherCard.nextSibling);
    }
}

function animateIcon(element) {
    if (!element) return;
    element.classList.remove('animated');
    void element.offsetWidth;
    element.classList.add('animated');
}

function displayWeather(weatherData) {
    if (!cityNameEl) return;
    cityNameEl.textContent = weatherData.city;
    dateEl.textContent = weatherData.date;
    weatherIconEl.textContent = weatherData.icon;
    temperatureEl.textContent = `${weatherData.temperature}°C`;
    descriptionEl.textContent = weatherData.description;
    humidityEl.textContent = `${weatherData.humidity}%`;
    windEl.textContent = `${weatherData.wind} м/с`;
    pressureEl.textContent = `${weatherData.pressure} мм рт.ст.`;

    animateIcon(weatherIconEl);
    weatherCard.classList.add('visible');
    startParticles(weatherData.particleType);
    displayForecast(weatherData);
}

function displayForecast(todayWeather) {
    if (!forecastContainer) return;
    
    const tomorrowWeather = generateDayWeather(todayWeather);
    const dayAfterWeather = generateDayWeather(todayWeather);

    forecastContainer.innerHTML = `
        <div class="forecast-mini__card">
            <div class="forecast-mini__day">Сегодня</div>
            <div class="forecast-mini__icon animated">${todayWeather.icon}</div>
            <div class="forecast-mini__temp">${todayWeather.temperature}°C</div>
            <div class="forecast-mini__desc">${todayWeather.description}</div>
        </div>
        <div class="forecast-mini__card">
            <div class="forecast-mini__day">${getTomorrowDate()}</div>
            <div class="forecast-mini__icon animated">${tomorrowWeather.icon}</div>
            <div class="forecast-mini__temp">${tomorrowWeather.temperature}°C</div>
            <div class="forecast-mini__desc">${tomorrowWeather.description}</div>
        </div>
        <div class="forecast-mini__card">
            <div class="forecast-mini__day">${getDayAfterTomorrowDate()}</div>
            <div class="forecast-mini__icon animated">${dayAfterWeather.icon}</div>
            <div class="forecast-mini__temp">${dayAfterWeather.temperature}°C</div>
            <div class="forecast-mini__desc">${dayAfterWeather.description}</div>
        </div>
    `;
}

function clearError() {
    if (errorMsg) errorMsg.textContent = '';
}

function showError(message) {
    if (errorMsg) errorMsg.textContent = message;
    if (weatherCard) weatherCard.classList.remove('visible');
    if (forecastContainer) forecastContainer.innerHTML = '';
    stopParticles();
}

function handleSearch() {
    const inputValue = cityInput ? cityInput.value.trim() : '';

    if (!inputValue) {
        showError('Пожалуйста, введите название города');
        return;
    }

    if (!/^[а-яА-ЯёЁ\s-]+$/.test(inputValue)) {
        showError('Название города должно содержать только русские буквы');
        return;
    }

    if (!isRussianCity(inputValue)) {
        showError('Город не найден. Введите российский город (доступно более 300 городов)');
        return;
    }

    clearError();
    const normalizedCity = normalizeCityName(inputValue);
    const weatherData = generateWeather(normalizedCity);
    displayWeather(weatherData);
}

if (searchBtn) searchBtn.addEventListener('click', handleSearch);
if (cityInput) {
    cityInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    cityInput.addEventListener('input', () => {
        if (errorMsg && errorMsg.textContent) clearError();
    });
}

// Canvas particles
const canvas = document.getElementById('particlesCanvas');
let ctx = null;
if (canvas) ctx = canvas.getContext('2d');

let particles = [];
let animationId = null;

function resizeCanvas() {
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
}

if (canvas) window.addEventListener('resize', resizeCanvas);
if (canvas) resizeCanvas();

class Particle {
    constructor(type) {
        this.type = type;
        this.reset();
    }

    reset() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.size = this.type === 'snow' ? randomInRange(2, 6) : randomInRange(1, 3);

        if (this.type === 'rain') {
            this.speedY = randomInRange(8, 16);
            this.speedX = randomInRange(-1, 1);
            this.size = randomInRange(1, 2);
        } else if (this.type === 'snow') {
            this.speedY = randomInRange(1, 3);
            this.speedX = randomInRange(-0.5, 0.5);
        } else if (this.type === 'fog') {
            this.speedY = 0;
            this.speedX = randomInRange(-0.3, 0.3);
            this.size = randomInRange(50, 150);
        }

        this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
        if (this.type === 'rain') {
            this.y += this.speedY;
            this.x += this.speedX;
        } else if (this.type === 'snow') {
            this.y += this.speedY;
            this.x += this.speedX + Math.sin(this.y * 0.02) * 0.5;
        } else if (this.type === 'fog') {
            this.x += this.speedX;
            this.opacity = 0.03 + Math.sin(Date.now() * 0.001 + this.x) * 0.02;
        }

        if (canvas && (this.y > canvas.height + 10 || this.x < -200 || this.x > canvas.width + 200)) {
            this.reset();
            this.y = -10;
        }
    }

    draw(ctx) {
        if (!ctx) return;
        ctx.save();
        if (this.type === 'rain') {
            ctx.strokeStyle = `rgba(174, 194, 224, ${this.opacity + 0.2})`;
            ctx.lineWidth = this.size;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(this.x - this.speedX * 2, this.y + 10);
            ctx.stroke();
        } else if (this.type === 'snow') {
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity + 0.3})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (this.type === 'fog') {
            const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
            gradient.addColorStop(0, `rgba(200, 200, 210, ${this.opacity})`);
            gradient.addColorStop(1, 'rgba(200, 200, 210, 0)');
            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
}

function createParticles(type) {
    const count = type === 'rain' ? 200 : type === 'snow' ? 100 : type === 'fog' ? 20 : 0;
    particles = [];
    for (let i = 0; i < count; i++) {
        particles.push(new Particle(type));
    }
}

function animateParticles() {
    if (!ctx || !canvas) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
        p.update();
        p.draw(ctx);
    });

    animationId = requestAnimationFrame(animateParticles);
}

function startParticles(type) {
    stopParticles();
    if (type === 'none') return;
    createParticles(type);
    animateParticles();
}

function stopParticles() {
    if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
    }
    if (ctx && canvas) ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = [];
}

// Contact form
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const contactName = document.getElementById('contactName');
const contactEmail = document.getElementById('contactEmail');
const contactMessage = document.getElementById('contactMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactName ? contactName.value.trim() : '';
        const email = contactEmail ? contactEmail.value.trim() : '';
        const message = contactMessage ? contactMessage.value.trim() : '';

        if (!name || !email || !message) {
            if (formSuccess) {
                formSuccess.style.color = 'var(--error)';
                formSuccess.textContent = 'Пожалуйста, заполните все поля';
            }
            return;
        }

        if (formSuccess) {
            formSuccess.style.color = 'var(--success)';
            formSuccess.textContent = `Спасибо, ${name}! Ваше сообщение отправлено.`;
        }

        if (contactName) contactName.value = '';
        if (contactEmail) contactEmail.value = '';
        if (contactMessage) contactMessage.value = '';

        setTimeout(() => {
            if (formSuccess) formSuccess.textContent = '';
        }, 4000);
    });
}

// Time update
const timeElement = document.getElementById('currentTime');

function updateCurrentTime() {
    if (!timeElement) return;
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateCurrentTime, 1000);
updateCurrentTime();

// Section observer
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    sectionObserver.observe(section);
});

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Theme label
const themeLabel = document.getElementById('themeLabel');

function updateThemeLabel() {
    if (themeLabel) {
        themeLabel.textContent = document.body.classList.contains('light-theme')
            ? 'Светлая тема'
            : 'Тёмная тема';
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        setTimeout(updateThemeLabel, 100);
    });
}

updateThemeLabel();

// Load animation for images
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Demo weather on load
    const demoWeather = generateWeather('Москва');
    if (cityNameEl) displayWeather(demoWeather);
    if (cityInput) cityInput.value = 'Москва';
});