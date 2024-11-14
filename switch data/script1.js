// Check if we are on the review page (review.html)
if (window.location.href.includes('review.html')) {
    // Get the saved data from localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const age = localStorage.getItem('age');
  
    // Display the data on the review page
    document.getElementById('reviewName').textContent = name;
    document.getElementById('reviewEmail').textContent = email;
    document.getElementById('reviewAge').textContent = age;
  
    // Handle the confirm button click
    document.getElementById('confirmBtn').addEventListener('click', function() {
      alert('Details Confirmed!');
      // Clear the stored data
      localStorage.clear();
    });
  }