
export default function MediaCard({ item}) {
  return (
    <div className="media-card">
      <img src={item.image} alt={`${item.title} poster`} />
      <h2>{item.title}</h2>
      <p>{item.description}</p>
    </div>
  );
}
