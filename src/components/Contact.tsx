import { useState, useRef } from 'react';
import { RevealLeft, RevealRight } from './Reveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    } else {
      // Shake effect on error fields
      const inputs = formRef.current?.querySelectorAll('.form-input');
      inputs?.forEach(input => {
        const field = input.getAttribute('name');
        if (errors[field || '']) {
          input.classList.add('error');
          setTimeout(() => input.classList.remove('error'), 600);
        }
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title gradient-text">Contact Me</h2>
          <div className="section-line" />
        </div>

        <div className="contact-grid">
          <RevealLeft>
            <div className="contact-info">
              <h3>Let's Work <span className="gradient-text">Together</span></h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
                Feel free to reach out!
              </p>

              <a href="https://github.com/punithb3" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-item-icon">📂</div>
                <div>
                  <div className="contact-item-text">GitHub</div>
                  <div className="contact-item-label">Check out my repositories</div>
                </div>
              </a>

              <a href="mailto:punithk@example.com" className="contact-item">
                <div className="contact-item-icon">📧</div>
                <div>
                  <div className="contact-item-text">Email</div>
                  <div className="contact-item-label">punithk@example.com</div>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-item">
                <div className="contact-item-icon">💼</div>
                <div>
                  <div className="contact-item-text">LinkedIn</div>
                  <div className="contact-item-label">Connect professionally</div>
                </div>
              </a>
            </div>
          </RevealLeft>

          <RevealRight delay={200}>
            <div className="contact-form">
              {submitted ? (
                <div className="form-success show">
                  <div className="success-icon">🎉</div>
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. I'll get back to you soon!</p>
                  <button
                    className="hero-cta secondary"
                    style={{ marginTop: '20px', width: '100%', justifyContent: 'center', cursor: 'pointer' }}
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      className={`form-input ${errors.subject ? 'error' : ''}`}
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      className={`form-input ${errors.message ? 'error' : ''}`}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <button type="submit" className="form-submit">
                    🚀 Send Message
                  </button>
                </form>
              )}
            </div>
          </RevealRight>
        </div>
      </div>
    </section>
  );
}
