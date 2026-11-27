import React from "react";
export default function AuthModule({actions}) { return <>
<div id={"registerPage"} className={"login-body"} style={{"display": "none"}}>
<div className={"login-container"}>
<h1>{"MOVIEBOX"}</h1>
<div className={"line"}></div>
<h2 className={"auth-title"}>{"CREATE ACCOUNT"}</h2>
<form onSubmit={event => { actions.registerUser(event) }}>
<label>{"EMAIL ADDRESS"}</label>
<div className={"input-box"}>
<span>{"✉️"}</span>
<input type={"email"} id={"registerEmail"} placeholder={"Enter your email"} required={true} />
</div>
<label>{"PASSWORD"}</label>
<div className={"input-box"}>
<span>{"🔒"}</span>
<input type={"password"} id={"registerPassword"} placeholder={"Create password"} minLength={"6"} required={true} />
</div>
<label>{"CONFIRM PASSWORD"}</label>
<div className={"input-box"}>
<span>{"🔒"}</span>
<input type={"password"} id={"confirmPassword"} placeholder={"Confirm password"} minLength={"6"} required={true} />
</div>
<button type={"submit"} className={"signin-btn"}>{"CREATE ACCOUNT"}</button>
</form>
<button type={"button"} className={"signup-btn"} onClick={event => { actions.showLoginPage() }}>{"ALREADY HAVE AN ACCOUNT? LOGIN"}</button>
<div className={"bottom-line"}></div>
<p className={"footer-text"}>{"With "}<span>{"♡"}</span>{" TicketHub"}</p>
</div>
</div>
<div id={"loginPage"} className={"login-body"}>
<div className={"login-container"}>
<h1>{"MOVIEBOX"}</h1>
<div className={"line"}></div>
<div className={"role-tabs"}>
<button type={"button"} id={"customerTab"} className={"active"} onClick={event => { actions.setLoginRole('customer') }}>{"CUSTOMER LOGIN"}</button>
<button type={"button"} id={"adminTab"} onClick={event => { actions.setLoginRole('admin') }}>{"ADMIN LOGIN"}</button>
</div>
<h2 className={"auth-title"} id={"loginTitle"}>{"CUSTOMER LOGIN"}</h2>
<form onSubmit={event => { actions.loginUser(event) }}>
<label>{"EMAIL ADDRESS"}</label>
<div className={"input-box"}>
<span>{"✉️"}</span>
<input type={"email"} id={"loginEmail"} placeholder={"Enter your email"} required={true} />
</div>
<label>{"PASSWORD"}</label>
<div className={"input-box"}>
<span>{"🔒"}</span>
<input type={"password"} id={"loginPassword"} placeholder={"Password"} required={true} />
</div>
<div className={"login-options"}>
<label className={"remember"}>
<input type={"checkbox"} id={"keepSignedIn"} />{" Keep me Signed in\n                "}</label>
<a href={"#"} id={"forgotLink"} onClick={event => { actions.forgotPassword(); event.preventDefault(); }}>{"Forgot Password?"}</a>
</div>
<p className={"demo-hint"} id={"adminHint"} style={{"display": "none"}}>{"\n                Demo admin login:"}<br />{"\n                admin@tickethub.com / admin123"}<br />{"\n                (Frontend demo only. Real admin login needs a secure backend.)\n            "}</p>
<button type={"submit"} className={"signin-btn"}>{"SIGN IN"}</button>
</form>
<button type={"button"} className={"signup-btn"} id={"registerBtn"} onClick={event => { actions.showRegisterPage() }}>{"NEW CUSTOMER? REGISTER"}</button>
<div className={"bottom-line"}></div>
<p className={"footer-text"}>{"With "}<span>{"♡"}</span>{" TicketHub"}</p>
</div>
</div>
<section id={"forgotPasswordPage"} className={"secure-flow-page"} style={{"display": "none"}}>
<div className={"secure-flow-card"}>
<div className={"secure-flow-brand"}>{"🎟️ TicketHub"}</div>
<div className={"secure-flow-icon"}>{"✉️"}</div>
<h1>{"Forgot Password?"}</h1>
<p className={"secure-flow-subtitle"}>{"Demo account recovery: enter your registered email. This local demo does not verify email ownership."}</p>
<form id={"forgotPasswordForm"} onSubmit={event => { actions.requestPasswordReset(event) }}>
<label htmlFor={"forgotEmail"}>{"Email address"}</label>
<input id={"forgotEmail"} type={"email"} placeholder={"you@example.com"} required={true} />
<button className={"secure-flow-primary"} type={"submit"}>{"Continue"}</button>
<p id={"forgotStatus"} className={"secure-flow-status"} aria-live={"polite"}></p>
</form>
<button className={"secure-flow-back"} type={"button"} onClick={event => { actions.showLoginPage() }}>{"← Back to Login"}</button>
</div>
</section>
<section id={"resetPasswordPage"} className={"secure-flow-page"} style={{"display": "none"}}>
<div className={"secure-flow-card"}>
<div className={"secure-flow-brand"}>{"🎟️ TicketHub"}</div>
<div className={"secure-flow-icon"}>{"🔐"}</div>
<h1>{"Create New Password"}</h1>
<p className={"secure-flow-subtitle"}>{"Choose a strong password for your TicketHub account."}</p>
<form id={"resetPasswordForm"} onSubmit={event => { actions.submitNewPassword(event) }}>
<label htmlFor={"newPassword"}>{"New password"}</label>
<input id={"newPassword"} type={"password"} minLength={"8"} autoComplete={"new-password"} placeholder={"At least 8 characters"} required={true} />
<label htmlFor={"confirmNewPassword"}>{"Confirm new password"}</label>
<input id={"confirmNewPassword"} type={"password"} minLength={"8"} autoComplete={"new-password"} placeholder={"Re-enter your password"} required={true} />
<label><input type={"checkbox"} style={{"width": "auto"}} onChange={event => { actions.toggleResetPasswords(event.currentTarget.checked) }} />{" Show passwords"}</label>
<button className={"secure-flow-primary"} type={"submit"}>{"Update Password"}</button>
<p id={"resetStatus"} className={"secure-flow-status"} aria-live={"polite"}></p>
</form>
<button className={"secure-flow-back"} type={"button"} onClick={event => { actions.showLoginPage() }}>{"← Back to Login"}</button>
</div>
</section>
</>; }
