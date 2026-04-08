"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call (replace with actual API endpoint)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="contact-page">
        <section className="page-hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="contact-grid">
              {/* Contact Info */}
              <div className="contact-info">
                <h2>Get In Touch</h2>
                <p>Have questions about our programs? Need support? Want to learn more about Anandbodh? We're here to help.</p>

                <div className="contact-details">
                  <div className="contact-detail-item">
                    <div className="contact-icon">📍</div>
                    <div>
                      <strong>Address</strong>
                      <p>B1/21, Gandhi Path Rd, Vaishali Nagar<br />Jaipur, Rajasthan 302021, India</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon">✉️</div>
                    <div>
                      <strong>Email</strong>
                      <p><a href="mailto:hello@anandbodh.com">hello@anandbodh.com</a></p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon">🌐</div>
                    <div>
                      <strong>Website</strong>
                      <p><Link href="/">www.anandbodh.com</Link></p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon">📱</div>
                    <div>
                      <strong>Social Media</strong>
                      <div className="contact-socials">
                        <a href="https://www.youtube.com/@anandbodh" target="_blank" rel="noopener noreferrer">YouTube</a>
                        <a href="https://www.instagram.com/anandbodh" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.facebook.com/anandbodh" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://www.linkedin.com/company/anandbodh" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact-hours">
                  <h3>Support Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  Saturday: 10:00 AM - 4:00 PM IST<br />
                  Sunday: Closed</p>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form-wrapper">
                <form onSubmit={handleSubmit} className="contact-form" noValidate>
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "error" : ""}
                      placeholder="Enter your full name"
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "error" : ""}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={errors.subject ? "error" : ""}
                      placeholder="What is this regarding?"
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "error" : ""}
                      rows="6"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>

                  {submitStatus === "success" && (
                    <div className="form-message form-success">
                      ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="form-message form-error">
                      ✗ Oops! Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-block"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>

                  <p className="form-note">
                    * Required fields. We typically respond within 24 hours.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="section" style={{ background: "var(--cream)" }}>
          <div className="container">
            <div className="contact-quick-links">
              <h2>Quick Links</h2>
              <div className="quick-links-grid">
                <Link href="/faq" className="quick-link-card">
                  <div className="quick-link-icon">❓</div>
                  <h3>FAQ</h3>
                  <p>Find answers to common questions</p>
                </Link>
                <Link href="/programs" className="quick-link-card">
                  <div className="quick-link-icon">🎓</div>
                  <h3>Programs</h3>
                  <p>Explore our wellness programs</p>
                </Link>
                <Link href="/community" className="quick-link-card">
                  <div className="quick-link-icon">👥</div>
                  <h3>Community</h3>
                  <p>Join our healing community</p>
                </Link>
                <Link href="/experts" className="quick-link-card">
                  <div className="quick-link-icon">👨‍⚕️</div>
                  <h3>Experts</h3>
                  <p>Meet our wellness experts</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
