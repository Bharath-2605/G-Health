// Login and Signup Logic
document.getElementById('show-signup')?.addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('show-login')?.addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('signup-button')?.addEventListener('click', function() {
    const signupUsername = document.getElementById('signup-username').value;
    const signupPassword = document.getElementById('signup-password').value;

    // Store credentials in localStorage
    localStorage.setItem(signupUsername, signupPassword);

    alert('Account created successfully!');
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('login-button')?.addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check credentials from localStorage
    if (localStorage.getItem(username) === password) {
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid username or password.');
    }
});

// Reset Password functionality
document.getElementById('reset-password')?.addEventListener('click', function() {
    const email = prompt("Please enter your email address for password reset:");
    if (email) {
        alert(`A reset link has been sent to ${email}.`);
    } else {
        alert('Email address cannot be empty.');
    }
});

// Personal Details Logic
function loadPreviousData() {
    document.getElementById('faculty-id').value = localStorage.getItem('faculty-id') || '';
    document.getElementById('campus').value = localStorage.getItem('campus') || '';
    document.getElementById('department').value = localStorage.getItem('department') || '';
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('dob').value = localStorage.getItem('dob') || '';
    document.getElementById('blood-group').value = localStorage.getItem('blood-group') || '';
    document.getElementById('mobile-number').value = localStorage.getItem('mobile-number') || '';
}

// Load previous data on page load for personal details page
if (window.location.pathname.endsWith('personal-details.html')) {
    window.onload = loadPreviousData;

    document.getElementById('submit-details')?.addEventListener('click', function() {
        const facultyId = document.getElementById('faculty-id').value;
        const campus = document.getElementById('campus').value;
        const department = document.getElementById('department').value;
        const name = document.getElementById('name').value;
        const dob = document.getElementById('dob').value;
        const bloodGroup = document.getElementById('blood-group').value;
        const mobileNumber = document.getElementById('mobile-number').value;

        // Prepare new entry as a CSV formatted string
        const newEntry = `${facultyId},${campus},${department},${name},${dob},${bloodGroup},${mobileNumber}\n`;

        // Get existing CSV data from localStorage or initialize it
        let existingData = localStorage.getItem('personalDetailsCSV') || 'Faculty ID,Campus,Department,Name,Date of Birth,Blood Group,Mobile Number\n';

        // Append the new entry to the existing data
        existingData += newEntry;

        // Store updated data back to localStorage
        localStorage.setItem('personalDetailsCSV', existingData);

        // Create a downloadable link
        const encodedUri = encodeURI('data:text/csv;charset=utf-8,' + existingData);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "personal_details.csv");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the CSV file
        document.body.removeChild(link); // Remove the link after downloading

        alert('Details updated successfully.');
        
        // Input fields will retain their values
    });
}
