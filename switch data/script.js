// Handle form submission and save data to localStorage
document.getElementById('nextBtn').addEventListener('click', function() {
    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
  
    // Save the data to localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('age', age);
  
    // Redirect to the next page (review.html)
    window.location.href = 'review.html';
  });