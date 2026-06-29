import Counter from '../common/Counter';

export default function About({ content }) {
  const title = content?.aboutTitle;
  const description = content?.aboutDescription;
  const bullets = Array.isArray(content?.aboutBullets) ? content.aboutBullets : [];
  const image = content?.aboutImage;

  // Stats values – fallback defaults
  const years = parseInt(content?.yearsOfExperience) || 11;
  const clients = parseInt(content?.clientsServed) || 1500;
  const projects = parseInt(content?.projectsCompleted) || 700;

  return (
    <section id="about" className="section section-white">
      <div className="container">
        <div className="about-grid">
          <div className="content">
            <span className="badge" style={{ color: '#2563eb', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.05em' }}>About Us</span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, marginTop: '0.5rem' }}>
              {title}
            </h2>
            <p style={{ marginTop: '1rem', color: '#4b5563', lineHeight: 1.7 }}>
              {description}
            </p>
            <ul>
              {bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>

            {/* Stats grid with animated counters */}
            <div className="stats-grid">
              <Counter target={years} label="Years of Experience" />
              <Counter target={clients} label="Clients Served" />
              <Counter target={projects} label="Projects Completed" />
            </div>
          </div>
          <div className="image">
            <img src={image} alt="About us" />
          </div>
        </div>
      </div>
    </section>
  );
}