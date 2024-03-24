function showweatherDetails(event) {
    event.preventDefault();
}
const city = document.getElementById('city').value;
const apiKey = '1b6de494885bc0f5e8a93fbcb573ef4a'; // Replace 'YOUR_API_KEY' with your actual API key
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
fetch(apiUrl)
.then(response => response.json())
.then(data => {
  const weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
})
document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );