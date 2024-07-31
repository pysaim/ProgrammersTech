const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();
    // serviceID - templateID - #form - publickey
    emailjs.sendForm('service_w38owov', 'template_a84r9qn', '#contact-form', 'zYR9r9b8riY5SGKgZ')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully ✅';

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);

            //Clear input Field
            contactForm.reset()
        },()=>{
            contactMessage.textContent="Message not send (Service Error) ❌"
        })
        
};

// Assuming 'contact__send' is a class name of your submit button
const submitButton = contactForm.querySelector('.contact__send');
submitButton.addEventListener('click', sendEmail);
