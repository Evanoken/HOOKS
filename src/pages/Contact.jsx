import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-details">
        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <p>Email: evansngugi954@gmail.com</p>
        </div>
        <div className="contact-info">
          <FaPhoneAlt className="contact-icon" />
          <p>Phone: +254706853281</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
