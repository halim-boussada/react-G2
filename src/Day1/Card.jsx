import "./Card.css";
function Card({
  image = "https://static.vecteezy.com/system/resources/thumbnails/003/337/584/small/default-avatar-photo-placeholder-profile-icon-vector.jpg",
  title = "Default Title",
  description = "This is a default description for the card component.",
}) {
  return (
    <div className="card">
      <img src={image} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
}

export default Card;
