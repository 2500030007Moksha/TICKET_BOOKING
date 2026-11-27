import React from "react";
export default function UserModule({actions}) { return <>
<div id={"mainPage"} className={"main-page"}>
<header>
<div className={"logo"}>{"🎟️ TicketHub"}</div>
<div className={"search-box"}>
<input type={"text"} id={"searchInput"} placeholder={"Search Movies, Concerts, Sports, Theatre..."} />
<button onClick={event => { actions.searchEvents() }}>{"Search"}</button>
</div>
<div className={"menu"}>
<span onClick={event => { actions.goHome() }}>{"Home"}</span>
<span onClick={event => { actions.showBookings() }}>{"My Bookings"}</span>
<span onClick={event => { actions.logout() }}>{"Logout"}</span>
</div>
</header>
<div className={"category-bar"} id={"customerCategoryBar"}>
<button data-cat={"All"} onClick={event => { actions.filterEvents('All') }}>{"🏠 All"}</button>
<button data-cat={"Movies"} onClick={event => { actions.filterEvents('Movies') }}>{"🎬 Movies"}</button>
<button data-cat={"Concerts"} onClick={event => { actions.filterEvents('Concerts') }}>{"🎵 Concerts"}</button>
<button data-cat={"Sports"} onClick={event => { actions.filterEvents('Sports') }}>{"🏏 Sports"}</button>
<button data-cat={"Theatre"} onClick={event => { actions.filterEvents('Theatre') }}>{"🎭 Theatre"}</button>
</div>

<div id={"homeView"}>
<section className={"banner"}>
<div>
<h1>{"ONLINE TICKET BOOKING"}</h1>
<p>{"Book Movies, Concerts, Sports & Theatre Events"}</p>
<button onClick={event => { actions.scrollToEvents() }}>{"Explore Events"}</button>
</div>
</section>
<section className={"welcome"}>
<h1>{"Welcome to TicketHub"}</h1>
<p id={"welcomeText"}>{"Book your favourite events quickly, securely and conveniently."}</p>
</section>
<section className={"section"}>
<h2>{"Categories"}</h2>
<div className={"category-container"}>
<div className={"category-card"} onClick={event => { actions.filterEvents('Movies') }}>
<div>{"🎬"}</div><h3>{"Movies"}</h3><p>{"Latest Movies"}</p>
</div>
<div className={"category-card"} onClick={event => { actions.filterEvents('Concerts') }}>
<div>{"🎵"}</div><h3>{"Concerts"}</h3><p>{"Live Music Events"}</p>
</div>
<div className={"category-card"} onClick={event => { actions.filterEvents('Sports') }}>
<div>{"🏏"}</div><h3>{"Sports"}</h3><p>{"Sports Matches"}</p>
</div>
<div className={"category-card"} onClick={event => { actions.filterEvents('Theatre') }}>
<div>{"🎭"}</div><h3>{"Theatre"}</h3><p>{"Drama & Shows"}</p>
</div>
</div>
</section>
<section className={"section"} id={"events"}>
<h2 id={"eventsHeading"}>{"Upcoming Events"}</h2>
<div className={"event-container"} id={"eventContainer"}></div>
<p className={"empty-message"} id={"noEvents"} style={{"display": "none"}}>{"No events found for this selection."}</p>
</section>
<section className={"section"}>
<h2>{"Popular Events"}</h2>
<div className={"popular-container"} id={"popularContainer"}></div>
</section>
<section className={"services"}>
<div><h3>{"🎟️ Easy Booking"}</h3><p>{"Book tickets easily online."}</p></div>
<div><h3>{"🔒 Secure Payment"}</h3><p>{"Safe and secure payment."}</p></div>
<div><h3>{"📱 Digital Ticket"}</h3><p>{"Get your ticket instantly."}</p></div>
<div><h3>{"🎧 24 × 7 Support"}</h3><p>{"Customer support anytime."}</p></div>
</section>
<section className={"organizer"}>
<h2>{"Organizers"}</h2>
<p>{"Organizers manage event details, monitor ticket sales and offer promotions through the TicketHub admin dashboard."}</p>
</section>
</div>

<div id={"bookingsView"} style={{"display": "none"}}>
<section className={"section"}>
<h2>{"My Bookings"}</h2>
<div className={"table-wrap"}>
<table>
<thead>
<tr>
<th>{"Booking ID"}</th><th>{"Event"}</th><th>{"Date & Time"}</th><th>{"Seats"}</th>
<th>{"Amount"}</th><th>{"Status"}</th><th>{"Ticket"}</th>
</tr>
</thead>
<tbody id={"myBookingsBody"}></tbody>
</table>
</div>
<p className={"empty-message"} id={"noMyBookings"} style={{"display": "none"}}>{"You have no bookings yet."}</p>
</section>
</div>
<footer>
<h2>{"TicketHub"}</h2>
<p className={"footer-links"}>
<span onClick={event => { actions.goHome() }}>{"Home"}</span>{" |\n            "}<span onClick={event => { actions.scrollToEvents() }}>{"Events"}</span>{" |\n            "}<span onClick={event => { actions.filterEvents('All') }}>{"Categories"}</span>{" |\n            "}<span onClick={event => { actions.showBookings() }}>{"My Bookings"}</span>{" |\n            "}<span onClick={event => { actions.showInfo('Contact us at support@tickethub.example (demo).') }}>{"Contact Us"}</span>{" |\n            "}<span onClick={event => { actions.showInfo('Help: choose an event, select seats, pay, and get your digital ticket.') }}>{"Help"}</span>
</p>
<p>{"Copyright © 2026 TicketHub"}</p>
</footer>
</div>
<section id={"securePaymentPage"} className={"secure-flow-page"} style={{"display": "none"}}>
<div className={"secure-payment-shell"}>
<div className={"secure-payment-heading"}>
<div className={"secure-flow-brand"}>{"🎟️ TicketHub Checkout"}</div>
<h1>{"Complete Your Booking"}</h1>
<p>{"DEMO PAYMENT MODE — no real money is charged"}</p>
</div>
<div className={"secure-payment-grid"}>
<div className={"secure-payment-card"}>
<h2>{"Booking Summary"}</h2>
<div id={"secureCheckoutSummary"} className={"secure-summary-lines"}></div>
<div className={"secure-security-note"}>{"Use only fictional test details. No real payment or bank credentials are required or stored."}</div>
</div>
<div className={"secure-payment-card"}>
<h2>{"Choose Payment Method"}</h2>
<div className={"secure-method-list"}>
<label><input type={"radio"} name={"secureMethod"} defaultValue={"upi"} defaultChecked={true} />
<span>{"▦"}</span>{" UPI / Scan QR"}</label>
<label><input type={"radio"} name={"secureMethod"} defaultValue={"debit"} />
<span>{"💳"}</span>{" Debit Card"}</label>
<label><input type={"radio"} name={"secureMethod"} defaultValue={"credit"} />
<span>{"💳"}</span>{" Credit Card"}</label>
<label><input type={"radio"} name={"secureMethod"} defaultValue={"netbanking"} />
<span>{"🏦"}</span>{" Net Banking"}</label>
</div>
<div id={"secureUpiPanel"} className={"secure-upi-panel"}>
<p>{"Generate a scannable demo QR for this booking amount (not payable)."}</p>
<button type={"button"} className={"secure-flow-primary"} onClick={event => { actions.startUpiQrPayment() }}>{"Generate UPI QR Code"}</button>
<div id={"upiQrResult"} className={"secure-qr-result"} aria-live={"polite"}></div>
</div>
<div id={"secureGatewayPanel"} className={"secure-gateway-panel"} style={{"display": "none"}}>
<form id={"demoPayForm"} onSubmit={event => { actions.startGatewayPayment(event) }}>
<div id={"demoCardFields"}><p>{"Use test card 4111111111111111, any future expiry, and 123 as test CVV."}</p>
<label>{"Cardholder name"}<input id={"demoName"} autoComplete={"off"} placeholder={"Demo Customer"} /></label>
<label>{"Test card number"}<input id={"demoCard"} inputmode={"numeric"} autoComplete={"off"} maxLength={"19"} placeholder={"4111111111111111"} /></label>
<label>{"Expiry (MM/YY)"}<input id={"demoExpiry"} placeholder={"12/30"} maxLength={"5"} /></label>
<label>{"Test CVV"}<input id={"demoCvv"} type={"password"} inputmode={"numeric"} maxLength={"3"} autoComplete={"off"} placeholder={"123"} /></label></div>
<div id={"demoBankFields"} hidden={true}><label>{"Select bank"}<select id={"demoBank"}><option defaultValue={""}>{"Choose bank"}</option><option>{"SBI"}</option><option>{"HDFC Bank"}</option><option>{"ICICI Bank"}</option><option>{"Axis Bank"}</option></select></label></div>
<button type={"submit"} className={"secure-flow-primary"}>{"Pay Now (Demo)"}</button></form>
</div>
<p id={"paymentStatus"} className={"secure-flow-status"} aria-live={"polite"}></p>
<button type={"button"} className={"secure-flow-back"} onClick={event => { actions.cancelSecurePayment() }}>{"← Back to Seating Plans"}</button>
</div>
</div>
</div>
</section>
<div className={"modal"} id={"detailsModal"}>
<div className={"modal-box"}>
<span className={"close"} onClick={event => { actions.closeDetails() }}>{"×"}</span>
<h2>{"Event Details"}</h2>
<h3 id={"detailName"}></h3>
<p>{"Category: "}<span id={"detailCategory"}></span></p>
<p>{"Date: "}<span id={"detailDate"}></span></p>
<p>{"Time: "}<span id={"detailTime"}></span></p>
<p>{"Venue: "}<span id={"detailVenue"}></span></p>
<p>{"Ticket Price: "}<span id={"detailPrice"}></span></p>
<p>{"Available Seats: "}<span id={"detailSeats"}></span></p>
<p id={"detailDescription"}></p>
<button className={"book-btn"} id={"detailBookBtn"}>{"Book Now"}</button>
<button className={"details-btn"} onClick={event => { actions.closeDetails() }}>{"Close"}</button>
</div>
</div>
<div className={"modal"} id={"bookingModal"}>
<div className={"modal-box"}>
<span className={"close"} onClick={event => { actions.closeBooking() }}>{"×"}</span>
<h2>{"🎟️ Book Your Ticket"}</h2>
<h3 id={"bookingEvent"}></h3>
<div className={"price-lines"}>
<p><span>{"Original Price"}</span><span id={"bookingPrice"}></span></p>
<p id={"discountRow"}><span>{"Discounted Price"}</span><span id={"bookingFinalPrice"}></span></p>
</div>
<h3>{"Select Seats (max 10)"}</h3>
<div className={"screen"}>{"SCREEN"}</div>
<div className={"seat-container seat-map"} id={"seatMap"}></div>
<p className={"legend"}>{"Green = available, Blue = selected, Grey = booked"}</p>
<div className={"price-lines"}>
<p><span>{"Selected Seats"}</span><span id={"selectedSeats"}>{"None"}</span></p>
<p><span>{"Number of Tickets"}</span><span id={"seatCount"}>{"0"}</span></p>
<p className={"total-line"}><span>{"Total Payable"}</span><span>{"₹"}<span id={"totalAmount"}>{"0"}</span></span></p>
</div>
<button className={"payment-btn"} onClick={event => { actions.showPayment() }}>{"Proceed to Checkout"}</button>
</div>
</div>
<div className={"modal"} id={"paymentModal"}>
<div className={"modal-box"}>
<span className={"close"} onClick={event => { actions.closePayment() }}>{"×"}</span>
<h2>{"💳 Checkout"}</h2>
<div id={"checkoutSummary"} className={"price-lines"}></div>
<p>{"Select Payment Method"}</p>
<select id={"paymentMethod"}>
<option>{"UPI"}</option>
<option>{"Credit Card"}</option>
<option>{"Debit Card"}</option>
<option>{"Net Banking"}</option>
</select>
<div className={"notice"}>{"\n            Demo payment: no money is taken and no card or UPI details are collected.\n            A real payment gateway is needed for real payments.\n        "}</div>
<button className={"payment-btn"} onClick={event => { actions.makePayment() }}>{"Confirm Booking (Demo Payment)"}</button>
</div>
</div>
<div className={"modal"} id={"ticketModal"}>
<div className={"digital-ticket"} id={"ticketPrintArea"}>
<h2>{"🎟️ DIGITAL TICKET"}</h2>
<div className={"ticket-line"}></div>
<h3 id={"ticketEvent"}></h3>
<p id={"ticketWhen"}></p>
<p id={"ticketVenue"}></p>
<p>{"Booking ID: "}<strong id={"bookingId"}></strong></p>
<p>{"Seats: "}<strong id={"ticketSeats"}></strong></p>
<p>{"Amount: ₹"}<strong id={"ticketAmount"}></strong></p>
<p id={"ticketCustomer"}></p><p id={"ticketDetails"}></p><p id={"ticketTransaction"}></p>
<div id={"ticketQr"}></div><p className={"success"} id={"ticketSuccess"}>{"✓ Booking Confirmed"}</p>
<p className={"small-text"}>{"Demo ticket. Payment not verified by a real gateway."}</p>
<button className={"no-print"} onClick={event => { actions.printTicket() }}>{"Print Ticket"}</button>
<button className={"no-print"} onClick={event => { actions.closeTicket() }}>{"Close"}</button>
</div>
</div>
</>; }
