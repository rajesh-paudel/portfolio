import emailjs from "@emailjs/browser";

export const sendContactEmail = async ({ name, email, message }) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "EmailJS credentials are missing. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.",
    );
  }

  const templateParams = {
    from_name: name,
    from_email: email,
    message,
  };

  return emailjs.send(serviceId, templateId, templateParams, publicKey);
};
