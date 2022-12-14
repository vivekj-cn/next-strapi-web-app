import React from 'react';
import Nav from "../components/Nav";

function Contact() {
  return (
    <>
    <section class="tm-section">
        <Nav />
            <div class="tm-content-container">
                <div class="mb-0 tm-img-overlay-wrap">
                    <div class="tm-img-overlay"></div>
                    <div class="tm-img-overlay-text text-white p-5">
                        <h4 class="mb-4">Contact Text on Image</h4>
                        <p class="tm-small">
                            Text on image has a CSS semi-transparent BG layer on image.
                            Praesent ut metus nibh. Vivamus diam purus, finibus et porttitor
                            quis, tristique ac velit. Etiam sed nunc eget lacus sagittis
                            hendrerit at ullamcorper nulla.
                        </p>
                    </div>
                </div>
                <div class="tm-content">
                    <form action="" method="POST" class="tm-contact-form">
                        <div class="form-group">
                            <input type="text" id="contact_name" name="contact_name"
                                class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                placeholder="Name" required="" />
                        </div>
                        <div class="form-group">
                            <input type="email" id="contact_email" name="contact_email"
                                class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                placeholder="Email" required="" />
                        </div>

                        <div class="form-group">
                            <textarea rows="6" id="contact_message" name="contact_message"
                                class="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                placeholder="Message..." required=""></textarea>
                        </div>

                        <div class="form-group text-right">
                            <button type="submit" class="btn btn-primary rounded-0">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact;
