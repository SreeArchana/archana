import emailjs from 'emailjs-com';

export function hasEmailConfig() {
  return Boolean(
    import.meta.env.VITE_EMAILJS_SERVICE_ID &&
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}

export function sendContactEmail(formData) {
  if (!hasEmailConfig()) {
    return Promise.resolve({ skipped: true });
  }

  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formData,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  );
}
