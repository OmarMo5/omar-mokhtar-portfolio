// EmailJS Configuration
// ----------------------------------------------------------------------------
// Replace these placeholder values with your actual EmailJS credentials.
// Get them from https://dashboard.emailjs.com/
//
// 1) SERVICE_ID  -> Email Services tab
// 2) TEMPLATE_ID -> Email Templates tab
// 3) PUBLIC_KEY  -> Account > General
//
// You can also wire these to Vite env vars (VITE_EMAILJS_*) if preferred.
// ----------------------------------------------------------------------------

export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
  TO_EMAIL: "omarmokhtar20015@gmail.com",
};
