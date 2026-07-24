async function getWeather() {
  console.log("Fetching weather...");

  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Current weather:", data.current_weather);
  } catch (error) {
    console.error("Error fetching weather:", error.message);
  } finally {
    console.log("Done!");
  }
}

getWeather();
