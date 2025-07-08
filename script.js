const API_KEY = '235269d21f0137f7cf117f417f1840ee';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const cityip = document.getElementById('cityip');
const srcbtn = document.getElementById('srcbtn');
const weatherDisplay = document.getElementById('weatherDisplay');
const error = document.getElementById('error');
const errorMessageText = document.getElementById('errorMessage');
const loading = document.getElementById('loading'); // Add this line if you have a loading element

const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('windSpeed');
const description = document.getElementById('description');
const feelslike = document.getElementById('feelslike');

srcbtn.addEventListener('click', handleSearch);
cityip.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

function handleSearch() {
    const city = cityip.value.trim();
    if (!city) {
        showError('Please enter a city name.');
        return;
    }
    hideAllSections();
    showLoading();
    fetchWeatherData(city);
}

// Fix function name and add city parameter
async function fetchWeatherData(city) {
    try {
        const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        const response = await fetch(url);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found. Please check the name and try again.');
            } else if (response.status === 401) {
                throw new Error('Invalid API key. Please check your API key and try again.');
            } else {
                throw new Error('An error occurred while fetching the weather data. Please try again later.');
            }
        }
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        hideLoading();
        showError(error.message);
    }
}

// Fix showLoading/hideLoading to use the loading element
function showLoading() {
    loading.classList.remove('hidden');
}

function hideLoading() {
    loading.classList.add('hidden');
}


/**
 * Show an error message.
 * @param {string} message - The error message to display.
 */
function showError(message) {
    errorMessageText.textContent = message;
    error.classList.remove('hidden');
}
function hideError(){
    error.classList.add('hidden');
}

function showWeatherDisplay(){
    weatherDisplay.classList.remove("hidden");
}

function hideWeatherDisplay() {
    weatherDisplay.classList.add("hidden");
}

function hideAllSections(){
    hideLoading()
    hideError()
    hideWeatherDisplay()
}

// Fix clearInput function
function clearInput() {
    cityip.value = "";
}

// Function to display weather data
function displayWeatherData(data) {
    hideLoading();
    

    const cityNameText=`${data.name}, ${data.sys.country}`;
    const temp=Math.round(data.main.temp);
    const description=data.weather[0].description;
    const feelsLikeTemp=Math.round(data.main.feels_like);
    const humidityValue=data.main.humidity;
    const windSpeedValue=Math.round(data.wind.speed);

    cityName.textContent = cityNameText;
    temperature.textContent = temp;
    humidity.textContent = humidityValue;
    windSpeed.textContent = windSpeedValue;
    description.textContent = description;
    feelslike.textContent = feelsLikeTemp;

    showWeatherDisplay();
}

function testWithSampleData(){
    const sampleData={
        name:"London",
        sys:{country:"GB"},
        main:{
            temp:15,
            feels_like:14,
            humidity:82
        },
        wind:{
            speed:5
        },
        weather:[{
            description:"light rain"
        }]
    }
}