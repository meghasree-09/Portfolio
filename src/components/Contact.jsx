import { useState } from "react";
import { sendContactMessage } from "../api/contactApi";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSending(true);
    setSuccess("");
    setError("");

    try {
      await sendContactMessage(form);

      setSuccess("Your message has been sent successfully!");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="section contact-section">

      <div className="section-title">
        <p>GET IN TOUCH</p>

        <h2>
          Contact <span>Me</span>
        </h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>
            Let's build something together.
          </h3>

          <p>
            I'm always open to discussing new projects,
            opportunities and ideas.
          </p>

          <div className="contact-detail">
            <span>Email</span>
            <strong>your-email@example.com</strong>
          </div>

          <div className="contact-detail">
            <span>Location</span>
            <strong>India</strong>
          </div>

          <div className="contact-detail">
            <span>Availability</span>
            <strong>Open to Opportunities</strong>
          </div>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <div className="form-row">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />

          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button
            className="primary-btn"
            type="submit"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message →"}
          </button>

          {success && (
            <p className="success-message">
              {success}
            </p>
          )}

          {error && (
            <p className="error-message">
              {error}
            </p>
          )}

        </form>

      </div>
    </div>
  );
}

export default Contact;