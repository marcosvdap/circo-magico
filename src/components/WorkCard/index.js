import './index.css';

export default function WorkCard({ title, category, year, description, image }) {
  return (
    <article className="work-card">
      <div className="work-card__media">
        {image
          ? <img src={image} alt={title} />
          : <div className="work-card__placeholder">
              <span>★</span>
            </div>
        }
        <div className="work-card__overlay">
          <p className="work-card__desc">{description}</p>
        </div>
      </div>
      <div className="work-card__info">
        <span className="work-card__category">{category}</span>
        <h3 className="work-card__title">{title}</h3>
        <span className="work-card__year">{year}</span>
      </div>
    </article>
  );
}
