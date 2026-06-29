import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact({ content }) {
  return (
    <section id="contact" className="section section-white">
      <div className="container">
        <div className="section-title">
          <span className="badge">Contact</span>
          <h2>{content?.contactTitle }</h2>
          <p>{content?.contactDescription}</p>
        </div>
        <div className="contact-grid">
          <div className="info">
            <div className="item">
              <Phone className="icon" size={24} />
              <div>
                <div className="label">Phone</div>
                <div className="value">{content?.contactPhone}</div>
              </div>
            </div>
            <div className="item">
              <Mail className="icon" size={24} />
              <div>
                <div className="label">Email</div>
                <div className="value">{content?.contactEmail}</div>
              </div>
            </div>
            <div className="item">
              <MapPin className="icon" size={24} />
              <div>
                <div className="label">Address</div>
                <div className="value">{content?.contactAddress}</div>
              </div>
            </div>
          </div>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea rows="4" placeholder="Your Message"></textarea>
            <button className="btn-premium">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}