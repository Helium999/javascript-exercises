const convertToCelsius = function(tempInFahrenheit) {
  celsiusReading = ((tempInFahrenheit - 32) * 5/9)
  return Number(celsiusReading.toFixed(1))
};

const convertToFahrenheit = function(tempInCelsius) {
  fahrenheitReading = ((tempInCelsius * 9/5)+32)
  return Number(fahrenheitReading.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
