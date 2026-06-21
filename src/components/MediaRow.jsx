import MediaCard from "./MediaCard";

export default function MediaRow({ title, items }) {
  return (
    <section
      className="media-row"
      aria-labelledby={`row-${title}`}
    >
      <h2 id={`row-${title}`}>
        {title}
      </h2>

      <div className="media-grid">
        {items.map((item) => (
          <MediaCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </section>
  );
}