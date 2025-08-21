// Select the form and result container
const form = document.querySelector('form');
const result = document.querySelector('#result');

// Add event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload

    // Get user input values
    const weight = parseFloat(document.querySelector('#weight').value); // weight in kg
    const height = parseFloat(document.querySelector('#height').value) / 100; // height in cm → meters

    // Validate input
    if (isNaN(weight) || isNaN(height)) {
        result.textContent = 'Please enter valid numbers for weight and height.';
        return;
    }

    // Calculate BMI using formula: weight (kg) / height^2 (m^2)
    const bmi = weight / (height * height);

    // Display BMI rounded to 2 decimals
    result.textContent = `Your BMI is ${bmi.toFixed(2)}`;

    // Add BMI category based on value
    if (bmi < 18.5) {
        result.textContent += ' (Underweight)';
    } else if (bmi < 24.9) {
        result.textContent += ' (Normal weight)';
    } else if (bmi < 29.9) {
        result.textContent += ' (Overweight)';
    } else {
        result.textContent += ' (Obesity)';
    }
});
