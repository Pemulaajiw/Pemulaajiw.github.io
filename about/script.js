const header = document.getElementById('header');
let prevScrollpos = window.pageYOffset;

function sendWhatsAppRequest() {
    var form = document.getElementById('requestForm');
    var formData = new FormData(form);

    // Build WhatsApp message with form data
    var message = "HAI%20AJI%20SENANG%20%BERTEMU%0A";
    formData.forEach(function(value, key) {
        message += key + "%3A%20" + value + "%0A";
    });

    // Construct the WhatsApp URL with the message
    var whatsappUrl = "https://wa.me/6287898083051?text=" + message ;

    // Redirect user to WhatsApp
    window.location.href = whatsappUrl;
}

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        header.style.top = "0";
    } else {
        header.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('show');
        } else {
            section.classList.remove('show');
        }
    });
}
