// Health Checkup Form Submission
document.getElementById('checkup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collecting form data
    const patientName = document.getElementById('patient-name').value;
    const age = document.getElementById('age').value;
    const checkupType = document.getElementById('checkup-type').value;
    const checkupDate = document.getElementById('checkup-date').value;

    // Display a success message
    alert(`Checkup details submitted successfully for ${patientName}.\n` +
          `Age: ${age}\n` +
          `Checkup Type: ${checkupType}\n` +
          `Checkup Date: ${checkupDate}`);

    // Optionally, reset the form after submission
    document.getElementById('checkup-form').reset();
});
