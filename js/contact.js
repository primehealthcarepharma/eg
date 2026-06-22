import { EMAILJS_CONFIG } from './emailjs-config.js';

const contactForm = document.getElementById('contactForm');
if (!contactForm) {
  console.warn('Contact form not found. Skipping EmailJS contact handling.');
} else {
  const formResponse = document.getElementById('formResponse');
  const submitButton = contactForm.querySelector('[type="submit"]');

  const showToast = (message, status = 'info') => {
    const toast = document.createElement('div');
    toast.className = `toast-message ${status}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
    }, 2600);

    setTimeout(() => {
      toast.remove();
    }, 3200);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[\d+\s()\-]{8,25}$/.test(phone);
  };

  const validateForm = (data) => {
    if (!data.fullName || data.fullName.length < 3) {
      return 'Please enter your full name.';
    }

    if (!data.email || !validateEmail(data.email)) {
      return 'Please enter a valid email address.';
    }

    if (!data.phone || !validatePhone(data.phone)) {
      return 'Please enter a valid phone number.';
    }

    if (!data.address || data.address.length < 5) {
      return 'Please enter your address.';
    }

    if (!data.message || data.message.length < 10) {
      return 'Please enter a message with at least 10 characters.';
    }

    return '';
  };

  const setLoadingState = (isLoading) => {
    submitButton.disabled = isLoading;
    submitButton.textContent = isLoading ? 'Sending...' : 'Submit Message';
    formResponse.textContent = isLoading ? 'Sending your message...' : '';
    formResponse.style.color = isLoading ? 'var(--text)' : '';
  };

  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
      fullName: contactForm.fullName.value.trim(),
      email: contactForm.email.value.trim(),
      phone: contactForm.phone.value.trim(),
      address: contactForm.address.value.trim(),
      message: contactForm.message.value.trim()
    };

    const validationError = validateForm(formData);
    if (validationError) {
      formResponse.textContent = validationError;
      formResponse.style.color = '#e11d48';
      showToast(validationError, 'error');
      return;
    }

    if (!window.emailjs || typeof window.emailjs.send !== 'function') {
      const missingMessage = 'EmailJS SDK is not loaded. Please ensure the EmailJS script is included before contact.js.';
      formResponse.textContent = missingMessage;
      formResponse.style.color = '#e11d48';
      showToast(missingMessage, 'error');
      return;
    }

    const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;
    if (!serviceId || !templateId || !publicKey) {
      const badConfigMessage = 'EmailJS configuration is incomplete. Please update js/emailjs-config.js with correct values.';
      formResponse.textContent = badConfigMessage;
      formResponse.style.color = '#e11d48';
      showToast(badConfigMessage, 'error');
      return;
    }

    setLoadingState(true);
    emailjs.init(publicKey);

    try {
      const templateParams = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        message: formData.message
      };

      await emailjs.send(serviceId, templateId, templateParams);

      setLoadingState(false);
      formResponse.textContent = 'Your message was sent successfully. Thank you!';
      formResponse.style.color = 'var(--primary-green)';
      showToast('Message sent successfully!', 'success');
      contactForm.reset();
    } catch (error) {
      setLoadingState(false);
      const errorMessage = error?.text || error?.message || 'Failed to send your message. Please try again later.';
      formResponse.textContent = errorMessage;
      formResponse.style.color = '#e11d48';
      showToast('Failed to send your message. Please try again later.', 'error');
      console.error('EmailJS send error:', error);
    }
  });
}
