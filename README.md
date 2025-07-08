# WeatherApp

A simple web application to get the current weather of any city using the [OpenWeatherMap API](https://openweathermap.org/api).

## Features

- Search weather by city name
- Displays temperature, weather description, feels like, humidity, and wind speed
- Loading indicator while fetching data
- Error handling for invalid city names or network issues

## Setup

1. **Clone or Download the Repository**

2. **Open `index.html` in your browser**

   No build steps are required. All files are static.

3. **API Key**

   The app uses a demo API key in `script.js`.  
   For production, [get your own API key](https://home.openweathermap.org/users/sign_up) and replace the value of `API_KEY` in `script.js`:

   ```javascript
   const API_KEY = 'YOUR_API_KEY_HERE';
   ```

## File Structure

```
WeatherApp/
├── index.html
├── script.js
├── styles.css
└── README.md
```

## Customization

- **Styling:** Edit `styles.css` to change the look and feel.
- **API Key:** Replace the API key in `script.js` for your own usage.

## Credits

- Weather data provided by [OpenWeatherMap](https://openweathermap.org/).

---

**Enjoy using
