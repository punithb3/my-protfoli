import { Reveal } from './Reveal';

const services = [
  { icon: '🖥️', title: 'Frontend Website Development', desc: 'Building modern, performant, and scalable frontend websites using the latest web technologies and best practices.' },
  { icon: '🎨', title: 'Responsive UI Design', desc: 'Creating pixel-perfect, responsive user interfaces that look stunning across all devices and screen sizes.' },
  { icon: '🚀', title: 'Landing Page Design', desc: 'Designing and developing high-converting landing pages with compelling layouts, animations, and call-to-actions.' },
  { icon: '✨', title: 'Interactive Web Animations', desc: 'Implementing smooth, performant CSS and JavaScript animations that enhance user engagement and delight.' },
  { icon: '🔄', title: 'Website Redesign', desc: 'Modernizing outdated websites with contemporary design, improved performance, and enhanced user experience.' },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <div className="section-header reveal">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title gradient-text">My Services</h2>
          <div className="section-line" />
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 120}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
