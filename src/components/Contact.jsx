import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message submitted successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="section contact-section">
      <div className="section-title">
        <p>GET IN TOUCH</p>
        <h2>Contact <span>Me</span></h2>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's work together</h3>

          <p>
            Have a project, opportunity or just want to say hello?
            Feel free to reach out.
          </p>

          <div className="contact-item">
            <strong>Email</strong>
            <span>your-email@example.com</span>
          </div>

          <div className="contact-item">
            <strong>Location</strong>
            <span>India</span>
          </div>

          <div className="contact-item">
            <strong>Available for</strong>
            <span>Internships & Full-time Opportunities</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="primary-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;