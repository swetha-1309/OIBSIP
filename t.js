function convertTemperature() {
            // Get user input
            var temperature = parseFloat(document.getElementById('temperature').value);
            var unit = document.getElementById('unit').value;

            // Check if input is a valid number
            if (isNaN(temperature)) {
                alert('Please enter a valid number for temperature.');
                return;
            }

            // Perform conversion
            var result;
            if (unit === 'celsius') {
                result = (temperature * 9/5) + 32; // Celsius to Fahrenheit
            } else if (unit === 'fahrenheit') {
                result = (temperature - 32) * 5/9; // Fahrenheit to Celsius
            } else if (unit === 'kelvin') {
                result = temperature + 273.15; // Celsius to Kelvin
            }

            // Display result
            document.getElementById('result').innerText = 'Converted Temperature: ' + result.toFixed(2) + ' ' + unit.charAt(0).toUpperCase() + unit.slice(1);
        }