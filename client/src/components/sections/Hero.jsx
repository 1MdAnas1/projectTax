import { ShieldCheck, TrendingUp } from 'lucide-react';

export default function Hero({ content }) {
  const title = content?.heroTitle;
  const subtitle = content?.heroSubtitle;
  const description = content?.heroDescription;
  const image = content?.heroImage;

  return (
    <section className="hero-premium">
      <div className="hero-premium-container">
        {/* Left content */}
        <div className="hero-premium-content">
          <span className="hero-badge">Trusted Since 2015</span>
          <h1>
            {title}
            <br />
            <span className="highlight">{subtitle}</span>
          </h1>
          <p>{description}</p>
          <div className="hero-premium-buttons">
            <button className="btn-premium">Get a Quote</button>
            <button className="btn-outline">Learn More</button>
          </div>
        </div>

        {/* Right image with floating badges */}
        <div className="hero-premium-image-wrapper">
          <div className="hero-premium-image-container">
            {/* Image with its own rounded container */}
            <div className="hero-premium-image-inner">
              <img
                src={image}
                alt="Hero"
                className="hero-premium-image"
              />
              <div className="hero-premium-overlay"></div>
            </div>

            {/* Floating badge 1 – 100% Compliant */}
            <div className="hero-float-badge badge-1">
              <div className="badge-icon">
                <ShieldCheck size={18} />
              </div>
              <div className="badge-text">
                <div className="badge-title">100% Compliant</div>
                <div className="badge-sub">ICAI Certified</div>
              </div>
            </div>

            {/* Floating badge 2 – +38% Avg Savings */}
            <div className="hero-float-badge badge-2">
              <div className="badge-icon">
                <TrendingUp size={18} />
              </div>
              <div className="badge-text">
                <div className="badge-title">+38% Avg Savings</div>
                <div className="badge-sub">via Tax Planning</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
    
    </section>
  );
}