import { Phone, Mail } from 'lucide-react';

export default function TopBar({ content }) {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-left" >
          <a href="tel:+919177552375">
            <Phone size={14} />
            <span>{content?.contactPhone}</span>
          </a>
          <a href="mailto:mail@tax.com">
            <Mail size={14} />
            <span>{content?.contactEmail}</span>
          </a>
        </div>
        <div className="topbar-right">
          <span className="follow-label">Follow us</span>
          <article className="social-icons">
            <a  title="LinkedIn">in</a>
            <a  title="Facebook">f</a>
            <a  title="Twitter">t</a>
          </article>
        </div>
      </div>
    </div>
  );
}
