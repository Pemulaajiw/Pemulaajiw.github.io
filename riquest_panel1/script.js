function sendWhatsAppRequest() {
    var form = document.getElementById('requestForm');
    var formData = new FormData(form);

    // Build WhatsApp message with form data
    var message = "BELI%20PANEL%20DO%201%20TAHUN%0A";
    formData.forEach(function(value, key) {
        message += key + "%3A%20" + value + "%0A";
    });

    // Construct the WhatsApp URL with the message
    var whatsappUrl = "https://wa.me/6285238906544?text=" + message ;

    // Redirect user to WhatsApp
    window.location.href = whatsappUrl;
}