import React from 'react';
import logo from '../assets/img/logo-ALTA-v2@2x.png';

const Contact = () => {
    return (
        <div>
            <div className="row me-0">
                <div className="col-md-5 banner">
                    <div className="banner">
                        <div className="layer">
                            <img src={logo} className="alterra-left" alt="alterra" />
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="forms">
                        <h3>Contact Us</h3>
                        <form action="review_message.html" className="f-contact needs-validation" name="form-message" novalidate>
                            <div className="mb-1">
                                <label className="form-label">Full Name <span className="text-danger">*</span></label>
                                <input type="text" id="fName" className="form-control" name="fName" placeholder="Your Full Name Here..." required />
                                <div className="invalid-feedback">Full name cannot be empty</div>
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Email Address <span className="text-danger">*</span></label>
                                <input type="email" id="email" className="form-control" name="email" placeholder="example@domain.com" required />
                                <div className="invalid-feedback">Email address cannot be empty</div>
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Phone Number <span className="text-danger">*</span></label>
                                <input type="number" id="phoneNumber" minlength="12" className="form-control" name="phoneNumber" placeholder="08573819xxxx" required />
                                <div className="invalid-feedback">Phone number cannot be empty</div>
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Nasionality </label>
                                <select className="form-select form" id="nationality" required>
                                    <option selected value="" disabled>Choose Country</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="English">USA</option>
                                    <option value="Spanyol">Spanyol</option>
                                    <option value="Brazil">Brazil</option>
                                </select>
                                <div className="invalid-feedback">Region cannot be empty</div>
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Message </label>
                                <textarea className="form-control" id="messageText" rows="4" name="message" placeholder="Your Message Here..." required></textarea>
                                <div className="invalid-feedback">Message cannot be empty</div>
                            </div>
                            <button type="submit" className="btn submit" onclick="localVal()" name="submit" id="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
