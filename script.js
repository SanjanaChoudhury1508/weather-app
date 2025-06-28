const apiKey = ""; 

function getWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("temp").textContent = data.main.temp + "°";
      document.getElementById("city").textContent = data.name;
      document.getElementById("desc").textContent = data.weather[0].description;

      const now = new Date();
      const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const dayStr = now.toLocaleDateString([], { weekday: 'long' });
      document.getElementById("time").textContent = `${timeStr} ${dayStr}`;
    })
    .catch((err) => {
      alert("City not found!");
    });
}
