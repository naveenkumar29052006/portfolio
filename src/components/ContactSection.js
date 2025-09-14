import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Feel free to reach out to me. 
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div className="contact-grid">
          <div className="contact-card">
            <h3 className="contact-info-title">Send Me a Message</h3>
            
            {submitMessage && (
              <div className="success-message">
                {submitMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="form-input form-textarea"
                  placeholder="Type your message here..."
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="submit-button"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send size={18} style={{ marginRight: '0.5rem' }} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
          
          <div className="contact-card">
            <h3 className="contact-info-title">Contact Information</h3>
            <div className="contact-info-section">
              <h4 className="contact-info-heading">Email</h4>
              <div className="contact-info-content">
                <Mail size={20} />
                <a 
                  href="mailto:naveenkumar29052006@gmail.com" 
                  className="contact-link"
                >
                  naveenkumar29052006@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-section">
              <h4 className="contact-info-heading">Location</h4>
              <div className="contact-info-content">
                <MapPin size={20} />
                <span>Delhi, India</span>
              </div>
            </div>

            <div className="contact-info-section">
              <h4 className="contact-info-heading">Social Media</h4>
              <div className="social-links-container">
                <a 
                  href="https://github.com/naveenkumar29052006" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span style={{ marginLeft: '0.5rem' }}>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/naveen-kumar-4217931ab/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span style={{ marginLeft: '0.5rem' }}>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;