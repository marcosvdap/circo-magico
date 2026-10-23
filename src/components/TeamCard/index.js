import './index.css';

export default function TeamCard({ name, role, bio, image }) {
  return (
    <div className="team-card">
      <div className="team-card__photo">
        {image
          ? <img src={image} alt={name} />
          : <div className="team-card__avatar"><span>✦</span></div>
        }
        <div className="team-card__frame" />
      </div>
      <div className="team-card__body">
        <p className="team-card__role">{role}</p>
        <h3 className="team-card__name">{name}</h3>
        <p className="team-card__bio">{bio}</p>
      </div>
    </div>
  );
}
