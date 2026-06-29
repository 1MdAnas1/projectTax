export default function Gallery({ content }) {
  const images = Array.isArray(content?.gallery) ? content.gallery : [];
  return (
    <section id="gallery" className="section section-light">
      <div className="container">
        <div className="section-title">
          <span className="badge">Gallery</span>
          <h2>{content?.galleryTitle || 'Our Work'}</h2>
          <p>{content?.galleryDescription || 'A glimpse into our professional journey and client engagements.'}</p>
        </div>
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div className="item" key={index}>
              <img src={img} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}