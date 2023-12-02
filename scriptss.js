document.getElementById('campaignFormButton').addEventListener('click', function() {
    window.location.href = '#campaignform';
});

document.getElementById('submitFormButton').addEventListener('click', function() {
    var formData = {
        name: document.getElementById('name').value,
        staffNo: document.getElementById('staffNo').value,
        kcdio: document.getElementById('kcdio').value,
        contactNo: document.getElementById('contactNo').value,
        email: document.getElementById('email').value,
        amount: document.getElementById('amount').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        kulliyyah: document.getElementById('kulliyyah').value,
    };

    console.log('Form data:', formData);

    if (Object.values(formData).some(field => field === '')) {
        alert('Please fill out all fields before submitting.');
    } else {
        alert('Form submitted successfully!');
    }

   
});
