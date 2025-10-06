const sendBtn = document.getElementById('sendButton');
const form = document.getElementById('sendForm');
const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');
const formInfo = document.getElementById('form__info');
const formPopupTxt = document.getElementById('form__popup-txt');

form.addEventListener('submit', sendEmail);

async function sendEmail(e) {
  e.preventDefault();
  formInfo.classList.add('hide');
  sendBtn.value = 'Sending...';

  const serviceID = 'service_tgpu08l';
  const templateID = 'template_kobo8ht';

  // Check if EmailJS is initialized
  if (typeof emailjs === 'undefined') {
    sendBtn.value = 'Send';
    formInfo.style.backgroundColor = '#8b1a09';
    formPopupTxt.textContent = 'EmailJS not configured! Please add your API key.';
    formInfo.classList.remove('hide');
    console.error('EmailJS is not loaded. Add your public key in index.js');
    return;
  }

  try {
    await emailjs.sendForm(serviceID, templateID, this);
    sendBtn.value = 'Send';
    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
    formInfo.style.backgroundColor = 'rgb(0 113 12)';
    formPopupTxt.textContent = 'Email was successfully sent!';
    formInfo.classList.remove('hide');
    
    // Trigger confetti celebration! 🎉
    import('./advancedFeatures.js').then(module => {
      module.triggerConfetti();
    }).catch(err => console.log('Advanced features not available'));
    
    // Auto-hide success message after 5 seconds
    setTimeout(() => {
      formInfo.classList.add('hide');
    }, 5000);
  } catch (err) {
    sendBtn.value = 'Send';
    formInfo.style.backgroundColor = '#8b1a09';
    formPopupTxt.textContent = 'Error sending email! Check console for details.';
    formInfo.classList.remove('hide');
    console.error('EmailJS Error:', err);
    
    // Auto-hide error message after 5 seconds
    setTimeout(() => {
      formInfo.classList.add('hide');
    }, 5000);
  }
}

export { sendEmail };
