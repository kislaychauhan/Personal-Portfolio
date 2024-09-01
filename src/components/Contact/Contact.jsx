import React, { useState } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f25bba33-9444-40b2-9c72-31c2cb9a6322");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setShowNotification(true);
        event.target.reset();
        setTimeout(() => setShowNotification(false), 3000); // Hide notification after 3 seconds
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setResult("An error occurred while submitting the form. Please try again later.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title" data-aos='fade-in'>
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left" data-aos='fade-right'>
          <h1>Let's Talk</h1>
          <p>Whether you have a project in mind, need some creative input, or just want to discuss ideas, I'm here to listen and collaborate. I believe in open communication and the power of teamwork to bring visions to life. Let's connect and see how we can create something amazing together. Feel free to reach out with any inquiries or proposals. I'm excited to hear from you!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>kislaychauhan90@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>Mathura, Uttar Pradesh</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+91 99918 38495</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right" data-aos='fade-left'>
          <label htmlFor="name">Your Name</label>
          <input type="text" placeholder="Enter Your Name" name="name" required />
          <label htmlFor="email">Your E-Mail</label>
          <input type="email" placeholder="Enter Your E-Mail" name="email" required />
          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button type="submit" className="contact-submit">Submit</button>
          <div className="form-result">{result}</div>
        </form>
      </div>
      {showNotification && (
        <div className="notification">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;
