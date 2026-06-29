export default function Services({ content }) {
  const title = content?.servicesTitle;
  const description = content?.servicesDescription;
  const services = Array.isArray(content?.services) ? content.services : [];

  return (
    <section id="services" className="section section-light">
      <div className="container">
        <div className="section-title">
          <span className="badge">Our Services</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}