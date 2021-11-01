import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="row me-0">
                <div class="col-md-5 banner">
                    <div class="banner">
                        <div class="layer">
                            <img src="assets/img/logo-ALTA-v2@2x.png" class="alterra-left" alt="alterra" />
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <div class="forms">
                        <h3>Contact Us</h3>
                        <form action="review_message.html" class="f-contact needs-validation" name="form-message" novalidate>
                            <div class="mb-1">
                                <label class="form-label">Full Name <span class="text-danger">*</span></label>
                                <input type="text" id="fName" class="form-control" name="fName" placeholder="Your Full Name Here..." required />
                                <div class="invalid-feedback">Full name cannot be empty</div>
                            </div>
                            <div class="mb-1">
                                <label class="form-label">Email Address <span class="text-danger">*</span></label>
                                <input type="email" id="email" class="form-control" name="email" placeholder="example@domain.com" required />
                                <div class="invalid-feedback">Email address cannot be empty</div>
                            </div>
                            <div class="mb-1">
                                <label class="form-label">Phone Number <span class="text-danger">*</span></label>
                                <input type="number" id="phoneNumber" minlength="12" class="form-control" name="phoneNumber" placeholder="08573819xxxx" required />
                                <div class="invalid-feedback">Phone number cannot be empty</div>
                            </div>
                            <div class="mb-1">
                                <label class="form-label">Nasionality </label>
                                <select class="form-select form" id="nationality" required>
                                    <option selected value="" disabled>Choose Country</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="English">USA</option>
                                    <option value="Spanyol">Spanyol</option>
                                    <option value="Brazil">Brazil</option>
                                </select>
                                <div class="invalid-feedback">Region cannot be empty</div>
                            </div>
                            <div class="mb-1">
                                <label class="form-label">Message </label>
                                <textarea class="form-control" id="messageText" rows="4" name="message" placeholder="Your Message Here..." required></textarea>
                                <div class="invalid-feedback">Message cannot be empty</div>
                            </div>
                            <button type="submit" class="btn submit" onclick="localVal()" name="submit" id="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
