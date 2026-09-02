// The actual product (Metrolog-Cloud-Frontal) is a separate deployment —
// set VITE_APP_URL in production to point here instead of localhost.
export const APP_URL = import.meta.env.VITE_APP_URL ?? 'http://localhost:5173'
export const SIGNUP_URL = `${APP_URL}/registro`
export const LOGIN_URL = `${APP_URL}/login`
