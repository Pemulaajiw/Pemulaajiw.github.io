function sendWhatsAppRequest() {
    var form = document.getElementById('requestForm');
    var formData = new FormData(form);

    // Build WhatsApp message with form data
    var message = "BELI%20SCRIPT%20FANSCTUNNEL%20V2%0A";
    formData.forEach(function(value, key) {
        message += key + "%2A%20" + value + "%0A";
    });

    // Construct the WhatsApp URL with the message
    var whatsappUrl = "https://wa.me/6287898083051?text=" + message ;

    // Redirect user to WhatsApp
    window.location.href = whatsappUrl;
}
