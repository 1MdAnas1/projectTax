export default function Team({ content }) {
  const team = Array.isArray(content?.team) ? content.team : [];
  const title = content?.teamTitle || 'OUR TEAM';
  const description = content?.teamDescription || 'Meet the experts behind your numbers';

  return (
    <section id="team" className="section section-white">
      <div className="container">
        <div className="section-title">
          <span className="badge" style={{ 
            color: '#2563eb', 
            fontWeight: 600, 
            textTransform: 'uppercase', 
            fontSize: '0.75rem', 
            letterSpacing: '0.15em' 
          }}>
            {title}
          </span>
          <h2 style={{ 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            fontWeight: 700, 
            marginTop: '0.5rem' 
          }}>
            {description}
          </h2>
        </div>
        <div className="team-grid-full">
          {team.map((member, index) => (
            <div className="team-card-full" key={index}>
              <img src={member.img} alt={member.name} className="team-card-image" />
              <div className="team-card-overlay">
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 