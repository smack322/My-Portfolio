import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact-section">
            <h2>Contact Me</h2>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Your name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Your email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" placeholder="Your message"></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}

export default Contact;