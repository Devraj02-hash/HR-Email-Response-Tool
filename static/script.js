const form = document.getElementById('emailForm');
const previewContainer = document.getElementById('previewContainer');
const emailPreview = document.getElementById('emailPreview');
const confirmSend = document.getElementById('confirmSend');
const messageDiv = document.getElementById('message');

let emailData = {};

form.addEventListener('submit', function(e) {
    e.preventDefault();

    emailData = {
        name: document.getElementById('candidateName').value,
        email: document.getElementById('candidateEmail').value,
        position: document.getElementById('positionApplied').value,
        status: document.querySelector('input[name="status"]:checked').value
    };

    // Generate preview
    let template = '';
    if(emailData.status === 'Selected'){
        template = `Dear ${emailData.name},\n\nWe are pleased to inform you that you have been selected for the position of ${emailData.position}.\n\nPlease reply to this email to confirm your acceptance.\n\nBest regards,\nHR Team`;
    } else {
        template = `Dear ${emailData.name},\n\nThank you for applying for the position of ${emailData.position}.\n\nWe regret to inform you that we have decided to move forward with other candidates.\n\nBest regards,\nHR Team`;
    }

    emailPreview.textContent = template;
    previewContainer.style.display = 'block';
});

confirmSend.addEventListener('click', function() {
    fetch('http://127.0.0.1:5000/send-email', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(emailData)
    })
    .then(res => res.json())
    .then(data => {
        messageDiv.textContent = data.message;
        previewContainer.style.display = 'none';
        form.reset();
    })
    .catch(err => {
        messageDiv.textContent = 'Error sending email.';
        console.error(err);
    });
});
