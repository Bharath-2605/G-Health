// Signup form handling
document.getElementById('signup-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Get form input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Check if user is already registered
    if (localStorage.getItem('userDetails')) {
        const existingUsers = JSON.parse(localStorage.getItem('userDetails'));
        const userExists = existingUsers.find(user => user.email === email);
        
        if (userExists) {
            document.getElementById('signup-message').textContent = 'Account already exists. Please log in.';
            return; // Stop further execution if user already exists
        }
    } else {
        localStorage.setItem('userDetails', JSON.stringify([])); // Initialize storage if empty
    }

    // Create a new user and store in localStorage
    const newUser = { email, password };
    const users = JSON.parse(localStorage.getItem('userDetails'));
    users.push(newUser);
    
    localStorage.setItem('userDetails', JSON.stringify(users));
    
    // Display success message
    document.getElementById('signup-message').textContent = 'Signup successful. You can now log in.';
    
    // Reset form after signup
    document.getElementById('signup-form').reset();
});
