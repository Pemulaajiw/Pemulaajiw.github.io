function sendWhatsAppRequest() {
    var form = document.getElementById('requestForm');
    var formData = new FormData(form);

    // Build WhatsApp message with form data
    var message = "REQUEST%20AKUN%20ANDA%0A▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬%0ASERVER%20SG%20DO%20SPEED2&3%0A";
    var message1 = "▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬%0A";
    formData.forEach(function(value, key) {
        message += key + "%3A%20" + value + "%0A";
    });

    // Construct the WhatsApp URL with the message
    var whatsappUrl = "https://wa.me/6287898083051?text=" + message + message1;

    // Redirect user to WhatsApp
    window.location.href = whatsappUrl;
}
