document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
  
    loginForm.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const username = document.getElementById('usernameInput').value;
      const password = document.getElementById('passwordInput').value;
  
      try 
      {
        const response = await fetch('https://backend-py-2.onrender.com/signin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          // Login successful
          alert("Login successfull !!");// Display success message
          // You can redirect to another page or perform other actions here
        } else {
          // Login failed
          alert(data.message); // Display error message
        }
      } 
      catch (error) 
      {
        console.error('Login failed:', error);
        alert('Login failed. Please try again.');
      }
    });
  });
  