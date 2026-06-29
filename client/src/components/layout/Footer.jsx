import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ content }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="brand">
          <div className="logo-icon" style={{ width: 48, height: 48, fontSize: '1.5rem' }}>T</div>
          <div className="logo-text">
            <span className="brand" style={{ color: 'white' }}>My Tax</span>
            <span className="tagline" style={{ color: 'rgba(255,255,255,0.6)' }}>Smart Tax. Simple Life.</span>
          </div>
          <p>
            Delivering financial clarity and strategic growth with unparalleled expertise, empowering businesses with reliable tax, audit, compliance, and advisory solutions that drive sustainable success and long-term value.
          </p>
          <div className="social">
            <a  title="LinkedIn">in</a>
            <a  title="Facebook">f</a>
            <a  title="Twitter">t</a>
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a >About Us</a></li>
            <li><a >Our Team</a></li>
            <li><a >Services</a></li>
            <li><a >Contact</a></li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li><a href="#">Tax Consulting</a></li>
            <li><a href="#">Audit &amp; Assurance</a></li>
            <li><a href="#">GST Compliance</a></li>
            <li><a href="#">Advisory</a></li>
          </ul>
        </div>

        <div>
          <h4>Get In Touch</h4>
          <ul>
            <li><Phone size={14} style={{ display: 'inline', marginRight: 8 }} /> {content?.contactPhone || '+91 9177552375'}</li>
            <li><Mail size={14} style={{ display: 'inline', marginRight: 8 }} /> {content?.contactEmail || 'mail@tax.com'}</li>
            <li><MapPin size={14} style={{ display: 'inline', marginRight: 8 }} /> {content?.contactAddress || 'India'}</li>
          </ul>
        </div>

        <div className="copyright">
          &copy; {new Date().getFullYear()} Tally My Tax. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
