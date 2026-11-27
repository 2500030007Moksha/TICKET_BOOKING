const EVENTS_KEY = "ticketHubEvents";
const BOOKINGS_KEY = "ticketHubBookings";
const USERS_KEY = "ticketHubUsers";
const SESSION_KEY = "ticketHubSession";

function readData(key, fallback) {
    try {
        const value = JSON.parse(localStorage.getItem(key));
        return value === null || value === undefined ? fallback : value;
    } catch (error) {
        return fallback;
    }
}

function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function saveSession(role, email, keep) {
    localStorage.removeItem(SESSION_KEY);
    sessionStorage.removeItem(SESSION_KEY);
    const store = keep ? localStorage : sessionStorage;
    store.setItem(SESSION_KEY, JSON.stringify({ role: role, email: email }));
}

function getSession() {
    return readSession(sessionStorage) || readSession(localStorage);
}

function readSession(store) {
    try {
        return JSON.parse(store.getItem(SESSION_KEY));
    } catch (error) {
        return null;
    }
}


export { EVENTS_KEY, BOOKINGS_KEY, USERS_KEY, SESSION_KEY, readData, saveData, saveSession, getSession };
