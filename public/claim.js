const content = document.getElementsByTagName('section')[0];
const content2 = document.getElementsByTagName('section')[1];
const content3 = document.getElementsByTagName('section')[2];
const content4 = document.getElementsByTagName('section')[3];
const nav = document.getElementsByTagName('nav')[0];
const span = document.getElementsByTagName('span')[0];
const darkModeButton = document.getElementById('dark-change');
const star = document.getElementsByTagName('i')[0];
const profile = document.getElementsByTagName('div')[84];
const profile2 = document.getElementsByTagName('div')[98]
const kyc = document.getElementsByTagName('a')[5];

//Dark mode for the profile box
function toggleProfileBoxDarkMode() {
    profile.classList.toggle('black');
    profile2.classList.toggle('black');
}

//Other dark mode
function toggleGlobalDarkMode() {
    darkModeButton.classList.toggle('active');
    content.classList.toggle('night');
    content2.classList.toggle('night');
    content4.classList.toggle('night');
    nav.classList.toggle('night');
    span.classList.toggle('night');
    star.classList.toggle('night');
    kyc.classList.remove('normal');
    kyc.classList.toggle('night');
}

//Dark mode button
darkModeButton.addEventListener('click', function () {
    toggleGlobalDarkMode();
    toggleProfileBoxDarkMode();
});



document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('sendButton');
    sendButton.addEventListener('click', sendEmail);
});

function sendEmail() {
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const recipientEmail = emailInput.value;
    const message = messageInput.value;

    // Prepare the email link
    const subject = 'Check out this message!';
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Open the email client
    window.location.href = mailtoLink;
}
