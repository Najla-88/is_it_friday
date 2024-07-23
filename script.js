// Get the current date
const currentDate = new Date();
const currentDay = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 5 = Friday, 6 = Saturday

// Check if it's Friday
if (currentDay === 5) {
    document.getElementById('result').textContent = 'Yes';
} else {
    document.getElementById('result').textContent = 'No';
}