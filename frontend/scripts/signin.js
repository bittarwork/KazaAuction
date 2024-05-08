 // Function to handle form submission
 function handleSubmit(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email , password)

    // Create request body object
    const requestBody = { email, password };

    // Make POST request to login API
    axios.post('http://localhost:5000/KazaAuctionApi/login', requestBody)
        .then(response => {
            console.log('Login successful!');
            console.log('User:', response.data.user);
            console.log('Token:', response.data.token);
            // You can perform further actions after successful login, such as redirecting to another page
        })
        .catch(error => {
            console.error('Login failed:', error.response.data.message);
            // Handle login failure, display error message, etc.
        });
}

// Add event listener to form submission
document.getElementById('loginForm').addEventListener('submit', handleSubmit);