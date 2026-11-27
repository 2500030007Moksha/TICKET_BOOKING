# TicketHub — review project

Run `npm install`, then `npm run dev`. Production: `npm run build` and `npm run preview`.

React renders separate AuthModule, UserModule and AdminModule JSX components. The original imperative DOM controller is retained for dynamic event cards, seats, tickets and dashboard tables to preserve the original UI. Storage helpers are in src/services/localStorage.js.

Admin demo: admin@tickethub.com / admin123. Customer: register a new demo email and password, then login. Use Keep Signed In to persist the session in Local Storage; otherwise Session Storage is used. Separate keys: ticketHubUsers, ticketHubEvents, ticketHubBookings, ticketHubSession. Inspect with F12 > Application > Local Storage. Data is browser/origin-specific, not shared between devices. Passwords and admin access are demo-only and insecure; do not enter real passwords. Password reset does not verify email ownership. Payment is simulated; no real funds or SMS.

## Vercel
Push this folder to GitHub. In Vercel choose Add New > Project > import repository > Vite > Deploy. Build command npm run build; output dist. Open the generated URL and repeat signup, login, booking and admin checks. No backend is required for this demo. Original optional server is not included in this frontend deployment.

## Review checks
Register, reject duplicate email, reject wrong password, login, select seats, complete demo payment, view ticket, logout, login as admin, inspect booking and sales, add/edit event, reload and inspect persisted data. Build and browser execution must be verified locally: dependency installation was unavailable in the generation environment.
