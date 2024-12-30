function sendWhatsAppRequest() {
    var form = document.getElementById('requestForm');
    var formData = new FormData(form);

    // Build WhatsApp message with form data
    var message = "BELI%20SCRIPT%20FANSCTUNNEL%20V3%0A";
    formData.forEach(function(value, key) {
        message += key + "%3A%20" + value + "%0A";
    });

    // Construct the WhatsApp URL with the message
    var whatsappUrl = "https://wa.me/6285238906544?text=" + message + message1;

    // Redirect user to WhatsApp
    window.location.href = whatsappUrl;
}