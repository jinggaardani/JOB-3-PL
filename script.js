const API_KEY = "5db4455f0cba1478d2fe730a9de04605"; //ganti dengan api key anda

function getWeather() {
  const city = document.getElementById("NamaKota").value;
  const resultDiv = document.getElementById("result");
 
  if (!city) {
    alert("Masukkan nama kota terlebih dahulu!");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        alert(data.message);
        resultDiv.classList.add("hidden");
        return;
      }

      console.log(data)
      document.getElementById(
        "cityName"
      ).textContent = `${data.name}`;
      document.getElementById(
        "temperature"
      ).textContent = `${data.main.temp}°C`;
      document.getElementById(
        "cuaca"
      ).textContent = `${data.weather[0].description}`;
      document.getElementById(
        "humidity"
      ).textContent = `${data.main.humidity}%`;
      document.getElementById(
        "pressure"
      ).textContent = `${data.main.pressure}hPa`;
      document.getElementById(
        "ground-level"
      ).textContent = `${data.main.grnd_level}hPa`;
      document.getElementById(
        "timezone"
      ).textContent = "UTC+" + (data.timezone / 3600);
        
      resultDiv.classList.remove("hidden");
    })
    .catch((error) => {
      alert("Gagal mengambil data cuaca.");
      console.error(error);
    });
}